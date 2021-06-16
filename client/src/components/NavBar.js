
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RegisterModal from './RegisterModal';

const useStyles = makeStyles(theme => ({
  root: {
    top: '0',
    backgroundColor: '#000'
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Souls Not Lost
        </Typography>
        
        <Button color="inherit" onClick={handleOpen}>
          Signup
        </Button>
      </Toolbar>
      <RegisterModal open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Navbar;

