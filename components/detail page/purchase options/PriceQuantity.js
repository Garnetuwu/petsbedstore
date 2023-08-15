import { dmSerif } from "@/styles/fonts";

const buttonStyle =
  "border border-black px-2 hover:bg-black hover:text-white disabled:bg-grey disabled:text-black";

const PriceQuantity = ({ price, amount, dispatch }) => {
  const addOneHandler = () => {
    dispatch({ type: "CHANGE_AMOUNT", payload: amount - 1 });
  };

  const removeOneHandler = () => {
    dispatch({ type: "CHANGE_AMOUNT", payload: amount + 1 });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[150px] ">
      <h3 className={dmSerif.className}>£{Math.ceil(price)} GBP</h3>
      <span className="font-light tracking-wider">Quantity</span>
      <div className="grid grid-cols-4">
        <button
          type="button"
          disabled={amount <= 1}
          className={buttonStyle}
          onClick={addOneHandler}
        >
          -
        </button>
        <span className="border-y text-center col-span-2">{amount}</span>
        <button
          type="button"
          disabled={amount >= 5}
          className={buttonStyle}
          onClick={removeOneHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PriceQuantity;
