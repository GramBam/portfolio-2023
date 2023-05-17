import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

function TerminalInput({
  submitCallback,
  blocks,
}: {
  submitCallback: (input: string) => void;
  blocks: JSX.Element[];
}) {
  const [userInput, setUserInput] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !!userInput) {
      submitCallback(userInput);
      setUserInput("");
    }
  };

  useOutsideClick(ref, () => {
    ref.current?.focus();
  });

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [blocks]);

  return (
    <div className="prompt" onKeyDown={handleKeyDown}>
      <FaChevronRight />
      <input
        autoFocus
        value={userInput}
        type="text"
        ref={ref}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setUserInput(e.target.value);
        }}
      />
    </div>
  );
}
export default TerminalInput;
