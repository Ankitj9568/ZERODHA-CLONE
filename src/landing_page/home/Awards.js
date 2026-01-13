import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5'>
            <div className="row mb-5 p-5">
                <div className="col-6 p-5">
                    <h1 className='mb-2'>Trust with confidence</h1>
                    <h2 className='mt-5'>Customer-first always</h2>
                    <p className='mt-2'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='mt-5'>No spam or gimmicks</h2>
                    <p className='mt-2'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.<a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Our philosophies.</a></p>
                    <h2 className='mt-5'>The Zerodha universe</h2>
                    <p className='mt-2'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mt-5'>Do better with money</h2>
                    <p className='mt-2'>With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 mt-4 p-5">
                    <img src="media\images\ecosystem.png" alt="ecosystem" style={{width:"113%"}}/>
                    <div className='text-center p-5'>
                        <a href="#" className='mx-5'>Explore our products
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a href="#" >Try Kite demo
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>  
            </div>
            <div className="row text-center">
                <div className='col-10 offset-1'>
                    <img src="media\images\press-logos.png" alt="awards" style={{width:"80%"}} />
                </div>

            </div>
        </div>
    );
}

export default Awards;