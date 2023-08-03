import BuyInSteps from '@/components/HomeComponents/BuyInSteps';
import CheckCarValue from '@/components/HomeComponents/CheckCarValue';
import CustomerReview from '@/components/HomeComponents/CustomerReview';
import HomeCarousel from '@/components/HomeComponents/HomeCarousel'
import HomeCarsCarousel from '@/components/HomeComponents/HomeCarsCarousel';
import Questions from '@/components/HomeComponents/Questions';
import TopBrandCard from '@/components/HomeComponents/TopBrandCard';
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