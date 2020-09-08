import React, { Children } from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H3: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.h3} component={Tags.h3}>
        {children}
    </UITypography>
}

export default H3