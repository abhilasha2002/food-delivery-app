// const styleCard={
//     backgroundColor:"beige"

import { useContext } from "react";
import { Image_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// }
const RestaurantCard=(props)=>{
    const {name,cloudinaryImageId,cuisines,costForTwo,sla,externalRatings}=props.resData.info;
    const {loggedInUser}=useContext(UserContext);
    

    return(
    <div className="m-4 p-4 w-[250px] h-[450px] bg-gray-200 rounded-lg items-center hover:bg-gray-300" 
    // style={styleCard}
    >
        <img className="res-logo rounded-lg w-11/12 h-1/2" alt="res logo" src={Image_URL+cloudinaryImageId}
        />
        <h3 className="font-bold pt-4 text-lg">{name}</h3>
        <h4 className="text-m pt-1 italic">{cuisines.join(', ')}</h4>
        {/* <h4>{externalRatings.aggregatedRating.rating} stars</h4> */}
        <h4 className="pt-2">{costForTwo}</h4>
        <h4 className="py-1">{sla.deliveryTime} minutes</h4>
        <h4>User: {loggedInUser}</h4>

    </div>
)};

export default RestaurantCard;