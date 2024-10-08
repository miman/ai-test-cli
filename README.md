# aicli

This is a CLI project used to test different use cases using a local Ollama LLM instance.

The project is written in **Typescript** using the **oclif** library for CLI support

## Tools tested

The project has test code for these areas:

- Using tools with Ollama
- Using an Ollama LLM to decode an image using LLava models

## Prereqs

The prerequisites for running this project are:

- **node** must be installed
- **Ollama** needs to be installed as a docker instance om your computer
  - If you have installed it locally you need to change the hosty in **_OllamaProxy.ts_**
- **llama3.1** needs to be installed in Ollama
- **llava-phi3** needs to be installed in Ollama

## Test use cases

For now it has the following test use cases:

| Command | description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| weather | Get the current weather based on the city name in the prompt using Ollama tools           |
| tele    | Get info related to vehicle information using Ollama tools                                |
| img     | Enables the user to ask questions related to the image whose path is given in the command |

## Examples

### Weather

`aicli weather "What is the weather in Gothenburg ?"`

### Weather

`aicli tele which vehicle is closest to gothenburg ?`

### Weather

`aicli img "C:\Pictures\test-image.jpeg"`

`aicli img "C:\Pictures\test-image.jpeg" -p "are there any dogs in the image"`
