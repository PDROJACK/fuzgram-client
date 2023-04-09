import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Slide, Button, TextField } from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  slide: {
    position: "fixed",
    top: 10,
    left: "25%",
    width: "50%",
    height: "12%",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: 5,
  },
  textField: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
    marginBottom: 5,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

type ShareLinkI = {
  open: boolean;
  setOpen: any;
};

const ShareLinkSlideUp = ({ open, setOpen }: ShareLinkI) => {
  const { classes } = useStyles();
  //   const [open, setOpen] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpen(false);
  };

  return (
    <>
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <div className={classes.slide}>
          <TextField
            label="Share Link"
            variant="outlined"
            value={window.location.href}
            contentEditable={false}
            className={classes.textField}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopyLink}
            className={classes.button}
          >
            Copy Link
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            color="error"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          {/* #TODO: Redirect to main app */}
          <Button
            variant="outlined"
            className={classes.button}
            color="success"
            onClick={() => setOpen(false)}
          >
            Build your own
          </Button>
        </div>
      </Slide>
    </>
  );
};

export default ShareLinkSlideUp;
