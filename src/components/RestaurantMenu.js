import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router";
import { Menu_Url } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_Url + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  if (resInfo === null) return <Shimer />;
  const { name, costForTwoMessage, cuisines, id } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1> {name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {(item?.card?.info?.price)/100 || (item?.card?.info?.finalPrice)/100}</li>
        ))}
      </ul>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
