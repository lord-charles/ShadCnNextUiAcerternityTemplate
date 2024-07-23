"use client";

import { m } from "framer-motion";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { bgGradient } from "../../components/theme/css";

// ----------------------------------------------------------------------
const CONTACTS = [
  {
    country: "Kenya",
    address: "123 Health St, Nairobi",
    phoneNumber: "254 712345678",
    email: "info@carepulsehospital.com",
  },
  {
    country: "Mission",
    address:
      "To provide the highest quality healthcare services with compassion and care.",
  },
  {
    country: "Vision",
    address:
      "To be the leading healthcare provider in Africa, known for our excellence in patient care.",
  },

  {
    country: "Emergency Contact",
    address: "Available 24/7",
    phoneNumber: "254 798765432",
    email: "emergency@carepulsehospital.com",
  },
];

// ----------------------------------------------------------------------
export default function ContactHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: "/assets/images/contact/hero.jpg",
        }),
        height: { md: 560 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container>
        <Box
          sx={{
            bottom: { md: 80 },
            position: { md: "absolute" },
            textAlign: { xs: "center", md: "unset" },
          }}
          className="container"
        >
          <TextAnimate
            text={"Where"}
            sx={{ color: "primary.main" }}
            className="text-green-500 font-extrabold text-[60px]"
          />
          <br />

          <Stack
            spacing={2}
            display="inline-flex"
            direction="row"
            sx={{ color: "common.white" }}
          >
            <TextAnimate
              text={"to"}
              className="text-white font-extrabold text-[60px]"
            />
            <TextAnimate
              text={"find"}
              className="text-white font-extrabold text-[60px]"
            />
            <TextAnimate
              text={"us?"}
              className="text-white font-extrabold text-[60px]"
            />
          </Stack>

          <Stack
            spacing={5}
            alignItems={{ xs: "center", md: "unset" }}
            direction={{ xs: "column", md: "row" }}
            sx={{ mt: 5, color: "common.white" }}
          >
            {CONTACTS.map((contact) => (
              <Stack key={contact.country} sx={{ maxWidth: 180 }}>
                <div>
                  <Typography variant="h6" gutterBottom>
                    {contact.country}
                  </Typography>
                </div>
                <h2>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {contact.address}
                  </Typography>
                </h2>
                {contact.phoneNumber && (
                  <h2>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {contact.phoneNumber}
                    </Typography>
                  </h2>
                )}
                {contact.email && (
                  <h2>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {contact.email}
                    </Typography>
                  </h2>
                )}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: "h1",
        overflow: "hidden",
        display: "inline-flex",
        ...sx,
      }}
      {...other}
    >
      {text.split("").map((letter, index) => (
        <h2 key={index}>{letter}</h2>
      ))}
    </Box>
  );
}

TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
