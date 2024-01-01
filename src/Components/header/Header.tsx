import React, {useState} from 'react';
import './header.css'
import {NavLink, NavLinkProps} from "react-router-dom";

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
        // const asd = ({isActive}: Pick<NavLinkProps, 'className'>) => {

        const asd = ({isActive}: {isActive: boolean}) => isActive ? 'menu_link__item super_active' : 'menu_link__item'

    //добавить классы
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
                <div className='menu_links__wrapper'>
                    {/*<NavLink to={'/'} className='menu_link__item'>homepage</NavLink>*/}
                    <NavLink to={'/'} className={asd}>homepage</NavLink>
                    <NavLink  to={'/digital'} className='menu_link__item'>digital clock</NavLink>
                    <NavLink  to={'/analog'} className='menu_link__item'>analog clock</NavLink>
                </div>
            </div>
        </div>
    );
};

