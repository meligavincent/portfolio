/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon})=>{

  return(
    <Tilt className='xs:w-[250px] w-full'>

        <motion.div variants={fadeIn( 'right','spring',0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

          <div options={{max:45,scale:1,speed:450}}  className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>

      <motion.div variants={ textVariant()}>

          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p  className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'   variants={fadeIn("","",0.1,1)}>
      
      Enthusiastic and passionate about the world of programming, I am a software engineer specializing in the development of innovative solutions. My expertise spans across multiple languages, with a deep mastery of Python, JavaScript . Additionally, I am an advocate for React JS, utilizing this technology to create modern and responsive user interfaces. My particular interest lies in the captivating field of 3D software.

Drawing from my experience, I fully engage in the design and development of three-dimensional software solutions, pushing the boundaries of digital visualization to create exceptional user experiences. My professional journey attests to my ability to solve complex problems and transform abstract ideas into functional software products.

Working with a quality and efficiency-oriented approach, I am constantly seeking challenging opportunities to enhance my skills and contribute meaningfully to the evolution of the programming field. Whether it's for crafting sophisticated applications, developing advanced features, or exploring new horizons in the realm of 3D software, I am prepared to apply my expertise to ambitious projects.

My goal is to surpass expectations and create software solutions that push the limits of technological innovation. If you are in search of a versatile software engineer, passionate about technology, and with extensive expertise in Python, JavaScript, and React JS, particularly specialized in 3D software, I am ready to take on new challenges and contribute to the success of your project."

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10' >

        {services.map((service,index)=>(<ServiceCard  key={service.title} index={index} {...service}/>))}

      </div>
    
    </>
  )
}

export default SectionWrapper(About,'about')