import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const HowItWork = () => {
    return (
        <div className="py-10 text-center bg-gradient-radial  from-white to-blue-50 text-gray-600" >
            <div className='w-11/12 mx-auto'>
                <div className="text-center my-8 font-normal text-xl">
                    <span className="uppercase tracking-widest">Let Your Car Find Its New Ways: Buy Used Cars at your Tips.</span>
                    <h2 className="text-4xl text-orange-500">How It Works !</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="text-center flex flex-wrap justify-center">
                        <img src="https://unificars.com/front/img/icon/hiw3.png" className="img-fluid" alt="howitworks" width="250px" />
                        <div className="px-4">
                            <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase mt-4 flex-none">Choose From Top used cars </h4>
                            <p className="mx-5 hiwpara">Wide range of cars with more than 150 + points inspection.</p>
                        </div>
                    </div>
                    <div className="text-center flex flex-wrap justify-center">
                        <img src="https://unificars.com/front/img/icon/hiw2.png" className="img-fluid" alt="howitworks" width="250px" />
                        <div className="px-4">
                            <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Take a Test drive </h4>
                            <p className="mx-5 hiwpara">We Provide clean and sanitized cars for each test drive. </p>
                        </div>
                    </div>
                    <div className="text-center flex flex-wrap justify-center">
                        <img src="https://unificars.com/front/img/icon/hiw1copy.png" className="img-fluid" alt="howitworks" width="250px" />
                        <div className="px-4">
                            <h4 className="text-xl text-orange-500 font-bold tracking-widest uppercase flex-none">Easy Payment Method </h4>
                            <p className="mx-5 hiwpara"> We Provide online payment Option with doorstep delivery. </p>
                        </div>
                    </div>
                </div>
                <button className="bg-blue-200 p-2 px-3 hover:animate-none animate-[bounce_1s_ease-in-out_infinite] font-medium text-lg text-blue-900 rounded-full mt-5">
                    <span className='flex'><Link href={"/buyUsedCars"}> Buy a Car</Link><AiOutlineArrowRight className='flex-none ml-2 my-1'/></span>
                </button>
            </div>
        </div>
    )
}

export default HowItWork