import Logo from "/logo.svg"

const Header = () => {
  return (
    <div className="bg-slate-600 text-white py-4">
      <div className="container flex justify-between items-center ">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="text-xl capitalize">admin</div>
      </div>
    </div>
  )
}

export default Header
