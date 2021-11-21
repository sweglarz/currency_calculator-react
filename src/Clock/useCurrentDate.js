import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const actualDate = `${date.toLocaleString(undefined,
        {
            weekday: "long",
            hour: "2-digit",
            minute:"2-digit",
            second: "2-digit",
            day: "numeric",
            month: "long"
        }
    )}`;
    return actualDate;
}
