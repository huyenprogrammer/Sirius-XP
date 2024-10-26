import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div
      className='grid h-screen overflow-hidden'
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
