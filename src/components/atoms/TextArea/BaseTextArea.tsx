import React from "react"
import sc from "styled-components"
import { styled } from "@material-ui/core/styles"
import TextAreaAutoSize from '@material-ui/core/TextareaAutosize'
import { client } from "../../../theme/colors"

type BaseTextAreaProps = {
    label?: string
    placeholder?: string
    className?: string
}

const BaseTextArea: React.FC<BaseTextAreaProps> = ({  className, placeholder, label}) => (
    <Wrapper>
        <TitleLabel>{label}</TitleLabel>
        <TextAreaAutoSize className={className} placeholder={placeholder}  />
    </Wrapper>
)

const Wrapper = sc.div`
    position: relative;
    textarea {
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 4px;

        &:focus {
            border: 1px solid ${client.primary.main};
        }
    }   
`

const TitleLabel = sc.label`
    background-color: #FFF;
    padding: 0 4px;
    font-weight: normal;
    font-size: 0.75rem;
    display: block;
    position: absolute;
    top: -10px;
    left: 14px;
`

export default styled(BaseTextArea)({
   

})