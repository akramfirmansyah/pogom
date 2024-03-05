package config

import (
	"fmt"
	"log"

	"github.com/joho/godotenv"
)

func LoadEnvFile() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Failed to load Env file!")
	}

	fmt.Println("Success Load Env file!")
}
