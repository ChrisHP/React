
export function Welcome({name="Usuario desconocido"}){
    return (
        <p>Welcome, {name}!</p>
    );
}
export function App(){
    return <div> <Welcome name="Pepe"/></div>;
}