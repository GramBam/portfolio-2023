import { useEffect, useState } from "react";
import Nav from "./Nav";
import {
  commandBlock,
  noCommandBlock,
  pathBlock,
  promptBlock,
  serverBlock,
} from "../utils/textBlocks";
import TerminalInput from "./TerminalInput";
import { commands } from "../utils/commands";

function Terminal() {
  const [blocks, setBlocks] = useState<JSX.Element[]>([<p>Welcome</p>]);
  const [showInput, setShowInput] = useState<boolean>(false);

  const addBlock = (newBlock: JSX.Element) => {
    setBlocks((prev) => [...prev, newBlock]);
  };

  useEffect(() => {
    const set = setTimeout(() => {
      addBlock(serverBlock);
      setTimeout(() => {
        addBlock(commandBlock);
        setTimeout(() => {
          addBlock(pathBlock);
          setShowInput(true);
        }, 250);
      }, 1500);
    }, 1000);

    return () => clearTimeout(set);
  }, []);

  const onSubmit = (input: string) => {
    const command = commands.find((command) => command === input);
    addBlock(promptBlock(!!command, input));
    addBlock(noCommandBlock(input));
  };

  return (
    <div className="terminal normal">
      <Nav />
      <div className="prompt-container">
        {blocks.map((block) => block)}
        {showInput && <TerminalInput submitCallback={onSubmit} />}
      </div>
    </div>
  );
}

export default Terminal;
