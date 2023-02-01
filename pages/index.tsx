import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutSection, Layouts, Title } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Title title="Rayandika" />
      <Layouts>
        <AboutSection />
      </Layouts>
    </>
  );
};

export default Home;
