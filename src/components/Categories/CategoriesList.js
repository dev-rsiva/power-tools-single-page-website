import CategoryCard from "./CategoryCard";

import Core_cutting_machines from "./Category_images_Spower/Core_cutting_machines.png";
import S_Power_tools_Trichy_Core_drill_bits_0003 from "./Category_images_Spower/S_Power_tools_Trichy_Core_drill_bits_0003.jpg";
import S_Power_tools_Trichy_Core_bit_segments_0001 from "./Category_images_Spower/S_Power_tools_Trichy_Core_bit_segments_0001.jpg";
import S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007 from "./Category_images_Spower/S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007.jpg";

import Demolition_hammer_machines_0001 from "./Category_images_Spower/Demolition_hammer_machines_0001.png";
import Drilling_Machines_Power_Tools_0001 from "./Category_images_Spower/Drilling_Machines_Power_Tools_0001.png";


import Chisels_Drill_bits_Extension_Rods_1ft_2ft_3ft_Adaptors from "./Category_images_Spower/Chisels_Drill_bits_Extension_Rods_1ft_2ft_3ft_Adaptors.png";

import Concrete_cutting_machines from "./Category_images_Spower/Concrete_cutting_machines.png";
import S_Power_tools_Trichy_Concrete_cutting_blades_0005 from "./Category_images_Spower/S_Power_tools_Trichy_Concrete_cutting_blades_0005.jpg";

import Chemical_and_mechanical_anchors from "./Category_images_Spower/Chemical_and_mechanical_anchors.png";
import All_Brand_Machine_Accessories from "./Category_images_Spower/All_Brand_Machine_Accessories.png";

import Other_Power_Tools from "./Category_images_Spower/Other_Power_Tools.png";
import { Link, useNavigate } from "react-router-dom";
export const catDetails = [
  {
    catImg: Core_cutting_machines,
    catSlug: "Best-Core-Cutting-Machines-Trichy",
    catTitle: "Core Cutting Machines",
    catSubTitle: "(All Brands - 130mm, 200mm, 250mm, 300mm, 450mm)",
    catName: "Best Core Cutting Machines In Trichy",
    catDesc:
      "Discover the pinnacle of core cutting excellence in Trichy with S Power Tools' exceptional Core Cutting Machines. Our precision-engineered machines, featuring renowned brands such as Husquarna, Bosch, Dong Cheng, Powertex, M-fix, and Makita, are tailored to meet diverse cutting needs in Trichy, Tamil Nadu. Crafted to exact specifications, our high-caliber core cutting machines ensure optimal precision and efficiency for cutting applications. Trust S Power Tools for locally optimized machines that elevate the performance and reliability of your cutting projects in Trichy.",
  },
  {
    catImg: S_Power_tools_Trichy_Core_drill_bits_0003,
    catSlug: "Best-Core-Drill-Bits-Trichy",
    catTitle: "Core Drill Bits",
    catSubTitle: "(16mm to 450mm)",
    catName: "Best Core Drill Bits In Trichy",
    catDesc:
      "Transform your core cutting performance in Trichy with S Power Tools' premium Core Drill Bits. Engineered for precision and efficiency, our core bits, available in sizes ranging from 16mm to 450mm, deliver clean and efficient cuts. Trust S Power Tools for the best accessories that elevate your core cutting experience, ensuring unmatched precision in Trichy.",
  },
  {
    catImg: S_Power_tools_Trichy_Core_bit_segments_0001,
    catSlug: "Best-Core-Drill-Bit-Segments-Trichy",
    catTitle: "Core Drill Bit Segments",
    catSubTitle: "(All Sizes)",
    catName: "Best Core Drill Bit Segments In Trichy",
    catDesc:
      "Elevate your core drilling precision in Trichy with S Power Tools' best Core Drill Bit Segments. Our expertly engineered segments, available in sizes ranging from 1 inch to 12 inches, ensure clean and efficient cuts for your cutting needs. Trust S Power Tools for top-notch accessories that redefine your core drilling experience, delivering unparalleled precision in Trichy.",
  },
  {
    catImg: S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007,
    catSlug: "Best-Core-Drill-Bit-Segment-Rebrazing-Trichy",
    catTitle: "Core Drill Bit Segment Rebrazing",
    catSubTitle: "",
    catName: "Best Core Drill Bit Segment Rebrazing In Trichy",
    catDesc:
      "Revolutionize your core cutting experience in Trichy with S Power Tools' Core Drill Bit Rebrazing services. Our expert welding ensures the seamless rebrazing of core bit segments, enhancing the durability and performance of your core cutting tools. Trust us for precision, efficiency, and a seamless cutting experience that meets the highest standards in Trichy.",
  },
  {
    catImg: Demolition_hammer_machines_0001,
    catSlug: "Best-Demolition-Machines-Trichy",
    catTitle: "Demolition Machines",
    catSubTitle: "(Impact & Rotary Hammers)",
    catName: "Best Demolition Machines In Trichy",
    catDesc:
      "Elevate your demolition projects in Trichy with S Power Tools' robust Demolition Hammer Machines. Our carefully curated selection includes trusted brands like Bosch 11E, Ralli Wolf, Dong Cheng, Makita, and Powertex, delivering relentless force for breaking and chiseling tasks in Trichy. Designed with ergonomic precision and cutting-edge technology, our Demolition Hammer Machines redefine efficiency and precision. Trust S Power Tools for the best Demolition Machines in Trichy, ensuring every demolition project is executed with unparalleled control and effectiveness.",
  },

  {
    catImg: Drilling_Machines_Power_Tools_0001,
    catSlug: "Best-Drilling-Machines-Trichy",
    catTitle: "Drilling Machines",
    catSubTitle: "",
    catName: "Best Drilling Machines In Trichy",
    catDesc:
      "Elevate your drilling endeavors in Trichy with S Power Tools' cutting-edge Drilling Machines. Our impressive range includes standout models from trusted brands like Bosch, Dewalt, Makita and Hitachi meticulously crafted to deliver precision drilling in Trichy. Whether you're involved in construction ventures or undertaking drilling projects in Trichy, our Drilling Machines provide the strength and precision required for efficient drilling. Trust S Power Tools for the best Drilling Machines in Trichy, ensuring your projects meet the highest industry standards.",
  },
  {
    catImg: Chisels_Drill_bits_Extension_Rods_1ft_2ft_3ft_Adaptors,
    catSlug:
      "Best-Chisels-Drill-bits-Extension-Rods(1ft,2ft,3ft)-Adaptors-Trichy",
    catTitle:
      "Point Chisel, Flat Chisel, Drill bit, Extension Rod(1ft, 2ft, 3ft), Adaptors",
    catSubTitle: "",
    catName:
      "Best Point Chisel, Flat Chisel, Drill bit, Extension Rod(1ft, 2ft, 3ft), Adaptors In Trichy",
    catDesc:
      "Elevate your toolbox with S Power Tools' diverse range of Accessories in Trichy. From Point Chisels and Flat Chisels to versatile Drill Bits and Extension Rods (1ft, 2ft, 3ft), our accessories are designed to complement your power tools, ensuring an enhanced work experience in Trichy. Whether you seek precision or flexibility, our collection caters to your needs, delivering top-notch quality and innovation. Trust S Power Tools' accessories for a seamless and efficient work environment in Trichy.",
  },
  {
    catImg: Concrete_cutting_machines,
    catSlug: "Best-Concrete-Cutting-Machines-Trichy",
    catTitle: "Concrete Cutting Machines",
    catSubTitle: "(350mm, 400mm, 600mm)",
    catName: "Best Concrete Cutting Machines In Trichy",
    catDesc:
      "Unlock the potential of precision cutting in Trichy with S Power Tools' superior Concrete Cutting Machines. Our collection features the best-in-class, including the Super Steel Concrete Slab cutting machine, designed for tackling Trichy's toughest cutting challenges. Explore top-rated options like the Husquarna Concrete Cutting Machine, Hitachi Concrete Cutting Machine and Makita Concrete Cutting Machine, ranging from 350mm to 1000mm. Ideal for construction sites and renovation projects in Trichy, our Concrete Cutting Machines deliver unmatched power and accuracy, ensuring your projects adhere to the highest standards. Trust S Power Tools for the best Concrete Cutting Machines in Trichy, providing the efficiency you need for clean and precise cuts",
  },
  {
    catImg: S_Power_tools_Trichy_Concrete_cutting_blades_0005,
    catSlug: "Best-Concrete-Cutting-Blades-Trichy",
    catTitle: "Concrete Cutting Blades",
    catSubTitle: "(350mm upto 1000mm)",
    catName: "Best Concrete Cutting Blades In Trichy",
    catDesc:
      "Elevate your concrete cutting endeavors in Trichy with S Power Tools' cutting-edge Concrete Cutting Blades. Crafted for precision, our blades guarantee clean and efficient cuts, providing unmatched performance for your projects in Trichy. Whether you're engaged in construction sites or renovation tasks, our Concrete Cutting Blades ensure the power and accuracy necessary to meet the highest standards in Trichy.",
  },
  {
    catImg: Chemical_and_mechanical_anchors,
    catSlug: "Best-Chemical-And-Mechanical-Anchors-Trichy",
    catTitle: "Chemical And Mechanical Anchors(All Brands)",
    catSubTitle: "",
    catName: "Best Chemical And Mechanical Anchors In Trichy",
    catDesc:
      "Ensure the steadfastness of your structures in Trichy with confidence, thanks to S Power Tools' premier Chemical and Mechanical Anchors. Our assortment features top-quality anchoring solutions meticulously designed for maximum stability in diverse applications across Trichy. Whether anchoring in concrete or masonry, our products deliver a reliable and durable connection. Explore our range, including Fischer Chemical FIS V Plus 360s, Hilti Chemical RE 10, Chemical injection gun, and Mechanical anchors like 12mm DTS Fischer Drop Anchor Bolt, Wedge Anchor 12mm x 125mm, and Eye Bolt. Trust in our superior anchors that adhere to stringent standards, ensuring the integrity of your structures in both residential and commercial settings in Trichy.",
  },
  {
    catImg: All_Brand_Machine_Accessories,
    catSlug: "Best-Core-Cutting-Demolition-Accessories-Trichy",
    catTitle: "All Brand Machine Accessories",
    catSubTitle: "(Armature, Carbon brush, O-Ring, Gear and more)",
    catName: "Best Core Cutting Demolition Accessories In Trichy",
    catDesc:
      "Fortify your structures in Trichy with absolute confidence, courtesy of S Power Tools' unrivaled Core Cutting Demolition Accessories. Our range encompasses premium anchoring solutions meticulously designed to deliver maximum stability across diverse applications in Trichy. Whether you're anchoring in concrete or masonry, our accessories offer a reliable and durable connection. Dive into our collection, featuring superior quality accessories such as Armature, Carbon brush, Field Coil,  O-Ring, Gear, 11E tool holder, Piston & connecting rod, Stainless steel fan hook, and more. Trust in our accessories that meet stringent standards, ensuring the integrity of your structures in both residential and commercial settings in Trichy.",
  },
  {
    catImg: Other_Power_Tools,
    catSlug: "All-Other-Best-Power-Tools-Trichy",
    catTitle: "Other Power Tools",
    catSubTitle:
      "(Marble Cutter, Angle Grinder, Cut Off Saw, Chain Saw, Paint Mixer, Air Blower & more)",
    catName: "All Other Best Power Tools In Trichy",
    catDesc:
      "Elevate your projects in Trichy with the finest selection of power tools from S Power Tools. Our extensive range caters to Trichy's diverse needs, featuring top-notch machinery like the Marble Cutter, Angle Grinder, Cut Off Saw, Chain Saw, Paint Mixer, Air Blower, and more. Whether you're a professional or a DIY enthusiast, our tools are designed to meet Trichy's unique requirements. The Ralli Wolf Core Cutting Machine ensures precision in concrete tasks, while the Electric Paint Mixing Machine guarantees seamless paint blending. The versatile Angle Grinder Machine handles cutting, grinding, and polishing with ease. The efficiency-driven Cut Off Saw Machine promises clean and precise cuts, and the powerful Chain Saw Machine tackles diverse cutting challenges. Additionally, our Air Blower ensures a clean workspace by efficiently removing dust and debris. S Power Tools is committed to delivering top-notch solutions, empowering you to achieve unparalleled precision and efficiency in your projects in Trichy.",
  },
];

const CategoriesList = ({ refs }) => {
  const navigate = useNavigate();

  const handleCardClick = (catSlug) => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div id="categories-container" ref={refs?.productSection} className='pt-[15px]'>
      <h2
        id="categories-title"
        className="text-3xl font-Rubik font-light text-primOrange lg:px-44 px-auto py-4 my-4
        lg:text-justify text-center"
      >
        Our Best Core Cutting, Drilling & Demolition Machines in Trichy
      </h2>
      <div className="lg:mx-44 mx-6 flex flex-wrap md:items-center lg:justify-between md:justify-evenly justify-center">
        {catDetails.map((eachCat, index) => {
          return (
            <div key={index} onClick={() => handleCardClick(eachCat.catSlug)}>
              <Link to={`/${eachCat.catSlug}`}>
                <CategoryCard eachCat={eachCat} index={index} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
