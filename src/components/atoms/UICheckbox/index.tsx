import React from "react"
import Button from "@material-ui/core/Button"

type UICheckboxProps = {
    label: string
}

const UICheckbox: React.FC<UICheckboxProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default UICheckbox