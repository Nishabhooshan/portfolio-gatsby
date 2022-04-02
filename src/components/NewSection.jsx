import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
  },
  content: {
    height: "100%",
  },
  container: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  newImage: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
}));

export default function NewSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true));
  return (
    <Paper className={styles.section}>
      <StaticImage
        className={styles.newImage}
        src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hi, I'm Nisha Bhooshan. I'm a software engineer.{" "}
              </Typography>
              <Typography variant="h5">
                I build websites, web application and responsive user interface.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:address@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in touch{" "}
                </Button>
              </Box>
            </Grid>
          </Zoom>

          <Hidden xsDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
