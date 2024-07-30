import React from 'react'
import One from '../../components/1_page/dount/One'
import img1 from '../../../public/content/usualHour/usualHour.jpg'

const Usual = () => {
    const tittle = 'USUAL HOUR'
    const para = "Cartoon style scene representing the rush in todays life, where most of the people is in a hurry and wants to do everything in a minute but they always forget good things take time. If you are also the one mentioned above, then stop and take a breath and appreciate atleast you are doing it."
  return (

    <div>
        <One tittle={tittle} para={para} img_path={img1}/>
        

    </div>
  )
}

export default Usual