import Shimer from "./Shimer";
import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCetegory";
import ItemList from "./ItemList";
const RestaurantMenu = () => {
  // const [showData, setShowData] = useState(false);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);

  if (resInfo === null) return <Shimer />;
  const { name, costForTwoMessage, cuisines, id } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  console.log("categories", categories);
  return (
    <div className="menu justify-items-center ">
      <div className=" ">
        <h1 className="font-bold"> {name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
      </div>
      <div className=" p-4 m-4">
        {categories.map((category,index) => (
          //controlled component
          <RestaurantCategory
            key={category.card.card.categoryId}
            data={category.card.card}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
          />
          // <div
          //   className="bg-gray-300 m-4 p-4 rounded-lg shadow-lg w-[600px] cursor-pointer hover:bg-gray-400"
          //   key={category.card.card.categoryId}
          //   onClick={
          //     handleClick
          //   }
          // >
          //   <div className="flex justify-between">
          //     <h1 className="font-bold">{category.card.card.title}({itemCards.length})</h1>
          //     ⬇️
          //   </div>
          //   {showData && <ItemList items={itemCards} />}
          // </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
