import PropertyCard from "@/components/PropertyCard";
import HotsellingData from "@/utils/HotsellingData";
import propertyData from "@/utils/PropertyData";
import CardList from "@/components/CardList";

export default function SlugPage({ params }) {
  const { slug } = params; // ✅ params is already available

  // If URL is /property → show CardList
  if (slug === "property") {  // ❗ don't include "/" here
    return <CardList />;
  }

  // Otherwise try to find property
  let property = HotsellingData.find((prop) => prop.slug === slug);
  if (!property) {
    property = propertyData.find((prop) => prop.slug === slug);
  }

  // Handle "not found"
  if (!property) {
    return (
      <div className="p-6 text-center text-gray-500">
        Property not found
      </div>
    );
  }

  return <PropertyCard property={property} />;
}
