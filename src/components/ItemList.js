import { Image_URL } from "../utils/constants";
const ItemList = ({ items }) => {

  return (
    <div className="py-2   ">
      {items &&
        items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="py-3 flex border-gray-200 border-b-2"
          >
            <div className="w-9/12">
              <span className="text-m font-semibold">
                {item?.card?.info?.name}
              </span>
              <span className="text-semibold ">
                Rs.{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.finalPrice / 100}
              </span>
              <p className="py-3">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12  items-center  m-4">
            <div className="absolute">
              <button className="bg-black text-white p-1 shadow-lg absolute mx-12  rounded-lg"> Add+</button></div>
              <img
                className="w-full"
                src={Image_URL + item.card.info.imageId}
              />
              
            </div>
          </div>
        ))}
    </div>
  );
};
export default ItemList;
