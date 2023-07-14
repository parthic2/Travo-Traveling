import React from 'react';
import { AiOutlineArrowRight, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai';
import { BsArrowLeft, BsArrowRight, BsPlay, BsArrowUpRight, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            {/* complete */}
            <footer className="dark footer-style-09 bg-[#232323]" >
                <div className="py-[6%] xs:py-[13%] container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="md:text-center text-start last:m-0 md:mt-[25px] text-white">
                                <span>Alpha</span>
                                <p className="text-[#828282] mt-3">© Copyright 2023 <span>Alpha</span></p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <span className="mb-[25px] block sm:w-full md:text-start md:w-4/5 sm:text-center leading-[18px] mt-[15px]">
                                <span className="text-white">Newsletter sign-up. </span>
                                <span className="text-[#828282]">Get monthly updates and resources.</span>
                            </span>

                            <div className="form w-[75%] justify-center md:justify-start xs:w-full">
                                <div className="relative subscribe-style-05">
                                    <form className="relative">
                                        <label className="block relative">
                                            <input className="border-[1px] small-input border-solid border-[rgba(255,255,255,0.2)] placeholder-[#A6A6A6] rounded-none	bg-transparent py-[13px] px-[15px] text-md m-0 w-full xs:py-[13px] xs:px-[15px]" name="email" type="email" placeholder="Enter your email address" />
                                        </label>
                                        {/* <button type="submit" className="text-xs tracking-[1px] py-[12px] px-[28px] top-1/2 translate-y-2/4 uppercase xs:text-center dark">
                      <span className="far fa-envelope text-lg leading-none m-0 mr-[10px] text-[#c3964e] xs:mr-0"><GoMail /></span>
                    </button> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-3 mb-[10px] text-[#828282]">
                            <span className="mb-[15px] block leading-[18px] mt-[15px]">Connect with social</span>

                            <ul className="flex gap-4">
                                <li><FaFacebookF /></li>
                                <li><AiOutlineDribbble /></li>
                                <li><BsTwitter /></li>
                                <li><AiOutlineInstagram /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer