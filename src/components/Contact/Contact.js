import React, { useState } from 'react'
// import Grid from "@mui/material/Grid";
// import FormControl from "@mui/material/FormControl";
// import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import Stack from "@mui/material/Stack";
// import { useForm } from 'react-hook-form';

const Contact = () => {
  // const { contact, handleSubmit, errors } = useForm();
  // const [contanctInfo, setContactInfo] = useState();
  // const onSubmit = (data) => {
  //   setContactInfo(data); 
  //   console.log(data)};
  return (
    <>
      {/* <Grid container justifyContent="center">
        <Grid item>
          <h1>I would love to hear from you!</h1>
        </Grid>
        <Grid container justifyContent="center" spacing={3} padding={2}>
          <Grid item xs={12} md={8} lg={7}>
            <pre>{JSON.stringify(contanctInfo, undefined, 2)}</pre>
            <FormControl fullWidth onSubmit={handleSubmit(onSubmit)}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                type="text"
                name="name"
                aria-describedby="my-helper-text"
                ref={contact}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <FormControl fullWidth onSubmit={handleSubmit(onSubmit)}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                type="email"
                name="email"
                aria-describedby="my-helper-text"
                ref={contact}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={8} lg={7}>
            <TextField
              onSubmit={handleSubmit(onSubmit)}
              type="text"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              defaultValue="Hi!"
              fullWidth
              name="message"
              ref={contact}
            />
          </Grid>
          <Grid container justifyContent="center">
            <Grid item spacing={3} padding={2}>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  Send
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <div className="w-full h-screen flex justify-center items-center p-4">
        <form
          method="POST"
          action="https://getform.io/f/4e5382c0-2412-4f98-93d1-460be5581936"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-3xl font-bold inline border-b-4">
              I would love to hear from you!
            </p>
          </div>
          <input
            className="p-2 border border-gray-400"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="my-4 p-2 border border-gray-400"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="p-4 border border-gray-400"
            name="message"
            rows="10"
          ></textarea>
          <button className="text-black border-gray-400 border-2 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate!
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact