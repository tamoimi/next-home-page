import MainLayout from "@/components/MainLayout";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Divider, makeStyles } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
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

  const onSubmit = (data) => console.log("data", data);

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
          height: 740,
          p: 3,
          margin: "0 auto",
        }}
      >
        <Typography sx={{ textAlign: "center", pt: 1, pb: 4 }}>
          Create your new account🐳
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <InputLabel htmlFor="id" sx={{ width: 100 }}>
                ID
              </InputLabel>
              <TextField
                id="id"
                size="small"
                helperText={<ErrorMessage>{errors.id?.message}</ErrorMessage>}
                {...register("id", { required: "Please enter your id 😪" })}
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
                  required: "Please check your password 😪",
                })}
              ></TextField>
            </Stack>
          </Stack>
          <Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: 340, margin: "30px auto", color: "white" }}
              disabled={!isValid}
            >
              Join us
            </Button>
          </Stack>
        </form>
        <Divider spacing={1}>OR</Divider>
        <Stack justifyContent={"center"} sx={{ py: 3 }}>
          <Typography sx={{ fontSize: 14, textAlign: "center", mb: 3 }}>
            Join Tami&apos;s website with your favorite social media accout🐠
          </Typography>
          <Stack direction={"row"} justifyContent="center" sx={{ gap: 5 }}>
            <Stack>
              <IconButton aria-label="google">
                <GoogleIcon />
              </IconButton>
              <Typography sx={{ fontSize: 12 }}>Google</Typography>
            </Stack>
            <Stack>
              <IconButton aria-label="apple">
                <AppleIcon />
              </IconButton>
              <Typography sx={{ fontSize: 12 }}>Apple</Typography>
            </Stack>
            <Stack>
              <IconButton aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <Typography sx={{ fontSize: 12 }}>Twitter</Typography>
            </Stack>
            <Stack>
              <IconButton aria-label="google">
                <GoogleIcon />
              </IconButton>
              <Typography sx={{ fontSize: 12 }}>Google</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
export default Join;
