import React from "react"
import Typography from "@material-ui/core/Typography"

export enum Variants {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
}


type UITypographyProps = {
    label: string
    variant: Variants
    component: React.ElementType<any>
}

const UITypography: React.FC<UITypographyProps> = ({ label, variant, component }) => {
    return (
        <Typography variant={variant} component={component}>
            {label}
        </Typography>
    )
}

export default UITypography