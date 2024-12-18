import React from 'react'
import Layout from '../../components/layout/Layout'
import SecondSec from './homeComponents/secondSec/SecondSec'
import ThirdSection from './homeComponents/thirdSec/ThirdSection'
import FirstSection from './homeComponents/firstSection/FirstSection'
import FourSec from './homeComponents/fourSec/FourSec'


const Home = () => {
  return (
    <>
    <Layout>
        <FirstSection/>
        <SecondSec/>
        <ThirdSection/>
        <FourSec/>
    </Layout>
    </>
  )
}

export default Home