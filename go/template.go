package main

import (
	"fmt"
	"time"
)

func solvePuzzle(input string) int {
	return 0
}

func main() {
	const CorrectAnswer = 0
	const Input = ""

	startTime := time.Now()
	var result = solvePuzzle(Input)

	fmt.Println("--- Puzzle result ---\n ")
	fmt.Println(result)
	if result == CorrectAnswer {
		fmt.Println("Test success")
	} else {
		fmt.Println("Test fail")
	}
	fmt.Printf("Run time: %s", time.Since(startTime))
	fmt.Println("\n---------------------")
}
