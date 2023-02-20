import * as React from "react"
import { Link } from "gatsby"
import About from '../images/About.jpg'

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="main-content about-page">
      <div className="about">
        <img className="profile" src={About}></img>
        <p>
          Hello! My name is Ezequiel Espinoza Diaz, an illustrator that enjoys designing characters and making comics. I am currently studying at the University of the District of Columbia. I love to write character driven stories and then bring those characters and stories to life through art!
        </p>
        <p>I love to create and am constantly expanding my skillset to become a better artist and designer. I am eager to learn and continue to improve in whatever way I can. When I'm not drawing, I like to write, program, and look for interesting trinkets at flea markets!</p>
        <div>
        <a className="out-link" href="https://www.ezequielespinoza.com/">Comics and Personal Art Site</a>
        <a className="out-link" href="https://www.instagram.com/ezeas123/">Instagram</a>
      </div>
      </div>
    </div>
      
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
