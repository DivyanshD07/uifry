import react from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import './glow.css';

const Hero = () => {
    return (
        <div className="w-full flex">
            <div className="w-5/12 ml-40 mt-20 flex flex-col gap-6">
                <div className="glowing-light left-96 top-64"/>
                <p className="text-5xl font-extrabold items-stretch">Make The Best Financial Desicions</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, eius neque at id commodi nam quasi ducimus culpa minus excepturi sequi vero soluta facilis magni quis animi, sint libero quia?</p>
                <div className="flex gap-10">
                    <button className="flex text-white bg-black px-4 py-3 items-center font-semibold rounded-sm">Get Started
                        <FaArrowRight className="w-10" />
                    </button>
                    <div className="flex gap-4">
                        <button className="flex gap-2 items-center font-semibold">
                            <Image
                                src="/images/Video.png"
                                alt=""
                                height={30}
                                width={30}
                            />
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-5/12">
                <div className="">
                    <Image
                        src="/images/iPhone-13-Pro-Front.png"
                        alt=""
                        width={500}
                        height={600}
                        className="absolute flex items-end -translate-y-16 -translate-x-8"
                    />
                    <Image
                        src="/images/iPhone-13-Pro-Front.png"
                        alt=""
                        width={500}
                        height={600}
                        className="absolute -z-10 translate-x-20 -translate-y-4 flex items-end"
                    />
                    <div className="glowing-light top-[160%] left-2/3 -z-30"/>
                    <Image
                        src="/images/iPhone-13-Pro-Front.png"
                        alt=""
                        width={520}
                        height={600}
                        className="absolute -z-20 translate-x-40 translate-y-12 flex items-end"
                    />
                </div>
                <div className="w-full mt-20 ml-28">
                    <Image
                        src="/images/Ellipse.png"
                        alt=""
                        width={450}
                        height={350}
                        className="absolute -z-30 translate-x-0 flex items-end"
                    />
                    <Image
                        src="/images/Ellipse.png"
                        alt=""
                        width={450}
                        height={350}
                        className="absolute -z-30 translate-x-8  flex items-end"
                    />
                    <Image
                        src="/images/Ellipse.png"
                        alt=""
                        width={450}
                        height={350}
                        className="absolute -z-30 translate-x-16  flex items-end"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero;