import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal, { modalClasses } from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    borderRadius: '1rem',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    // p: 4,
  };

const EnquiryModal = (props) => {
    const {carId,showEnquiryModal,setShowEnquiryModal} =props
    const [loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({})

    const handleClose = () => {
   setShowEnquiryModal(false)
      }
       
      const HandleFormNumberSubmit=(e)=>{
        e.preventDefautl()
        console.log("handle form")
      }

  return (
    <div >
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showEnquiryModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}>
          <Fade in={showEnquiryModal} >
            <Box sx={style} className="w-4/5 md:w-4/6">
              <div className='absolute top-4 right-4'>
                <IoIosCloseCircleOutline onClick={handleClose} className='text-2xl cursor-pointer' />
              </div>

              <div className='flex flex-col items-center bg-red-400s justify-center w-full h-full rounded-xl bg-gradient-radial  from-blue-50 to-blue-100 text-gray-600 p-8'>
                <h1 className='text-center text-4xl uppercase'>Fill The Form To Send Enquire</h1>
                <form className='grid grid-cols-1 gap-6 items-center justify-center w-4/5 mx-auto mt-8' onSubmit={HandleFormNumberSubmit}>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <label htmlFor='name' className='text-2xl mr-1'>NAME</label>
                        <input type='text' className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' placeholder='ENTER YOUR NAME' name='name'  />
                    </div>
                    <div  className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <label htmlFor='name' className='text-2xl'>E-Mail</label>
                        <input type='email'  className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' placeholder='ENTER YOUR NAME' name='name'  />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 md:items-center'>
                        <label htmlFor='name' className='text-2xl'>Phone</label>
                        <input placeholder='ENTER YOUR PHONE NUMBER' maxLength={10} type='number' className='border text-xl shadow focus:outline-none rounded-xl w-10/12 p-4 ' onChange={(e) => {console.log(e.target.value)}} />
                    </div>
                 
                 
                  <Box sx={{ m: 1, position: 'relative' }} className="justify-center flex">
                    <Button
                      variant="contained"
                      className='p-2 shadow mt-6 bg-green-500 hover:bg-green-500 text-xl rounded-xl w-full px-6 text-white'
                      disabled={loading}
                      // onClick={handleButtonClick}
                      type='submit'
                    >
                      SEND Enquiry
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          color: green[500],
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
       


    </div>
  )
}

export default EnquiryModal