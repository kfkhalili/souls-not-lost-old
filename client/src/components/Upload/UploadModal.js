import React from "react";
import Dialog from "@material-ui/core/Dialog";
import UploadForm from "./UploadForm";

const UploadModal = ({ open, handleClose, snackbarMessageFunc }) => {

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"md"} fullWidth={true}>
      <UploadForm
        handleClose={handleClose}
        snackbarMessageFunc={snackbarMessageFunc}
      />
    </Dialog>
  );
};

export default UploadModal;
