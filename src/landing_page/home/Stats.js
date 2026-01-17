import React from "react";

function Stats() {
  return (
    <div className="container mb-5 p-3">
      <div className="row mb-2 p-5">
        <div className="col-6 p-5">
          <h2 className="mb-2">Trust with confidence</h2>
          <h3 className="mt-5">Customer-first always</h3>
          <p className="mt-2 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p className="mt-2 text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a
              href="#"
              style={{ textDecoration: "None" }}
              class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {" "}
              Our philosophies.
            </a>
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p className="mt-2 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p className="mt-2 text-muted">
            With initiatives like{" "}
            <a href="#" style={{ textDecoration: "None" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecoration: "None" }}>
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-6 mt-4 p-5">
          <img
            src="media\images\ecosystem.png"
            alt="ecosystem"
            style={{ width: "113%" }}
          />
          <div className="text-center p-5">
            <a href="#" className="mx-5" style={{ textDecoration: "None" }}>
              Explore our products
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="#" style={{ textDecoration: "None" }}>
              Try Kite demo
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row mb-5 text-center">
        <div className="col-10 offset-1">
          <img
            src="media\images\press-logos.png"
            alt="awards"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
