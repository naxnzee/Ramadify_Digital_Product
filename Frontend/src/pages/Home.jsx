import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

import planner from "../assets/planner.png"
import tracker from "../assets/tracker.png"

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

       {/* BIO / HERO */}
      <div className="text-center py-16 bg-white">
        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang di Ramadify 🌙
        </h1>
        <p className="text-gray-600">
          Produk digital untuk membantu ibadah Ramadhanmu lebih teratur
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-6">

        <h2 className="text-3xl font-bold mb-6">
          Produk Ramadhan 🌙
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <ProductCard
            title="Ramadhan Planner 2026"
            description="Planner ibadah selama Ramadhan"
            price="49000"
            image={planner}
          />

          <ProductCard
            title="Ibadah Tracker"
            description="Template tracking ibadah"
            price="19000"
            image={tracker}
          />

          <ProductCard
            title="Audio Doa Harian"
            description="Kumpulan doa format MP3"
            price="15000"
            image="https://via.placeholder.com/400"
          />

        </div>

      </div>

    </div>
  )
}

export default Home