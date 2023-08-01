import React from 'react';
import { VscQuote } from 'react-icons/vsc';
import { review } from '../../../Data/CarouselItem';

const ClientReview = ({ fadeIn }) => {
  return (
    <div className="bg-[#f1edea]">
      <div className={`animate items-center grid grid-cols-1 lg:grid-cols-2 gap-4 p-9 lg:p-28 container mx-auto ${fadeIn ? 'fade-in' : ''}`}>
        {review.map((item, index) => (
          <div key={index}>
            <div className="hover:bg-white border-[1px] border-[#0000001a] overflow-hidden lg:mr-5 md:mr-0 h-auto ease-in duration-100">
              <div className="feature-box-move-bottom-top">
                <h2 className="">
                  <VscQuote className="text-[#c3964e] w-[37px] h-[30px]" />
                </h2>
                <div className="text mt-5">" {item.review} "</div>
                <div className="detail !mb-0">{item.name}</div>
                <div>
                  <div className="uppercase detail font-semibold">Client of company</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientReview;