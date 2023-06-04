export default function Section1() {
    return <div className="h-[75vh] inset-0 w-[100%] flex justify-center items-center text-9xl font-extrabold tracking-tighter overflow-hidden text-center max-[599px]:mt-[70px] max-[599px]:h-[85vh] max-[599px]:text-7xl">
        <img src="/Image.svg" alt="" className="max-w-max w-full h-auto max-[599px]:w-auto max-[599px]:h-full" />
        <p className="absolute w-full">
            <span className="text-[#ffffff8a]">Welcome </span>
            <br className="block max-[599px]: hidden" />
            <span className="text-[#ffffffde]">
                to{" "}
                <br className="hidden max-[599px]: block" />
                Hawaii
            </span>
        </p>
    </div>
}