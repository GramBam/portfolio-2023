type NavButtonColor = "red" | "yellow" | "green";

export interface NavButtonProps {
  color: NavButtonColor;
  onClick: () => void;
}

function NavButton({ color, onClick }: NavButtonProps) {
  return <button className={`nav-button ${color}`} onClick={onClick}></button>;
}
export default NavButton;
