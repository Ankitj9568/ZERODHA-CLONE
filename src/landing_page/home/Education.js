import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row mb-2 p-5">
        <div className="col-6 mt-5 p-1">
          <img
            src="media\images\index-education.svg"
            alt="ecosystem"
            style={{ width: "68%" }}
          />
          <div className="text-center p-5"></div>
        </div>

        <div className="col-6 p-5">
          <h3 className="mt-2 mb-3">Free and open market education</h3>
          <p className="mt-4 p-2 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="mb-2 p-2" style={{ textDecoration: "None" }}>
            Varsity
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-4 p-2 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="mb-2 p-2" style={{ textDecoration: "None" }}>
            TradingQ&A
            <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
