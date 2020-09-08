import React, { Children } from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H4: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.h4} component={Tags.h4}>
        {children}
    </UITypography>
}

export default H4