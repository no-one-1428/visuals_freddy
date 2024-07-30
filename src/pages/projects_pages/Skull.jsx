import React from 'react'
import One from '../../components/1_page/dount/One'
import img1 from '../../../public/content/abandoned_skull/Abandoned_Skull.jpg'

const Skull = () => {
    const tittle = 'ABANDONED SKULL'
    const para = "Millions of Years ago, the size of the humans were much bigger than today’s but as the time passed it became smaller. Now in 2024 we founded one of the skull of our ancestors who had lived on this abandoned island but the shocking thing of this is that till date whoever saw this skull had died An abandoned skull"
  return (

    <div>
        <One tittle={tittle} para={para} img_path={img1}/>
        

    </div>
  )
}

export default Skull