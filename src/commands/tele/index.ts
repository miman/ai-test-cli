import { Args, Command } from "@oclif/core";
import { ChatResponse, ToolCall } from "ollama";
import { Llm } from "../../proxy/OllamaProxy.js";
import { getVehicleTelematicData } from "../../tools/getVehicleTelematicData.js";
import { getClosest } from "../../tools/getClosest.js";

export default class Telematic extends Command {
  static args = {
    prompt: Args.string({ description: "prompt to LLM", required: true }),
  };

  static description = "Say hello";

  static examples = [
    `<%= config.bin %> <%= command.id %> Where are my vehicles located ?
    <%= config.bin %> <%= command.id %> which vehicle is closest to gothenburg ?
`,
  ];

  static flags = {};

  async run(): Promise<void> {
    const { args, flags } = await this.parse(Telematic);

    const prompt: string = args.prompt + `\n organizationId = Nisses`;
    const response: ChatResponse = await Llm.chatMsg(
      [{ role: "user", content: `${prompt}` }],
      [getVehicleTelematicData.toolDef(), getClosest.toolDef()]
    );

    this.log(
      `Msg '${response.message.content}' from '${JSON.stringify(response)}'`
    );

    if (response.message.role === "assistant") {
      if (response.message.tool_calls) {
        const toolCalls: ToolCall[] = response.message.tool_calls;
        toolCalls.forEach((toolCall) => {
          switch (toolCall.function.name) {
            case getClosest.fnName: {
              const reply: string = getClosest.fn(
                toolCall.function.arguments.target,
                toolCall.function.arguments.entityType,
                toolCall.function.arguments.organizationId
              );
              this.log(`Closest: ${reply}`);
              break;
            }
            case getVehicleTelematicData.fnName: {
              const reply: string = getVehicleTelematicData.fn(
                toolCall.function.arguments.organizationId
              );
              this.log(`Telematic data: ${reply}`);
              break;
            }
            default: {
              this.log(
                `Unknown function: ${JSON.stringify(toolCall.function)}`
              );
            }
          }
        });
      }
    }
  }
}
