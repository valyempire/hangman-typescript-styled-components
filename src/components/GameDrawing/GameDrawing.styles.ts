/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the ImgContainer
 */
export const ImgContainer = styled("img")(({ theme }) => {
  return {
    width: 200,
    height: 260,
    border: "10px solid white",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.27)",
    [theme.breakpoints.down("md")]: {
      width: "40%",
      height: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "50%",
    },
  };
});
