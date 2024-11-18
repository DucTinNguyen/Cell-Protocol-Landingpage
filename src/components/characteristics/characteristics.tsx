import Image from "next/image";
import virusIcon from "@images/char-virus.png";
import ideaIcon from "@images/ideas.svg";
const CHARACTERISTICS = [
  {
    title: "DISTRIBUTED POWER ",
    content:
      "Innovative organizational structures bypass traditional gatekeepers and give autonomy to researchers",
  },
  {
    title: "SEAMLESS COLLABORATION",
    content:
      "Blockchain infrastructure enables global access to scientific resources, funding, and expertise",
  },
  {
    title: "FIRST-MOVER BENEFIT",
    content:
      "Embracing decentralized science tools provides competitive advantages in the rapidly evolving research landscape",
  },
];

export default function Characteristics() {
  return (
    <section className="w-full max-w-[1440px] mt-[118px] px-20 flex items-start justify-between">
      <div className="flex flex-col items-center justify-start w-[610px]">
        <h1 className="uppercase w-full text-[#F2FFE9] font-marbold text-[32px] leading-none -tracking-[0.8px]">
          Decentralized Science 2.0
        </h1>
        <p
          className="w-full mt-[25px] text-[#798675] text-[24px] leading-normal font-semibold -tracking-[0.24px]
        "
        >
          DeSci marks the dawn of a new scientific era: transparent, limitless,
          and empowered by breakthrough technology.
        </p>
        <Image
          src={virusIcon}
          alt="virus"
          width={300}
          height={300}
          className="mt-[66px]"
        />
      </div>

      <div className="w-[555px] flex flex-col items-center justify-start gap-4">
        {CHARACTERISTICS.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl px-6 py-8 flex items-center gap-6
            border border-[rgba(255,255,255,0.12)] bg-[rgba(12,37,4,0.50)]
            backdrop-blur-[25px] w-full
            "
          >
            <div className="p-3 rounded-full bg-[rgba(18,18,18,0.18)] border border-[rgba(255,255,255,0.12)]">
              <Image src={ideaIcon} alt="idea icon" width={40} height={40} />
            </div>
            <div className="grow">
              <div className="text-[#E0DDD9] text-[16px] font-semibold">
                {item.title}
              </div>
              <div className="text-primaryText mt-3 text-[14px] -tracking-[0.21px] font-medium">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
