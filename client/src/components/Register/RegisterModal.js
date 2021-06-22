import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import RegisterForm from './RegisterForm';


const RegisterModal = ({ open, handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<RegisterForm handleClose={handleClose} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
		</Dialog>
	);
};

export default RegisterModal;