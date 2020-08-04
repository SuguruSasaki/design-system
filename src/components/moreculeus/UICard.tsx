import React from "react"
import styled from "styled-components"
import Card from "@material-ui/core/Card"

type UICardProps = {
    children: any
}

const UICard: React.FC<UICardProps> = ({ children }) => {
    return <Card>{children}</Card>
}



export default UICard