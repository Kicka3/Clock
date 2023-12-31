import {useEffect, useState} from "react";


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
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    //Добавить 0, если число меньше 10.
    const hh = hours < 10 ? '0' + hours : hours
    const mm = minutes < 10 ? '0' + minutes : minutes
    const ss = seconds < 10 ? '0' + seconds : seconds


    //Приводим данные в нужный формат (в строку)
    const timeDisplay = `${hh}:${mm}:${ss}`

    return (
        <div>
            <h1>{timeDisplay}</h1>
        </div>
    );
}

