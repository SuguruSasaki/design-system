import React from "react"
import TextField from "@material-ui/core/TextField"

type UITextAreaProps = {
    placeholder?: string
}

const UITextArea: React.FC<UITextAreaProps> = ({ placeholder }) => {
    return <TextField placeholder={placeholder}/>
}

export default UITextArea