import React from 'react';

const Banner = () => {
  return (
    <section className="bannerBg padding" >
      <div className="background" />
      <div className="container">
        <div className="items-center justify-center">
          <div className="text-center relative">
            <h2 className="bannerHeading">
              Are you ready to work with us? {" "}
              <span className="startLink">start a project</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;