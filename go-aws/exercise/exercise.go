package exercise

import (
	"fmt"
	"math"
)

const PI = 3.14

type circle struct {
	Radius float64
}

func (c circle) circumference() float64 {
	return 2 * PI * c.Radius
}

func (c circle) area() float64 {
	return PI * math.Pow(c.Radius, 2)
}

func Exercise() {
	circle := circle{
		Radius: 5,
	}

	fmt.Println(circle.area())
	fmt.Println(circle.circumference())
}
