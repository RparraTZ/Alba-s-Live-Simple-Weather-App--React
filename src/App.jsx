import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Alba's Live Simple Weather App</h1>
      <form className="mt-4 mb-3">
        <div className="container">
          <div className="row g-1">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-secondary w-100">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <Weather />
      <Footer />
    </div>
  );
}
