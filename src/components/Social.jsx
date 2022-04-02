import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import  Link from "@material-ui/core/Link";

const socialItems = [
  { icon: GithubIcon, url: "https://github.com/Nishabhooshan" },
  { icon: TwitterIcon, url: "https://twitter.com/" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/nisha-bhooshan/" },
];

export default function Social({direction}) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item>
            <Link href={item.url}>
          <IconButton>
            <item.icon />{" "}
          </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
