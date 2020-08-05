import React from "react"
import Button from "@material-ui/core/Button"

type SelectboxProps = {
    label: string
}

const Selectbox: React.FC<SelectboxProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default Selectbox