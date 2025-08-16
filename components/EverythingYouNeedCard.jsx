// tabs/BuyersServices.tsx
export default function EverythingYouNeedCard({cardItem}){
  return (
    <div className="max-w-6xl mx-auto border border-gray-300 p-10 rounded-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center mb-6">
      {cardItem.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-center items-center p-2 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="text-2xl text-blue-600 mb-2">
            {item.icon}
          </div>
          <p className="mt-2 text-sm text-gray-700 font-medium">{item.title}</p>
        </div>
      ))}
    </div>

  );
}
