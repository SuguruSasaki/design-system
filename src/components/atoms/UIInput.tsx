import React from "react"
import Button from "@material-ui/core/Button"

type UIInputProps = {
    label: string
}

const UIInput: React.FC<UIInputProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default UIInput