import React,{useState} from 'react'
import Category from './category';
function Header() {
    const [cat , catVal] =useState(false);
    function categoryDis(){
        catVal(true)
    }
  return (
    <div className='he'>
    <header>
    <ul>
      <li><i class='bx bx-menu'></i></li>
    </ul>
    <ul className='Element'>
      <li><i class='bx bx-home'></i> Home</li>
      <li><i class='bx bx-category'></i>Category</li>
      <li><i class='bx bx-basket'></i> Basket </li>
      <li><i class='bx bx-heart'></i>Favorite</li>
    </ul>
    <ul className='mangeUser'>
      <li><button>Login</button></li>
      <li><button>Register</button></li>
    </ul>
  </header>
  </div>
  )
}

export default Header