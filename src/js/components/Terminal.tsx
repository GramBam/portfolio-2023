import { useEffect, useState } from "react";
import Nav from "./Nav";
import { blocks as outputBlocks } from "../utils/textBlocks";
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
      addBlock(outputBlocks.server);
      setTimeout(() => {
        addBlock(outputBlocks.command);
        setTimeout(() => {
          addBlock(outputBlocks.path);
          setShowInput(true);
        }, 250);
      }, 1500);
    }, 1000);

    return () => clearTimeout(set);
  }, []);

  const onSubmit = (input: string) => {
    const command = commands.find((command) => command.input === input);
    addBlock(outputBlocks.prompt(!!command, input));
    if (command?.input === "clear") {
      setBlocks([outputBlocks.path]);
    } else {
      command?.output
        ? addBlock(command.output)
        : addBlock(outputBlocks.noCommand(input));
    }
  };

  return (
    <div className="terminal">
      <Nav />
      <div className="prompt-container">
        {blocks.map((block) => block)}
        {showInput && (
          <TerminalInput submitCallback={onSubmit} blocks={blocks} />
        )}
      </div>
    </div>
  );
}

export default Terminal;
