/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import MainLayout from "@/components/MainLayout";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <MainLayout />
      <Stack justifyContent="center" alignItems="center">
        <iframe
          src="https://giphy.com/embed/Cb2rEzz77lex8xBNSJ"
          width="480"
          height="480"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/ocean-shark-island-Cb2rEzz77lex8xBNSJ"></a>
        </p>
      </Stack>
      <Box className={styles.center}>
        <Link href="/home-pages/join">
          <Button variant="contained">Join</Button>
        </Link>

        <Box className={styles.thirteen}>
          <Link href="/home-pages/login">
            <Button variant="contained">Login</Button>
          </Link>
        </Box>
      </Box>

      <Stack direction={"row"} justifyContent={"center"}>
        <Link href="##">
        <Button>Click here to see more 🐸</Button>
        </Link>
      </Stack>
    </>
  );
}
