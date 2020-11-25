import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Numberformat from "react-number-format";
import { comfirmbookingHotel } from "../functions/bookingFunc";
import { message } from "antd";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({
  open,
  setOpen,
  dateBefore,
  dateAfter,
  adult,
  price,
  hotel_id,
  numberroom,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const SaveData = async () => {
    const result = await comfirmbookingHotel(
      dateBefore,
      dateAfter,
      hotel_id,
      numberroom,
      price,
      adult
    )
    console.log(result)
    if(result.status === 200) {
        setOpen(false);
        success("จองสำเร็จแล้ว")
    } else {
        error("จองไม่สำเร็จ")
    }
  };

  const success = (text) => {
    message.success({
      content: text,
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
    });
  };

  const error = (text) => {
    message.error({
      content: text,
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
    });
  };

  if (open) {
    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Payment
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Check-in : {moment(dateBefore).format(" DD MMMM YYYY")}
            </Typography>
            <Typography gutterBottom>
              Check-out : {moment(dateAfter).format(" DD MMMM YYYY")}
            </Typography>
            <Typography gutterBottom>Adult : {adult} PEOPLE</Typography>
            <Typography gutterBottom>
              Price :{" "}
              <Numberformat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                style={{ marginLeft: 5, color: "red" }}
              />{" "}
              BATH
            </Typography>
            <Typography gutterBottom>Payment : Before stay</Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={SaveData} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    return null;
  }
}
