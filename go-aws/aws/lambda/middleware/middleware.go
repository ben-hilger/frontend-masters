package middleware

import (
	"fmt"
	"github.com/aws/aws-lambda-go/events"
	"github.com/golang-jwt/jwt/v5"
	"net/http"
	"os"
	"strings"
	"time"
)

// extracting the request headers
// extracting our claims
// validating everything

func ValidateJWTMiddleware(next func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error)) func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		// extract the headers
		tokenString := extractTokenFromHeaders(request.Headers)
		if tokenString == "" {
			return events.APIGatewayProxyResponse{
				Body:       "Missing auth token",
				StatusCode: http.StatusUnauthorized,
			}, nil
		}

		// need to parse tokens for its claims
		claims, err := parseToken(tokenString)
		if err != nil {
			return events.APIGatewayProxyResponse{
				Body:       "user unauthorized",
				StatusCode: http.StatusUnauthorized,
			}, err
		}

		expires := int64(claims["expires"].(float64))

		if expires < time.Now().Unix() {
			return events.APIGatewayProxyResponse{
				Body:       "token expires",
				StatusCode: http.StatusUnauthorized,
			}, nil
		}

		return next(request)
	}
}

func extractTokenFromHeaders(headers map[string]string) string {
	authHeader, ok := headers["Authorization"]
	if !ok {
		return ""
	}

	splitToken := strings.Split(authHeader, "Bearer ")
	if len(splitToken) != 2 {
		return ""
	}

	return splitToken[1]
}

func parseToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		secret := os.Getenv("BEARER_SECRET")
		return []byte(secret), nil
	})
	if err != nil {
		return jwt.MapClaims{}, fmt.Errorf("unauthorized")
	}

	if !token.Valid {
		return nil, fmt.Errorf("token is not valid - unauthorized")
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok {
		return nil, fmt.Errorf("claims of unauthorized type")
	}

	return claims, nil
}
