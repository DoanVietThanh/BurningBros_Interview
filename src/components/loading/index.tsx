import { Skeleton } from "../ui/skeleton"

const ComponentLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      <Skeleton className="w-full h-[240px] border shadow-lg rounded-lg p-4" />
      <Skeleton className="w-full h-[240px] border shadow-lg rounded-lg p-4" />
      <Skeleton className="w-full h-[240px] border shadow-lg rounded-lg p-4" />
      <Skeleton className="w-full h-[240px] border shadow-lg rounded-lg p-4" />
    </div>
  )
}

export default ComponentLoading
