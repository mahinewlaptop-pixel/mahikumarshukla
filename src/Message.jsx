export default function Message() {
  return (
      <form
        action=""
        className=" rounded-xl my-6 gap-4 flex flex-col justify-center items-center shadow-lg shadow-yellow-800 w-11/12 sm:w-11/12 md:w-96 lg:w-1/2 flex-wrap"
      >
        <div className="flex flex-col my-6 ">
          <h2 className="text-2xl font-bold font-serif">Message Me</h2>
        </div>
        <div className="w-11/12 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-around items-center gap-5 flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/3 flex flex-col items-center gap-2">
            <label className="text-l font-bold font-serif" htmlFor="name">Name </label>
            <input
              className="w-full border-2 border-black rounded-md px-2 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/2 flex flex-col items-center gap-2">
            <label className="text-l font-bold font-serif" htmlFor="email">Email </label>
            <input
              className="w-full border-2 border-black rounded-md px-2 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <label className="text-l font-bold font-serif" htmlFor="subject">Subject </label>
        <textarea
          className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100 w-11/12 h-20"
          id="subject"
          type="text"
          placeholder="Enter Subject here.."
        ></textarea>
        <label className="text-l font-bold font-serif" htmlFor="description">Description </label>
        <textarea
          className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100 w-11/12 h-40"
          id="description"
          type="text"
          placeholder="Write in detail..."
        ></textarea>
        <button className="shadow-md shadow-blue-500 hover:bg-blue-500 px-2 py-1 my-3">
          Submit
        </button>
      </form>
  );
}
