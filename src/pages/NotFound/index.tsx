import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full">
      <div className="text-3xl text-red-700 h-full">Page Not Found</div>
      <Button onClick={() => navigate("/")}>Back to Home Page</Button>
    </div>
  )
}

export default NotFoundPage
