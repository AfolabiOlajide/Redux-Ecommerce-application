import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className='p-6'>
            <h3 className="font-bold text-gray-800 text-2xl mb-4">Let's Connect 🔗</h3>
            <p className="text-semibold text-lg">
                You must have gone through the application and decided that the right thing to do is contact or connect with me
                either way it's okay as I have made my contact information available 😉.
            </p>
            <p className='my-5 text-semibold text-lg'>You can reach out to me on these platforms.</p>
            {/* Socials */}
            <div className="flex space-x-5">
                {/* LinkedIn */}
                <a href='https://linkedin.com/in/afolabi-olajide' rel='noreferrer' target="_blank" className='bg-gray-800 rounded-lg p-4 hover:ring-2 hover:ring-gray-600'>
                    <GrLinkedinOption className="text-[2rem] text-white "/>
                </a>
                {/* Twitter */}
                <a href='https://twitter.com/officialcipherr' rel='noreferrer' target="_blank" className='bg-gray-800 rounded-lg p-4 hover:ring-2 hover:ring-gray-600'>
                    <BsTwitter className="text-[2rem] text-white "/>
                </a>
                {/* Github */}
                <a href='https://github.com/afolabiolajide' rel='noreferrer' target="_blank" className='bg-gray-800 rounded-lg p-4 hover:ring-2 hover:ring-gray-600'>
                    <FiGithub className="text-[2rem] text-white "/>
                </a>
            </div>
        </div>
    )
}

export default Contact