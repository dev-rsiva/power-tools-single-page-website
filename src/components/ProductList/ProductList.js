import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

import S_power_tools_Dong_Cheng_Core_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_Dong_Cheng_Core_cutting_machines_trichy.png";
import S_power_tools_m_fix_Core_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_m_fix_Core_cutting_machines_trichy.png";
import S_power_tools_makita_Core_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_makita_Core_cutting_machines_trichy.png";
import S_power_tools_powertex_Core_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_powertex_Core_cutting_machines_trichy.png";
import S_power_tools_husquarna_core_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_husquarna_core_cutting_machines_trichy.png";
import S_power_tools_Dong_Bosch_cutting_machines_trichy from "./core-cutting-machines/S_power_tools_Dong_Bosch_cutting_machines_trichy.png";

import S_Power_tools_Trichy_Core_drill_bits from "./core-drill-bits/S_Power_tools_Trichy_Core_drill_bits.jpg";
import S_Power_tools_Trichy_Core_bit_segments_0004 from "./core-drill-bit-segments/S_Power_tools_Trichy_Core_bit_segments_0004.png";
import S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007 from "./core-drill-bit-segment-brazing/S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007.jpg";

import S_power_tools_bosch_demolition_hammer_machine_trichy from "./demolition-hammer-machines/S_power_tools_bosch_demolition_hammer_machine_trichy.png";
import S_power_tools_dong_cheng_demolition_hammer_machine_trichy from "./demolition-hammer-machines/S_power_tools_dong_cheng_demolition_hammer_machine_trichy.png";
import S_power_tools_makita_demolition_hammer_machine_trichy from "./demolition-hammer-machines/S_power_tools_makita_demolition_hammer_machine_trichy.png";
import S_power_tools_powertex_demolition_hammer_machine_trichy from "./demolition-hammer-machines/S_power_tools_powertex_demolition_hammer_machine_trichy.png";
import S_power_tools_Ralliwolf_demolition_hammer_machine_trichy from "./demolition-hammer-machines/S_power_tools_Ralliwolf_demolition_hammer_machine_trichy.png";


import Concrete_cutting_machines_0002_transparent from "./Concrete_Cutting_Machines/Concrete_cutting_machines_0002_transparent.png";
import Husquarna_Concrete_Cutting_machine_S_Power_tools_trichy_transparent from "./Concrete_Cutting_Machines/Husquarna_Concrete_Cutting_machine_S_Power_tools_trichy_transparent.png";
import Makita_Concrete_Cutting_machine_S_Power_tools_trichy_transparent from "./Concrete_Cutting_Machines/Makita_Concrete_Cutting_machine_S_Power_tools_trichy_transparent.png";
import Hitachi_Concrete_Cutting_machine_S_Power_tools_trichy_transparent from "./Concrete_Cutting_Machines/Hitachi_Concrete_Cutting_machine_S_Power_tools_trichy_transparent.png";

import Bosch_Drilling_machine_S_Power_tools_trichy from "./Drilling_Machines/Bosch_Drilling_machine_S_Power_tools_trichy.png";
import Dewalt_Drilling_machine_S_Power_tools_trichy from "./Drilling_Machines/Dewalt_Drilling_machine_S_Power_tools_trichy.png";
import Makita_Drilling_machine_S_Power_tools_trichy from "./Drilling_Machines/Makita_Drilling_machine_S_Power_tools_trichy.png";
import Hitachi_Drilling_machine_S_Power_tools_trichy_transparent from "./Drilling_Machines/Hitachi_Drilling_machine_S_Power_tools_trichy_transparent.png";

import S_Power_tools_Trichy_Chemical_injecting_gun_hilti from "./Chemical_And_Mechanical_Anchors/S_Power_tools_Trichy_Chemical_injecting_gun_hilti.jpg";
import S_Power_tools_trichy_eye_bolt from "./Chemical_And_Mechanical_Anchors/S_Power_tools_trichy_eye_bolt.jpg";
import S_Power_tools_Trichy_Hilti_Chemical_RE10_0001 from "./Chemical_And_Mechanical_Anchors/S_Power_tools_Trichy_Hilti_Chemical_RE10_0001.jpg";
import S_Power_tools_Trichy_Mechanical_anchor_bolt_002 from "./Chemical_And_Mechanical_Anchors/S_Power_tools_Trichy_Mechanical_anchor_bolt_002.jpg";
import S_Power_tools_trichy_trichy_Fischer_EM_Plus_Chemical_anchor from "./Chemical_And_Mechanical_Anchors/S_Power_tools_trichy_trichy_Fischer_EM_Plus_Chemical_anchor.jpg";
import S_Power_tools_trichy_trichy_Wedge_Anchor from "./Chemical_And_Mechanical_Anchors/S_Power_tools_trichy_trichy_Wedge_Anchor.jpg";



import S_Power_tools_Trichy_Chisel_Flat_2_feet_0001 from "./Accessories/S_Power_tools_Trichy_Chisel_Flat_2_feet_0001.jpg";
import S_Power_tools_Trichy_Concrete_cutting_blades_0005 from "./Accessories/S_Power_tools_Trichy_Concrete_cutting_blades_0005.jpg";
import S_Power_tools_Trichy_dongcheng_adaptor_Big_thread from "./Accessories/S_Power_tools_Trichy_dongcheng_adaptor_Big_thread.jpg";
import S_Power_tools_Trichy_dongcheng_adaptor_short_thread from "./Accessories/S_Power_tools_Trichy_dongcheng_adaptor_short_thread.jpg";
import S_Power_tools_Trichy_drill_bit_0001 from "./Accessories/S_Power_tools_Trichy_drill_bit_0001.jpg";
import S_Power_tools_Trichy_Extension_rod from "./Accessories/S_Power_tools_Trichy_Extension_rod.jpg";
import S_Power_tools_trichy_trichy_SS_Fan_Hook from "./Accessories/S_Power_tools_trichy_trichy_SS_Fan_Hook.jpg";
import S_Power_tools_Trichy_demolition_Chisel_point_0001 from "./Accessories/S_Power_tools_Trichy_demolition_Chisel_point_0001.jpg";

import S_Power_tools_Trichy_Armature_0001_transparent from "./Accessories/S_Power_tools_Trichy_Armature_0001_transparent.png";
import S_Power_tools_Trichy_drill_parts_connecting_rod_and_piston_0001_transparent from "./Accessories/S_Power_tools_Trichy_drill_parts_connecting_rod_and_piston_0001_transparent.png";
import S_Power_tools_Trichy_Tool_Holder_0001_transparent from "./Accessories/S_Power_tools_Trichy_Tool_Holder_0001_transparent.png";
import S_Power_tools_Trichy_Field_coil_0001 from "./Accessories/S_Power_tools_Trichy_Field_coil_0001.png";
import All_Brand_Accessories_S_power_rtools_Trichy_Gear_Bosch_11E from "./Accessories/All_Brand_Accessories_S_power_tools_Trichy_Gear_Bosch_11E.png";
import S_Power_tools_Trichy_Carbon_brush_0002 from "./Accessories/S_Power_tools_Trichy_Carbon_brush_0002.png";
import All_Brand_Accessories_S_power_tools_Trichy_O_Ring_Bosch_11E from "./Accessories/All_Brand_Accessories_S_power_tools_Trichy_O_Ring_Bosch_11E.png";

import S_Power_tools_Trichy_air_blower from "./Other_Power_Tools/S_Power_tools_Trichy_air_blower.png";
import S_Power_tools_trichy_Angle_grinder_machine from "./Other_Power_Tools/S_Power_tools_trichy_Angle_grinder_machine.png";
import S_Power_tools_trichy_Chain_Saw_Machines from "./Other_Power_Tools/S_Power_tools_trichy_Chain_Saw_Machines.png";
import S_Power_tools_trichy_electric_paint_mixing_machine from "./Other_Power_Tools/S_Power_tools_trichy_electric_paint_mixing_machine.png";
import S_Power_tools_trichy_cut_off_saw_machine from "./Other_Power_Tools/S_Power_tools_trichy_cut_off_saw_machine.png";
import S_Power_tools_trichy_marble_cutter_cutting_machine from "./Other_Power_Tools/S_Power_tools_trichy_marble_cutter_cutting_machine.png";

import { catDetails } from "../Categories/CategoriesList";

const ProductList = () => {
  const productDetails = [
    {
      "Core Cutting Machines": [
        {
          image: S_power_tools_husquarna_core_cutting_machines_trichy,
          Title: "Husquarna Core cutting machine",
          Brand: "Husquarna",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },
        {
          image: S_power_tools_Dong_Bosch_cutting_machines_trichy,
          Title: "Bosch Core cutting machine",
          Brand: "Bosch",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },
        {
          image: S_power_tools_Dong_Cheng_Core_cutting_machines_trichy,
          Title: "Dong Cheng Core cutting machine",
          Brand: "Dong Cheng",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },
        {
          image: S_power_tools_powertex_Core_cutting_machines_trichy,
          Title: "Powertex Core cutting machine",
          Brand: "Powertex",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },

        {
          image: S_power_tools_m_fix_Core_cutting_machines_trichy,
          Title: "M-fix Core cutting machine",
          Brand: "M-fix",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },

        {
          image: S_power_tools_makita_Core_cutting_machines_trichy,
          Title: "Makita Core cutting machine",
          Brand: "Makita",
          "Power Source": "Corded Electric",
          Usage: "rcc",
          "Core bit diameter with stand": "20mm to 450mm",
          "Spares & Accesories": "Available",
        },
      ],
    },

    {
      "Core Drill Bits": [
        {
          image: S_Power_tools_Trichy_Core_drill_bits,
          Title: "All Brand Core Drill Bits",
          Brand: "All Brand",
          Usage: "rcc",
          "Drill bit diameter": "From 16mm upto 300mm",
          "Drill bit length": "All Sizes",
          "Thread Size": "Small thread & Big thread",
        },
      ],
    },

    {
      "Core Drill Bit Segments": [
        {
          image: S_Power_tools_Trichy_Core_bit_segments_0004,
          Title: "Core Drill Bit Segments",
          Brand: "-",
          Usage: "rcc",
          "Drill bit segment Sizes":
            "1 inch, 1-1/2 inch, 1-3/4 inch, 2 inch, 2-1/2 inch, 3 inch, 4 inch, 5 inch, 6 inch, 7 inch, 8 inch, 9 inch, 10 inch, 11 inch, 12 inch",
        },
      ],
    },

    {
      "Core Drill Bit Segment Rebrazing": [
        {
          image: S_Power_tools_Trichy_Core_drill_bit_Rebrazing_0007,
          Title: "Core Drill Bit Segment Rebrazing",
          Brand: "-",
          Usage: "rcc",
          "Drill bit segment Rebrazing Method": "Manual",
        },
      ],
    },

    {
      "Demolition Machines": [
        {
          image: S_power_tools_bosch_demolition_hammer_machine_trichy,
          Title: "Bosch demolition machine",
          Brand: "Bosch",
          "Demolition bit type": "Point Chisel, Flat Chisel",
          Weight: "5kg, 10kg, 16kg, 27kg",
        },
        {
          image: S_power_tools_Ralliwolf_demolition_hammer_machine_trichy,
          Title: "Ralli Wolf demolition machine",
          Brand: "Ralli Wolf",
          "Demolition bit type": "Point Chisel, Flat Chisel",
          Weight: "5kg, 10kg, 16kg, 27kg",
        },
        {
          image: S_power_tools_dong_cheng_demolition_hammer_machine_trichy,
          Title: "Dong Cheng demolition machine",
          Brand: "Dong Cheng",
          "Demolition bit type": "Point Chisel, Flat Chisel",
          Weight: "5kg, 10kg, 16kg, 27kg",
        },

        {
          image: S_power_tools_makita_demolition_hammer_machine_trichy,
          Title: "Makita demolition machine",
          Brand: "Makita",
          "Demolition bit type": "Point Chisel, Flat Chisel",
          Weight: "5kg, 10kg, 16kg, 27kg",
        },

        {
          image: S_power_tools_powertex_demolition_hammer_machine_trichy,
          Title: "Powertex demolition machine",
          Brand: "Powertex",
          "Demolition bit type": "Point Chisel, Flat Chisel",
          Weight: "5kg, 10kg, 16kg, 27kg",
        },
      ],
    },

    {
      "Drilling Machines": [
        {
          image: Bosch_Drilling_machine_S_Power_tools_trichy,
          Title: "Bosch Drilling Machine",
          Brand: "Bosch",
          Weight: "upto 10kg",
          "Drill bit type": "sds plus, sds max, hexagon type",
          "Drill bit diamter": "20mm to 40mm",
        },
        {
          image: Dewalt_Drilling_machine_S_Power_tools_trichy,
          Title: "Dewalt Drilling Machine",
          Brand: "Dewalt",
          Weight: "upto 10kg",
          "Drill bit type": "sds plus, sds max, hexagon type",
          "Drill bit diamter": "20mm to 40mm",
        },
        {
          image: Makita_Drilling_machine_S_Power_tools_trichy,
          Title: "Makita Drilling hammer machine",
          Brand: "Makita",
          Weight: "upto 10kg",
          "Drill bit type": "sds plus, sds max, hexagon type",
          "Drill bit diamter": "20mm to 40mm",
        },
        {
          image: Hitachi_Drilling_machine_S_Power_tools_trichy_transparent,
          Title: "Hitachi Drilling hammer machine",
          Brand: "Hitachi",
          Weight: "upto 10kg",
          "Drill bit type": "sds plus, sds max, hexagon type",
          "Drill bit diamter": "20mm to 40mm",
        },
      ],
    },

    {
      "Point Chisel, Flat Chisel, Drill bit, Extension Rod(1ft, 2ft, 3ft), Adaptors":
        [
          {
            image: S_Power_tools_Trichy_demolition_Chisel_point_0001,
            Title: "Point Chisel - 2 feet",
            Brand: "Bosch",
            Usage: "rcc",
            Sizes: "All Sizes",
            Description:
              "Tackle your chiseling projects in Trichy with precision using S Power Tools' Point Chisel - 2 Feet. This durable accessory is crafted for optimal performance, ensuring effective and accurate chiseling applications.",
          },
          {
            image: S_Power_tools_Trichy_Chisel_Flat_2_feet_0001,
            Title: "Flat Chisel - 2 feet",
            Brand: "Bosch",
            Usage: "rcc",
            Sizes: "All Sizes",
            Description:
              "S Power Tools introduces the Flat Chisel - 2 Feet, a versatile accessory designed for efficient chiseling in Trichy. Ideal for various construction tasks, this chisel ensures durability and longevity.",
          },
          {
            image: S_Power_tools_Trichy_drill_bit_0001,
            Title: "Concrete Drill bits SDS Plus",
            Brand: "Bosch",
            Usage: "rcc",
            Sizes: "All Sizes",
            Description:
              "Experience the drilling prowess of S Power Tools' Concrete Drill Bits SDS Plus. Crafted for efficiency, these drill bits make light work of concrete surfaces in Trichy, providing reliability and precision in every application.",
          },
          {
            image: S_Power_tools_Trichy_Extension_rod,
            Title: "Extension Rod",
            Brand: "-",
            Usage: "rcc",
            Sizes: "1 ft, 2 ft, 3 ft",
            Description:
              "S Power Tools presents the Extension Rod - upto 3ft, a crucial accessory for extending the reach of your tools in Trichy. Engineered for durability, this extension rod ensures flexibility and convenience in various applications.",
          },
          {
            image: S_Power_tools_Trichy_dongcheng_adaptor_Big_thread,
            Title: "Dong Cheng Adaptors - Big thread",
            Brand: "-",
            Usage: "rcc",
            Sizes: "-",
            Description:
              "Enhance the versatility of your power tools in Trichy with S Power Tools' Dong Cheng Adaptors - Big Thread. These adaptors are designed to seamlessly connect different components, offering convenience and efficiency in your projects.",
          },
          {
            image: S_Power_tools_Trichy_dongcheng_adaptor_short_thread,
            Title: "Dong Cheng Adaptors - small thread",
            Brand: "-",
            Usage: "rcc",
            Sizes: "-",
            Description:
              "Achieve optimal compatibility with S Power Tools' Dong Cheng Adaptors - Small Thread. These adaptors are crafted for precision, ensuring a secure and reliable connection between components for your Trichy-based projects.",
          },
        ],
    },

    {
      "Concrete Cutting Machines": [
        {
          image: Concrete_cutting_machines_0002_transparent,
          Title: "Super Steel Concrete Slab cutting machine",
          Brand: "Super Steel",
          "Cutting blade accessories availability": "300mm to 1000mm available",
        },
        {
          image:
            Husquarna_Concrete_Cutting_machine_S_Power_tools_trichy_transparent,
          Title: "Husquarna Concrete cutting Machine",
          Brand: "husquarna",
          "Cutting blade accessories availability": "300mm to 1000mm available",
        },
        {
          image:
            Makita_Concrete_Cutting_machine_S_Power_tools_trichy_transparent,
          Title: "Makita Concrete cutting Machine",
          Brand: "Makita",
          "Cutting blade accessories availability": "300mm to 1000mm available",
        },
        {
          image:
            Hitachi_Concrete_Cutting_machine_S_Power_tools_trichy_transparent,
          Title: "Hitachi Concrete cutting Machine",
          Brand: "Hitachi",
          "Cutting blade accessories availability": "300mm to 1000mm available",
        },
      ],
    },

    {
      "Concrete Cutting Blades": [
        {
          image: S_Power_tools_Trichy_Concrete_cutting_blades_0005,
          Title: "Concrete Cutting Blades",
          Brand: "-",
          Usage: "rcc",
          Sizes: "350mm to 1000mm",
          Description:
            "Unleash the cutting power of S Power Tools' Concrete Cutting Blades in Trichy. Designed for durability and sharpness, these blades deliver superior performance, ensuring precise and smooth cuts in concrete applications.",
        },
      ],
    },

    {
      "Chemical And Mechanical Anchors(All Brands)": [
        {
          image: S_Power_tools_trichy_trichy_Fischer_EM_Plus_Chemical_anchor,
          Title: "Fischer Chemical FIS V Plus 360s - Injection Mortar",
          Brand: "Fischer",
          Usage: "rcc",
          Description:
            "Trust S Power Tools for Fischer Chemical FIS V Plus 360s, a high-performance injection mortar. Perfect for structural applications in Trichy, it delivers unparalleled reliability and strength in every use.",
        },
        {
          image: S_Power_tools_Trichy_Hilti_Chemical_RE10_0001,
          Title: "Hilti Chemical RE 10 - Injection Mortar",
          Brand: "Hilti",
          Usage: "rcc",
          Description:
            "Explore the Hilti Chemical RE 10 from S Power Tools, a premium injection mortar designed for superior performance. Ideal for demanding construction tasks in Trichy, it ensures precision and durability.",
        },
        {
          image: S_Power_tools_Trichy_Chemical_injecting_gun_hilti,
          Title: "Chemical injection gun",
          Brand: "Hilti",
          Usage: "rcc",
          Description:
            "The Chemical Injection Gun by S Power Tools offers precise control over the application of chemical mortars. Perfect for construction professionals in Trichy, it streamlines the process, ensuring efficiency and accuracy.",
        },
        {
          image: S_Power_tools_Trichy_Mechanical_anchor_bolt_002,
          Title: "12mm DTS Fischer Drop Anchor Bolt",
          Brand: "-",
          Usage: "rcc",
          Description:
            "The 12mm DTS Drop Anchor Bolt from S Power Tools is engineered for robust and secure fastening. Ideal for concrete applications in Trichy, it ensures reliability and strength in every installation.",
        },
        {
          image: S_Power_tools_trichy_trichy_Wedge_Anchor,
          Title: "Wedge Anchor 12mm x 125mm",
          Brand: "-",
          Usage: "rcc",
          Description:
            "S Power Tools presents the Wedge Anchor 12mm x 125mm, a powerful solution for anchoring in concrete. Crafted for durability, it provides a dependable option for construction projects across Trichy.",
        },
        {
          image: S_Power_tools_trichy_eye_bolt,
          Title: "Eye Bolt",
          Brand: "-",
          Usage: "rcc",
          Description:
            "Enhance your construction endeavors in Trichy with S Power Tools' Eye Bolt. This precision-engineered bolt ensures secure anchoring and is tailored for various applications, meeting the highest safety standards.",
        },
      ],
    },

    {
      "All Brand Machine Accessories": [
        {
          image: S_Power_tools_Trichy_Armature_0001_transparent,
          Title: "Armature",
          Description:
            "Ensure the continuous efficiency of your power tools in Trichy with S Power Tools' reliable Armatures. Crafted for durability, these components guarantee optimal performance, supporting your projects with precision and power.we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },
        {
          image: S_Power_tools_Trichy_Carbon_brush_0002,
          Title: "Carbon brush",
          Description:
            "Keep your power tools running smoothly in Trichy with S Power Tools' high-quality Carbon Brushes. Engineered for longevity, these brushes ensure consistent performance, extending the life of your tools.we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },
        {
          image: S_Power_tools_Trichy_Field_coil_0001,
          Title: "Field Coil",
          Description:
            "Elevate the performance of your 11e demolition hammer in Trichy with S Power Tools' high-quality 11e demolition hammer Field Coil. Engineered for longevity, our field coils ensure consistent power and extended tool life. Located near Ramakrishna Theatre, trust us for reliable components that enhance the efficiency of your power tools. Benefit from our courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },

        {
          image: S_Power_tools_Trichy_Tool_Holder_0001_transparent,
          Title: "Tool Holder",
          Description:
            "Upgrade your 11e demolition hammer in Trichy with S Power Tools' premium spare parts, including the essential tool holder. Located near Ramakrishna Theatre, our top-notch tool holders are designed for durability and consistent performance, extending the life of your power tools. Avail our courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and surrounding regions in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },

        {
          image:
            S_Power_tools_Trichy_drill_parts_connecting_rod_and_piston_0001_transparent,
          Title: "Connecting Rod and Piston",
          Description:
            "Trust S Power Tools in Trichy for superior components for your 11e demolition hammer, including the essential connecting rod and piston. Engineered for durability, our connecting rods and pistons ensure reliable performance, enhancing the longevity of your power tools. Conveniently located near Ramakrishna Theatre, we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },

        {
          image: All_Brand_Accessories_S_power_tools_Trichy_O_Ring_Bosch_11E,
          Title: "O-Ring",
          Description:
            "Enhance the efficiency of your power tools in Trichy with S Power Tools' top-grade O-Rings. Crafted for durability, these seals provide reliable performance, contributing to the prolonged lifespan of your equipment. Trust S Power Tools for quality O-Rings that keep your tools operating seamlessly in Trichy.we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },
        {
          image: All_Brand_Accessories_S_power_rtools_Trichy_Gear_Bosch_11E,
          Title: "Gear",
          Description:
            "Revitalize your demolition machines in Trichy with S Power Tools' premium Demolition Machines Gear. Engineered for robust performance, our gear components ensure optimal functionality, extending the longevity of your demolition equipment. Choose S Power Tools for high-quality gear solutions that keep your demolition machines operating at peak efficiency in Trichy.we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },
        {
          image: S_Power_tools_trichy_trichy_SS_Fan_Hook,
          Title: "Stainless Steel Fan Hook",
          Description:
            "Elevate your construction projects in Trichy with S Power Tools' Stainless Steel Fan Hook. Crafted for durability and strength, this accessory provides a secure anchoring solution, ensuring reliability in various applications.we offer courier services covering Thillainagar, Woraiyur, Thennur, Marakkadai, Paalakarai, Paalpannai, Thuvakudi, Airport, Kattur, Thiruverumbur, KK Nagar, Kuumani, Melapudhur, Central Bus Stand, Chatram Bus Stand, and beyond in Trichy, Thanjavur, Ariyalur, Pudukottai, Thuraiyur, Kumbakonam, Jayamkondam, and more.",
        },
      ],
    },
    {
      "Other Power Tools": [
        {
          image: S_Power_tools_trichy_marble_cutter_cutting_machine,
          Title: "Marble Cutting Machine",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
        {
          image: S_Power_tools_trichy_electric_paint_mixing_machine,
          Title: "Electric Paint Mixing Machine",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
        {
          image: S_Power_tools_trichy_Angle_grinder_machine,
          Title: "Angle Grinder Machine",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
        {
          image: S_Power_tools_trichy_cut_off_saw_machine,
          Title: "Cut Off Saw Machine",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
        {
          image: S_Power_tools_trichy_Chain_Saw_Machines,
          Title: "Chain Saw Machine",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
        {
          image: S_Power_tools_Trichy_air_blower,
          Title: "Air Blower",
          Brand: "All Brand",
          Sizes: "All Sizes",
        },
      ],
    },
  ];

  const urlSlug = [];

  const paramObj = useParams();

  console.log(paramObj);
  console.log(catDetails);
  console.log(paramObj.Category);

  const selectedCategory = catDetails.find((cat) => {
    console.log(cat.catSlug);
    return cat.catSlug == paramObj.Category;
  });

  const catDescription = selectedCategory ? selectedCategory.catDesc : "";

  console.log(selectedCategory);

  return (
    <>
      <div>
        <div className="px-4 lg:px-44 py-4 text-white font-Rubik">
          <h1 className="font-bold text-2xl pb-4">
            {selectedCategory?.catName}
          </h1>
          <p>{catDescription}</p>
        </div>
        <div className="lg:px-44">
          {productDetails?.map((eachProduct) => {
            return eachProduct[selectedCategory?.catTitle]?.map((eachBrand) => {
              return (
                <ProductCard
                  selectedCategory={selectedCategory}
                  eachBrand={eachBrand}
                />
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
