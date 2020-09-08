import React, { Children } from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H2: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.h2} component={Tags.h2}>
        {children}
    </UITypography>
}

export default H2