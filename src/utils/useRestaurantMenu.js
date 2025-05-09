import { Menu_Url } from "./constants";
import {useState,useEffect} from 'react';
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_Url + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
