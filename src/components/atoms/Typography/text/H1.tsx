import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H1: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.h1} component={Tags.h1}>
        {children}
    </UITypography>
}

export default H1