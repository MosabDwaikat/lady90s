import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import useStyles from "./index.styles";

const ErrorPage = () => {
  const error = useRouteError();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Box className={classes.errorPageContainer}>
      <Typography variant="h1">Oops!</Typography>
      <Typography>
        {isRouteErrorResponse(error) ? "Something went wrong" : "An error occurred while fetching the page."}
      </Typography>
      <Button className={classes.goHomeBtn} onClick={navigateToHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
