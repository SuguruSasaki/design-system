import React from "react"
import Button from "@material-ui/core/Button"

type UIRadioProps = {
    label: string
}

const UIRadio: React.FC<UIRadioProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default UIRadio