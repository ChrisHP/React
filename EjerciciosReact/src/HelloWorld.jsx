export function Welcome({ name = "Usuario desconocido", age }) {
  let strongAge = <strong>{age}</strong>;
  return (
    <>
      <p>Welcome, {name}!</p>
      <p>Your age is {strongAge}</p>
    </>
  );
}
export function App() {
  return (
    <div>
      <Welcome name="Pepe" age={15} />
    </div>
  );
}
