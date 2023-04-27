import React from 'react'
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const Contact = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <h1>I would love to hear from you!</h1>
        </Grid>
        <Grid container justifyContent="center" spacing={3} padding={2}>
          <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input name="name" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input name="email" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Hi!"
              fullWidth
              name="message"
            />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item spacing={3} padding={2}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact