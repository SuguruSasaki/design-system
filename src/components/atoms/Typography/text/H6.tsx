import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H6: React.FC<Props> = ({ children }) => {
    return (
        <UITypography variant={Variants.h6} component={Tags.h6}>
            {children}
        </UITypography>
    )
}

export default H6