import React, { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  TextField,
  Button,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: "6rem 0",
  background: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: "4rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 0",
  },
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: "3rem",
  boxShadow: `0 8px 32px ${theme.palette.primary.main}10`,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
    borderRadius: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    background: `${theme.palette.background.paper}50`,
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    "&:hover": {
      background: `${theme.palette.background.paper}70`,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
    "&.Mui-focused": {
      background: `${theme.palette.background.paper}80`,
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
      },
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.main,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: "50px",
  padding: "12px 32px",
  fontSize: "1.1rem",
  fontWeight: 600,
  textTransform: "none",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  },
  "&:disabled": {
    background: theme.palette.grey[400],
    transform: "none",
  },
}));

const SocialButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  background: `${theme.palette.background.paper}80`,
  backdropFilter: "blur(20px)",
  border: `1px solid ${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  textDecoration: "none",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-3px) scale(1.05)",
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: "white",
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
  },
  "&:focus": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "2px",
  },
}));

// Email Link Component for better mailto handling
const EmailLink = ({ children, className, style }) => {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:rajeshpasi447@gmail.com";
  };

  return (
    <a
      href="mailto:rajeshpasi447@gmail.com"
      onClick={handleEmailClick}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

// Form Status Component
const FormStatus = ({ result, isSubmitting }) => {
  if (isSubmitting) {
    return (
      <Box className="flex items-center justify-center gap-2 mt-4">
        <CircularProgress size={20} />
        <Typography variant="body2" color="text.secondary">
          Sending message...
        </Typography>
      </Box>
    );
  }

  if (result) {
    const isSuccess = result === "Form Submitted Successfully";
    return (
      <Alert
        severity={isSuccess ? "success" : "error"}
        className="mt-4"
        sx={{ borderRadius: "12px" }}
      >
        {result}
      </Alert>
    );
  }

  return null;
};

// Contact Form Component
const ContactForm = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "50a495a9-f872-498e-a248-e3e398863c1a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard>
      <Typography variant="h4" color="primary" sx={{ fontWeight: 600, mb: 3 }}>
        Send me a message
      </Typography>

      <form onSubmit={onSubmit}>
        <Stack spacing={3}>
          <StyledTextField
            fullWidth
            label="Your Name"
            name="name"
            required
            variant="outlined"
            disabled={isSubmitting}
          />

          <StyledTextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            required
            variant="outlined"
            disabled={isSubmitting}
          />

          <StyledTextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            required
            variant="outlined"
            disabled={isSubmitting}
          />

          <SubmitButton
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Box className="flex items-center gap-2">
                <CircularProgress size={20} color="inherit" />
                Sending...
              </Box>
            ) : (
              "Send Message"
            )}
          </SubmitButton>
        </Stack>
      </form>

      <FormStatus result={result} isSubmitting={isSubmitting} />
    </GlassCard>
  );
};

// Social Links Component
const SocialLinks = () => {
  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/rajeshpasi",
      label: "GitHub",
      isEmail: false,
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/rajesh-kumar-pasi/",
      label: "LinkedIn",
      isEmail: false,
    },
    {
      icon: faEnvelope,
      href: "mailto:rajeshpasi447@gmail.com",
      label: "Email",
      isEmail: true,
    },
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:rajeshpasi447@gmail.com";
  };

  return (
    <Stack direction="row" spacing={2} className="mb-6">
      {socialLinks.map((social, index) => (
        <SocialButton
          key={index}
          href={social.href}
          target={social.isEmail ? undefined : "_blank"}
          rel={social.isEmail ? undefined : "noopener noreferrer"}
          aria-label={social.label}
          onClick={social.isEmail ? handleEmailClick : undefined}
        >
          <FontAwesomeIcon icon={social.icon} />
        </SocialButton>
      ))}
    </Stack>
  );
};

// Contact Info Component
const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center">
      <GlassCard>
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: 600, mb: 3 }}
        >
          Get in touch
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          sx={{ fontSize: "1.1rem", lineHeight: 1.7, mb: 4 }}
        >
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and development. Feel free to
          reach out through any of the channels below.
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Connect with me:
        </Typography>

        <SocialLinks />

        <Box className="space-y-3">
          <div className="flex items-center gap-3">
            <Box sx={{ color: "primary.main", fontSize: "1.2rem" }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </Box>
            <Typography variant="body1" color="text.primary">
              <EmailLink
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
                className="hover:underline"
              >
                
                rajeshpasi447@gmail.com
              </EmailLink>
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <Box sx={{ color: "primary.main", fontSize: "1.2rem" }}>
              <FontAwesomeIcon icon={faGithub} />
            </Box>
            <Typography variant="body1" color="text.primary">
              <a
                href="https://github.com/rajeshpasi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Go to GitHub
              </a>
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <Box sx={{ color: "primary.main", fontSize: "1.2rem" }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Box>
            <Typography variant="body1" color="text.primary">
              <a
                href="https://www.linkedin.com/in/rajesh-kumar-pasi/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Go to LinkedIn
              </a>
            </Typography>
          </div>
        </Box>
      </GlassCard>
    </div>
  );
};

const ContactSection = () => {
  return (
    <ContactContainer id="contact-section">
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          className="text-center mb-4"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          Let's Work Together
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            className="text-center mb-12 max-w-2xl mx-auto p-4  my-4"
            align="center"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              textAlign: "center",
              mx: "auto",
              width: "100%",
            }}
            style={{ textAlign: "center" }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </Typography>
        </Box>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </ContactContainer>
  );
};

export default ContactSection;
