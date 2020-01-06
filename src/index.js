import React from 'react'
import ReactDOM from 'react-dom'
import {
    ShopifyProvider,
} from 'react-shopify-hooks'

ReactDOM.render(
    <ShopifyProvider
    shopName="shop"
    storefrontAccessToken="token"
  >
    {children}
  </ShopifyProvider>,
   document.getElementById('root')
)
