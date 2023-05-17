import { blocks } from "./textBlocks";

export const commands = [
  { input: "all", output: blocks.all },
  { input: "about", output: blocks.about },
  { input: "social", output: blocks.social },
  { input: "clear", output: null },
  { input: "stack", output: blocks.stack },
  { input: "resume", output: blocks.resume },
  { input: "snake", output: blocks.snake },
];
