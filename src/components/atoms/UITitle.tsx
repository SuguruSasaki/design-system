import React from "react"
import styled from "styled-components"

type UITitleProps = {
    label: string
}

const UITitle: React.FC<UITitleProps> = ({ label }) => {
    return <Styleh1>{label}</Styleh1>
}

const Styleh1 = styled.h1`

`

export default UITitle