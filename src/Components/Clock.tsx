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
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    //Приводим данные в нужный формат (в строку)
    const timeDisplay = `${hours}:${minutes}:${seconds}`

    return (
        <div>
            <h1>{timeDisplay}</h1>
        </div>
    );
}

