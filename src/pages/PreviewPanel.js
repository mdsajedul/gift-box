import { Link, Outlet, useNavigate } from "react-router-dom";
import "react-step-progress-bar/styles.css";
import { ProgressBar,Step } from "react-step-progress-bar";
import { useState } from "react";
import './panel.css'
import MultiStepProgressBar from "../components/progressBar/MultiStepProgressBar";

export default function PreveiwPanel(){
    const [oneBtnColor,setOneBtnColor] = useState('bg-pink-500')
    const [twoBtnColor,setTwoBtnColor] = useState('bg-pink-300')
    const [threeBtnColor,setThreeBtnColor] = useState('bg-pink-300')
    const navigate = useNavigate()
    

    const handleColorChange=(value)=>{
        if(value==="one"){
            setOneBtnColor('bg-pink-500');
            setTwoBtnColor('bg-pink-300');
            setThreeBtnColor('bg-pink-300');
        }
        else if(value==="two"){
            setOneBtnColor('bg-pink-500');
            setTwoBtnColor('bg-pink-500');
            setThreeBtnColor('bg-pink-300');
        }
        else if(value==="three"){
            setOneBtnColor('bg-pink-500');
            setTwoBtnColor('bg-pink-500');
            setThreeBtnColor('bg-pink-500');
        }
    }
    
    return(
    <div className="h-full">
        <div className="p-1 ">
            
            <div className=" pt-10 md:flex md:justify-center relative">
                <div className="px-16 md:px-8 md:w-1/4 relative">
                    {/* <div className="h-1 bg-pink-500 w-3/4  top-2.5 z-0 absolute"></div> */}
                    <div className="flex justify-around z-10">
                        
                        <div className="flex items-center">
                            <Link to="/user/boxes" onClick={()=> handleColorChange('one')} className={`h-6 w-6 z-10 ${oneBtnColor} pl-2 pb-1 rounded-full text-white transition ease-in-out `}>1</Link>
                            <div className={`h-1 ${twoBtnColor} w-24`}></div>
                        </div>
                        <div className="flex items-center">
                            <Link to="/user/products" onClick={()=> handleColorChange('two')} className={`h-6 w-6 z-10 ${twoBtnColor} pl-2 pb-1 rounded-full text-white`}>2</Link>
                            <div className={`h-1 ${threeBtnColor} w-24`}></div>
                        </div>
                        <div className="flex items-center">
                            <Link to="/user/cart" onClick={()=> handleColorChange('three')} className={`h-6 w-6 z-10 ${threeBtnColor} pl-2 pb-1 rounded-full text-white`}>3</Link>
                            <div className="h-1 bg-pink-500 "></div>
                        </div>
            
                    </div>
                </div>
            </div>

            <div className="px-3">
                <Outlet/>
                <div className="flex justify-center pb-10">
                    <div className="flex justify-between w-3/4">
                        <button className="text-pink-600 font-semibold" onClick={()=>navigate(-1)}>Back</button>
                        <Link to='/products' className="text-pink-600 font-semibold">Next</Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}