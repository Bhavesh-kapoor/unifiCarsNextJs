import BuyInSteps from '@/components/BuyInSteps';
import CheckCarValue from '@/components/CheckCarValue';
import CustomerReview from '@/components/CustomerReview';
import HomeCarousel from '@/components/HomeCarousel'
import HomeCarsCarousel from '@/components/HomeCarsCarousel';
import Questions from '@/components/Questions';
import TopBrandCard from '@/components/TopBrandCard';
import React from 'react'

function index() {
  return (
    <div>
      <HomeCarousel/>
      <div className=''>
        <TopBrandCard/>
      </div>
      <div className=''>
          <HomeCarsCarousel/>
      </div>
      <div>
        <BuyInSteps/>
      </div>
      <div>
        <Questions/>
      </div>
      <div>
        <CheckCarValue/>
      </div>
      <div>
        <CustomerReview/>
      </div>
    </div>
  )
}

export default index