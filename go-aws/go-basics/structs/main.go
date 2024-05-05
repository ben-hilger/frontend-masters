package structs

import "fmt"

type Person struct {
	Name string
	Age  int
}

func NewPerson(name string, age int) Person {
	return Person{
		Name: name,
		Age:  age,
	}
}

func (p *Person) changeName(newName string) {
	p.Name = newName
}

func Structs() {
	myPerson := NewPerson("Frank", 0)

	myPerson.changeName("WHOA")

	fmt.Printf("this is my person %+v\n", myPerson)

	myPerson.Name = "Hank"

	fmt.Printf("this is my person %+v\n", myPerson)

	a := 7
	b := &a
	fmt.Println(b)
	*b = 9
	fmt.Println(*b)
	fmt.Println(a)

	mySlice := []int{
		1, 2, 3,
	}

	// Ignoring unused values
	for _, value := range mySlice {
		// Incrementing a copy, won't change the actual value
		value++
	}

	fmt.Println(mySlice)

	for index := range mySlice {
		// Actually updating the value
		mySlice[index]++
	}

	fmt.Println(mySlice)
}
