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
              Traveling posts
            </span>
            <h2 className="heading-5">
              Latest Blogs
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          {blogs.map((blog, index) => (
            <div key={index}>
              <div className="h-full flex sm:flex-row flex-col items-center justify-center text-left bg-white rounded-lg">
                <img alt="team" className="flex-shrink-0 w-full md:w-72 sm:w-72 h-96 object-cover object-center sm:mb-0 mb-4" src={blog.imageSrc} />
                <div className="flex-grow px-8">
                  <div className="mt-5">
                    <Link to="/" className="blog-category">{blog.category}</Link>
                  </div>
                  <div className="mt-10">
                    <Link to="/" className="blog-title">{blog.title}</Link>
                  </div>
                  <p className="detail mt-2">{blog.detail}</p>
                  <div className="mb-10">
                    <Link to="/" className="blog-author">{blog.author}</Link>
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