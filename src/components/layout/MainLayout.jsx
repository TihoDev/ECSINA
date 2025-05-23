import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="my-10">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
