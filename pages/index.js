import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import HeroSection from '../components/hero-section'
import FeaturesSection from '../components/features-section'
import LoanDetailSection from '../components/loan-detail-section'
import EligibilitySection from '../components/eligibility-section'
import CtaSection from '../components/cta-section'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Finequs Form</title>
          <meta property="og:title" content="Finequs Form" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <HeroSection rootClassName="hero-section-root-class-name"></HeroSection>
        <FeaturesSection rootClassName="features-section-root-class-name"></FeaturesSection>
        <LoanDetailSection rootClassName="loan-detail-section-root-class-name"></LoanDetailSection>
        <EligibilitySection rootClassName="eligibility-section-root-class-name"></EligibilitySection>
        <CtaSection rootClassName="cta-section-root-class-name"></CtaSection>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
