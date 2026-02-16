import { Box, Drawer, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  const links = [
    { label: "Current projects", href: "#projects", className: "coming-soon" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.co.in/citations?user=4ilAyWsAAAAJ&hl=en",
    },
    {
      label: "Wikipedia",
      href: "https://en.wikipedia.org/wiki/Saroj_Kanta_Barik",
    },
  ];

  const socialLinks = [
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/saroj-barik-01448ba1/",
      label: "LinkedIn",
    },
    {
      icon: XIcon,
      href: "https://x.com/sarojkbarik",
      label: "X",
    },
    {
      icon: EmailIcon,
      href: "mailto:sarojkbarik@gmail.com",
      label: "Email",
    },
  ];

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "var(--primary-color)",
          width: { xs: "100%", sm: "400px", md: "450px" },
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.5rem",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          paddingTop: "60px",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            onClick={onClose}
            className={link.className}
            sx={{
              fontSize: "1.25rem",
              color: "var(--neutral-color)",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.3s",
              "&:hover": {
                color: "var(--neutral-color)",
              },
              "&.coming-soon": {
                color: "rgba(var(--neutral-color-rgb), 0.6)",
                pointerEvents: "none",
                cursor: "not-allowed",
                "&:hover": {
                  color: "rgba(var(--neutral-color-rgb), 0.6)",
                },
              },
            }}
          >
            {link.label}
          </Link>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
          paddingBottom: "2rem",
          borderTop: "1px solid rgba(var(--neutral-color-rgb), 0.2)",
          paddingTop: "2rem",
        }}
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--neutral-color)",
              transition: "color 0.3s",
              "&:hover": {
                color: "var(--neutral-color)",
              },
            }}
          >
            <Icon sx={{ fontSize: "28px" }} />
          </Link>
        ))}
      </Box>
    </Drawer>
  );
};
