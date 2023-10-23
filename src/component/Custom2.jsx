import Custom from "./Custom";
const Custom2 = () => {
    const [count,increment,decrement,reset] = Custom(10,10)
    return (
        <div>
            {count}
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={reset} >Reset</button>
        </div>
    );
};

export default Custom2;