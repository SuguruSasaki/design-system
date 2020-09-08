import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const Body1: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.body1} component={Tags.p}>
        {children}
    </UITypography>
}

export default Body1