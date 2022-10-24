import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card";

export default function Products (){
    const {products}= useSelector((state)=> state.products)
    console.log(products)
    const navigate = useNavigate()

    let content ;
    if(products){
        content = products.map(product=> <Card key={product._id} item={product}/>)
    }

    return(
        <div className="flex justify-center">
            <div className="w-2/3">
                <div className="pt-10">
                    <span className="text-3xl  font-bold text-pink-600">Choose Your Favorite Products</span>
                </div>
                <div className="py-10">
                    <div className="grid grid-cols-3 gap-5">
                        {
                            content
                        }
                    </div>
                </div>
                <div className="flex justify-between pb-10">
                    <button className="text-pink-600 font-semibold" onClick={()=>navigate(-1)}>Back</button>
                    <Link to='/cart' className="text-pink-600 font-semibold">Next</Link>
                </div>
            </div>

        </div>
    )
}