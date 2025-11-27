import "./MarqueText.css";

export default function MarqueText({Children, speed = "20s"}){
    return(
        <div className="marque-container">
            <div className="marque-content text-5xl font-bold text-red-600 font-serif" style={{"--marquee-speed": speed}}>
                {Children}
            </div>
        </div>
    );
}