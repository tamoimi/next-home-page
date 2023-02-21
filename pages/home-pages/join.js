import MainLayout from "@/components/MainLayout";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { useRef } from "react";

const Join = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      birth: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const postUsers = async (data) => {
    console.log("data", data);
    const response = await (
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      })
    ).json();
    console.log("response", response);
  };

  const password = useRef({});
  password.current = watch("password", "");

  const ErrorMessage = styled("span")({
    position: "absolute",
    color: "#E96479",
  });

  return (
    <>
      <MainLayout />

      <Paper
        elevation={3}
        sx={{
          width: 600,
          height: 600,
          p: 3,
          margin: "0 auto",
        }}
      >
        <Typography sx={{ textAlign: "center", pt: 3, pb: 6 }}>
          Create your new account🐳
        </Typography>
        <form onSubmit={handleSubmit(postUsers)}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <InputLabel htmlFor="name" sx={{ width: 100 }}>
                name
              </InputLabel>
              <TextField
                id="name"
                size="small"
                helperText={<ErrorMessage>{errors.name?.message}</ErrorMessage>}
                {...register("name", { required: "Please enter your name 😪" })}
              ></TextField>
            </Stack>

            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <InputLabel htmlFor="birth" sx={{ width: 100 }}>
                birth
              </InputLabel>
              <TextField
                id="birth"
                size="small"
                helperText={
                  <ErrorMessage>{errors.birth?.message}</ErrorMessage>
                }
                {...register("birth", {
                  required: "Please enter your birth 😪",
                })}
              ></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <InputLabel htmlFor="email" sx={{ width: 100 }}>
                email
              </InputLabel>
              <TextField
                id="email"
                size="small"
                helperText={
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                }
                {...register("email", {
                  required: "Please enter your email 😪",
                })}
              ></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
              sx={{ mb: 3 }}
            >
              <InputLabel htmlFor="password" sx={{ width: 100 }}>
                password
              </InputLabel>
              <TextField
                id="password"
                size="small"
                helperText={
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                }
                {...register("password", {
                  required: "Please enter your password 😪",
                })}
              ></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel htmlFor="confirmPassword" sx={{ width: 100 }}>
                confirm
                <br />
                password
              </InputLabel>
              <TextField
                id="confirmPassword"
                size="small"
                helperText={
                  <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                }
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "Please check your password",
                  required: "Please enter your  comfirm password 😪",
                })}
              ></TextField>
            </Stack>
          </Stack>
          <Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 340, margin: "50px auto", color: "white" }}
              disabled={!isValid}
            >
              Join us
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};
export default Join;
