import "./style.css"

const Result = ({ result }) => (
    <p className="form__paragraph">
        Otrzymasz:&nbsp;
        {result !== undefined && (
            <>
                <strong className="form__result">{(result.afterConversion.toFixed(2))}&nbsp;{result.currency}</strong>
            </>
        )}
    </p>
)
export default Result;