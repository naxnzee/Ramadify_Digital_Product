import { Link } from "react-router-dom"

function ProductCard({ title, description, price, image }) {
  return (

    <Link to="/product">

      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>

          <p className="text-gray-500 text-sm mt-1">
            {description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-green-600">
              Rp {price}
            </span>

            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
              Beli
            </button>
          </div>
        </div>

      </div>

    </Link>

  )
}

export default ProductCard