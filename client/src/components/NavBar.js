
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withSnackbar } from "./SnackbarHOC";
import RegisterModal from './Register/RegisterModal';
import LoginModal from './Login/LoginModal';
import UploadModal from './Upload/UploadModal';
import AuthService from "../services/auth";

const useStyles = makeStyles(theme => ({
  root: {
    top: '0',
    backgroundColor: '#000'
  },
  menuButton: {
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
}));

const Navbar = ({ snackbarMessageFunc }) => {
  const classes = useStyles();

  const [openRegister, setOpenRegister] = useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);


  const [user, setUser] = useState(localStorage.getItem("user"))
  const [loggedIn, setLoggedIn] = useState(user ? true: false);
  const handleLogOut = () => {
    AuthService.logout()
    setUser({});
    setLoggedIn(false);
  }

  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openUpload, setOpenUpload] = useState(false);
  const handleOpenUpload = () => setOpenUpload(true);
  const handleCloseUpload = () => setOpenUpload(false);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Souls Not Lost
        </Typography>
        {loggedIn ?
        <>
        <Button className={classes.menuButton} color="inherit" onClick={handleOpenUpload}>
          Upload
        </Button>
        <Button className={classes.menuButton} color="inherit" onClick={handleLogOut}>
          Logout
        </Button>
        </>
        :
        <>
        <Button className={classes.menuButton} color="inherit" onClick={handleOpenLogin}>
          Login
        </Button>
        <Button className={classes.menuButton} color="inherit" onClick={handleOpenRegister}>
          Signup
        </Button>
        </>
        }
      </Toolbar>
      <RegisterModal open={openRegister} handleClose={handleCloseRegister} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
      <LoginModal open={openLogin} handleClose={handleCloseLogin} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
      <UploadModal open={openUpload} handleClose={handleCloseUpload} snackbarMessageFunc={snackbarMessageFunc} />
    </AppBar>
  );
};

export default withSnackbar(Navbar);

