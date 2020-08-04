import React from "react"
import styled from "styled-components"
import {Tabs, Tab} from "@material-ui/core/"

type UITabsProps = {
    defaultValue: number
    collections: Array<string>
}

const UITabs: React.FC<UITabsProps> = ({ collections, defaultValue }) => {
    return (
    <Wrapper>
        <Tabs value={defaultValue}>
        { collections.map(data => <Tab label={data} />)}
        </Tabs>
    </Wrapper>
    )
}

const Wrapper = styled.div``

export default UITabs