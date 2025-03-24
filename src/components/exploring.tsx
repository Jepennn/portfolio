import { JSX } from "react";

export function Exploring() :JSX.Element {
    return (
        <div className="flex flex-col justify-center items-center p-10 mt-10" id="exploring">
            <h1 className="text-6xl font-bold mb-5">What I'm exploring</h1>
            <p className="text-2xl text-center font-semibold lg:mx-50">In addition to what I learn in class, I am actively exploring ways to strengthen my web development skills, particularly with TypeScript.I am also diving into various backend and database technologies to expand my expertise and build more robust applications. I'm currently working on a Tinder-inspired application designed to provide recipe inspiration. The application is being built with React and Redux for a seamless user experience, and it leverages Supabase as a backend as a service solution to manage authentication and data storage.</p>
        </div>
    )
}