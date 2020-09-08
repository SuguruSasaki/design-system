import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const Body2: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.body2} component={Tags.p}>
        {children}
    </UITypography>
}

export default Body2