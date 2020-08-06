import BaseButton from "../BaseButton"
import { styled } from "@material-ui/core/styles"
import { client } from "../../../../theme/colors"



export default styled(BaseButton)({
    "background-color": `${client.primary.main}`,
    color: "#FFF",
    "font-weight": 500,
    "&:hover" : {
        "background-color": `${client.primary.light}`,
        color: `${client.primary.main}`,
    }
})