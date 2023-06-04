import { ArrowForward } from "@mui/icons-material";

export default function Section2() {
    const cardData = [
        {
            title: 'Surfing',
            desc: 'Best Hawaiian islands for surfing.',
            image: 'https://storage.googleapis.com/topics-images/web-dev-images/surfing_low.png'
        },
        {
            title: 'Hula',
            desc: 'Try is yourself.',
            image: 'https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals_low.png'
        },
        {
            title: 'Vulcanoes',
            desc: 'Vulcanic conditions can change at anytime.',
            image: 'https://storage.googleapis.com/topics-images/web-dev-images/volcanoes_low.png'
        },
    ]
    return <div className="min-h-[66vh] w-full bg-[#ffffff] flex justify-center">
        <div className="w-9/12 max-[599px]:w-11/12">
            <div className="py-7 font-bold">
                Highlights
            </div>
            <div className="h-[45vh] w-full inline-grid grid-cols-3 gap-4 max-[599px]:flex-1 overflow-auto cardContainer p-[5px]">
                {
                    cardData.map((card, index) => {
                        return <div key={index} className="w-full h-full shadow-[0_0_16px_0_#00808029] overflow-hidden rounded-lg relative max-[599px]:w-10/12">
                            <div className="h-[50%] overflow-hidden">
                                <img src={card.image} alt={card.title + "_img"} className="w-full" />
                            </div>
                            <div className="p-4 w-full">
                                <div className="text-[#008080] font-bold text-base">{card.title}</div>
                                <div className="pt-2 text-sm">{card.desc}</div>
                            </div>
                            <div className="rounded-full p-2 bg-[#E6F2F2] flex w-fit absolute right-[5%] bottom-[5%] cursor-pointer hover:scale-[1.05] shadow-[2px_2px_7px_0_#6f6f6f5e]">
                                <ArrowForward className="text-sm text-[#008080]" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}