
const Result = ({ result }) => (
    <p className="form__paragraph">
        {result !== undefined && (
            <>
                Otrzymasz: <strong className="form__result">{(result.afterConversion.toFixed(2))}&nbsp;{result.currency}</strong>
            </>
        )}
    </p>
)
export default Result;