import { ChangeEvent, KeyboardEvent, useState, useRef, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import useOutsideClick from "../hooks/useOutsideClick";
import { isMobileDevice } from "../utils/isMobileDevice";

function TerminalInput({
  submitCallback,
  blocks,
}: {
  submitCallback: (input: string) => void;
  blocks: JSX.Element[];
}) {
  const [userInput, setUserInput] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const isMobile = isMobileDevice();

  const formatInput = (input: string): string => {
    return input.toLocaleLowerCase().trim();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !!userInput) {
      const formatted = formatInput(userInput);
      submitCallback(formatted);
      setUserInput("");
      isMobile && ref.current?.blur();
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
