import NavButton, { NavButtonProps } from "./NavButton";
import { FaGithub } from "react-icons/fa";

function Nav({ hideTerminal }: { hideTerminal: () => void }) {
  const navButtons: NavButtonProps[] = [
    { color: "red", onClick: () => hideTerminal() },
    { color: "yellow", onClick: () => {} },
    { color: "green", onClick: () => {} },
  ];

  return (
    <div className="terminal-nav">
      <div className="nav-buttons">
        {navButtons.map((btn) => (
          <NavButton
            key={`${btn.color} btn`}
            color={btn.color}
            onClick={btn.onClick}
          />
        ))}
      </div>
      <div className="nav-title">
        <a href="https://www.github.com/GramBam" target="_blank" rel="noopener">
          <FaGithub />
          github.com/GramBam
        </a>
      </div>
    </div>
  );
}
export default Nav;
