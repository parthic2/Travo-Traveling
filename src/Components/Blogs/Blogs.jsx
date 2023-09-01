import React from 'react';
import useScrollAnimation from '../../Hooks/useScrollAnimation';
import { blogs } from '../../Data/CarouselItem';
import { Link } from "react-router-dom";

const Blogs = () => {
  const fadeIn = useScrollAnimation(".animate");

  return (
    <section className={`py-content-spacing lg:py-content-spacing-lg md:content-spacing-md xs:py-content-spacing-xs relative bg-background-light animate ${fadeIn ? 'fade-in' : ''}`}>
      <div className="container-fluid">
        <div className="justify-center text-center">
          <div className="flex flex-col items-center text-center mb-24 lg:mb-16 md:mb-12 xs:mb-20">
            <span className="font-medium text-primary-strong text-base uppercase block m-spacing-m">
              Travelling posts
            </span>
            <h2 className="heading-5">
              Latest Blogs
            </h2>
          </div>
        </div>
      </div>

      <div className="container-fluid px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          {blogs.map((blog, index) => (
            <div className="mb-3" key={index}>
              <div className="flex flex-wrap justify-center items-center">
                <div className={blog.category}>
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center">
                    {/* <img alt="team" className="blog-image" src={blog.imageSrc} style={{ height: "349px" }} /> */}
                    <div className="post-details">
                      <Link to="/" className="blog-category">{blog.category}</Link>
                      <Link to="/" className="blog-title">{blog.title}</Link>
                      <p className="detail">{blog.detail}</p>
                      <Link to="/" className="blog-author">{blog.author}</Link>
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