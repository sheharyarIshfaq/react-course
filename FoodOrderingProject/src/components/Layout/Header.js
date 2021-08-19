import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import MealsImage from '../../assets/meals.jpg';

const Header = (props)=>
{
    return (
        <>
        <header className={classes.header}>
            <h1>HotMeals.com</h1>
            <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="A table Containing Different Food Items" />
        </div>
        </>
    );
};

export default Header;