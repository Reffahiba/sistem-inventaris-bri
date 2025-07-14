import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

// Navbar → id=react-navbar
const navbar = document.getElementById("react-navbar");
if (navbar) {
    ReactDOM.createRoot(navbar).render(<Navbar />);
}

// Sidebar → id=react-sidebar
const sidebar = document.getElementById("react-sidebar");
if (sidebar) {
    ReactDOM.createRoot(sidebar).render(<Sidebar />);
}
