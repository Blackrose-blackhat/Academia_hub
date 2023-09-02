import React from 'react';




const Footer = () => {


    return (
        <footer>
            <div className='bg-primary flex flex-row p-10 gap-10 w-full'>


                <p className='text-white text-sm md:text-xl w-full'>
                    © {new Date().getFullYear()} Academia Hub. All rights reserved.
                </p>


                <div className=' text-white flex flex-row gap-20 w-full'>

                    <p className='cursor-pointer' onClick={() => navigate("/about")}>
                        About
                    </p>



                    <p className='cursor-pointer' onClick={() => navigate("/contact")}>
                        Contact Us
                    </p>

                    <p className='cursor-pointer'>

                        Disclaimer
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
