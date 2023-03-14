import React from 'react'

import Header from '../../containers/Header'
import MainSection from '../../containers/MainSection'
import PopularChallenges from '../../containers/PopularChallenges'
import Results from '../../containers/Results/Results'
import Advice from '../../containers/Advice'
import Gallary from '../../containers/Gallary'
import Footer from '../../containers/Footer'

const HomePage = () => {
  return (
    <>
        <Header />
        <MainSection />
        <PopularChallenges />
        <Results />
        <Advice />
        <Gallary />
        <Footer />
    </>
  )
}

export default HomePage