import React from 'react';
import Header from './header';
import ShoppingCards from './shoppingCards'

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid">
        <Header/>
        <ShoppingCards/>

      </div>
    </div>
  )
}

export default HomePage;