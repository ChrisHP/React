export function Age({age}){
    let strongAge = <strong>{age}</strong>;
return <p>Your age is {strongAge}</p>
}
export function Welcome({ name = "Usuario desconocido", age }) {
  
  return (
    <>
      <p>Welcome, {name}!</p>
      <Age age={age}/>
    </>
  );
}
export function App() {
  return (
    <div>
      <Welcome name="Pepe" age={17} />
    </div>
  );
}
