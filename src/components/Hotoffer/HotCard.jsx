import Image from "next/image";

const HotCard = ({ item }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="group my-10 relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-500">
        {/* Image */}
        {/* <div className="overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            height={50}
            width={50}
            className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
          /> */}
        {/* </div> */}

        {/* Tag */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {item.tag}
        </span>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            {item.title}
          </h2>

          {/* Rating */}
          <p className="text-yellow-500 text-sm mt-1">⭐ {item.rating}</p>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl font-bold text-gray-800">
              ৳{item.price}
            </span>
            <span className="text-sm line-through text-gray-400">
              ৳{item.oldPrice}
            </span>
          </div>

          {/* Discount */}
          <p className="text-green-600 text-sm font-medium mt-1">
            {item.discount}
          </p>

          {/* Button */}
          <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-2 rounded-xl opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-500">
            Add to Cart 🛒
          </button>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>
      </div>
    </div>
  );
};

export default HotCard;
