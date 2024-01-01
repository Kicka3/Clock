import React, {useEffect, useState} from 'react';
import './analogClockStyles.css'

export const AnalogClock = () => {

    //Сохраняем и получаем корректную дату м время в стейт
    const [time, setTime] = useState(new Date());
    //Создаем градус
    const deg = 6;

    //Обновляем каждую секунду время
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);

    }, []);

    //Получаем часы, минуты, секунды из текущего времени
    let hours = time.getHours() * 30;
    let minutes = time.getMinutes() * deg;
    let seconds = time.getSeconds() * deg;


    return (
        <section className='analog__clock'>

            <div className='display__container'>
                <div className="hour">
                    <div className="hr" style={{transform: `rotateZ(${(hours) + (minutes / 12)}deg)`}}></div>
                </div>
                <div className="min">
                    <div className="mn" style={{transform: `rotateZ(${minutes}deg)`}}></div>
                </div>
                <div className="sec">
                    <div className="sc" style={{transform: `rotateZ(${seconds}deg)`}}></div>
                </div>
            </div>

        </section>
    );
};

