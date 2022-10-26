import { Link } from "react-router-dom";

export default function Home (){
    
    return (
        <div className='h-screen'>
            <div >
                <div className="flex justify-center py-28">
                    <div className=''>
                        <div className='flex flex-col'>
                            <span className='text-3xl  font-bold text-pink-600'>SPECIAL GIFT</span>
                            <span className='text-3xl font-bold text-pink-600'>SPECIAL PERSON</span>
                            <span className='text-3xl font-bold text-pink-600'>SPECIAL MOMENT</span>
                        </div>
                        <div className='py-3'>
                            <Link to="/view" type="button" className="text-white shadow-lg bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-0 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg> Create Your Own Gift Box
                            </Link>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-pink-800'>We will give best gift for you</span>
                            <span className='text-pink-800'>and your lovely person</span>
                            
                        </div>

                        <div className='pt-2'>
                            <div className='p-0.5 rounded-md bg-pink-600 '></div>
                        </div>
                        
                        
                    </div>
                    
                    
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}