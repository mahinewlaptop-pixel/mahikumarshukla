import Bubble from "./bubble";
import MarqueText from "./MarqueText";

export default function Intro() {
  return (
    <div className="min-h-screen space-y-8 bg-red-50 flex-col flex justify-center items-center w-full">
      <div className="w-screen flex opacity-10 justify-around  ">
        <Bubble /> <Bubble />
      </div>

      <div className="w-screen h-full flex flex-col items-center space-y-10">
        <p className="text-2xl">Hi, I am</p>
        <MarqueText Children="Mahi Kumar Shukla" />

        <p className="text-xl w-[70%] text-purple-900">
          A passionate and enthusiastic MERN stack developer with building dynamic and user-centric web applications. I
          love the challenge of transforming ideas into interactive digital
          experiences using modern web technologies like <span className="font-bold">MongoDB, Express.js,
          React.js, and Node.js</span>. I am currently open to exciting entry-level
          opportunities and collaborations where I can contribute my technical
          expertise, solve complex problems, and grow as a developer within an
          innovative team.
        </p>

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
