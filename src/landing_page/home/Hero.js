import React from 'react';

function Hero() {
    return (  
       <div className='container  p-5'>
           <div className="row text-center">
                <img src="hero-image.jpg" alt="" className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p> Online platform to invest in stocks, options, futures, and more. </p>
                <button className='p-2 btn btn-primary fs-5' style={{width: '25%',margin: "0 auto"}}>SignUp</button>
           </div>
       </div>       
    );
}

export default Hero;