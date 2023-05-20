import React from 'react';
import './DiamondAnimation.css';

const DiamondAnimation = () => {
  return (
    <>
        <h1>Discover a world of sophistication and allure as you explore our wide range of stunning jewelry</h1>

    <div className="diamond-container">
      <div className="diamond">
       
        <div className="face front"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9i4kmnnmqq927k7g76Mmvot3RLvNjf-p7rG3IFYc&s" alt="" /></div>
        <div className="face back"><img src='https://diamondpoint.xcdn.nl/FD/-/298233_0000_standard_XL.jpg'/></div>
        <div className="face left"><img src='https://diamelle.tn/wp-content/uploads/2020/12/5.2-carat-bracelet-riviere-en-or-Blanc-avec-diamants-Tunisie.jpg'/> </div>
        <div className="face right"><img src='https://www.khwaahish.com/wp-content/uploads/2022/02/KNA711-600x600.jpg'/></div>
        <div className="face top"><img src='https://image.brilliantearth.com/media/product_images/25/BE304RD400_white_top.jpg'/></div>
        <div className="face bottom"><img src='https://i.ebayimg.com/images/g/pTgAAOSwpdhhY-Yb/s-l1600.jpg'/></div>
        <img className='diam' src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Diamond_Icon_Transparent.png" alt="" />
      </div>
     
    </div>
    </>
  );
};

export default DiamondAnimation;
