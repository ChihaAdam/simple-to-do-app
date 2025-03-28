import { useNavigate } from "react-router-dom"
function notFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-12 w-screen h-screen justify-center items-center">
      <h1 className="text-4xl font-semibold">Oops ! some error occured</h1>
      <button onClick={()=>navigate("/")} className="bg-red-500 text-white py-2 px-4 text-center 
                                          rounded-lg hover:bg-red-700 transition-all duration-300 
                                          ease-in-out cursor-pointer">
          return to the main page
      </button>
    </div>
  )
}

export default notFound
