import Image from "next/image";

export default function PropertyCard(props) {
   if (!props.property) {
    return <div className="p-4 text-gray-500">No property found</div>;
  }

  const { title, imageSrc, price, location } = props.property;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      <div className="max-w-3xl mx-auto bg-white overflow-hidden">
        
        {/* Header */}
        <div className="p-2 py-4 flex flex-col sm:flex-row justify-between gap-3 sm:items-center">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {location} •{" "}
              <a href="#" className="text-blue-600 hover:underline">
                See on Map
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 text-gray-700">
              Shortlist
            </button>
            <button className="px-3 py-1 border rounded-lg text-sm hover:bg-gray-100 text-gray-700">
              Share
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* Details Card */}
        <div className="p-4 md:py-4 mt-6 space-y-6 rounded-2xl border mb-6 ">
          {/* Price + Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-4">
            <p className="text-lg sm:text-2xl font-semibold text-gray-800">
              {price}{" "}
              <span className="text-sm text-gray-500">+ Charges</span>
            </p>
            <button className="w-full sm:w-auto px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 text-gray-700">
              Price Insights
            </button>
          </div>

          {/* Project Status */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-4">
            <div>
              <p className="text-sm text-gray-500">Project Status</p>
              <p className="font-medium text-gray-800">New Launch</p>
            </div>
            <button className="w-full sm:w-auto px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 text-gray-700">
              RERA Updates
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500">Unit Config</p>
              <p className="font-medium text-gray-800">3, 4 BHK Flats</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Size</p>
              <p className="font-medium text-gray-800">
                1126 Sq. Ft. – 2239 Sq. Ft.
              </p>
              <p className="text-xs text-gray-500">(Carpet)</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Number of Units</p>
              <p className="font-medium text-gray-800">416</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Total Area</p>
              <p className="font-medium text-gray-800">18 Acres</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
