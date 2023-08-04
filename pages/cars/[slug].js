import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import RingLoader from "react-spinners/RingLoader";
import Image from 'next/image';
import { GrGallery } from 'react-icons/gr';
import Link from 'next/link';
import ClipLoader from "react-spinners/ClipLoader";
import CarPageRelatedCars from '@/components/CarDetailsComponents/CarPageRelatedCars';
import CarImageCarousel from '@/components/CarDetailsComponents/CarImageCarousel';
import CarDetailsBox from '@/components/CarDetailsComponents/CarDetailsBox';
import HowItWork from '@/components/CarDetailsComponents/HowItWork';
import CarDetailTable from '@/components/CarDetailsComponents/CarDetailTable';
import OtpModal from '@/components/CarDetailsComponents/OtpModal';
import Questions from '@/components/HomeComponents/Questions';



const Car = () => {
    const router = useRouter()
    const { slug } = router.query

    const [Car, setCar] = useState("");
    const [ShowSpinner, setShowSpinner] = useState(true)
    const [showModal, setShowModal] = useState(false);
    // const [ValidateOtp, setValidateOtp] = useState(false);
    // const [Loader, setLoader] = useState(false);
    // const [Message, setMessage] = useState({});
    // const UserNumber = useRef("")
    // const OtpVerify = useRef("")

    const fetchCarDetails = async () => {
        const params = { "lead_id": slug }
        const fecthCars = await fetch("https://crm.unificars.com/api/webcardetail", {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': 'application/json',
            },
        })
        const jsonData = await fecthCars.json()
        setShowSpinner(false)
        if (jsonData.code == 200) {
            console.log(jsonData)
            setCar(jsonData.data)
        }
    };

    useEffect(() => {
        if (!router.isReady) return;
        fetchCarDetails()
    }, [router.isReady]);


    // const HandleSendOtp = async () => {
    //     if (UserNumber.current.value != "" && (UserNumber.current.value).match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)) {
    //         setMessage([])
    //         setLoader(true)
    //         const phoneNumer = UserNumber.current.value
    //         const data = {
    //             mobile: phoneNumer,
    //             lead_id: slug
    //         }
    //         const url = `https://crm.unificars.com/api/webotp`
    //         const fetchOtpRes = await fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //         })
    //         const jsonResponse = await fetchOtpRes.json()
    //         if (jsonResponse.code != 200) {
    //             setLoader(false)
    //             setValidateOtp(false)
    //             setMessage(jsonResponse)
    //         } else {
    //             setMessage(jsonResponse)
    //             setLoader(false)
    //             setValidateOtp(true)
    //         }
    //     }
    //     else {
    //         setLoader(false)
    //         setMessage({ code: 400, status: ["Please Enter a Valid Number"] })
    //     }
    // }
    // 8595529873
    const HandleVereifyOtp = async () => {
        if (OtpVerify.current.value != "") {
            setMessage([])
            setLoader(true)
            const phoneNumer = UserNumber.current.value
            const otp = OtpVerify.current.value
            const data = {
                mobile: phoneNumer,
                lead_id: slug,
                otp: otp
            }
            const url = `https://crm.unificars.com/api/webotpverify`
            const fetchOtpRes = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                },
            })
            const jsonResponse = await fetchOtpRes.json()
            console.log(jsonResponse)
            if (jsonResponse.code == 200) {
                setMessage(jsonResponse)
                if (jsonResponse.link) {
                    setMessage({ code: 200, status: ["Please Wait while Fecthing a Report"] })
                    router.push(jsonResponse.link)
                    setTimeout(() => {
                        setShowModal(false)
                        setMessage(false)
                        setLoader(false)
                        UserNumber.current.value = ""
                        OtpVerify.current.value = ""
                    }, 5000);
                }
                // setValidateOtp(true)
            } else {
                setLoader(false)
                setMessage(jsonResponse)
                setValidateOtp(true)
            }
        }
    }
    return (

        <>
            {ShowSpinner ?
                // showing spinner when car data is fecthing
                (<div className="flex col-span-4 justify-center h-96 items-center w-11/12 my-8 m-auto rounded-xl">
                    <div className="">
                        <RingLoader color="#f38120" size={100} className="" />
                    </div>
                </div>)
                : <>
                    <div className='md:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto'>
                        <div className='col-span-2 p-8'>
                            <CarImageCarousel images={Car.images} />
                            <div className='flex justify-end mx-6'>
                                <button className="mb-6 hover:text-blue-600 flex gap-2 shadow p-2 rounded-xl"><GrGallery className='my-1' />View All 38 Images</button>
                            </div>
                            <CarDetailTable CarDetails={Car.lead} />
                            {/* <div className=' grid grid-cols-1 md:grid-cols-3'>
                                <div className="">
                                    <Image
                                        src="/inpection.png"
                                        alt="background image"
                                        width={348}
                                        height={348}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <h4 className='text-2xl my-4 text-blue-700'> Buy Your Car In Just 30 Mins !</h4>
                                    <p> We know you have heard it many times that buying or selling a pre owned car is hell lot of work. Yes. It is.But not for you. We will look for all the work required to process selling or buying of your car and guess what you would not even know it. It will be as easy as buying or selling anything on an ecommerce website. Place your order/add your listing and you are done. Our wide range of catalogs have all the details you need. Nothing to hide. All you need to worry about is where to park your new car.
                                    </p>
                                    <div className='grid grid-cols-2 gap-4 text-lg my-4 font-semibold'>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Top Quality Cars</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Buy From Your Home</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Secure Payment</div>
                                        <div className='flex gap-2'><IoMdCheckboxOutline className='my-1 text-orange-500 flex-none' />Free RC Transfer</div>
                                    </div>




                                </div>
                            </div> */}
                        </div>
                        <div>
                            <div className='py-8  sticky top-5'>
                                <CarDetailsBox Car={Car} showModal={showModal} setShowModal={setShowModal} />
                            </div>
                        </div>
                    </div>
                    <div className='bg-blue-50'>
                        <CarPageRelatedCars />
                    </div>
                    <div>
                        <Questions />
                    </div>
                    <div>
                        <HowItWork />
                    </div>
                    <OtpModal showModal={showModal} setShowModal={setShowModal} carId={slug}/>

                </>}
        </>
    )
}

export default Car