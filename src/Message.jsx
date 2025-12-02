export default function Message(){
    return(<div className="flex flex-col my-6 justify-center items-center ">
        <div className="flex flex-col my-6">
            <h2 className="text-2xl font-bold font-serif">Message Me</h2>
            <pre className="bg-blue-600 h-1 mt-1">              </pre>
            <pre className="bg-red-600 h-1 mt-1 ">              </pre>
        </div>
        <form action="" className=" rounded-xl my-6 flex flex-col justify-center items-center w-2/3 shadow-lg shadow-yellow-800">
            <div className="flex flex-wrap">
                <div className="flex flex-col items-center ">
                    <label htmlFor="name">Name  </label>
                    <input className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100" id="name" type="text" placeholder="Enter your full name"/>
                </div>
                <div className="flex flex-col items-center ">
                    <label htmlFor="email">Email  </label>
                    <input className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100 w-full" id="email" type="email" placeholder="example@gmail.com"/>
                </div>
            </div>
            <label htmlFor="subject">Subject  </label>
            <textarea className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100 w-11/12 h-20" id="subject" type="text" placeholder="Enter Subject here.."></textarea>
            <label htmlFor="description">Description  </label>
            <textarea className="border-2 border-black rounded-md px-4 py-1 hover:shadow-md hover:shadow-red-800 bg-slate-100 w-11/12 h-40" id="description" type="text" placeholder="Write in detail..."></textarea>
            <button>Submit</button>
        </form>
    </div>);
}