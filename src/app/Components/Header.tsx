import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
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
    ];
    const [MobileMenuOpen, updateMobileMenu] = useState(false);
    const openMenu = () => {
        updateMobileMenu((prev)=>!prev);
    }
    const navBarClicked = (e :React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    }
    const handleClose = () => {
        updateMobileMenu(false);
    }
    return <>
    {/* Desktop Header */}
        <header className="flex w-9/12 h-[70px] rounded-lg bg-white m-5 p-5 gap-10 z-50 fixed shadow-[1px_1px_4px_0_#8080803d] max-[600px]:hidden">
            <div className="flex w-[10%] justify-center items-center">
                <img src="/Images/Aloha.png" className="w-[70%] user-drag-none" alt="" />
            </div>
            <div className="flex justify-start items-center gap-10 w-[75%]">
                {
                    menuItems.map((menu) => {
                        return <Link href={menu.route} className="cursor-pointer" key={menu.title}>{menu.title}</Link>
                    })
                }
            </div>
            <div className="flex w-[15%] justify-end items-center">
                <button className={`bg-[#008080] rounded-md p-3 px-4 hover:bg-cyan-600 text-white text-xs font-bold`}>
                    Book a trip
                </button>
            </div>
        </header>
        {/* Mobile Header */}
        <header className="hidden w-full h-[70px] left-[0] bg-white justify-between items-center p-4 z-50 fixed shadow-[1px_1px_4px_0_#8080803d] max-[599px]:flex">
            <div className="flex w-[30%] justify-start items-center">
                <img src="/Images/Aloha.png" className="w-[70%] user-drag-none" alt="" />
            </div>
            <img src="/Images/menu.png" className="h-[40%] w-auto" alt="" onClick={openMenu}/>
        </header>
        {MobileMenuOpen && <div className="hidden w-full h-full left-[0] top-[0] bg-[#00000061] justify-end items-center z-[99] fixed max-[599px]:flex" onClick={handleClose}>
            <div className='bg-white w-[90%] h-[100%] p-6' onClick={navBarClicked}>
                <div className="flex w-[100%] justify-end pb-6">
                    <img src="/Images/close.png" className="w-[7%] h-auto" alt="" onClick={handleClose}/>
                </div>
                <div className="flex flex-col justify-center items-start text-[black] gap-[20px]">
                    {
                        menuItems.map((menu) => {
                            return <Link href={menu.route} className="cursor-pointer" key={menu.title}>{menu.title}</Link>
                        })
                    }
                    <div className="flex w-[100%] justify-start items-center">
                        <button className={`bg-[#008080] rounded-md p-3 px-4 hover:bg-cyan-600 text-white text-xs font-bold`}>
                            Book a trip
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </>
}