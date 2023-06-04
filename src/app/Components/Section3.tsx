import { ArrowForward } from "@mui/icons-material";
import Accordion from "../Utils/Accordion";
import ProfileCard from "../Utils/ProfileCard";
  

export default function Section3() {
    return <div className="min-h-[65vh] w-full bg-[#E6F2F2] flex justify-center">
        <div className="w-9/12 max-[599px]:w-11/12 inline-grid grid-cols-2 gap-8 max-[599px]:flex max-[599px]:flex-col">
            <div className="w-full h-full">
                <div className="mt-8 font-bold">Categories</div>
                <div className="mb-8 mt-4 max-[599px]:mb-[0]">
                    <Accordion />
                </div>
            </div>
            <div className="w-full h-full">
                <div className="mt-8 font-bold max-[599px]:mt-[0]">Travel Guide</div>
                <div className="mb-8 mt-4 w-full h-full max-[599px]:mb-16 max-[599px]:h-fit">
                    <ProfileCard />
                </div>
            </div>
        </div>
    </div>
}