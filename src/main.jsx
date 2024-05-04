import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import studentStore from "./store/index.js";
import { Provider } from "react-redux";
import CreateEnquiry from "./components/CreateEnquiry.jsx";
import DeleteEnquiry from "./components/DeleteEnquiry.jsx";
import UpdateEnquiry from "./components/UpdateEnquiry.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={studentStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-enquiry" element={<CreateEnquiry />} />
          <Route path="/delete-enquiry/:id" element={<DeleteEnquiry />} />
          <Route path="/edit-enquiry/:id" element={<UpdateEnquiry />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
