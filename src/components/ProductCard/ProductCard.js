import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ selectedCategory, eachBrand }) => {
  console.log(selectedCategory.catTitle);
  const handleCallButtonClick = () => {
    console.log("calling");
    const phoneNumber = "09363031126";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="mx-4 lg:mr-4 lg:mx-0 pr-4 my-4 py-4 text-black font-Rubik bg-gray-300 rounded">
      <div>
        <h2 className="font-bold text-2xl pl-4">{eachBrand?.Title}</h2>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center">
          <div
            className={`flex justify-center items-center ${
              selectedCategory?.catTitle == "All Brand Machine Accessories"
                ? "sm:w-[30%]"
                : "flex-1"
            } w-auto h-[250px] sm:h-[350px]`}
          >
            <img
              src={eachBrand?.image}
              alt={`Best ${eachBrand?.Title} In Trichy`}
              className={`pl-4 ${
                selectedCategory?.catName === "Concrete Cutting Machines"
                  ? "w-auto h-[200px]"
                  : selectedCategory?.catName === "Drilling Machines"
                  ? "w-auto h-[200px]"
                  : selectedCategory?.catName ===
                    "Chemical And Mechanical Anchors"
                  ? "w-auto h-[200px]"
                  : selectedCategory?.catName ===
                    "Best Point Chisel, Flat Chisel, Drill bit, Extension Rod(1ft, 2ft, 3ft), Adaptors In Trichy"
                  ? "w-auto h-[200px]"
                  : selectedCategory?.catName ===
                    "Best Core Cutting Demolition Accessories In Trichy"
                  ? "w-auto h-[200px]"
                  : selectedCategory?.catName === "Other Power Tools"
                  ? "w-auto h-[200px]"
                  : "w-full h-full"
              } object-contain`}
            />
          </div>

          <div
            className={`${
              selectedCategory?.catTitle == "All Brand Machine Accessories"
                ? "sm:w-[70%]"
                : "flex-1"
            }  pl-4`}
          >
            <div>
              <h3 className="text-lg font-semibold py-4">Product Details:</h3>
              <table>
                {Object.keys(eachBrand).map((property, index) => {
                  const excludedProperties = ["image", "Title"];

                  if (!excludedProperties.includes(property)) {
                    return (
                      <tr key={index} className="align-text-top">
                        <td className="pr-8 py-1">{property}:</td>
                        <td>{eachBrand[property]}</td>
                      </tr>
                    );
                  }
                })}
              </table>
            </div>

            <div className="flex py-4">
              {/* <p className="pr-4">Approx. Price: Rs.{eachBrand.Price}/piece</p> */}
              <button
                className="bg-blue-600 px-4 py-3 rounded-md text-white text-[20px]"
                onClick={handleCallButtonClick}
              >
                <FontAwesomeIcon icon={faPhone} className="pr-2" />
                Get Latest Price
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
