import { styled } from "@material-ui/core/styles";
import Button from "../BaseButton";
import { student } from "../../../../theme/colors";

export default styled(Button)({
  padding: "8px 12px",
  border: `1px solid ${student.primary.main}`,
  "border-radius": "3px",
  color: `${student.primary.main}`,
  background: "transparent",
});
