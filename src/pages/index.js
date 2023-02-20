import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../index.css";

import Darla1 from '../images/Darla1.jpg'
import Darla2 from '../images/Darla2.jpg'
import Darla3 from '../images/Darla3.jpg'
import MadelineParadise from '../images/MadelineParadise.jpg'
import MaxineDreams from '../images/MaxineDreams.png'
import Theresa from '../images/Theresa.jpg'
import IsolatedFears from '../images/isolatedFears.jpg';
import FS01 from '../images/FS01.jpg';
import Chibi from '../images/chibi.jpg'
import MadelineConcept from '../images/MadelineConcept.png';
import JulietteExploration from '../images/julietteExp.jpg';
import Yuri from '../images/yuri.jpg';

function createImageObject(image, title, size, link = null) {return {image,title,size, link} };

const imageObjects = [
  createImageObject(Darla2, "Darla Detective: Making Friends", 0),
  createImageObject(Darla3, "Darla Detective: Saying Sorry", 0),
  createImageObject(Darla1, "Darla Detective: Cover", 0),
  createImageObject(MaxineDreams, "Dream Big", 1),
  createImageObject(Theresa,"Theresa Character Concept",1),
  createImageObject(MadelineParadise, "Madeline Paradise", 1),
  createImageObject(MadelineConcept,"Madeline Character Concept",0),
  createImageObject(JulietteExploration, "Juliette Character Exploration", 0),
  createImageObject(Yuri, "Yuri Maximillian Concept Sketches", 0),
  createImageObject(IsolatedFears,"'Isolated Fears' Comic",0, 'https://www.ezequielespinoza.com/one-shots/11/0'),
  createImageObject(FS01,"'FireStarter' Comic",0, 'https://www.ezequielespinoza.com/firestarter/0/0'),
  createImageObject(Chibi, "Character Sticker Pack", 0),
]

const IndexPage = () => (
  <Layout>
   <div className="main-content">
    <section className="art-section">
      <div className="art-container">
        <div className="art-image-list">
          {
            imageObjects.map((object) =>{
              let sizeClass = "image-landscape";
              if(object.size === 1){
                sizeClass = "image-portrait";
              }
              if(object.link === null){
                return(
                  <div className={sizeClass + " art-object"}>
                    <img src={object.image}></img>
                    <h3>{object.title}</h3>
                  </div>
                )
              }
              else{
                return(
                  <div className={sizeClass + " art-object"}>
                    <a href={object.link} target="_blank">
                      <img src={object.image}></img>
                      <h3>{object.title}</h3>
                    </a>
                  </div>
                )
              }
              
            })
          }
        </div>
      </div>

    </section>
   </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
