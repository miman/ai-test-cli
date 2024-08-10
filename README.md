# aicli

This is a CLI project used to test different use cases using a local Ollama LLM instance.

The project is written in **Typescript** using the **oclif** library for CLI support

## Tools tested

The project has test code for these areas:

- Using tools with Ollama
- Using an Ollama LLM to decode an image using LLava models

## Test use cases

For now it has the following test use cases:

| Command | description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| weather | Get the current weather based on the city name in the prompt using Ollama tools           |
| tele    | Get info related to vehicle information using Ollama tools                                |
| img     | Enables the user to ask questions related to the image whose path is given in the command |
