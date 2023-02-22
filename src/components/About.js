import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b 
      from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline 
          border-b-4 border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quis!
          Sint accusantium saepe magni libero delectus architecto beatae
          perferendis, cupiditate impedit, tenetur natus quisquam pariatur
          praesentium sunt neque recusandae culpa dolorum ut! Delectus maiores
          perferendis quibusdam cum autem labore architecto beatae corporis
          dolores quisquam possimus deserunt numquam, fugiat consequuntur amet.
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          blanditiis minima laudantium! Hic sequi iusto facere ea molestias
          recusandae sit beatae consequuntur ullam numquam tenetur quis mollitia
          placeat sint ipsum laborum culpa voluptate natus minima ab, velit
          odit. Porro sit voluptatem excepturi consequuntur impedit maiores
          ipsam reprehenderit, quisquam est quia.
        </p>
      </div>
    </div>
  );
};

export default About;
