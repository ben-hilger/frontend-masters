package variables

import "fmt"

func Vars() {
	var myName string = "ben"

	fmt.Printf("Hello my name is %s\n", myName)

	// Inferred Type
	myNameInferred := "ben"
	myInt := 10
	myFloat := 10.0
	fmt.Printf("Hello my name is %s, my int is %d, my float is %f\n", myNameInferred, myInt, myFloat)

	// Defaults
	var myFriendName string
	var myBool bool
	var myOtherInt int

	myFriendName = "Prime"

	fmt.Printf("my other friends name %s my bool %t my other int %d\n", myFriendName, myBool, myOtherInt)
}
