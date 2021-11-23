import { ClockElement } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const actualDate = (date) => `${date.toLocaleString(undefined,
        {
            weekday: "long",
            hour: "2-digit",
            minute:"2-digit",
            second: "2-digit",
            day: "numeric",
            month: "long"
        }
    )}`;

const Clock = () => {
    const date = useCurrentDate();
    
    return (
        <ClockElement>Dzisiaj jest {actualDate(date)}</ClockElement>
    )
};

export default Clock;