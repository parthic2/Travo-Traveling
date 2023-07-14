import React from 'react'

const Blogs = () => {
    return (
        <section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px] relative bg-[#f1edea]">
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

                    <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                        <div className="grid-item creative">
                            <div className="blog-Simple xs:block">
                                <div className="blog-post-image xs:h-[250px] w-full">
                                    <a href="#"></a>
                                </div>
                                <div className="post-details">
                                    <a href="#" className="blog-category">creative</a>
                                    <a href="#" className="blog-title">Creativity is nothing but a mind set free</a>
                                    <p className="detail">Lorem ipsum is simply dummy text printing...</p>
                                    <a href="#" className="blog-author">Jeremy dupont</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12 pt-25">
                        <div className="grid-item concept left-0 top-0">
                            <div className="blog-Simple md:block">
                                <div className="blog-post-image xs:h-[250px] w-full">
                                    <a href="#"></a>
                                </div>
                                <div className="post-details">
                                    <a href="#" className="blog-category">concept</a>
                                    <a href="#" className="blog-title">Simplicity, wit, and good typography</a>
                                    <p className="detail">Lorem ipsum is simply dummy text printing...</p>
                                    <a href="#" className="blog-author">bill gardner</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">

                    <div className="col-xs-12 col-md-12 col-lg-6 col-sm-12">
                        <div className="grid-item business">
                            <div className="blog-Simple xs:block">
                                <div className="blog-post-image xs:h-[250px] w-full">
                                    <a href="#"></a>
                                </div>
                                <div className="post-details">
                                    <a href="#" className="blog-category">business</a>
                                    <a href="#" className="blog-title">Look at usual things with unusual</a>
                                    <p className="detail">Lorem ipsum is simply dummy text printing...</p>
                                    <a href="#" className="blog-author">vico magistre</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs