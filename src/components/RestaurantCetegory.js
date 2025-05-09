import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const[toggleItem,setToggleItem]=useState(showItems);
console.log('togglesate',toggleItem)
  const handleClick = () => {
    setShowIndex();
    setToggleItem(!toggleItem);
    };

  return (
    <div
      className="bg-gray-300 m-4 p-4 rounded-lg shadow-lg w-[600px] cursor-pointer hover:bg-gray-400"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <h1 className="font-bold">
          {data.title}({data?.itemCards?.length})
        </h1>
        ⬇️
      </div>
      {showItems && toggleItem && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
