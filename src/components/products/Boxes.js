
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card";

export default function Boxes (){
    const {boxes}= useSelector((state)=> state.products)
    const navigate = useNavigate()

    let content ;
    if(boxes){
        content = boxes.map(box=> <Card key={box._id} item={box}/>)
    }

    return(
        <div className="flex justify-center h-screen">
            <div className="w-2/3">
                <div className="pt-10">
                    <span className="text-3xl  font-bold text-pink-600">Choose Your Favorite Box</span>
                </div>
                <div className="py-10">
                    <div className="grid grid-cols-3 gap-5">
                        {
                            content
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="text-pink-600 font-semibold" onClick={()=>navigate(-1)}>Back</button>
                    <Link to='/products' className="text-pink-600 font-semibold">Next</Link>
                </div>
            </div>
        </div>
    )
}