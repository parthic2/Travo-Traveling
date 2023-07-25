import React from 'react';
import Slider from "../Components/Slider/Slider";
import Trends from "../Components/Trends/Trends";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Counter from "../Components/Counter/Counter";
import Fancy from "../Components/Fancy/Fancy";
import Customer from "../Components/Customer/Customer";
import Blogs from "../Components/Blogs/Blogs";
import Banner from "../Components/Banner/Banner";

const Index = () => {
    return (
        <>
            <Slider />
            <Trends />
            <Services />
            <About />
            <Projects />
            <Counter />
            <Fancy />
            <Customer />
            <Blogs />
            <Banner />
        </>
    )
}

export default Index;