import Image from "next/image";
import virusIcon from "@images/char-virus.png";
import ideaIcon from "@images/ideas.svg";
import distributedIcon from "@images/distributed.svg";
import collabIcon from "@images/collab.svg";
import benefitIcon from "@images/benefit.svg";

const CHARACTERISTICS = [
  {
    title: "DISTRIBUTED POWER ",
    imgUrl: distributedIcon,
    content:
      "Innovative organizational structures bypass traditional gatekeepers and give autonomy to researchers",
  },
  {
    title: "SEAMLESS COLLABORATION",
    imgUrl: collabIcon,
    content:
      "Blockchain infrastructure enables global access to scientific resources, funding, and expertise",
  },
  {
    title: "FIRST-MOVER BENEFIT",
    imgUrl: benefitIcon,
    content:
      "Embracing decentralized science tools provides competitive advantages in the rapidly evolving research landscape",
  },
];

export default function Characteristics() {
  return (
    <section
      className="w-full max-w-[414px] mt-10 px-4 flex flex-col items-center justify-start gap-10
    md:max-w-[1440px] md:mt-[118px] md:px-20 md:flex-row md:items-start md:justify-between"
    >
      <div
        className="w-full flex flex-col items-center justify-start 
      md:w-[610px]"
      >
        <h1
          className="uppercase w-full text-[#F2FFE9] font-marbold text-[32px] leading-[40px]
        md:leading-none -tracking-[0.8px]"
        >
          Decentralized Science 2.0
        </h1>
        <p
          className="w-[390px] mt-[25px] text-[#798675] text-[16px] -tracking-[0.16px] 
          md:text-[24px] md:w-full leading-normal font-semibold md:-tracking-[0.24px]
        "
        >
          DeSci marks the dawn of a new scientific era: transparent, limitless,
          and empowered by breakthrough technology.
        </p>
        <div
          className="relative w-[250px] h-[253px] mb-[47.7px]
        md:w-[300px] md:h-[300px] mt-[66px] md:mb-0"
        >
          <Image src={virusIcon} alt="virus" fill className="object-cover" />
        </div>
      </div>

      <div
        className=" w-full
      md:w-[555px] flex flex-col items-center justify-start gap-4"
      >
        {CHARACTERISTICS.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl px-6 py-8 flex items-center gap-6
            border border-[rgba(255,255,255,0.12)] bg-[rgba(12,37,4,0.50)]
            backdrop-blur-[25px] w-full
            "
          >
            <div className="flex-shrink-0 p-3 min-w-[64px] min-h-[64px] flex items-center justify-center rounded-full bg-[rgba(18,18,18,0.18)] border border-[rgba(255,255,255,0.12)]">
              <Image src={item.imgUrl} alt="idea icon" width={32} height={32} />
            </div>
            <div className="">
              <div className="text-primaryText text-[16px] font-semibold">
                {item.title}
              </div>
              <div className="text-[#F7FDFD] mt-3 text-[14px] -tracking-[0.21px] font-normal">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
