import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar rootClassName="navbarroot-class-name"></Navbar>
      <Hero
        heading1="      Elevate : Unleashing Innovation,                     Redefining Excellence"
        content1="Your comprehensive platform designed to showcase and measure innovation within educational institutions. Experience a new era of data-driven insights, where you can track achievements, visualize innovation indicators, and foster collaboration across departments."
        action1="Explore"
      ></Hero>
      <Features1
        feature1Description="Elevate offers secure and personalized experiences for students, faculty, and administrators."
        feature1Title="Role-Based Access"
        feature2Description="Users can explore innovation updates interactively through virtual spaces representing departments."
        feature2Title="Virtual Campus Simulation"
        feature3Title="AI-Driven Insights"
        feature3Description="Elevate integrates AI to analyze data, identify trends, and offer predictive insights for decision-making."
      ></Features1>
      <CTA
        content1="Join Elevate today and revolutionize how your institution tracks, measures, and promotes innovation."
        heading1="Ready to Elevate Your Innovation Efforts?"
        action1="Get Started"
      ></CTA>
      <Features2
        content1="Join Elevate today and revolutionize how your institution tracks, measures, and promotes innovation."
        feature2Description="Explore innovation updates interactively through virtual spaces representing departments, providing real-time summaries of projects, achievements, and contributions."
        feature2Title="Virtual Campus Simulation"
        feature1ImgSrc="/1642886006381-1400w.png"
      ></Features2>
      <Pricing rootClassName="pricingroot-class-name"></Pricing>
      <Steps step1Title="Sign Up for Elevate"></Steps>
      <Testimonial
        heading1="Testimonials"
        content1="Elevate has revolutionized how we track and showcase our innovation efforts. The         platform's intuitive interface and AI-driven insights have been instrumental in                                                     guiding our decision-making processes."
      ></Testimonial>
      <Contact
        content2="Our team is here to assist you with any inquiries you may have."
        heading1="Contact Us"
        content1="Have a question or want to learn more about Elevate? Reach out to us!"
        phone1="+123-456-7890"
        address1=" MAIT Rohini, New Delhi, IN"
      ></Contact>
      <Footer logoSrc="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"></Footer>
    </div>
  )
}

export default Home
