import React from "react"
import Badge from "@material-ui/core/Badge"

type UIBadgeProps = {
    icon: any
    badgeNumber: number
}

const UIBadge: React.FC<UIBadgeProps> = ({ icon, badgeNumber }) => {
    return (
        <Badge badgeContent={badgeNumber} color="primary">
            {icon}
        </Badge>
    )
}

export default UIBadge