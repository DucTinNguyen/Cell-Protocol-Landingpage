"use client";
import logo from "@images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import discordIcon from "@images/discord.svg";
import xIcon from "@images/x.svg";
import teleIcon from "@images/tele.svg";
import mediumIcon from "@images/medium.svg";
import arrowIcon from "@images/arrow.svg";
import icGithub from '@images/github.svg'

const FOOTER_LINKS = [
  {
    title: "Community",
    links: [
      { title: "X", url: "#" },
      { title: "Telegram", url: "#" },
      { title: "Medium", url: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { title: "Documentation", url: "#" },
      { title: "Github", url: "#" },
      { title: "Dapp", url: "#" },
    ],
  },
  {
    title: "Token",
    links: [
      { title: "Dexscreener", url: "#" },
      { title: "Solscan", url: "#" },
      { title: "Resource", url: "#" },
      { title: "Pump.fun", url: "https://Pump.fun" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: teleIcon, url: "#" },
  { icon: xIcon, url: "#" },
  { icon: mediumIcon, url: "#" },
  { icon: icGithub, url: "#" },
];

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="w-full px-4 
    md:px-20 pt-10 pb-4 md:max-w-[1440px]"
    >
      <div
        className="w-full flex items-start gap-10
      md:flex-row flex-col md:gap-20
      "
      >
        <div className="md:w-[570px] w-full">
          {/* logo */}
          <div className="gap-[14px] flex items-center justify-start">
            <Image src={logo} alt="logo" width={48} height={48} />
            <p className="text-white font-semibold text-[40px] leading-none tracking-[-1.2px] uppercase">
              Cell Protocol
            </p>
          </div>

          {/* desc */}
          <div className="mt-10 text-white">
            <h3 className="text-[24px] leading-8 font-bold tracking-[-0.24px]">
              Stay In The Loop
            </h3>
            <p
              className="text-[#798675] font-medium text-[14px] leading-[20px] w-[385px] tracking-[-0.21px]
            md:leading-normal md:text-[16px] md:tracking-[-0.24px] mt-3 md:w-full"
            >
              Be part of the Cell Protocol community and gain exclusive insights
              into groundbreaking biotech innovation, funding opportunities, and
              decentralized research advancements.
            </p>
          </div>

          {/* subscribe */}
          <div
            className="mt-8 py-2 pr-2 pl-4 rounded-[100px] w-full
            md:w-[439px] flex items-center justify-between 
          border border-[#3C3C3C] bg-[rgba(255,255,255,0.06)] backdrop-blur-[25px]"
          >
            <input
              className="bg-transparent 
            placeholder-[#798675] placeholder:text-[14px] placeholder:font-medium placeholder:leading-[20px]"
              placeholder="Your email address"
            />

            <button
              className="flex items-center justify-center px-5 py-1.5 rounded-[32px] bg-[#8CE339]
            text-[#00261A] text-[14px] leading-[24px] font-semibold tracking-[-0.14px]"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="items-center justify-start gap-5 md:hidden flex w-full">
          {SOCIAL_LINKS.map((item) => (
            <Link
              href={item.url}
              target="_blank"
              className="size-8 flex items-center relative justify-center"
              key={item.icon}
            >
              <Image
                src={item.icon}
                alt="social icon"
                fill
                className="object-cover"
              />
            </Link>
          ))}
        </div>

        <div
          className="flex md:items-start items-start justify-between 
        md:grow w-full md:h-[290px]"
        >
          {FOOTER_LINKS.map((item) => (
            <div className="" key={item.title}>
              <h3 className="text-[#8CE339] text-[16px] leading-6 font-semibold mb-6">
                {item.title}
              </h3>
              <div className="flex flex-col gap-8">
                {item.links.map((link, index) => (
                  <Link
                    href={link.url}
                    target="_blank"
                    key={index}
                    className=" text-[#798675] text-[16px] leading-3 font-medium tracking-[-0.24px]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* back top */}
          <div className="flex flex-col items-end justify-start gap-4 md:hidden">
            <button
              onClick={() => backToTop()}
              className="flex w-14 h-14 rounded-full items-center justify-center
            shadow-[0px_1px_0px_0px_rgba(255,255,255,0.05)_inset,0px_0px_40px_-2px_rgba(0,0,0,0.56),0px_-1px_0px_0px_rgba(0,0,0,0.20)_inset]
          bg-[linear-gradient(270deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.08)_100%)]"
            >
              <Image src={arrowIcon} alt="arrow icon" />
            </button>
            <p className="text-[#F2FFE9] text-[12px] font-semibold tracking-[-0.1px]">
              Back to top
            </p>
          </div>

          <div className="md:h-full flex flex-col justify-between">
            <div className="items-center justify-end  gap-5 hidden md:flex">
              {SOCIAL_LINKS.map((item, index) => (
                <Link
                  href={item.url}
                  className="size-8 flex items-center justify-center"
                  key={index}
                >
                  <Image src={item.icon} alt="social icon" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-end justify-start gap-4 md:flex hidden">
              <button
                onClick={() => backToTop()}
                className="flex w-14 h-14 rounded-full items-center justify-center
            shadow-[0px_1px_0px_0px_rgba(255,255,255,0.05)_inset,0px_0px_40px_-2px_rgba(0,0,0,0.56),0px_-1px_0px_0px_rgba(0,0,0,0.20)_inset]
          bg-[linear-gradient(270deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.08)_100%)]"
              >
                <Image src={arrowIcon} alt="arrow icon" />
              </button>
              <p className="text-[#F2FFE9] text-[12px] font-semibold tracking-[-0.1px]">
                Back to top
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full border-t border-[#122405] py-4 text-[14px] font-medium tracking-[-0.21px] text-[#798675]">
        Copyright © Cell Protocol 2024
      </div>
    </footer>
  );
}
