import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const MoblieCarDetailsHeader = (props) => {
    const { Car, setShowEnquiryModal } = props
    return (
        <div className='grid grid-cols-1 justify-around'>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className="text-blue-900 text-2xl title-font font-bold mb-1">{Car && Car.lead ? Car.lead[0]["Brand"] : "Brand"}  </h1>
                </div>
                <div className='text-end text-blue-900'>
                    ₹{Car && Car.lead ? (parseInt(Car.lead[0]["Amount"])).toLocaleString("en-IN") : "..."}
                </div>

            </div>
            <div className='grid grid-cols-3 items-center'>
                <div className="title-font flex flex-wrap gap-2 col-span-2 font-base text-base text-orange-500">
                    <p>{Car && Car.lead ? Car.lead[0]["Model"] : ""}</p>
                    <p>{(Car.lead[0])["Km Driven"]}</p>
                    <p> {(Car.lead[0])["Registration In"]}</p>
                    <p>{(Car.lead[0])["Fuel Type"]}</p>
                </div>
                <div>
                    <button className="flex text-white bg-orange-500 py-2 px-2 focus:outline-none shadow text-sm rounded-xl" onClick={() => setShowEnquiryModal(true)}>ENQUIRE <AiOutlineArrowRight className="my-1 mx-1" /></button>
                </div>
            </div>
        </div>
    )
}

export default MoblieCarDetailsHeader