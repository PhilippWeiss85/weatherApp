export default function DeleteButton({ children }) {
  return <button onClick={console.log(children)}>{children}</button>;
}
