import React from "react"
import UITypography, { Variants, Tags } from "../index"

type Props = {
    children: React.ReactNode
}

const H5: React.FC<Props> = ({ children }) => {
    return <UITypography variant={Variants.h5} component={Tags.h5}>
        {children}
    </UITypography>
}

export default H5