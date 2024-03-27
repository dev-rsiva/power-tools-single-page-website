import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const CategoryCard = ({ eachCat }) => {
  const handleCallButtonClick = () => {
    console.log("calling");
    const phoneNumber = "09363031126";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      id="Category-container"
      className="flex flex-col justify-start items-center w-[300px] h-auto min-h-[380px] bg-primOrange rounded mb-6 
      mx-2 cursor-pointer lg:hover:bg-gray-600 lg:hover:text-white lg:transition-all lg:duration-200"
    >
      <div className="w-[300px] h-[300px] overflow-hidden">
        <img
          src={eachCat.catImg}
          alt={eachCat.catName}
          className="w-full h-full p-[10px] object-cover object-center rounded-[14px] transition-transform duration-500 transform scale-80"
        />
      </div>
      <div className="p-2">
        <h3
          id="category-title"
          className="font-Rubik font-normal text-xl text-center"
        >
          {eachCat.catTitle}
          <br />
          {eachCat.catSubTitle}
        </h3>
        <div className="flex justify-center items-center py-4">
          {/* <p className="pr-4">Approx. Price: Rs.{eachBrand.Price}/piece</p> */}
          <button
            className="bg-blue-600 px-4 py-2 rounded-md text-white text-[20px]"
            onClick={handleCallButtonClick}
          >
            <FontAwesomeIcon icon={faPhone} className="pr-2" />
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
