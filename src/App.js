import "./styles.js";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
} from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";

import { PhotoCamera } from "@material-ui/icons";

import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";

import useStyles from "./styles.js";
import { useState } from "react";

function App() {
  const classes = useStyles();

  const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">ALbum</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A component whose root component can be controlled via a
              `component` prop. A component whose root component can be
              controlled via a `component` prop. A component whose root
              component can be controlled via a `component` prop.
            </Typography>

            <div className={classes.buttons}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button variant="contained" className={classes.button1} color="primary">
                    See photos
                  </Button>

                  <Button variant="outlined" className={classes.button1} color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid key={card} item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        This is card
                      </Typography>
                      <Typography>
                        This is card contenr cinuded in dhgdh
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          <footer className={classes.footer}>
            <Typography variant="h6" glutterbottom align="center">
              Footer
            </Typography>

            <Typography
              variant="subtitle1"
              color="textSecondary"
              align="center"
            >
              This is footer! Copyright 2022
            </Typography>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
