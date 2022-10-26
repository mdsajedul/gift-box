import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCard ({item,pageName}){
    let {name,image,price} = item || {}
    const dispatch = useDispatch()
    
    const {cart} = useSelector((state)=> state.cart)


    const handleDispatch = ()=>{
        dispatch(addToCart(item))
        toast(`${cart?.length  + 1} products added on Cart`)
    }
    return(
        <div className="w-full max-w-sm rounded-lg shadow-md ">
            <div>
                <img className="w-full h-44 rounded-t-lg" src={image} alt="product"/>
            </div>
            <div className="p-2 pb-5 bg-pink-50 rounded-b-lg">
                <div>
                    <h5 className="text-lg font-semibold text-pink-700 ">{name}</h5>
                </div>

                <div className="flex justify-between items-center py-2">
                    <span className="text-2xl font-bold text-pink-700">{price}</span>

                    <button onClick={handleDispatch} className="text-white bg-pink-600 hover:bg-pink-700   focus:ring-0 focus:outline-none rounded-md text-sm px-1 py-2">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg> 
                            <span className="pl-2">Add To Cart</span>
                        </div>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}