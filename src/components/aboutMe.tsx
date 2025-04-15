import { JSX } from "react";

export function AboutMe(): JSX.Element {
  return (
    <div
      className=" animate-slideIn flex flex-col justify-center items-center p-10 mt-10"
      id="about-me"
    >
      <h1 className="text-6xl font-bold mb-5">About Me</h1>
      <p className="text-2xl text-center font-semibold lg:mx-50">
        I'm a 24 year old KTH student, currently studying my second year at the
        information technology program. I have a passion for programming and
        tech in general. When I am not studying or playing around with code, I
        like to train, spend time with my friends and family and read books.
      </p>
    </div>
  );
}
