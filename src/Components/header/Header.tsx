import React, {useState} from 'react';
import './header.css'
import {NavLink} from "react-router-dom";

export const Header = () => {

    //Для выбора класса
    const [burger__class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu__class, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    //Переключаю классы и class menu
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const onBlurHandler = () => {
        setIsMenuClicked(false);
        setMenuClass('menu hidden');
        setBurgerClass('burger-bar unclicked');
    }

        //Класс link_item для активного окна
        const final_link_item_cLass = ({isActive}: {isActive: boolean}) => isActive ? 'super_active' : 'menu_link__item'

    return (
        <div className={'header__wrapper'}>
            <nav className={'nav'}>
                <div className='burger__menu' onClick={updateMenu}>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                </div>
                <span className='header__title'>your clock</span>
            </nav>
            <div className={menu__class}>
                <div className='menu_links__wrapper' onBlur={onBlurHandler}>
                    <NavLink to={'/'} className={final_link_item_cLass}>homepage</NavLink>
                    <NavLink  to={'/digital'} className={final_link_item_cLass}>digital clock</NavLink>
                    <NavLink  to={'/analog'} className={final_link_item_cLass}>analog clock</NavLink>
                </div>
            </div>
        </div>
    );
};

