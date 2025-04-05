import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    underline="none"
    color="text.primary"
    sx={{
      fontSize: "20px",
      fontWeight: 400,
      "&:hover": {
        color: "primary.main",
      },
    }}
  >
    {children}
  </Link>
);

const FooterSection = ({ title, links }) => (
  <Box>
    <Typography variant="h3" color="text.primary" gutterBottom>
      {title}
    </Typography>
    <Stack spacing={2}>
      {links.map((link, index) => (
        <FooterLink key={index} href="#">
          {link}
        </FooterLink>
      ))}
    </Stack>
  </Box>
);

export default function AboutUsFooter() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: { xs: 5, md: 12 },
        pt: 11,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/339ad448f7fd7a282f139e4cc1796394623d90fc?placeholderIfAbsent=true&apiKey=0c9b1eba89b5459ebe1f91bef70b3aed"
              alt="Logo"
              sx={{ width: 220, mb: 3 }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Animi distinctio quia amet possimus sit. Voluptatum sunt corrupti
              iste voluptas itaque hic. Dolore sed quia et totam.
            </Typography>
            <Typography variant="h3" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/33cc893554da0aa7809f849814cd98be55039814?placeholderIfAbsent=true&apiKey=0c9b1eba89b5459ebe1f91bef70b3aed"
                  alt="Email"
                  sx={{ width: 30 }}
                />
                <Typography variant="body1">Noe_Rempel30@yahoo.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e5c0bedbdca64b60ddc313d3d0c63356965b351?placeholderIfAbsent=true&apiKey=0c9b1eba89b5459ebe1f91bef70b3aed"
                  alt="Phone"
                  sx={{ width: 30 }}
                />
                <Typography variant="body1">275-437-1694</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <FooterSection
                  title="About us"
                  links={[
                    "Evaluation Process",
                    "Trading Objectives",
                    "Why our FTMO Challenge?",
                    "Testimonials",
                    "Scaling Plan",
                    "Affiliate Programme",
                    "Terms & Conditions",
                    "Careers",
                    "Press Kit",
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FooterSection
                  title="Trading"
                  links={[
                    "Calendar",
                    "Shop",
                    "FTMO Academy",
                    "Premium Programme",
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FooterSection
                  title="Apps"
                  links={[
                    "News Indicator",
                    "Quick Trade Manager",
                    "Equity Simulator",
                    "Mentor App",
                    "Trading Journal",
                    "Statistical App",
                    "Account Analysis",
                    "Account MetriX",
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "primary.main",
          mt: { xs: 5, md: 11 },
          py: 4,
          px: { xs: 2, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="body1" color="text.secondary">
                All information provided on this site is intended solely for
                educational purposes related to trading on financial markets and
                does not serve in any way as a specific investment
                recommendation, business recommendation, investment opportunity
                analysis or similar general recommendation regarding the trading
                of investment instruments.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <FooterLink href="#">Contact Options</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Cookies</FooterLink>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, borderColor: "secondary.main" }} />
          <Typography variant="body1" color="text.secondary">
            2023 © Copyright - FTMO.com Made with for trading
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
