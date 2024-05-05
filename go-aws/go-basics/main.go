package main

import (
	"fmt"
	"github.com/Ben-Hilger/femBasics/exercise"
	"github.com/Ben-Hilger/femBasics/imports"
	"github.com/Ben-Hilger/femBasics/loops"
	"github.com/Ben-Hilger/femBasics/structs"
	"github.com/Ben-Hilger/femBasics/variables"
)

func main() {
	fmt.Println("Hello world")

	variables.Vars()
	loops.Loops()
	structs.Structs()

	newTicket := imports.Ticket{ID: 123, Event: "FEM Course"}

	fmt.Println(newTicket)

	newTicket.PrintEvent()

	exercise.Exercise()
}
