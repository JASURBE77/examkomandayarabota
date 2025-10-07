export default function ProductCard({
  id,
  name,
  image,
  price,
  oldPrice,
  discount,
  monthly,
}) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition relative overflow-hidden">
      {discount && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          -{discount}%
        </span>
      )}

      <img
        src={image}
        alt={name}
        className="w-full h-52 object-contain p-4"
      />

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-1 h-10">{name}</h3>
        <p className="text-red-600 font-bold text-lg">{price} сум</p>
        {oldPrice && (
          <p className="text-gray-400 line-through text-sm mb-2">
            {oldPrice} сум
          </p>
        )}
        <p className="text-yellow-600 text-sm font-medium">
          {monthly}
        </p>
      </div>

      <div className="flex justify-between items-center px-4 pb-3">
        <button className="text-sm border border-red-600 text-red-600 px-3 py-1 rounded-lg hover:bg-red-600 hover:text-white transition">
          В рассрочку
        </button>
        <button className="text-xl text-gray-400 hover:text-red-600">♡</button>
      </div>
    </div>
  );
}
