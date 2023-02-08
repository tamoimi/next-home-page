import {
  Box,
  InputLabel,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const Join = () => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{ width: 600, height: 800, p: 3, margin: "100px auto" }}
      >
        <Typography sx={{ textAlign: "center", pb: 3 }}>
          Create your new account🐳
        </Typography>
        <form>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel sx={{ width: 100 }}>name</InputLabel>
              <TextField></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel sx={{ width: 100 }}>birth</InputLabel>
              <TextField></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel sx={{ width: 100 }}>email</InputLabel>
              <TextField></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel sx={{ width: 100 }}>password</InputLabel>
              <TextField></TextField>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems="center"
            >
              <InputLabel sx={{ width: 100 }}>password</InputLabel>
              <TextField></TextField>
            </Stack>
          </Stack>
          <Stack>
            <Button variant="contained" sx={{ my: 5 }}>
              done
            </Button>
          </Stack>
        </form>
      </Paper>
    </>
  );
};
export default Join;
