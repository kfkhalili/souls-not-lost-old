import React from "react";
import { MuiController } from "./MuiController";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
  },
}));

const MuiTextField = ({ label, onChange, error }) => {
  const classes = useStyles();
  return (
    <TextField
      className={clsx(classes.margin, classes.textField)}
      label={label}
      onChange={onChange}
      variant="outlined"
      error={!!error}
      helperText={error ? error.message : null}
    />
  );
};

export default MuiController(MuiTextField);
