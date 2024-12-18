import React from "react";
import style from "./header.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.hdrTop}>
          <div className={style.hdrLeft}>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className={style.hdrRight}>
            <div className={style.hdrone}>
              <ul>
                <li>
                  <a href="">My Wishlist</a>
                </li>
                <li>
                  <a href="">Track Your Order</a>
                </li>
              </ul>
            </div>
            <div className={style.iconBar}>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className={style.hdrbottom}>
          <div className={style.logo}>
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png"
              alt="logo"
            />
          </div>
          <div className={style.navbar}>
            <nav>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Men</a>
                </li>
                <li>
                  <a href="">Women</a>
                </li>
                <li>
                  <a href="">Baby Collection</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href=""></a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.iconBox}>
            <i>
              <IoIosSearch />
            </i>
            <i>
              <BiUser />
            </i>
            <i>
              <PiShoppingCartThin />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
