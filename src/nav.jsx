export default function Nav() {
    function handleToggle() {
        const navUl = document.querySelector("nav ul");
        const navButton = document.querySelector("nav button");
        navUl.classList.toggle("invisible");
        navUl.classList.toggle("visible");
        navButton.innerText==="II" ? navButton.innerText="X" : navButton.innerText="II";

    }
    return (
        <nav className=" max-h-16 shadow-md p-4 flex justify-between items-center flex-wrap">
            <h2 className="text-red-900 font-serif font-bold text-2xl">Portfolio</h2>
            <ul className="md:bg-inherit lg:bg-inherit md:absolute lg:absolute md:border-none lg:border-none md:max-h-16 w-1/2 border-2 rounded-xl fixed right-10 -top-52 bg-purple-50 md:w-1/2 lg:w-1/2 mt-56 flex space-x-4 text-xl flex-col justify-evenly items-center p-5 md:flex-row md:mt-0 md:top-0 lg:-top-0 z-10">
                <li className="pt-8 md:pt-0 lg:pt-0"><a href="#home" className="text-blue-600 hover:text-blue-800">Home</a></li>
                <li className="pt-8 md:pt-0 lg:pt-0"><a href="#about" className="text-blue-600 hover:text-blue-800">About</a></li>
                <li className="pt-8 md:pt-0 lg:pt-0"><a href="#projects" className="text-blue-600 hover:text-blue-800">Projects</a></li>
                <li className="pt-8 md:pt-0 lg:pt-0"><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
            </ul>
            <button className="animate-pulse z-10 md:hidden lg:hidden text-2xl border-2 border-green-200 px-2" onClick={handleToggle}>X</button>
        </nav>
    );
};