const GetValue = ({ count }: any) => {
  console.log(count);
  return (
    <div className=" border border-red-500 m-4 rounded-md p-2">
      <h2>{count}</h2>
    </div>
  );
};

export default GetValue;
