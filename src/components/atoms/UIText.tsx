import React from "react"
import styled from "styled-components"

type UITextProps = {
    str: string
}

const UIText: React.FC<UITextProps> = ({ str }) => {
    return <StyleP>{str}</StyleP>
}

const StyleP = styled.p`
    font-size: 1.0rem;
`

export default UIText