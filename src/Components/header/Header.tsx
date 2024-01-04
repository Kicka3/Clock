import './header.css'
import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export const Header = () => {

    //Title страницы
    const [titlePage, setTitlePage] = useState<string>('')

    //Для выбора класса
    const [burger__class, setBurgerClass] = useState<string>('burger-bar unclicked');
    const [menu__class, setMenuClass] = useState<string>('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

    //Получаю url адрес
    const location = useLocation();
    const titleForPage = location.pathname.replace(/^\//, "")

    useEffect(() => {
        setTitlePageFn(titleForPage)
    }, [location]);

    const setTitlePageFn = (titleForPage: string) => {
        console.log('setTitlePageFn')
        if (titleForPage === '') {
            setTitlePage('info');
        } else {
            setTitlePage(titleForPage)
        }
    }

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

    //ПОЧИНИТЬ БАГ!
    const onBlurHandler = () => {
        setIsMenuClicked(!setIsMenuClicked);
        setBurgerClass('burger-bar unclicked');
        setMenuClass('menu hidden');
    }


    //Класс link_item для активного окна
    const final_link_item_cLass = ({isActive}: { isActive: boolean }) => isActive ? 'super_active' : 'menu_link__item'

    return (
        <div className={'header__wrapper'}>
            <nav className={'nav'}>
                <div className='burger__menu' onClick={updateMenu}>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                    <div className={burger__class}></div>
                </div>
                <span className='header__title'>{titlePage}</span>
            </nav>
            <div className={menu__class}>
                <div className='menu_links__wrapper' onBlur={onBlurHandler}>
                    <NavLink to={'/'} className={final_link_item_cLass}>homepage</NavLink>
                    <NavLink to={'/digital'} className={final_link_item_cLass}>digital clock</NavLink>
                    <NavLink to={'/analog'} className={final_link_item_cLass}>analog clock</NavLink>
                    <NavLink to={'/counter'} className={final_link_item_cLass}>smart counter</NavLink>
                </div>
            </div>
        </div>
    );
};

