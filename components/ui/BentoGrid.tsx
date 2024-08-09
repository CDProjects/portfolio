'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('caseydentprojects@gmail.com');
    setCopied(true);
  };

  const techStack = ["React.js", "Next.js", "C#", "Vue.JS", "Express", "NuxtJS", "Typescript", "GraphQL"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full relative`}>
        {img && (
          <img
            src={img}
            alt={title}
            className={cn("absolute inset-0 w-full h-full object-cover object-center", imgClassName)}
          />
        )}
        {spareImg && (
          <img
            src={spareImg}
            alt={`${title} spare`}
            className={`absolute right-0 bottom-0 ${id === 5 ? "w-full opacity-80" : ""}`}
          />
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative h-full flex flex-col p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-sm md:text-xs lg:text-base text-[#C1C2D3] z-10 mb-2">
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 mb-4`}>
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="py-2 px-3 text-xs lg:text-sm rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={'absolute -bottom-5 right-0'}>
                <Lottie options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  }
                }}/>
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'} 
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
