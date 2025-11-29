
export default function Tech({skills, heading}) {
    const newSkills =[];
    for(let skill in skills){
        newSkills.push(
           <div key={skill} className="h-72 w-52 flex flex-col items-center m-10 hover:shadow-lg rounded-lg">
                <img className=" rounded-3xl h-56" src={skills[skill]} alt={skill}/>
                <p className="capitalize my-4 font-serif text-2xl">{skill}</p>
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
        <div className="flex flex-wrap justify-center">
            {newSkills}
        </div>

    </div>
  );
}