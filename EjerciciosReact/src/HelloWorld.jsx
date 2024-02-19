//Si, se puede, lo renderiza las mismas veces
//Si, se puede, lo renderiza de manera normal
export function Hello(){
    return (
    <>
        <h2>Hello World!</h2>
        <Message/>
    </>);
}
export function App(){
    return <div><Hello/><Hello/><Hello/><Hello/><Message/></div>;
}
export function Message(){
    return <p>What a beautiful day!</p>
}