export default function PeriodButton(props) {

    const { activePeriod, period, onPeriodChange } = props

    const buttonClass = activePeriod == period ?
    "px-2 p-1 bg-gray-600 text-white font-bold rounded-md text-sm" :
    "px-2 p-1 border border-gray-300 rounded-md text-sm cursor-pointer"

    return (
        <p className={buttonClass}
        onClick={() => onPeriodChange(period)}>
            {period}d
        </p>
    )
}