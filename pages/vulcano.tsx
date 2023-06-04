import Layout from './layout';
const data = {
    "name": "Volcanoes",
    "description": "Hawaii is home to several active volcanoes, making it a popular destination for those interested in geology and natural wonders. Here are some of the most popular volcanoes to attend in Hawaii:",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/volcanoes.jpg",
    "activities": [
        {
            "name": "Kilauea Volcano, Big Island"
        },
        {
            "name": "Mauna Loa, Big Island"
        },
        {
            "name": "Mount Kilimanjaro, Big Island"
        },
        {
            "name": "Haleakala, Maui"
        },
        {
            "name": "Mauna Kea, Big Island"
        }
    ]
};

export default function surfing() {
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
                                return <div className="w-[80%] p-4 m-[5px] rounded-lg text-black shadow-[2px_2px_7px_0_#80808073]">{item.name}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}