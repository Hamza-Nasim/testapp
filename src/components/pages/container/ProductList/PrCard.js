import React from 'react'

function PrCard(e) {
  return (
    <div className='PrCard move'>
      <div className='card'>
        <div className='image'>
          <img width='100%' height='100%' src={e.img}></img>
        </div>
        <div className='buy'>
          <h2>المنتوج الاول</h2>
          <p>يتوف الشحن مجاني في اكادير يتوف الشحن مجاني في</p>
          <a href='#'> <button>اطلب الان</button></a>
        </div>
      </div>
    </div>
  )
}

export default PrCard