import {useEffect, useState} from "react";
import './digitalCock.css'

export const DigitalClock = () => {

    //Сохраняем и получаем корректную дату м время в стейт
    const [time, setTime] = useState(new Date());

    //Обновляем каждую секунду время
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //Чистим interval после c. unmounts
        return () => clearInterval(interval);

    }, []);

    //Получаем часы, минуты, секунды из текущего времени
    let hours = time.getHours()
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    //Добавить 0, если число меньше 10.
    const hh = hours < 10 ? '0' + hours : hours
    const mm = minutes < 10 ? '0' + minutes : minutes
    const ss = seconds < 10 ? '0' + seconds : seconds


    //Приводим данные в нужный формат (в строку)
    const timeDisplay = `${hh}:${mm}:${ss}`

    return (
        <div className='wrapper'>

            <section className='digital__clock'>

                <div className='display__container'>
                    <h1 className='clock__title'>time:</h1>
                    <div className='background__img'>
                        <h2 className='display__clock'>
                            {timeDisplay}
                            {/*<span className='hours'>{hh}</span>*/}
                            {/*<span className='doube'>:</span>*/}
                            {/*<span className='minutes'>{mm}</span>*/}
                            {/*<span className='doube'>:</span>*/}
                            {/*<span className='seconds'>{ss}</span>*/}
                        </h2>
                    </div>
                </div>

            </section>

        </div>
    );
}

