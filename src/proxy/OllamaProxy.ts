import {Ollama, Tool, ChatResponse, ChatRequest, Message} from 'ollama'

const _client = new Ollama({
  host: 'host.docker.internal:11434', // Replace with your Ollama Docker container's hostname or IP
})

let _tools: Tool[] | undefined = undefined
let _model: string = 'llama3.1'

function setTools(tools: Tool[]) {
  _tools = tools
}

function setModel(model: string) {
  _model = model
}

async function chat(
  request: ChatRequest & {
    stream?: false
  },
): Promise<ChatResponse> {
  return await _client.chat(request)
}

async function chatMsg(messages: Message[], tools: Tool[] | undefined): Promise<ChatResponse> {
  const response: ChatResponse = await _client.chat({
    model: _model,
    messages: messages,
    tools: tools ?? _tools,
  })

  return response
}

export const Llm = {
  setTools,
  setModel,
  chat,
  chatMsg,
}
