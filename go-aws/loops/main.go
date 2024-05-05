package loops

import (
	"fmt"
	"slices"
)

func Main() {
	animals := [2]string{}

	animals[0] = "dog"
	animals[1] = "cat"

	fmt.Println(animals)
	animals = [2]string{
		"dog",
		"cat",
	}

	fmt.Println(animals)

	animalsSlice := []string{
		"dog",
		"cat",
	}

	animalsSlice = append(animalsSlice, "moose")

	fmt.Println(animalsSlice)

	for i := 0; i < len(animalsSlice); i++ {
		fmt.Printf("this is my anmials %s\n", animalsSlice[i])
	}

	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	for index, value := range animalsSlice {
		fmt.Printf("This is my index %d, and this is my animal %s\n", index, value)
	}

	for value := range 10 {
		fmt.Println(value)
	}

	// No while keyboard
	// Forever loop
	//for {
	//
	//}

	i := 0
	for i < 5 {
		fmt.Println(i)
		i++
	}

	animalsSlice = slices.Delete(animalsSlice, 0, 1)

	fmt.Println(animalsSlice)
}
