import Child from "./GetValue";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithClassComponent = ({ count, setCount }: TProps) => {
  console.log(count);

  return (
    <div className=" border border-violet-500 m-4 rounded-md p-2">
      <h2 className=" border-red-300 w-10 h-10 px-2 py-2 text-2xl  rounded-full">
        .....
      </h2>
      <button
        className="btn mx-auto p-2 font-bold text-center text-5xl border  rounded-full"
        onClick={() => setCount((prev: any) => prev + 1)}
      >
        +
      </button>
      <Child count={count} />
    </div>
  );
};

export default CounterWithClassComponent;
