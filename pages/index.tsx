import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layouts, Title } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title title="Rayandika" />
      <Layouts>Rayandika</Layouts>
    </div>
  );
};

export default Home;
