import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import RegisterForm from './RegisterForm';


const RegisterModal = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<RegisterForm handleClose={handleClose} />
		</Dialog>
	);
};

export default RegisterModal;