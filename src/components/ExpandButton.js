export default function ExpandButton({ children, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      className="expandbutton"
    >
      {children}
    </button>
  );
}
