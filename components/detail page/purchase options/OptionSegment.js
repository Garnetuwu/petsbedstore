import Image from "next/image";

const OptionSegment = ({
  title,
  content,
  material = false,
  selectedItem,
  dispatch,
}) => {
  let sizes = [];

  if (!material) {
    let i = 0;
    const maxItem = (content[1] - content[0]) / 10;
    while (i <= maxItem) {
      sizes.push(content[0] + 10 * i);
      i++;
    }
  }

  const updateItemHandler = (item) => {
    if (material) {
      dispatch({
        type: "UPDATE_MATERIAL",
        payload: { name: `${title}Material`, value: item },
      });
    } else {
      dispatch({
        type: "UPDATE_SIZE",
        payload: { name: `${title}`, value: item },
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="capitalize">
        {material &&
          `${title} material - ${selectedItem.name} ${
            selectedItem.addUpPrice > 0 ? `(+£${selectedItem.addUpPrice})` : ""
          }`}
        {!material && `${title} (cm)`}
      </p>

      <div className="flex gap-3 box-content flex-wrap place-content-center">
        {material &&
          content.map((el) => (
            <button
              type="button"
              key={el.id}
              onClick={() => {
                updateItemHandler(el);
              }}
              className={`rounded-[50%] ${
                selectedItem.name === el.name ? "outline outline-blue" : null
              }`}
            >
              <Image
                width={50}
                height={50}
                src={`/assets/materials/${el.img}`}
                alt={el.name}
              />
            </button>
          ))}

        {!material &&
          sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => updateItemHandler(size)}
              className={`rounded-md border w-[65px] font-light ${
                selectedItem === size ? "border-black text-black" : "text-gray"
              }`}
            >
              {size}
            </button>
          ))}
      </div>
    </div>
  );
};

export default OptionSegment;
