import { useEffect, useState } from "react";
import Nav from "./Nav";
import { commandBlock, pathBlock, serverBlock } from "../utils/textBlocks";
import TerminalInput from "./TerminalInput";

function Terminal() {
  const [blocks, setBlocks] = useState<JSX.Element[]>([<p>Welcome</p>]);
  const [showInput, setShowInput] = useState<boolean>(false);

  useEffect(() => {
    const set = setTimeout(() => {
      setBlocks((prev) => [...prev, serverBlock]);
      setTimeout(() => {
        setBlocks((prev) => [...prev, commandBlock]);
        setTimeout(() => {
          setBlocks((prev) => [...prev, pathBlock]);
          setShowInput(true);
        }, 250);
      }, 1500);
    }, 1000);

    return () => clearTimeout(set);
  }, []);

  return (
    <div className="terminal normal">
      <Nav />
      <div className="prompt-container">
        {blocks.map((block) => block)}
        {showInput && <TerminalInput />}
      </div>
    </div>
  );
}

export default Terminal;
