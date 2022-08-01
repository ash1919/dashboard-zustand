import React from "react";
import Heading from "./Heading";
import Layout from "./Layout";
import Navbar from "./Navbar";
import Tabel from "./Tabel";

const LandingPage = () => {
  return (
    <Layout>
      <Navbar />
      <Heading />
      <Tabel />
    </Layout>
  );
};

export default LandingPage;
