function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-green-600">
        Ramadify 🌙
      </h1>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  )
}

export default Navbar