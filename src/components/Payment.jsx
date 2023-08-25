import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { MyCartContext } from "../context/context";

const Payment = ({ open, setOpen }) => {
  const { removeQuantity } = MyCartContext();

  const handleClose = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <DialogContentText fontWeight="bold" fontSize="14px">
            Saved cards:
          </DialogContentText>
          <Stack direction="row" alignItems="center" gap={2}>
            <img
              width={40}
              height={40}
              src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
              alt=""
            />
            <TextField
              required
              id="outlined-required"
              label="Card Number"
              defaultValue=""
            />
            <Button>Remove card</Button>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <img
              width={40}
              height={40}
              src="https://static.vecteezy.com/system/resources/previews/022/100/873/original/visa-logo-transparent-free-png.png"
              alt=""
            />
            <TextField
              required
              id="outlined-required"
              label="Card Number"
              defaultValue=""
            />
            <Button>Remove card</Button>
          </Stack>
          <DialogContentText fontWeight="bold" fontSize="14px">
            Add new cards:
          </DialogContentText>
          <TextField
            required
            id="outlined-required"
            label="Cardholder' Name"
            defaultValue=""
          />
          <Stack direction={{ sm: "col", md: "row" }} gap={2}>
            <Stack gap={1} width={{ md: "70%" }}>
              <TextField
                sx={{ width: "100%" }}
                required
                id="outlined-required"
                label="Card Number"
                defaultValue=""
              />
            </Stack>
            <Stack direction="row" gap={1} width={{ md: "30%" }}>
              <TextField
                // sx={{ width: { md: "15%" } }}
                required
                id="outlined-required"
                label="Expire"
                defaultValue=""
              />
              <TextField
                // sx={{ width: { md: "15%" } }}
                required
                id="outlined-required"
                label="CVV"
                defaultValue=""
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleClose();
              removeQuantity();
            }}
            autoFocus
            variant="contained"
            color="success"
            sx={{borderRadius:'6px'}}
          >
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Payment;
