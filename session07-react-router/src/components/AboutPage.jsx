import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      {/* Outlet dùng để xác định vị trí hiển thị component */}
      <Outlet />
    </div>
  );
}

export default AboutPage;
