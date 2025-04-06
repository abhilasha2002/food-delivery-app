// const styleCard={
//     backgroundColor:"beige"

import { Image_URL } from "../utils/constants";

// }
const RestaurantCard=(props)=>{
    const {name,cloudinaryImageId,cuisines,costForTwo,sla,externalRatings}=props.resData.info;
    console.log('props',props,name)
    // const {aggregate_rating}=props.resData.info.rating;
    // const {deliveryTime}=props.resData?.info?.order;

    return(
    <div className="res-card" 
    // style={styleCard}
    >
        <img className="res-logo" alt="res logo" src={Image_URL+cloudinaryImageId}
        // {image.url.replaceAll('/','//')}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        {/* <h4>{externalRatings.aggregatedRating.rating} stars</h4> */}
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>

    </div>
)};
export default RestaurantCard;