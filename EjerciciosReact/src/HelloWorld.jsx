
export function Hello(){
    return (
    <>
        <h2>Hello World!</h2>
        <Message/>
    </>);
}
export function App(){
    return <div><Hello/></div>;
}
export function Message(){
    return <p>What a beautiful day!</p>
}