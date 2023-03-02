export default function DeleteButton({ children, deleteSearchItem, id }) {
  return <button onClick={() => deleteSearchItem(id)}>{children}</button>;
}
