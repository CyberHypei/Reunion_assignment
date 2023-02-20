import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>If you are in the market for a vacation home, rental property, or primary residence Reunion Realty can match you with your ideal property. Reunion Realty is a full-service brokerage, that can assist you with all your real estate needs, whether you are buying or selling real estate in Reunion Florida.Over the years, Reunion Realty has developed the largest database of buyers for the Reunion market and our company remains steadfast in our mission to exceed your expectations by remaining true to our core values, which include:</p>
            <p>Maintaining The Highest Level Of Integrity And Compassion</p>
            <p>Continue To Innovate And Solve Our Clients Needs</p>
            <p>Foster A Healthy Real Estate Market In Reunion</p>
            <p>Dedicated Involvement With Our Clients And Community</p>
            <p>As the premier Real Estate company in the area, we continue to grow and prosper as a direct result of our valued customers. We continue to grow our Team and Sales Staff to offer you the greatest Real Estate services and exposure you deserve. It’s our thorough understanding of the many facets and components of this world-class resort community, that allows us to provide you with exceptional information regarding Reunion real estate, rental programs, club memberships, and the HOA dynamics. These services combined with our customer focus positions Reunion Realty as the logical choice to exceed your real estate expectations.</p>
            <p> Our team at Reunion Realty will go beyond the standards of the real estate industry and work hard for your complete customer satisfaction.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
