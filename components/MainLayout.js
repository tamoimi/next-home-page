import styles from "@/styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";

const MainLayout = () => {
  return (
    <Box sx={{ px: 3 }}>
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={150} priority />
        </Link>

        <Typography>Welcome to Tami&apos;s website</Typography>
      </Stack>
    </Box>
  );
};
export default MainLayout;
