import {Args, Command, Flags} from '@oclif/core'
import {ChatResponse, Ollama, Tool, ToolCall} from 'ollama'
import {getCurrentWeather} from '../../tools/getCurrentWeather.js'
import {getStockValue} from '../../tools/getStockValue.js'
import {Llm} from '../../proxy/OllamaProxy.js'

export default class Hello extends Command {
  static args = {
    person: Args.string({description: 'Person to say hello to', required: true}),
  }

  static description = 'Say hello'

  static examples = [
    `<%= config.bin %> <%= command.id %> What is the weather in Gothenburg ?
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    // from: Flags.string({char: 'f', description: 'Who is saying hello', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    const response: ChatResponse = await Llm.chat({
      model: 'llama3.1',
      messages: [{role: 'user', content: `${args.person}`}],
      tools: [getStockValue.toolDef(), getCurrentWeather.toolDef()],
    })

    // this.log(`Msg '${response.message.content}' from '${JSON.stringify(response)}'`)

    if (response.message.role === 'assistant') {
      if (response.message.tool_calls) {
        const toolCalls: ToolCall[] = response.message.tool_calls
        toolCalls.forEach((toolCall) => {
          switch (toolCall.function.name) {
            case getCurrentWeather.fnName: {
              const reply: string = getCurrentWeather.fn(toolCall.function.arguments.city)
              this.log(`Weather forecast: ${reply}`)
              break
            }
            case getStockValue.fnName: {
              const reply: string = getStockValue.fn(toolCall.function.arguments.company)
              this.log(`Stock price: ${reply}`)
              break
            }
            default: {
              this.log(`Unknown function: ${JSON.stringify(toolCall.function)}`)
            }
          }
        })
      }
    }
  }
}
