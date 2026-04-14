"use client"
import Image from 'next/image';
import MyNavbar from './MyNavbar/MyNavbar';
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='py-2 md:py-4 lg:py-6 px-0 sm:px-1 md:px-2 lg:px-20 flex items-center justify-between relative overflow-hidden shadow bg-white'>
            <div>
                <Image src={"/assets/logo.png"} width={141} height={29} alt='Navbar Logo Image'/>
            </div>
            <div className='hidden md:flex items-center'>
                <MyNavbar link={"/"}>Home</MyNavbar>
                <MyNavbar link={"/timeline"}>TimeLine</MyNavbar>
                <MyNavbar link={"/state"}>State</MyNavbar>
            </div>
            <div className='flex md:hidden'>
                <Hamburger color='black' toggle={setOpen} toggled={isOpen}/>
            </div>
            <div className={`flex md:hidden flex-col items-center fixed top-16 ${isOpen ? "right-0 opacity-100" : "-right-40 opacity-0"} bg-white p-4 border border-zinc-300 rounded-md transition-all ease-in duration-200 z-50`}>
                <MyNavbar link={"/"}>Home</MyNavbar>
                <MyNavbar link={"/timeline"}>TimeLine</MyNavbar>
                <MyNavbar link={"/state"}>State</MyNavbar>
            </div>
            {
                isOpen && (
                    <div
                        onClick={() => setOpen(false)}
                        className='fixed bg-black/10 inset-0 z-40'
                    >

                    </div>
                )
            }
        </div>
    );
};

export default Navbar;