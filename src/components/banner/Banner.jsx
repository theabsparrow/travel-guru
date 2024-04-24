import { useContext } from "react";
import { authContex } from "../authProvider/AuthProvider";
import Slider from "../slider/Slider";


const Banner = () => {
    const bannerInfo = useContext(authContex)
    const bannerInfoes = bannerInfo.bannerData
   
    return (
        <div className="mt-24 pl-2 md:px-6 lg:pl-[80px]">
            {
                bannerInfoes.map((banner) => <Slider key={banner.id} banner={banner}> </Slider>)
            }
        </div>
    ); 
};

export default Banner;