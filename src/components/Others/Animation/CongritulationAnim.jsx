import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



const CongritulationAnim = () => {
    const { width, height } = useWindowSize()
    console.log("Width:", width)
    console.log("Width:", height)

    const customWidth = width / 100 * 99
    const customHeight = height / 100 * 95

    console.log("CustomW:", customWidth)
    console.log("CustomH:", customHeight)


    return (
        <Confetti
            width={customWidth}
            height={customHeight}
        />
    )
}

export default CongritulationAnim