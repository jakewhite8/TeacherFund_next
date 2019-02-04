import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import SubsectionBasic from '../components/subsectionBasic'
import SubsectionImportant from '../components/subsectionImportant'
import EmailCapture from '../components/emailCapture'
import Footer from '../components/footer'

const emailTitle = 'Help us change the world.'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="body">
      <SubsectionBasic 
        titleText="100% of your money brings school supplies to teachers and students in need."
        descriptionText="You can help aleviate economic pressure on public school teachers across
          the country. Every penny will help bring school supplies to schools in need."
        buttonText="Give monthly"
        image="/static/images/apple-blur-book-stack.jpg"
        destination="donate"
      />
      <div className="emailCapture">
        <h2 className="titleText">
          {emailTitle}
        </h2>
        <EmailCapture />
      </div>

      <SubsectionImportant 
        titleText="Ninety-four percent of public school teachers say they spent their own money on notebooks, pens and other supplies in the 2014-15 school year without reimbursement."
        descriptionText="We're on a mission to change that. Here's how."
        buttonText="Learn more"
        image="/static/images/blur-child-classroom.jpg"
      />
    </div>

    <Footer />

    <style jsx>{`
      .body {
        color: #333;
        overflow: hidden;
      }
      .emailCapture {
        width: 100%;
        color: white;
        text-align: center;
        background-color: #434343;
        padding: 100px 0;
      }

      @media only screen and (min-width: 600px) { 

      }
    `}</style>
  </div>
)

export default Home
