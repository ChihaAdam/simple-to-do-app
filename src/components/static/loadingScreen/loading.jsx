
import { Animation } from '@mui/icons-material'

function Loading() {
  return (
    <div className="bg-[hsla(0,0%,50%,0.5)] fixed top-0 left-0 w-screen h-screen z-1 ">
        <div className="absolute top-[50%] left-[50%] flex items-center">
          <div className="relative flex justify-center items-center">
          <div className="border-4 border-r-red-500 border-y-transparent border-violet-700
                          rounded-full animate-spin  w-12 h-12 fixed "></div>
          <Animation />
          </div>
      </div>  
    </div>   
  )
}

export default Loading
