import MainLayout from "@/components/MainLayout";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Join = () => {
  return (
    <>
      <MainLayout />
      <Paper
        elevation={3}
        sx={{
          width: 600,
          height: 620,
          p: 3,
          margin: "0 auto",
        }}
      >
        <Typography sx={{ textAlign: "center", pt: 2, pb: 5 }}>
          Create your new account🐳
        </Typography>
        <form>
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
              <TextField id="name" size="small"></TextField>
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
              <TextField id="birth" size="small"></TextField>
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
              <TextField id="email" size="small"></TextField>
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
              <TextField id="id" size="small"></TextField>
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
              <TextField id="password" size="small"></TextField>
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
              <TextField id="password" size="small"></TextField>
            </Stack>
          </Stack>
          <Stack>
            <Button
              variant="contained"
              sx={{ width: 340, margin: "30px auto", color: "white" }}
            >
              done
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};
export default Join;
