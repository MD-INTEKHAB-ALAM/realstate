import { FaHome, FaPaintBrush, FaBalanceScale, FaCalculator, FaSearch, FaFileAlt, FaDollarSign, FaKey } from "react-icons/fa";

// For Buyers
export const forBuyers = [
  { title: "Home Loan", icon: <FaHome /> },
  { title: "Home Interior", icon: <FaPaintBrush /> },
  { title: "Property Legal Services", icon: <FaBalanceScale /> },
  { title: "Valuation", icon: <FaCalculator /> },
  { title: "Vastu Calculator", icon: <FaSearch /> },
  { title: "Title Search", icon: <FaFileAlt /> },
];

// For Owners
export const forOwners = [
  { title: "Sell or Rent", icon: <FaDollarSign /> },
  { title: "Property Management", icon: <FaKey /> },
  { title: "Home Interior", icon: <FaPaintBrush /> },
  { title: "Valuation Report", icon: <FaCalculator /> },
  { title: "Property Legal Services", icon: <FaBalanceScale /> },
];

// For Tenants
export const forTenants = [
  { title: "Online Rent Agreement", icon: <FaFileAlt /> },
  { title: "Rent Receipts", icon: <FaDollarSign /> },
  { title: "Property Management", icon: <FaKey /> },
];
