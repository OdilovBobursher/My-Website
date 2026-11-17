import { use, useEffect, useState } from 'react'
import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuTicketPercent } from "react-icons/lu";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Products from '../../pages/Products/Products';

 function Header() {
  const [modal, setModal] = useState(0)
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
   
   {isSubHeaderVisible && (
        <div className="subHeader">
          <div className="subHeaderTexts">
            <LuTicketPercent className="subHeaderTicket" />
            <p>30% off storewide — Limited time!</p>
            <NavLink to="/shop">
              <button className="subBtn">
                Shop Now <FaArrowRight />
              </button>
            </NavLink>
          </div>

          <button
            onClick={() => setIsSubHeaderVisible(false)}
            className="subHeaderCloseBox"
            aria-label="Close promo"
          >
            <IoCloseOutline />
          </button>
        </div>
      )}

     <div className='container'>
        <img src="https://vectorseek.com/wp-content/uploads/2024/04/Uzum-Market-Logo-Vector.svg-.png" alt="" className='main_logo' width={250}/>
           {/* <select id="Katalog" className="katalog">
                <option value="all">Katalog</option>
                <option value="electronics">Elektronika</option>
                <option value="household appliances">Maishiy texnika</option>
                <option value="clothing">Kiyim</option>
                <option value="shoes">Poyabzallar</option>
                <option value="accessories">Aksessuarlar</option>
              </select> */}
               <button className='btn_katalog' onClick={{}}>Katalog</button>
         
            <input className='input_header' type="text" id='search' placeholder='Mahsulotlar va turkumlar izlash'/>

          
              <button onClick={() => setModal((prev) => !prev)} className='Kirish'>
             {modal ? "Chiqish" : "kirish"}
             </button>
             {modal === true ? ( 
             <div className="modal">
              <img src="https://vectorseek.com/wp-content/uploads/2024/04/Uzum-Market-Logo-Vector.svg-.png" alt="" width={170}/>
              <h1>Uzum market'ga kirish</h1>
              <input type="number" className='input_modal'/> <br />
              <button className='Kodni_olish'>Kodni olish</button>
              <br />
              <p>Davom etgan holda men <br />shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik <br /> bildirasiz va Uzum ID ommaviy oferta bilan rozi <br /> bo‘laman</p>
              <p>Uzum ID nima?</p>
             <button onClick={() => setModal(false)} className='btn_x'>x</button>
            </div>
    ) : (
       <></>
       )}
       { modal ? (
        <div onClick={() => setModal(false)}
        className="overlay"></div>
    ) : ( 
      <></>
       )}

              <button className="Saralangan">Saralangan</button>

              <button className="Savat">Savat</button>
    </div> 
    </>
  )
}

export default Header