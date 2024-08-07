import {Tool} from 'ollama'

function fn(company: string): string {
  return `The stock price for ${company} is 250 $`
}

function toolDef(): Tool {
  const stockTool: Tool = {
    type: 'function',
    function: {
      name: 'getStockValue',
      description: 'Gets the current value for a stock',
      parameters: {
        type: 'object',
        properties: {
          company: {
            type: 'string',
            description: 'Company name',
          },
        },
        required: ['company'],
      },
    },
  }
  return stockTool
}

export const getStockValue = {
  fn,
  toolDef,
  fnName: 'getStockValue',
}
