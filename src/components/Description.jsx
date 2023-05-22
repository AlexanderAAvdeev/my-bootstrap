import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

export const Description = () => {
  return (
    <div>
      {/* <h2 className='col-md-8 offset-md-2'>Description</h2>
      <motion.img
      width={'20%'}
      src='/img/icon.png'
      alt=''

      //animation
      animate={{rotate:360}}
      transition={{
        delay:2,
        duration: 3,
        repeat: Infinity,
        repeatDelay:0.5,
        repeatType:'reverse',
        type:'keyframes'
      }}
      />

      <motion.p
      initial={{
        x: -1000,
        opacity: 0,
      }}
      animate={{
        x:500, 
        opacity:1
      }}
      transition={{
        delay:1,
        duration: 2,
        type:'tween'
      }}
      >
      Text will appear on
      </motion.p> */}

      <motion.div id='div1'

      initial={{
        x: 1000,
        opacity: 0
      }}
      animate={{
        x:0,
        opacity:1
      }}
      transition={{
        delay:1,
        duration:2
      }}
      >
        This text will appear on the page immediately
      </motion.div>

      <motion.div id='div2'
      initial={{
        opacity:0,
      }}
      animate={{
        y:0,
        opacity:1,
      }}
      transition={{
        delay:1,
        duration:2
      }}
      >
       <motion.img
       src='img/banner-new.jpeg' 
       className='banner'
       width={850}
       initial={{
        opacity:0.6
       }}
       transition={{
        duration:5
       }}
       whileTap={{rotate:360}}
       />
      </motion.div>

      <motion.div id='div3'
      initial={{
        opacity:0,
        scale:0.5
      }}
      animate={{
        scale:1,
        opacity:1,
      }}
      transition={{
        duration:2
      }}
      >
       <motion.img
       src='img/Ball.jpeg' 
       className='Ball'
       width={300}
       initial={{
        opacity:0.6
       }}
       transition={{
        duration:5
       }}
       whileHover={{
        scale:1.5,
        transition:{
          duration:5}
       }}
       />
      </motion.div>

      <motion.div id='div4'
      initial={{
        opacity:0,
        scale:0.5
      }}
      animate={{
        scale:1,
        opacity:1,
      }}
      transition={{
        duration:2
      }}
      >
       <motion.img drag='x'
       src='img/Ball.jpeg' 
       className='Ball'
       width={300}
       initial={{
        opacity:0.6
       }}
       transition={{
        duration:5
       }}
       whileDrag={{
        scale:1.5,
       }}
       />
      </motion.div>

    
    </div>

  )
}
