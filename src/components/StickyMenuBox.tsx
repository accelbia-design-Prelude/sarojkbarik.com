import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { MenuDrawer } from "./MenuDrawer";

export const StickyMenuBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 1300,
          backgroundColor: "var(--neutral-color)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <IconButton
          onClick={handleMenuClick}
          sx={{
            color: "var(--accent-color)",
            transition: "color 0.3s",
            "&:hover": {
              color: "rgba(var(--accent-color-rgb), 0.9)",
            },
          }}
        >
          {isOpen ? (
            <CloseIcon sx={{ fontSize: "28px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "28px" }} />
          )}
        </IconButton>
      </Box>
      <MenuDrawer isOpen={isOpen} onClose={handleCloseDrawer} />
    </>
  );
};
