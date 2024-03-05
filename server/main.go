package main

import (
	"akramfirmansyah/pogom-api/config"
	"akramfirmansyah/pogom-api/database"
	"os"

	"github.com/gofiber/fiber/v2"
)

func init() {
	config.LoadEnvFile()
	database.ConnectDatabase()
}

func main() {
	app := fiber.New()
	port := os.Getenv("SERVER_PORT")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	_ = app.Listen(`:` + port)
}
