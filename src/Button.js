import { styled } from "@stitches/react";

const Button = styled("button", {
  all: "unset",
  padding: ".6rem 1rem",
  margin: ".4rem",
  borderRadius: ".6rem",
  cursor: "pointer",
  transition: "transform .08s ease-in-out",
  "&:active": {
    transform: "translate(0, 2px) scale(0.95)"
  },
  "&:focus": {
    outline: "3px solid #aaaaffaa",
    boxShadow: "0 0 15px #aaaaffaa"
  },

  variants: {
    variant: {
      dark: {
        background: "#333333",
        color: "#e3e3e3",
        "&:hover": {
          background: "#444444"
        }
      },
      light: {
        background: "#e3e3e3",
        color: "#22181c",
        "&:hover": {
          background: "#c6c6c6"
        }
      },
      outlined: {
        backgroundColor: "#ffffff00",
        backdropFilter: "blur(1px)",
        transition:
          "transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out",
        color: "#22181c",
        border: "1px solid #11181c",
        "&:hover": {
          backdropFilter: "blur(2px)",
          backgroundColor: "#e6e6e633"
        }
      }
    }
  },
  defaultVariants: {
    variant: "dark"
  }
});

export default Button;
