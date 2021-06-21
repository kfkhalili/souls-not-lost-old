import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import clsx from "clsx";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import CountrySelect from "./CountrySelect";
import FileUploader from "./FileUploader";

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
    "& .MuiButtonBase-root": {
      margin: theme.spacing(3),
    },
  },
  generalError: {
    color: "red",
    fontWeight: "bold",
  },
  imgDiv: {
    paddingBottom: "100%",
    display: "block",
    position: "relative",
  },
  media: {
    position: "absolute",
    left: 0,
    top: 0,
    objectFit: "scale-down",
    maxWidth: "100%",
  },
}));

const UploadForm = ({ handleClose, snackbarMessageFunc }) => {
  const classes = useStyles();

  const [dialogPhoto, setDialogPhoto] = useState(
    "https://i.imgflip.com/1slnr0.jpg"
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm({ reValidateMode: "onChange" });

  const [dob, setDob] = useState(null);
  const [dobOpen, setDobOpen] = useState(false);
  const [dod, setDod] = useState(null);
  const [dodOpen, setDodOpen] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1} justify="space-around">
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.imgDiv}>
            <CardMedia
              component={"img"}
              className={classes.media}
              src={dialogPhoto}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                label="Name"
                value={value}
                onChange={(e) => {
                  clearErrors("general");
                  onChange(e);
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Name required" }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="birth"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  onClick={() => setDobOpen(true)}
                  open={dobOpen}
                  onClose={() => setDobOpen(false)}
                  margin="normal"
                  variant='inline'
                  keyboardIcon={false}
                  inputVariant="outlined"
                  autoOk={true}
                  placeholder={"Birth"}
                  value={dob}
                  label={dob && "Birth"}
                  format="dd.MM.yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  onChange={(date) => setDob(date)}
                />
              )}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="death"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  onClick={() => setDodOpen(true)}
                  open={dodOpen}
                  onClose={() => setDodOpen(false)}
                  margin="normal"
                  variant='inline'
                  keyboardIcon={false}
                  inputVariant="outlined"
                  placeholder={"Death"}
                  autoOk={true}
                  value={dod}
                  label={dod && "Death"}
                  format="dd.MM.yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  onChange={(date) => setDod(date)}
                />
              )}
            />
          </MuiPickersUtilsProvider>
          <CountrySelect control={control} />
          <Controller
            name="occupation"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Occupation"
                variant="outlined"
                value={value}
                onChange={(e) => {
                  clearErrors("general");
                  onChange(e);
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Occupation required" }}
          />
          <Controller
            name="deathCause"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Cause of Death"
                variant="outlined"
                value={value}
                onChange={(e) => {
                  clearErrors("general");
                  onChange(e);
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Cause of Death required" }}
          />
          <Controller
            name="url"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="Url Reference"
                variant="outlined"
                value={value}
                onChange={(e) => {
                  clearErrors("general");
                  onChange(e);
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Url required" }}
          />
          <Controller
            name="picture"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FileUploader />
            )}
            rules={{ required: "Picture required" }}
          />
        </Grid>
      </Grid>
      {errors.general && (
        <p className={classes.generalError}>{errors.general.message}</p>
      )}
      <div>
        <Button
          variant="contained"
          onClick={() => {
            setDialogPhoto("https://i.imgflip.com/1slnr0.jpg");
            handleClose();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Upload
        </Button>
      </div>
    </form>
  );
};

export default UploadForm;
