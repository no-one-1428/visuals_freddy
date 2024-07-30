import React from 'react'
import One from '../../components/1_page/dount/One'
import img1 from '../../../public/content/sprint/Spirit.jpg'

const Sprit = () => {
    const tittle = 'SPIRIT’S RECARNATION'
    const para = "The Hindu scriptures tell us about the recarnation of a spirit to perform their Karma on the Dhartiloka (EARTH). Similarly the render shows that every soul/spirit has to take birth on the earth as the soul never dies. As a creative liberty I have added a door which connects the earth and the soul has to go through that to take birth."
  return (

    <div>
        <One tittle={tittle} para={para} img_path={img1}/>
        

    </div>
  )
}

export default Sprit