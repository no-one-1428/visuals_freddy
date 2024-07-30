import React from 'react'
import One from '../../components/1_page/dount/One'
import img1 from '../../../public/content/dount/Donut.jpg'

const Donut_page = () => {
    const tittle = 'THE DONUT'
    const para = "2 January, 1994. The day when the great software Blender launched, it was decided that every new blender user would have to start with the legendary DONUT tutorial, but unfortunately the Founder of the Donut tutorial wasn’t agreeing with that and later he launched it on 2018. But the legacy didn’t break. Till date the new comers first start with the Donut."
  return (

    <div>
        <One tittle={tittle} para={para} img_path={img1}/>
        

    </div>
  )
}

export default Donut_page