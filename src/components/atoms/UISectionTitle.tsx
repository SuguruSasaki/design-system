import React from "react"
import styled from "styled-components"

type UISectionTitleProps = {
    label: string
}

const UISectionTitle: React.FC<UISectionTitleProps> = ({ label }) => {
    return <StyledH2>{label}</StyledH2>
}

const StyledH2 = styled.h2`
`

export default UISectionTitle