import { ResultElement } from "./styled";

const Result = ({ result }) => (
    <ResultElement>
        Otrzymasz:&nbsp;
        {result !== undefined && (
            <>
                <strong className="form__result">{(result.afterConversion.toFixed(2))}&nbsp;{result.currency}</strong>
            </>
        )}
    </ResultElement>
);

export default Result;