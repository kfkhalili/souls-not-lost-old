import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

import MuiTextField from "../MuiComponents/MuiTextField";
import FileUploader from "./FileUploader";

import ImageService from "../../services/image"

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
      margin: theme.spacing(1),
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

  const onSubmit = (data) => {
    ImageService.create(data)
  };

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
          <MuiTextField
            name={"name"}
            control={control}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"birth"}
            control={control}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"death"}
            control={control}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"nationality"}
            control={control}
            generalError={"general"}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"occupation"}
            control={control}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"causeOfDeath"}
            control={control}
            clearErrors={clearErrors}
          />
          <MuiTextField
            name={"url"}
            control={control}
            clearErrors={clearErrors}
          />
          <Controller
            name="picture"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <FileUploader
                handleFile={onChange}
                setDialogPhoto={setDialogPhoto}
                error={error}
              />
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
