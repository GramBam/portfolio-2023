import { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";

function TerminalInput({
  submitCallback,
}: {
  submitCallback: (input: string) => void;
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

  return (
    <div className="prompt" onKeyDown={handleKeyDown}>
      <FaChevronRight />
      <input
        autoFocus
        value={userInput}
        type="text"
        ref={ref}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          setUserInput(e.target.value);
        }}
      />
    </div>
  );
}
export default TerminalInput;
