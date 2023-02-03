import React from 'react';
import mainBannerImg from "../../Assets/mainBannerImg.PNG"
const Header = () => {
    return (
        <div className='mb-12'>
            <div className='banner-image w-full h-[400px] lg:h-[650px]' style={{ backgroundImage: `url(${mainBannerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className='banner-content flex justify-center lg:justify-start items-center h-full lg:pt-64 lg:pl-28'>
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