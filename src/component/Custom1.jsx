import Custom from "./Custom";
const Custom1 = () => {
    const [count,increment,decrement,reset] = Custom(1,1)
    return (
        <div>
            {count}
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
            <button onClick={reset} >Reset</button>
            
        </div>
    );
};

export default Custom1;