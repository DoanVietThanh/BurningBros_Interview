import { scrollToTopHight } from "@/constants"
import { ArrowUpFromLine } from "lucide-react"
import { useEffect, useState } from "react"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > scrollToTopHight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-8 p-3 bg-slate-400 text-white rounded-full shadow-lg hover:bg-slate-600 transition"
        >
          <ArrowUpFromLine size={24} />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
