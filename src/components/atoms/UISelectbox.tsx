import React from "react"
import Button from "@material-ui/core/Button"

type UISelectboxProps = {
    label: string
}

const UISelectboxProps: React.FC<UISelectboxProps> = ({ label }) => {
    return <Button>{label}</Button>
}

export default UISelectbox