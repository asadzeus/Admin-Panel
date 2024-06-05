import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        container
      </div>
    </div>
  );
}
