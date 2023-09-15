"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Too Turnt Tony",
    avatar: "TT",
    title: "Content Creator",
    description: "Two Sentences - First: It's Amazing Second: Subscribe",
  },
  {
    name: "CodeWithMosh",
    avatar: "TT",
    title: "Software Developer",
    description: "Amazing Job",
  },
  {
    name: "Alex",
    avatar: "TT",
    title: "Junior JS Developer",
    description:
      "I stumbled on it as OpenAi was not working, and it worked like a Charm",
  },
  {
    name: "FreeCodeCamp",
    avatar: "TT",
    title: "Organisation",
    description: "Huge Potential + AI ",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white "
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 ">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="text-lg text-white text-center sm:pt-20">
        <p>
          Developed and &copy; by -
          <a
            className="text-lg text-bold"
            target="_blank"
            href="https://github.com/Adnaanlegend"
          >
            &nbsp;Adnaan
          </a>{" "}
          <a
            className="text-lg text-bold"
            target="_blank"
            href="https://www.linkedin.com/in/adnaanhussain786/"
          >
            Hussain
          </a>
        </p>
      </div>
    </div>
  );
};
