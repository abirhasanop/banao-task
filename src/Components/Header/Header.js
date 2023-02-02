import React from 'react';
import mainBannerImg from "../../Assets/mainBannerImg.PNG"
const Header = () => {
    return (
        <div className='mb-12'>
            <div className='banner-image' style={{ backgroundImage: `url(${mainBannerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: "100%", height: "650px" }}>
                <section className='banner-content flex items-center h-full lg:pt-64 lg:pl-28'>
                    <div>
                        <h2 className='text-4xl font-bold text-white my-4'>Computer Engineering</h2>
                        <p className='text-white  text-xl mb-4'>142,765 Computer Engineers follow this</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Header;