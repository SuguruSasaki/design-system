import React from "react"
import Typography from "@material-ui/core/Typography"

export enum Variants{
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    body1 = "body1",
    body2 = "body2",
    caption = "caption"
}

export enum Tags {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    p = "p",
    caption = "caption",
    span = "span"
}

type UITypographyProps = {
    children: React.ReactNode
    variant: Variants
    component: React.ElementType<any>
}

const UITypography: React.FC<UITypographyProps> = ({ children, variant, component }) => {
    return (
        <Typography variant={variant} component={component}>
            {children}
        </Typography>
    )
}

export default UITypography