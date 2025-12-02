export default function GetInTouch({email, mobile, location, gitHub, linkedIn}){
    return(<div className=" ps-8 rounded-xl my-6 gap-4 flex flex-col justify-center items-start shadow-lg shadow-yellow-800 w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-serif font-bold px-6">Get In Touch</h1>
        <div className="flex">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png?20221017173631" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Email</h4>
                <p className="text-lg">{email}</p>
            </div>
        </div>

        <div className="flex ">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10 px-2" src="https://www.svgrepo.com/show/526083/phone-calling-rounded.svg" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Phone</h4>
                <p className="text-lg">+91 {mobile}</p>

            </div>
        </div>

        <div className="flex ">
            <div className="bg-blue-300 mx-4 px-2 py-4 flex justify-center items-center rounded-full">
                <img className="h-10 px-2" src="https://www.svgrepo.com/show/513213/location-pin.svg" alt="Gmail Image" />
            </div>
            <div className="flex flex-col justify-center">
                <h4 className="text-xl font-serif font-bold">Location</h4>
                <p className="text-lg">{location}</p>

            </div>
        </div>
        <div className="my-6">
            <h2 className=" font-bold mb-8 text-2xl font-serif px-6">Follow Me</h2>
            <div>
                <a href={gitHub}  className="text-lg px-4 py-2 my-6 border-2 border-black mx-4 rounded-full bg-black text-white"><i className="fa-brands fa-github"></i>&nbsp; GitHub</a>
                <a href={linkedIn} className="text-lg px-4 py-2 my-6 border-2 border-black mx-4 rounded-full bg-blue-600 text-white"><i className="fa-brands fa-linkedin-in"></i>&nbsp; LinkedIn</a>
            </div>
        </div>
    </div>);
};