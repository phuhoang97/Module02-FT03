import React from "react";
import { useLocation } from "react-router-dom";

function ContactPage() {
  // Để nhận được dữ liệu từ Product => sử dụng useLocation
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.state === null ? (
        "ContactPage"
      ) : (
        <> Count : {location.state.count}</>
      )}
    </div>
  );
}

export default ContactPage;
