import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const BuyCarSearchFilter = () => {
    const [value, setValue] = useState([20, 80]);
    const [marks, setMarks] = useState([
        {
            value: 10,
            label: 'MIN',
        },
        {
            value: 90,
            label: 'MAX',
        },
    ]);
    return (
        <div className='bg-gray-50 h-full'>
            <div className='flex flex-col gap-4 justify-center'>
                <div className='border-b p-2 py-8 font-semibold'>
                    <h1 className='text-lg mb-4'>Price Range</h1>
                    <div className='flex justify-between'>
                        <h2>50,000</h2>
                        <h2>15,00,000</h2>
                    </div>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
                        <Slider value={value} step={10} marks={marks} onChange={(e) => setValue(e.target.value)} color="warning" />
                    </Stack>
                </div>
                <div className='border-b p-4 font-semibold'>
                    <h1 className='text-lg mb-4'>Ownership</h1>
                    <RadioGroup
                        col
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=>{console.log(e.target.value)}}
                    >
                        <FormControlLabel value="1" control={<Radio color='warning'/>} label="1st Owner"/>
                        <FormControlLabel value="2" control={<Radio color='warning'/>} label="2nd Owner"/>
                        <FormControlLabel value="3" control={<Radio color='warning'/>} label="3rd Owner"/>
                        <FormControlLabel value="4" control={<Radio color='warning'/>} label="4th Owner"/>
                    </RadioGroup>
                </div>
                <div className='border-b p-4 font-semibold'>
                    <h1 className='text-lg mb-4'>Year</h1>
                    <RadioGroup
                        col
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=>{console.log(e.target.value)}}
                    >
                        <FormControlLabel value="2021" control={<Radio color='warning'/>} label="2021"/>
                        <FormControlLabel value="2020" control={<Radio color='warning'/>} label="2020"/>
                        <FormControlLabel value="2019" control={<Radio color='warning'/>} label="2019"/>
                        <FormControlLabel value="2018" control={<Radio color='warning'/>} label="2018"/>
                    </RadioGroup>
                </div>
                <div className='border-b p-4 font-semibold'>
                    <h1 className='text-lg mb-4'>Km Driven</h1>
                    <RadioGroup
                        col
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=>{console.log(e.target.value)}}
                    >
                        <FormControlLabel value="2021" control={<Radio color='warning'/>} label="4000 and above"/>
                        <FormControlLabel value="2020" control={<Radio color='warning'/>} label="5000 and above"/>
                        <FormControlLabel value="2019" control={<Radio color='warning'/>} label="6000 and above"/>
                        <FormControlLabel value="2018" control={<Radio color='warning'/>} label="7000 and above"/>
                        <FormControlLabel value="2017" control={<Radio color='warning'/>} label="8000 and above"/>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}

export default BuyCarSearchFilter