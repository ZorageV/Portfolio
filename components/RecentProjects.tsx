import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Checkout my <span className="text-purple">Projects</span>
      </h1>
      <div className="text-white flex flex-wrap items-center justify-around p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[35rem] flex items-center justify-center sm:w-96 w-[80vw] md:m-4"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="object-cover w-full h-full"
                  />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 my-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center mt-7 mb-3">
                <div className="flex items-center ">
                  {iconLists.map((icon) => (
                    <div key={icon} className="rounded-full p-2">
                      <img src={icon} alt={icon} />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
