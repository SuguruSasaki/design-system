import BaseButton from "../BaseButton"
import { styled } from "@material-ui/core/styles"
import { student } from "../../../../theme/colors"

export default styled(BaseButton)({
    "background-color": `${student.primary.main}`,
    "border-radius": "2px",
    "padding": "15px 12px",
    color: "#FFF",
    "font-weight": "bold",
    "&:hover" : {
        "background-color": `${student.primary.light}`,
        color: `${student.primary.main}`,
    },
    "&:disabled" : {
        "background-color": `#FAFAFA`,
    }
})