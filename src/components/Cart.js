
export default function Cart (){
    return(
        <div className="h-screen">
            <div className="flex items-center justify-center">
                <div className="py-10">
                    <span className="text-pink-600 font-bold text-2xl">Shopping Cart</span>
                    <div className="py-3">
                        <div className="flex justify-between">
                            <span className="text-pink-700 text-lg">Gift Box Price</span>
                            <span className="text-pink-700 text-lg">100</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-pink-700 text-lg">Products Price</span>
                            <span className="text-pink-700 text-lg">100</span>
                        </div>

                        {/* subtotal  */}
                        <div className="flex justify-between">
                            <span className="text-pink-700 font-semibold text-lg">Subtotal</span>
                            <span className="text-pink-700 font-semibold text-lg">100</span>
                        </div>

                        {/* discount  */}
                        <div className="flex justify-between">
                            <span className="text-pink-700  text-lg">Discount</span>
                            <span className="text-pink-700  text-lg">100</span>
                        </div>

                        {/* total */}
                        <div className="flex justify-between">
                            <span className="text-pink-700 font-bold text-2xl">Total</span>
                            <span className="text-pink-700 font-bold text-2xl">100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}