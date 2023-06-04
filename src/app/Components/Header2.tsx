import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Link from 'next/link';

const menuItems = [
    {
        title: "Home",
        route: '/',
        tooltip: 'homepage'
    },
    {
        title: "Surfing",
        route: '/surfing',
        tooltip: 'surfing'
    },
    {
        title: "Hula",
        route: '/hula',
        tooltip: 'hula'
    },
    {
        title: "Vulcano",
        route: '/vulcano',
        tooltip: 'vulcano'
    }
]

export default function Example() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <div className="flex justify-start items-center gap-10 w-[75%]">
                {
                    menuItems.map((menu) => {
                        return <Link href={menu.route} className="cursor-pointer" key={menu.title}>{menu.title}</Link>
                    })
                }
            </div>
        </ul>
    );

    return (
        <header className="flex w-9/12 h-[70px] rounded-lg bg-white m-5 p-5 gap-10 z-50 fixed shadow-[1px_1px_4px_0_#8080803d] max-[600px]:hidden">
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className="flex w-[10%] justify-center items-center">
                        <img src="/Images/Aloha.png" className="w-[70%] user-drag-none" alt="" />
                    </div>
                    <div className="hidden lg:block">{navList}</div>
                    <div className="flex w-[15%] justify-end items-center">
                        <button className={`bg-[#008080] rounded-md p-3 px-4 hover:bg-cyan-600 text-white text-xs font-bold`}>
                            Book a trip
                        </button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <div className="flex w-[15%] justify-end items-center">
                            <button className={`bg-[#008080] rounded-md p-3 px-4 hover:bg-cyan-600 text-white text-xs font-bold`}>
                                Book a trip
                            </button>
                        </div>
                    </div>
                </MobileNav>
            </Navbar>
        </header>
    );
}