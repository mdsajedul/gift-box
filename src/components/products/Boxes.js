
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card";

export default function Boxes (){
    const {boxes}= useSelector((state)=> state.products)
    const navigate = useNavigate()
   
    const notify = () => toast("Wow so easy!");

    let content ;
    if(boxes){
        content = boxes.map(box=> <Card key={box._id} item={box} pageName="Gift Box"/>)
    }

    return(
        <div className="flex h-fit justify-center">
            <div className="w-2/3">
                <div className="pt-10">
                    <span className="text-xl  font-bold text-pink-600">Choose Your Favorite Box</span>
                </div>
                <div className="py-5">
                    <div className="grid md:grid-cols-3 gap-5">
                        {
                            content
                        }
                    </div>
                </div>
                
            </div>
            <ToastContainer />
        </div>
    )
}