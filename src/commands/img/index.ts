import { Args, Command, Flags } from "@oclif/core";
import { Llm } from "../../proxy/OllamaProxy.js";
import fs from "fs";

/**
 * This command asks the LLM a query with an attached image (based onm the given URL) and returns the answer
 *
 * The user can optionally override the prompt with the -p flag
 */
export default class ImageQuery extends Command {
  static args = {
    imagePath: Args.string({ description: "Path to Image", required: true }),
  };

  static examples = [
    `<%= config.bin %> <%= command.id %> c:\\img\image.jpeg -p "Is there a dog in the picture ?"`,
    `<%= config.bin %> <%= command.id %> c:\\img\image.jpeg`,
  ];

  static flags = {
    prompt: Flags.string({ char: "p", description: "Prompt", required: false }),
  };

  async run(): Promise<void> {
    const { args, flags } = await this.parse(ImageQuery);

    try {
      const imageBuffer: Buffer = fs.readFileSync(args.imagePath);
      const base64Image: string = imageBuffer.toString("base64");

      let prompt: string = "Describe what is in the image ?";
      if (flags.prompt != null) {
        prompt = flags.prompt;
      }
      const response: string = await Llm.queryWithImage(prompt, base64Image);

      this.log(`- ${response}`);
      // console.log(imageBuffer)
    } catch (error) {
      console.error("Error reading image:", error);
    }
  }
}
