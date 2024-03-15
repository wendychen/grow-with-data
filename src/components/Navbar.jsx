import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);

    if(window.innerWidth > 768) {
      setNav(false);
    }
  };
  
    // // Add event listener when the component mounts
    // useEffect(() => {
    //   window.addEventListener('resize', handleNav);
    //   // Remove event listener when the component unmounts
    //   return () => {
    //     window.removeEventListener('resize', handleNav);
    //   };
    // }, <AiOutlineMenu size={20} />); // Empty dependency array ensures that the effect runs only once after the initial render
  
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className={`w-full text-3xl font-bold text-[#E75480]`}>DATA.</h1>
      <ul className='hidden md:flex'>
        {/* <li className='p-4'>Home</li>
        <li className='p-4'>Skills</li>
        <li className='p-4'>Projects</li>
        <li className='p-4'>Experience</li>
        <li className='p-4'>Contact</li> */}
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav?
        <AiOutlineClose size={20} />:
        <AiOutlineMenu size={20} /> }
        
      </div>
			{/* There's still a bug here. */}
      <div className={
        nav?
        'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':
        'fixed ease-in-out duration-500 left-[-100%]'
      }>
        <h1 className={`w-full text-3xl font-bold text-[#E75480] m-4`}>DATA.</h1>
					<ul className='p-4 uppercase'>        
							{/* <li className='p-4 border-b border-gray-600'>Home</li>
							<li className='p-4 border-b border-gray-600'>Skills</li>
							<li className='p-4 border-b border-gray-600'>Projects</li>
							<li className='p-4 border-b border-gray-600'>Experience</li> */}
							{/* <li className='p-4'>Contact</li> */}
              <li className='p-4 border-b border-gray-600'>Home</li>
							<li className='p-4 border-b border-gray-600'>Company</li>
							<li className='p-4 border-b border-gray-600'>Resources</li>
							<li className='p-4 border-b border-gray-600'>About</li>
							<li className='p-4'>Contact</li>
					</ul>
    	</div>
    </div>
  )
}

export default Navbar;
