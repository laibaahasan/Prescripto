import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left side */}
                <div>
                    <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>With CARETECH productivity tool PRESCRIPTO, be successful in avoiding unscheduled absences. let our tool support you to be a leader in your medical practice. The best online appointment scheduling Platform enhances your practice management with online profile visibility.</p>
                </div>

                {/* center side */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                {/* right side */}
                <div>
                    <p>GET IN TOUCH</p>
                    <ul>
                        <li>+1-297-3-958-777</li>
                        <li>laibahasan66@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* copyright */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center '>Copyright © 2025 All Rights Reserved by PRESCRIPTO & CARETECH®</p>
            </div>
        </div>
    )
}

export default Footer
