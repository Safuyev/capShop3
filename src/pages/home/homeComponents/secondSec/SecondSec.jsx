import React from 'react'
import style from './secondSec.module.scss'

const SecondSec = () => {
  return (
    <div className={style.section}>
    <div className={style.cardBox}>
      <div className={`${style.card} ${style.men}`}>
          <h5>Men's Fashion</h5>
      </div>
      <div className={`${style.card} ${style.women}`}>
          <h5>Men's Fashion</h5>
      </div>
      <div className={`${style.card} ${style.baby}`}>
          <h5>Men's Fashion</h5>
      </div>
    </div>
  </div>
  )
}

export default SecondSec