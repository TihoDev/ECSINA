import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function MainLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <main className="my-10">{children}</main>
      <Footer />
    </main>
  );
}

export default MainLayout;
