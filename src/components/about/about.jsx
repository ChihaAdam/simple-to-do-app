function About() {
  return (
    <div className="w-[95vw] m-auto animate-fadeInTransitive flex flex-col gap-6">
      <div>
      <h3 className="font-bold text-lg">about the project</h3> 
      <p>that project is designed to be a simple to do list multipage to practise some essential ReactJS concepts like routing and state management</p>
      </div>
      <div>
        <h3 className="font-bold text-lg">what I've learned ?</h3>
        <p>
          that project was a good practise for react-router-dom , state management with Redux/Redux-Toolkit , splitting bundle and lazy loading and we don't forget taiwind css
          that helped me a lot . 
        </p>
      </div>
      <p className="underline underline-offset-4">the dashboard section is empty for now and I will fill it when I learn plots in ReactJS . the design also is not so responsive but it will be updates soon</p>
      <p className="mt-24 text-center border-1 p-2">
        if you have any suggeestions or something to improve don't hesitate to mail me on <span>    </span>
        <a href="mailto:chihaadam137@gmail.com" 
        className="text-blue-600 font-bold hover:text-blue-700 transition-all duration-300 ease-in-out">
        chihaadam137@gmail.com</a>
        <span>    </span>I really appreciate your help and your informations helps me a lot
      </p>
      </div>
  )
}

export default About
