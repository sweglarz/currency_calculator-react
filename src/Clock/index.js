import { useEffect, useState } from "react";
import "./style.css"

const Clock = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    });

    const clock = `${date.toLocaleTimeString()}`;
    const actualDate = `${date.toLocaleDateString(undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
    )}`;

    return (
        <p className="clock">Dzisiaj jest {actualDate}, {clock}</p>
    )
};

export default Clock;