import React, { useRef, useState } from "react";
import { globalCss, styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import * as LabelPrimitive from "@radix-ui/react-label";
import Button from "./Button";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box"
  }
});

const H1 = styled("h1", {
  fontSize: "2rem",
  marginBottom: "1rem"
});

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: "white",
  userSelect: "none"
});

const Label = StyledLabel;

// Your app...
const Flex = styled("div", { display: "flex" });
const Input = styled("input", {
  all: "unset",
  width: "min(200px, 30vw)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 10px",
  height: 35,
  fontSize: 15,
  lineHeight: 1,
  color: "white",
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  "&:focus": { boxShadow: `0 0 0 2px black` }
});

export default function App() {
  globalStyles();

  const [inputValue, setInputValue] = useState("John Smith");
  const inputRef = useRef(null);

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(45deg, blue, red)",
        padding: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <H1>Hello{inputValue && ` ${inputValue}`}!</H1>
      <Flex
        css={{
          padding: "0 20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Label
          htmlFor="firstName"
          css={{ lineHeight: "35px", marginRight: 15 }}
        >
          First name
        </Label>
        <Input
          type="text"
          id="firstName"
          ref={inputRef}
        />
      </Flex>
      <Flex css={{ margin: "2rem auto" }}>
        <Button
          onClick={() => {
            setInputValue(inputRef.current.value);
          }}
        >
          Save
        </Button>
        <Button
          type="reset"
          onClick={() => {
            inputRef.current.value = "";
            setInputValue("");
          }}
        >
          Reset
        </Button>
      </Flex>
    </div>
  );
}
