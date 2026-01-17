import React from 'react';

function Pricing() {
    return (
        <div className="container mt-5 mb-5 p-3">
            <div className="row mt-5">
                <div className="col-6 p-2">
                    <h2 className="mb-3">Unbeatable pricing</h2>
                    <p className="text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{ textDecoration: 'None' }}>See pricing
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </a>

                </div>
                <div className="col-1 mt-2">
                    <img src="media/images/pricing-eq.svg" alt="Stats Image" style={{ width: "140%" }} />
                </div>
                <div className="col-1 mt-3">
                    <p className="text-left p-none text-muted">Free account opening</p>
                </div>
                <div className="col-1 mt-2">
                    <img src="media/images/pricing-eq.svg" alt="Stats Image" style={{ width: "140%" }} />
                </div>
                <div className="col-1 mt-3 ">
                    <p className="text-left p-none text-muted">Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col-1 mt-1 p-3">
                    <img src="media/images/other-trades.svg" alt="Stats Image" style={{ width: "140%" }} />
                </div>
                <div className="col-1 mt-4 ">
                    <p className="text-left p-none text-muted">Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;