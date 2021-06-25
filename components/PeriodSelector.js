import { useState, useEffect } from 'react'
import PeriodButton from "./PeriodButton"

export default function PeriodSelector(props) {

    const { onPeriodChange } = props

    const [activePeriod, setActivePeriod] = useState("1")

    useEffect(() => {
        onPeriodChange(activePeriod)
    }, [activePeriod])

    return (
        <>
            <p>Period: </p>
            <PeriodButton activePeriod={activePeriod} period="1" onPeriodChange={setActivePeriod} />
            <PeriodButton activePeriod={activePeriod} period="7" onPeriodChange={setActivePeriod} />
            <PeriodButton activePeriod={activePeriod} period="30" onPeriodChange={setActivePeriod} />
        </>
    )
}