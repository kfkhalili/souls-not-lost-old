import React from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const FileUploader = ({ handleFile, setDialogPhoto, error }) => {
  const classes = useStyles();

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setDialogPhoto(URL.createObjectURL(fileUploaded));
    handleFile(fileUploaded);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="default"
        className={classes.button}
        onClick={handleClick}
        startIcon={<CloudUploadIcon />}
      >
        Upload
        <br />
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {error && (
        <span style={{ color: "red", fontSize: "12px" }}>A picture is required</span>
      )}
    </div>
  );
};

export default FileUploader;
