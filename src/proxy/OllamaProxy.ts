import {
  Ollama,
  Tool,
  ChatResponse,
  ChatRequest,
  Message,
  GenerateResponse,
} from "ollama";
import { b } from "ollama/dist/shared/ollama.1164e541.mjs";

const _client = new Ollama({
  host: "host.docker.internal:11434", // Replace with your Ollama Docker container's hostname or IP
});

let _tools: Tool[] | undefined = undefined;
let _model: string = "llama3.1";
let _llavaModel: string = "llava-phi3";

function setTools(tools: Tool[]) {
  _tools = tools;
}

function setModel(model: string) {
  _model = model;
}

function setLlavaModel(llavaModel: string) {
  _llavaModel = llavaModel;
}

async function chat(
  request: ChatRequest & {
    stream?: false;
  }
): Promise<ChatResponse> {
  return await _client.chat(request);
}

async function chatMsg(
  messages: Message[],
  tools: Tool[] | undefined
): Promise<ChatResponse> {
  const response: ChatResponse = await _client.chat({
    model: _model,
    messages: messages,
    tools: tools ?? _tools,
  });

  return response;
}

/**
 *  Asks a question to the LLM together with an image.
 * @param prompt  The prompt to ask the LLM
 * @param image The related image
 * @returns The response from the LLM
 */
async function queryWithImage(prompt: string, image: string): Promise<string> {
  const response: GenerateResponse = await _client.generate({
    model: _llavaModel,
    prompt: prompt,
    stream: false,
    images: [image],
  });

  return response.response;
}

export const Llm = {
  setTools,
  setModel,
  setLlavaModel,
  chat,
  chatMsg,
  queryWithImage,
};
