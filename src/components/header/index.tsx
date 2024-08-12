import { User2 } from "lucide-react"
import Logo from "/logo.svg"

const Header = () => {
  return (
    <div className="bg-slate-600 text-white py-4">
      <div className="container flex justify-between items-center ">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-2 text-2xl capitalize">
          <User2 /> User
        </div>
      </div>
    </div>
  )
}

export default Header
