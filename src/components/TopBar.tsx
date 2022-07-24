import OpeningHours from "./OpeningHours";


const TopBar = () =>
{
    return (
        <div className="h-11 bg-black flex flex-row justify-around text-white
        items-center">
            <OpeningHours />
           <h4>Text2</h4> 
           <h4>Text3</h4> 
        
        </div>
    )
}

export default TopBar;