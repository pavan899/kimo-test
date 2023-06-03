export default function ProfileCard() {
    return <div className="w-full h-[30%] bg-white rounded-lg flex gap-4 items-center">
        <div className="w-[75%] h-full p-4 flex flex-col justify-between">
            <div className="w-[100%]">
                <div className="text-lg font-bold">Hadwin Malone</div>
                <div className="text-sm">Guide since 2012</div>
            </div>
            <div>
                <button className="text-xs border-2 border-solid border-[#008080] text-[#008080] py-2 px-4 rounded-md font-bold hover:bg-[#008080] hover:text-white">
                    Contact
                </button>
            </div>
        </div>
        <div className="w-[25%] h-full p-4 flex items-center">
            <img src="/Images/Profile.png" className="w-full h-auto" alt="" />
        </div>
    </div>
}