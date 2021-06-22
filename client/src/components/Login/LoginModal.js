import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from './LoginForm';


const LoginModal = ({ open, handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<LoginForm handleClose={handleClose} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
		</Dialog>
	);
};

export default LoginModal;