import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

import AuthService from "../../services/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },

  generalError: {
    color: "red",
    fontWeight: "bold",
  },
}));

const RegisterForm = ({ handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = ({ username, email, password }) => {
    AuthService.register(username, email, password).then(
      (registerRes) => {
        snackbarMessageFunc(`${registerRes.data.message} | يعطيك العافية`);
        AuthService.login(username, password).then(
          (loginRes) => {
            setLoggedIn(true);
            setUser(localStorage.getItem("user"));
            snackbarMessageFunc(`${loginRes.username} logged in | أهلا وسهلا`);
            handleClose();
          },
          (error) => {
            setError("general", {
              type: "manual",
              message: error.response.data,
            });
          }
        );
      },
      (error) => {
        setError("general", {
          type: "manual",
          message: error.response.data,
        });
      }
    );
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Username"
            variant="filled"
            value={value}
            onChange={(e) => {
              clearErrors("general");
              onChange(e);
            }}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Username required" }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="filled"
            value={value}
            onChange={(e) => {
              clearErrors("general");
              onChange(e);
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: "Email required" }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: "Password required" }}
      />
      {errors.general && (
        <p className={classes.generalError}>{errors.general.message}</p>
      )}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
