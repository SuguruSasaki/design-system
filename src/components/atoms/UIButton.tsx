import React from "react"
import Button from "@material-ui/core/Button"

type UIButtonProps = {
    label: string
}

const UIButton: React.FC<UIButtonProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default UIButton