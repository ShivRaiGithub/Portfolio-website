import React from "react";
import {
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Connect With Me</div>
                        <div className="relative z-2">


                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <a
                                    href="https://github.com/ShivRaiGithub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-[15px] ml-[6px]"
                                    style={{ cursor: "pointer" }}
                                >
                                    <RxGithubLogo />
                                    <span className="text-[15px] ml-[6px]">
                                        Github
                                    </span>

                                </a>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <a
                                    href="https://www.linkedin.com/in/shiv-rai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-[15px] ml-[6px]"
                                    style={{ cursor: "pointer" }}
                                >
                                    <RxLinkedinLogo />
                                    <span className="text-[15px] ml-[6px] ">
                                        Linkedin
                                    </span>
                                </a>
                            </p>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">

                                <a
                                    href="https://x.com/ShivRai518940"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-[15px] ml-[6px]"
                                    style={{ cursor: "pointer" }}
                                >
                                    <RxTwitterLogo />

                                    <span className="text-[15px] ml-[6px]">
                                        Twitter / X
                                    </span>

                                </a>
                            </p>
                        </div>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact me at: </div>
                        <p className="flex flex-row items-center my-[15px] ">
                            <RxEnvelopeClosed />
                            <span className="text-[15px] ml-[6px] ">shiv_s_rai@proton.me</span>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;
