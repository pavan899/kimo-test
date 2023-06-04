export default function Section1() {
    return <div className="relative h-[75vh] inset-0 w-[100%] flex justify-center items-center text-9xl font-extrabold tracking-tighter overflow-hidden text-center max-[599px]:mt-[70px] max-[599px]:h-[85vh] max-[599px]:text-7xl">
        <img src="/Image.svg" alt="" className="max-w-[unset] w-full h-auto max-[599px]:w-auto max-[599px]:h-full" />
        <p className="absolute w-[90%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span className="text-[#ffffff8a]">Welcome </span>
            <br className="min-[599px]:block max-[599px]: hidden" />
            <span className="text-[#ffffffde]">
                to Hawaii
            </span>
        </p>
    </div>
}