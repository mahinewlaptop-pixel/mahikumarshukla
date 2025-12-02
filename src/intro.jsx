import Bubble from "./bubble";
import MarqueText from "./MarqueText";

export default function Intro() {
  return (
    <div className="min-h-screen space-y-8 flex-col flex justify-center items-center w-screen">
      <div className="w-screen flex opacity-10 justify-around  ">
        <Bubble /> <Bubble />
      </div>

    <div className="w-full flex flex-col gap-4 justify-center items-center">
          <p className="text-2xl font-bold">👋Hi, I am</p>
          <MarqueText Children="Mahi Kumar" speed="8s"/>
        </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold">About Me </h2>
        <pre className="bg-blue-600 h-1 my-1">          </pre>
        <pre className="bg-red-600 h-1">               </pre>
      </div>
        <div className="w-full flex gap-4 justify-center items-center flex-wrap">
        <img className=" rounded-2xl w-1/2 m-4 sm:w-56 md:w-70 lg:w-96" src="/Mahi.png" alt="Profile Image"/>
        <p className="ms-4 text-xl w-[70%] text-black sm:w-1/2 md:w-1/2">
          A Enthusiastic MERN stack developer with building dynamic and responsive web applications. I
          love the challenge of transforming ideas into interactive digital
          experiences using modern web technologies like <span className="font-bold">MongoDB, Express.js,
           and Node.js,</span> React.js such as html5 and css3 . I am currently open to exciting entry-level
          opportunities and collaborations where I can contribute my technical
          expertise, solve complex problems, and grow as a developer within an
          innovative team.
        </p>
       </div>
      <div className="w-screen h-full flex flex-col items-center space-y-10">
        <button className="hover:bg-red-400 hover:text-red-50 w-40 text-xl rounded-3xl  py-1.5 border-2 border-red-300">
          Let's Connect
        </button>
      </div>
      <div className="pt-10 opacity-20 flex justify-around w-screen ">
        <Bubble /> <Bubble />
      </div>
    </div>
  );
}
