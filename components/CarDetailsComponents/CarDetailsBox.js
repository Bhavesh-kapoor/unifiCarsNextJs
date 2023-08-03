import { Paper } from '@mui/material'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCardChecklist, BsCashCoin, BsWhatsapp } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

const CarDetailsBox = (props) => {
    const {Car ,showModal ,setShowModal}=props
    console.log("car details Box" , Car)
    return (
        <Paper elevation={2} className='p-2'>
            <div>
                <h1 className="text-gray-900 text-2xl title-font font-bold mb-1"> {Car && Car.lead ? Car.lead[0]["Model"] : ""}  {Car && Car.lead ? Car.lead[0]["Brand"] : "Brand"}  </h1> <span className="title-font font-medium text-base text-gray-900">₹{Car && Car.lead ? (parseInt(Car.lead[0]["Amount"])).toLocaleString("en-IN") : "..."}</span>
            </div>
            <hr className='mt-2'/>
            <div className='flex flex-wrap justify-start gap-3 my-4'>

                <div className='  rounded-xl p-2'>
                    {(Car.lead[0])["Km Driven"]}
                </div>
                <div className='  rounded-xl p-2'>
                    {(Car.lead[0])["Ownership"]}
                </div>
                <div className='  rounded-xl p-2'>
                    {(Car.lead[0])["Fuel Type"]}
                </div>
                <div className='  rounded-xl p-2 px-4'>
                    {(Car.lead[0])["Registration In"]}
                </div>
                <div className='  rounded-xl p-2'>
                    {(Car.lead[0])["Colour"]}
                </div>


            </div>

            <div className='flex flex-col gap-4 text-blue-500 font-semibold text-sm border-b-2 p-2 border-gray-300'>
                <div className='flex'><BsCashCoin className='my-1 mr-2' />Free Rc transfer</div>
                <div className='flex'><TiTick className='my-1 mr-2' />Hassle free documentation</div>
                <div className='flex'><BsCardChecklist className='my-1 mr-2' />150+ point inspected</div>
                <div className='cursor-pointer'><a className='flex' href="https://wa.me/+919911771977?text=Hey Unificars  I want to buy Maruti Wagon-R VXI 1.2 containing  UNC-13666" target="_blank"><BsWhatsapp className='my-1 mr-2' />Connect on Whatsapp <AiOutlineArrowRight className="my-1 mx-1" /></a></div>
            </div>


            <div className='grid grid-cols-2 text-center my-2'>

                <div className="flex justify-end my-2 gap-4 col-span-2">
                    <button className="flex  text-white bg-green-500 py-2 px-2 focus:outline-none shadow text-sm rounded-xl" onClick={() => setShowModal(!showModal)}><BsCardChecklist className="my-1 mr-2" /> Download Report </button>
                    {/* router.push({`/report/${slug}`}) once user enter their details */}
                    <button className="flex text-white bg-orange-500 py-2 px-2 focus:outline-none shadow text-sm  rounded-xl">Book a Test Drive Now <AiOutlineArrowRight className="my-1 mx-1" /></button>

                </div>


            </div>
        </Paper>
    )
}

export default CarDetailsBox