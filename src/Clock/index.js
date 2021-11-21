import { ClockElement } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockElement>Dzisiaj jest {date}</ClockElement>
    )
};

export default Clock;