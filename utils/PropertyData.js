// utils/propertyData.js
import building1 from "@/assets/images/building1.jpg";
import building2 from "@/assets/images/building2.jpg";
import building3 from "@/assets/images/building3.jpg";

const propertyData = [
  {
    slug:"brigade-bonito",
    images: building1,
    title: "Brigade Bonito",
    location: "Mogappair West, Chennai",
    priceRange: "₹ 78.21 Lac - 1.55 Cr",
    description:
      "Brigade Bonito by Brigade is a premium Residential project located in Mogappair West.",
    badges: [
      { label: "RERA Registered", color: "#22c55e" },
      { label: "Ready to Move", color: "#fca5a5" },
    ],
    logo: "/brigade-logo.png",
    units: [
      {
        type: "2 BHK 678 Sq. Ft. Apartment",
        size: "678 Sq. Ft. (Carpet)",
        price: "₹ 78.21 Lac",
      },
      {
        type: "2 BHK 839 Sq. Ft. Apartment",
        size: "839 Sq. Ft. (Carpet)",
        price: "₹ 96.79 Lac",
      },
      {
        type: "3 BHK 1200 Sq. Ft. Apartment",
        size: "1200 Sq. Ft. (Carpet)",
        price: "₹ 1.25 Cr",
      },
    ],
  },
  {
    images: building2,
    slug:"prestige-eden-park",
    title: "Prestige Eden Park",
    location: "Whitefield, Bangalore",
    priceRange: "₹ 65 Lac - 1.2 Cr",
    description:
      "Prestige Eden Park offers luxury apartments with modern amenities and prime connectivity.",
    badges: [{ label: "Under Construction", color: "#facc15" }],
    logo: "/prestige-logo.png",
    units: [
      {
        type: "1 BHK 550 Sq. Ft. Apartment",
        size: "550 Sq. Ft. (Carpet)",
        price: "₹ 65 Lac",
      },
      {
        type: "2 BHK 950 Sq. Ft. Apartment",
        size: "950 Sq. Ft. (Carpet)",
        price: "₹ 89 Lac",
      },
    ],
  },
  {
    images: building3,
    slug:"sobha-dream-acres",
    title: "Sobha Dream Acres",
    location: "Panathur, Bangalore",
    priceRange: "₹ 50 Lac - 90 Lac",
    description:
      "Sobha Dream Acres is known for its spacious layouts and world-class facilities.",
    badges: [
      { label: "RERA Registered", color: "#22c55e" },
      { label: "Possession Soon", color: "#38bdf8" },
    ],
    logo: "/sobha-logo.png",
    units: [
      {
        type: "1 BHK 480 Sq. Ft. Apartment",
        size: "480 Sq. Ft. (Carpet)",
        price: "₹ 50 Lac",
      },
      {
        type: "2 BHK 900 Sq. Ft. Apartment",
        size: "900 Sq. Ft. (Carpet)",
        price: "₹ 78 Lac",
      },
    ],
  },
];

export default propertyData;
