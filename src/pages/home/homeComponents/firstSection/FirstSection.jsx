import React from 'react'
import style from './firstSection.module.scss'

const FirstSection = () => {
  return (
    <div className={style.section}>
    <div className={style.text}>
      <span>Fashion Sale</span>
      <h1>Minimal Menz Style</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
      <button>SHOP NOW</button>
    </div>
  </div>
  )
}

export default FirstSection