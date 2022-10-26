import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card";
import ProductCard from "../ProductCard";

export default function Products (){
    const {products}= useSelector((state)=> state.products)
    const navigate = useNavigate()

    let content ;
    if(products){
        content = products.map(product=> <ProductCard key={product._id} item={product} pageName="Product"/>)
    }

    return(
        <div className="flex justify-center">
            <div className="w-2/3">
                <div className="pt-10">
                    <span className="text-xl  font-bold text-pink-600">Choose Your Favorite Products</span>
                </div>
                <div className="py-10">
                    <div className="grid md:grid-cols-3 grid-col-1 gap-5">
                        {
                            content
                        }
                    </div>
                </div>
                {/* <div className="flex justify-between pb-10">
                    <button className="text-pink-600 font-semibold" onClick={()=>navigate(-1)}>Back</button>
                    <Link to='/cart' className="text-pink-600 font-semibold">Next</Link>
                </div> */}
            </div>

        </div>
    )
}