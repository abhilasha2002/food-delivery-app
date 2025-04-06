// not using key(not acceptable)<<< index as key <<<<<<<<<unique id (best practice)
import RestaurantCard from "./RestaurantCard";
import zomatoResData, { oneCard } from "../utils/mockData";
import { useState, useEffect } from "react";
import {Link} from 'react-router'
import Shimer from './Shimer';
let listOfRes = [
  {
    info: {
      resId: 51989,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/51989/1fc9a366b808205f6294527b168d9a0b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "29 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/dominos-pizza-1-bellandur/order",
      },
    },
  },
  {
    info: {
      resId: 51980,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/51989/1fc9a366b808205f6294527b168d9a0b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/bangalore/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/bangalore/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "\u20b9200 for one",
      },
    },
    order: {
      deliveryTime: "29 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/bangalore/dominos-pizza-1-bellandur/order",
      },
    },
  },
];
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes,setFilteredRes]=useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
      fetchData();
  },[]);
  const fetchData= async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
      const json=await data.json();
      const dataPath=json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(dataPath);
      setFilteredRes(dataPath);
      console.log('json',json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
  }
  console.log('filteredRes', filteredRes,listOfRestaurants)
  if(filteredRes.length===0) return <Shimer/>
  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button className="filter-btn" onClick={()=>{
            const searchData=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRes(searchData);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic

            const filteredRes = zomatoResData.filter((res) => {
              console.log(parseFloat(res.info.rating.aggregate_rating));
              return parseFloat(res.info.rating.aggregate_rating) > 4;
            });
            console.log(filteredRes);
            setListOfRestaurants(filteredRes);
            console.log("Button clicked");
          }}
        >
          Top rated button
        </button>
      </div>
      <div className="res-container">
        {
        filteredRes.map((restaurant) => (
          
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
        {/* <RestaurantCard  resData={oneResData} /> */}
      </div>
    </div>
  );
};
export default Body;
