import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Cart (){
    const {cart} = useSelector((state)=>state.cart)
    const {boxCart} = useSelector((state)=>state.cart)
    const navigate = useNavigate();
    console.log(cart)
    const [giftBoxPrice,setGiftBoxPrice] = useState(0);
    const [giftBoxCount,setGiftBoxCount] = useState(0);
    const [productCount,setProductsCount] = useState(0);
    const [productsPrice,setProductsPrice] = useState(0);
    const [shipping,setShipping] = useState(60);
    const [subtotal,setSubtotal] = useState(0);
    const [discount,setDiscount] = useState(120);
    const [discountPromo,setDiscountPromo] = useState('');
    const [total,setTotal] = useState(0)
    const [disable,setDisable] = useState(false)


    useEffect(()=>{
        let giftBoxs = cart.filter((item)=>item?.category==="box");
        setGiftBoxCount(boxCart.length)
        let giftBoxPriceInitial=0;
        giftBoxs.forEach(item => {
            giftBoxPriceInitial += item.price
        });
        setGiftBoxPrice(boxCart[0]?.price)

        let productPriceInitial=0;
        let products = cart.filter((item)=>item?.category==="product")
        setProductsCount(products.length)
        products.forEach(item=>{
            productPriceInitial += item.price;
        })
        setProductsPrice(productPriceInitial)

        setSubtotal(giftBoxPrice+productsPrice)

        setTotal(subtotal+shipping)
    },[cart,giftBoxPrice,productsPrice,discount,subtotal,shipping,boxCart])

    const discountCal =()=>{
        if(discountPromo==='mamun'){
            setTotal(total-discount)
            setDisable(true)
        }else{
            setDisable(false)
        }
    }

    return(
        <div className="">
            <div className="flex items-center justify-center">
                <div className="md:w-1/4 px-8 pt-10">
                    <h1 className="font-semibold text-pink-600 text-2xl border-b border-pink-600 pb-8">Order Summary</h1>
                    <div className="flex justify-between text-pink-600 mt-5 mb-5">
                        <span className="font-semibold text-sm uppercase">Gift Box ({giftBoxCount})</span>
                        <span className="font-semibold text-sm">{giftBoxPrice}$</span>
                    </div>
                    <div className="flex justify-between text-pink-600 mt-5 mb-5">
                        <span className="font-semibold text-sm uppercase">Products ({productCount})</span>
                        <span className="font-semibold text-sm">{productsPrice}$</span>
                    </div>
                    <div className="flex justify-between text-pink-600 mt-5 mb-5">
                        <span className="font-semibold text-sm uppercase">Subtotal</span>
                        <span className="font-semibold text-sm">{subtotal}$</span>
                    </div>
                    <div className="flex justify-between text-pink-600 mt-5 mb-5">
                        <span className="font-semibold text-sm uppercase">Shipping</span>
                        <span className="font-semibold text-sm">{shipping}$</span>
                    </div>
                    <div className="py-5">
                        <label for="promo" className="font-semibold text-pink-600 inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <div className="flex flex-row">
                            <input onChange={(e)=>setDiscountPromo(e.target.value)} type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm text-pink-600 focus:ring-0 border focus:border-pink-500 focus:outline-none"/>
                            <button onClick={discountCal} className="bg-pink-500 hover:bg-pink-600 px-3 py-2 text-sm text-white uppercase" disabled={disable}>Apply</button>
                        </div>
                    </div>
                   
                    <div className="border-t border-pink-600 mt-4">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span className="text-pink-600">Total cost</span>
                        <span className="text-pink-600">{total}$</span>
                    </div>
                    <button className="bg-pink-700 font-semibold hover:bg-pink-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>


            <div>
                
            </div>
        </div>
    )
}