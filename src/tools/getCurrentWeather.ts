import {Tool} from 'ollama'

function fn(city: string): string {
  return `the weather in ${city} is sunny & 25 degrees warm`
}

function toolDef(): Tool {
  const weatherTool: Tool = {
    type: 'function',
    function: {
      name: 'getCurrentWeather',
      description: 'Gets the current weather for a city',
      parameters: {
        type: 'object',
        properties: {
          city: {
            type: 'string',
            description: 'City name',
          },
        },
        required: ['city'],
      },
    },
  }
  return weatherTool
}

export const getCurrentWeather = {
  fn,
  toolDef,
  fnName: 'getCurrentWeather',
}
