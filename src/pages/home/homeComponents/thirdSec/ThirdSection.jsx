import React from 'react'
import style from './thirSec.module.scss'

const ThirdSection = () => {
  return (
    <div className={style.section}>
    <div className={style.sectionName}>
      <h2>Trending This Week</h2>
      <ul>
          <li className={style.red}><a href="">Men</a></li>
          <li><a href="">Women</a></li>
          <li><a href="">Baby</a></li>
          <li><a href="">Fashion</a></li>
      </ul>
    </div>
    <div className={style.cardBox}>
      <div className={`${style.card} ${style.first}`}>
          <div className={style.image}>
               <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg" alt="" />
          </div>
          <p>Cashmare Tank + Bag</p>
          <span>$98.00  <del>  120.00</del></span>
      </div>
      <div className={`${style.card} ${style.first}`}>
          <div className={style.image}>
               <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg" alt="" />
          </div>
          <p>Cashmare Tank + Bag</p>
          <span>$98.00  <del>  120.00</del></span>
      </div>
      <div className={`${style.card} ${style.first}`}>
          <div className={style.image}>
               <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg" alt="" />
          </div>
          <p>Cashmare Tank + Bag</p>
          <span>$98.00  <del>  120.00</del></span>
      </div>
      <div className={`${style.card} ${style.first}`}>
          <div className={style.image}>
               <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg" alt="" />
          </div>
          <p>Cashmare Tank + Bag</p>
          <span>$98.00  <del>  120.00</del></span>
      </div>
    </div>
  </div>
  )
}

export default ThirdSection