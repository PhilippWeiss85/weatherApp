export default function SetValueButton({ children, setValue }) {
  return <button onClick={() => setValue(children)}>{children}</button>;
}
