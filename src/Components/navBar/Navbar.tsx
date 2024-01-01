import React, {useState} from 'react';
import './navbar.css'

export const Navbar = () => {

    //Для выбора класса
    const [burger__class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu__class, setMenuClass] = useState('menu hidden');
    const [isMenuCliked, setIsMenuCliked] = useState(false);

    //Переключаю классы и class menu
    const updateMenu = () => {
        if (!isMenuCliked) {
            setBurgerClass('burger-bar clicked');
            setMenuClass('menu visible');
        } else {
            setBurgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
        setIsMenuCliked(!isMenuCliked);
    }

    return (
        <div className={'nav__wrapper'}>
            <nav className={'nav'}>
                <div className='burger__menu' onClick={updateMenu}>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                </div>
            </nav>
            <div className={menu__class}>
                <div className='menu_links__wrapper'>
                    <div className='menu_link__item'>digital clock</div>
                    <div className='menu_link__item'>analog clock</div>
                </div>

            </div>
        </div>
    );
};

