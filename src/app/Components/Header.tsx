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
    ]
    return <header className="flex w-9/12 h-[70px] rounded-lg bg-white m-5 p-5 gap-10 z-50 fixed shadow-[1px_1px_4px_0_#8080803d]">
        <div className="flex w-[10%] justify-center items-center">
            <img src="/Images/Aloha.png" className="w-[70%] user-drag-none" alt="" />
        </div>
        <div className="flex justify-start items-center gap-10 w-[75%]">
            {
                menuItems.map((menu)=>{
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
}