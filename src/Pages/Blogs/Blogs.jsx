import React from 'react';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { blogs } from '../../Data/CarouselItem';

const Blogs = () => {
  const fadeIn = useScrollAnimation(".animate");

  return (
    <section className={`py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px] relative bg-[#f1edea] animate ${fadeIn ? 'fade-in' : ''}`}>
      <div className="container-fluid">
        <div className="justify-center text-center row">
          <div className="flex flex-col items-center text-center mb-24 lg:mb-16 md:mb-12 xs:mb-20 col-xl-6 col-lg-7 col-md-8 col-sm-12">
            <span className="font-medium text-[#c3964e] text-base uppercase block m-[10px]">
              interior posts
            </span>
            <h2 className="heading-5 text-[32px] font-bold -tracking-[1px] text-[#232323] block w-3/5 mb-0 uppercase">
              Latest Blogs
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12 mb-3" key={index}>
              <div className="flex flex-wrap">
                <div className={blog.category}>
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center">
                    <img alt="team" className="blog-image" src={blog.imageSrc} />
                    <div className="post-details">
                      <a href="#" className="blog-category">{blog.category}</a>
                      <a href="#" className="blog-title">{blog.title}</a>
                      <p className="detail">{blog.detail}</p>
                      <a href="#" className="blog-author">{blog.author}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;