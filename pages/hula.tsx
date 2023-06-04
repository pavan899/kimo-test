import Layout from './layout';
const data = {
    "name": "Traditional Festivals",
    "description": "Hawaii is known for its rich cultural heritage and vibrant festivals that showcase the unique traditions of the Hawaiian Islands. Here are some of the best places to attend traditional festivals in Hawaii:",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals.jpg",
    "activities": [
        {
            "name": "Merrie Monarch Festival in Hilo, Big Island"
        },
        {
            "name": "King Kamehameha Day Celebration in Honolulu, Oahu"
        },
        {
            "name": "Aloha Festivals Floral Parade in Honolulu, Oahu"
        },
        {
            "name": "Kauai Mokihana Festival in Lihue, Kauai"
        },
        {
            "name": "Maui Nui Cultural Festival in Kahului, Maui"
        },
        {
            "name": "Hawaii Island Festival of Birds in Hilo, Big Island"
        },
        {
            "name": "Eo E Emalani I Alaka'i Festival in Kilauea, Kauai"
        },
        {
            "name": "Prince Lot Hula Festival in Moanalua Gardens, Oahu"
        },
        {
            "name": "Pua Ali'i 'Ilima Festival in Honolulu, Oahu"
        },
        {
            "name": "Makahiki Festival at the Polynesian Cultural Center on Oahu"
        }
    ]
};

export default function hula() {
    return <Layout>
        <div className="w-full">
            <div className="w-full h-[70vh] overflow-hidden relative">
                <img src={data.image} alt="" className="w-full h-auto relative top-[-30%]" />
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col gap-[15px]">
                    <div className="text-white text-5xl font-bold">
                        {data.name}
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center p-8">
                <div className='w-9/12 max-[599px]:w-11/12'>
                    <div className="text-black text-md pb-4">
                        {data.description}
                    </div>
                    <div>
                        {
                            data.activities.map((item, index) => {
                                return <div className="w-[80%] p-4 m-[5px] bg-[#008080ba] rounded-lg text-white">{item.name}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}