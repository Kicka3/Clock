import React from 'react';
import './homePage.css'
import homePageIcon from '../../img/homepage.jpeg'

export const HomePage = () => {
    return (
        <div className='HomePage_container'>

            <div className='section__title'>
                <h1 className='homePage__title'>
                    Этот сайт не заточен под мобильные устройства, так что наслаждайтесь тем, что есть
                </h1>
                <h2 className='homePage__subTitle'>Для выбора часов воспользуйтесь меню</h2>

            </div>


            <div className='homePage_img__wrapper'>
                <img className={'homePage__img'}
                     src={homePageIcon}
                     alt={'home page'}
                />
            </div>


        </div>

    );
};

