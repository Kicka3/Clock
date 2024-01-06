import {useEffect, useState} from "react";
import './digitalCock.css'

export const DigitalClock = () => {

    //Сохраняем и получаем корректную дату м время в стейт
    const [time, setTime] = useState(new Date());

    //Добавляем 0 для красоты
    const get2digitalString = (number: number) => number < 10 ? '0' + number : number;

    //Обновляем каждую секунду время
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        //Чистим interval после c. unmounts
        return () => clearInterval(interval);

    }, []);


    //Приводим данные в нужный формат (в строку)
    const timeDisplay = `${get2digitalString(time.getHours())}
                        :
                        ${get2digitalString(time.getMinutes())}
                        :
                        ${get2digitalString(time.getSeconds())}`

    return (
        <div className='wrapper'>

            <section className='digital__clock'>

                <div className='digital_display__container'>
                    <h1 className='clock__title'>time:</h1>
                    <div className='background__img'>
                        <h2 className='display__clock'>
                            {timeDisplay}
                        </h2>
                    </div>
                </div>

            </section>

        </div>
    );
}

