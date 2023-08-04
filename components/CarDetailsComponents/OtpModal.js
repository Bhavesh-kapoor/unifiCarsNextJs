import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { orange } from '@mui/material/colors';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  borderRadius: '1rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  // p: 4,
};

export default function TransitionsModal(props) {

  const { showModal, setShowModal, carId } = props
  const [UserNumber, setUserNumber] = useState("")
  const [Otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [OtpLoader, setOtpLoader] = useState(false)
  const [ToggleNumberTabAfterOtpRecevied, setToggleNumberTabAfterOtpRecevied] = useState(false)

  const handleClose = () => {
    setUserNumber("")
    setLoading(false)
    setToggleNumberTabAfterOtpRecevied(false)
    setShowModal(false);
  }

  const HandleFormNumberSubmit = async (e) => {
    e.preventDefault()
    if (UserNumber.match(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/)) {
      const data = {
        mobile: UserNumber,
        lead_id: carId
      }
      setLoading(true)

      // set it temperaly before fetching 
      setToggleNumberTabAfterOtpRecevied(true)
      // const url = `https://crm.unificars.com/api/webotp`
      const fetchOtpRes = await fetch('url', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json',
        },
      })
      const jsonResponse = await fetchOtpRes.json()
      if (jsonResponse.code != 200) {
        setLoading(false)
        setToggleNumberTabAfterOtpRecevied(true)
        // setLoader(false)
        // setValidateOtp(false)
        // setMessage(jsonResponse)
      } else {
        setLoading(false)
        // setMessage(jsonResponse)
        // setLoader(false)
        // setValidateOtp(true)
      }
      console.log("number submited", data)
    }
    else {
      setLoading(false)
      // setMessage({ code: 400, status: ["Please Enter a Valid Number"] })
    }
  }


  const HandleFormOtpVerifySubmit = async () => {
    if (Otp != "") {
      const data = {
        mobile: UserNumber,
        lead_id: carId,
        otp: Otp
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

    }
  }

  return (
    <div >
      {/* <Modal
       
      > */}
      {!ToggleNumberTabAfterOtpRecevied ?
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={showModal}  >
            <Box sx={style} >
              <div className='absolute top-4 right-4'>
                <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer' />
              </div>

              <div className='flex flex-col items-center bg-red-400s justify-center w-full h-full rounded-xl bg-gradient-radial  from-blue-50 to-blue-100 text-gray-600'>
                <h1 className='text-center text-4xl uppercase'>Enter Your Mobile Number</h1>
                <h4 className='text-center text-xl'>To Download Full Report</h4>
                <form className='flex flex-col items-center justify-center w-full mt-8' onSubmit={HandleFormNumberSubmit}>
                  <input placeholder='ENTER YOUR PHONE NUMBER' type='tel' className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' value={UserNumber} onChange={(e) => { setUserNumber(e.target.value) }} />
                  {/* <button type='submit' className='p-2 shadow mt-6 bg-gradient-radial  from-orange-200 to-orange-400 hover:to-orange-500 text-black text-xl rounded'>SEND OTP</button> */}
                  <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-orange-500 hover:bg-orange-500 text-black text-xl rounded'
                      disabled={loading}
                      // onClick={handleButtonClick}
                      type='submit'
                    >
                      SEND OTP
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: orange[500],
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                </form>
              </div>
            </Box>
          </Fade>
        </Modal>
        :
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={showModal}  >
            <Box sx={style} >
              <div className='absolute top-4 right-4'>
                <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer' />
              </div>
              <div className='flex flex-col items-center bg-red-400s justify-center w-full h-full rounded-xl bg-gradient-radial  from-blue-50 to-blue-100 text-gray-600'>
                <h1 className='text-center text-2xl uppercase tracking-wider'>PLEASE ENTER YOUR OTP</h1>
                <h4 className='text-center text-xs text-green-500'>The OTP has send to your phone Nmber</h4>
                <form className='flex flex-col items-center justify-center w-full mt-8' onSubmit={HandleFormOtpVerifySubmit}>
                  <input placeholder='ENTER THe OTP' maxLength={6} className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' value={Otp} onChange={(e) => { setOtp(e.target.value) }} />
                  {/* <button type='submit' className='p-2 shadow mt-6 bg-gradient-radial  from-orange-200 to-orange-400 hover:to-orange-500 text-black text-xl rounded'>SEND OTP</button> */}
                  <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-orange-500 hover:bg-orange-500 text-black text-xl rounded'
                      disabled={loading}
                      // onClick={handleButtonClick}
                      type='submit'
                    >
                      SEND OTP
                    </Button>
                    {OtpLoader && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: orange[500],
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginLeft: '-12px',
                        }}
                      />
                    )}
                  </Box>
                </form>
              </div>
            </Box>
          </Fade></Modal>}


    </div>
  );
}



{/* <div className='grid grid-cols-1 '>
              <div className='bg-orange-200 rounded-t-xl p-8  text-gray-800'>
                <h1 className='uppercase text-center text-4xl'>Download report</h1>
                <h1 className='uppercase text-center text-base'>just in few steps</h1>
              </div>
              <div>
                <h1 className='capitalize text-center text-2xl my-4'>Enter Your Mobile number</h1>
                <form className='flex flex-col items-center justify-center mb-4' onSubmit={HandleFormNumberSubmit}>
                  <input placeholder='ENTER YOUR PHONE NUMBER' className='bg-gray-200 focus:outline-none rounded-xl w-10/12 p-4 ' value={UserNumber} onChange={(e)=>{setUserNumber(e.target.value)}} />
                  <button type='submit' className='bg-orange-500 p-4 mt-2 w-10/12 rounded-xl'>SEND OTP</button>
                </form>

              </div>
            </div> */}