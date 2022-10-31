import { Box } from "@mui/material";
import Logo from "components/logo";
import { useTheme } from "contexts/ThemeContext";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { RootStyle, ToolbarStyle } from "./navbar.styled";

export default function Navbar() {
  const { isDarkMode, darkModeToggle } = useTheme();


  return (
    <RootStyle>
      <ToolbarStyle>

        <Logo
          src={
            isDarkMode
              ? "/static/standard-push-logo-white.svg"
              : "/static/standard-push-logo-dark.svg"
          }
          sx={{ width: 140, height: 120 }}
        />

        <DarkModeSwitch
          style={{ margin: "0 1rem" }}
          checked={isDarkMode}
          onChange={darkModeToggle}
          size={28}
          sunColor="#494D5F"
          moonColor="#787E99"
        />

      </ToolbarStyle>
    </RootStyle>
  );
}
