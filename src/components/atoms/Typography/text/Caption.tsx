import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const Caption: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.caption} component={Tags.caption}>
        {children}
    </UITypography>
}

export default Caption