export default function MyProject({ projectLink, gitHubLink, imageLink}) {
  return (
    <div className="flex flex-col justify-center items-center my-2 shadow-lg shadow-green-700">
      <div className="rounded-xl w-2/3 hover:w-11/12 my-6 shadow-lg shadow-green-400">
        <img className="rounded-xl" src={imageLink}/>
      </div>
      <div className="w-screen sm:w-2/3 md:w-2/3 lg:w-2/3">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          officiis facilis quam corporis. Voluptas quam velit unde placeat aut
          aperiam tempore magni distinctio tenetur officiis? Inventore odit
          perspiciatis omnis facilis!
        </p>
      </div>
      <div className="my-6">
        <a className="border-2 border-black mx-2 px-2 py-1 rounded-lg hover:bg-black hover:text-green-50" href={gitHubLink}> <i className="fa-brands fa-github"></i> GitHub</a>
        <a className="border-2 border-green-400 mx-2 px-2 py-1 rounded-lg hover:bg-green-400 hover:text-green-950" href={projectLink}><i className="fa-solid fa-eye"></i> &nbsp;Live Preview</a>
      </div>
    </div>
  );
}
