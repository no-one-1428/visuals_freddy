import React from 'react'
import One from '../../components/1_page/dount/One'
import img1 from '../../../public/content/sword/Sword.jpg'

const Sward = () => {
    const tittle = 'THE SWORD'
    const para = "Back then, A Brutal war had happened between two clan. On the right, there was a cruel warrior who had claimed almost the whole world but then he met the great King who was known for his victorius wars, the greatest thing of him was he never killed his opponents to give them a chance to re-establish their life. The king fought against the cruel, and kept his legacy intact, the war was so brutal that he gave up his sword and decided he would never persevere it again."
  return (

    <div>
        <One tittle={tittle} para={para} img_path={img1}/>
        

    </div>
  )
}

export default Sward