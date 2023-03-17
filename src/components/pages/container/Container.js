import React from 'react'
import LineBefore from './LineBefore'
import ProductCon from './ProductList/ProductCon'
import ProductContainer from './ProductType2/ProductContainer'

function Container() {
  return (
    <div className='container move'>
      <div className='c'>
      <div className='contai'>
        <div>
        <LineBefore/>
        <ProductContainer/>
        </div>
        </div>
        </div>
        <ProductCon/>
    </div>
  )
}

export default Container