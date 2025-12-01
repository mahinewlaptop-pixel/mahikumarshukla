
export default function Tech({skills, heading}) {
    const newSkills =[];
    for(let skill in skills){
        newSkills.push(
           <div key={skill} className="h-26 w-28 sm:h-56 sm:w-52 lg:h-56 lg:w-52 md:h-56 md:w-52 flex flex-col items-center justify-center m-10 hover:shadow-lg hover:shadow-black rounded-lg">
                <img className=" rounded-3xl h-24 sm:h-24 md:h-24 lg:h-24" src={skills[skill]} alt={skill}/>
                <p className="capitalize my-6 font-serif text-2xl">{skill}</p>
           </div>
        );
    };
  return (
    <div>
        {heading && <div className="flex justify-center items-center pt-6 flex-col m-6">
            <h4 className="font-serif font-bold text-2xl">{heading}</h4>
            <pre className="bg-red-600 h-1 my-1">                   </pre>
            <pre className="bg-red-700 h-1 w-28">                   </pre>
        </div>}
        <div className="flex flex-wrap justify-center items-center">
            {newSkills}
        </div>

    </div>
  );
}