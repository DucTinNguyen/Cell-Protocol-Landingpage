import marqueImg from "@images/marque.png";
import Image from "next/image";
import virus from "@images/redefine-virus.png";
import barrierIcon from "@images/barrier.svg";
import banIcon from "@images/ban.svg";
import fairIcon from "@images/fair.svg";

export default function RedefineSection() {
  const IDEA_CARDS = [
    {
      title: "INSTITUTIONAL BARRIERS",
      content:
        "Traditional academia's exclusive culture and rigid hierarchies stifle creativity and breakthrough discoveries",
      imgUrl: barrierIcon,
    },
    {
      title: "STAGNATION",
      content:
        "Scientific advancement has hit roadblocks due to limited resources and outdated infrastructure",
      imgUrl: banIcon,
    },
    {
      title: "UNFAIR COMPENSATION",
      content:
        "Researchers struggle to receive adequate compensation for their groundbreaking discoveries",
      imgUrl: fairIcon,
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] flex flex-col justify-start">
      {/* marque */}
      <div className="md:my-[60px] my-10 w-full h-[76px] relative">
        <Image src={marqueImg} alt="marque" fill className="object-cover" />
      </div>

      {/* content */}
      <div
        className=" mx-4 md:mx-0
      md:mt-[111px] md:ml-[84px] md:w-[636px]"
      >
        <div
          className="text-[18px] leading-none font-semibold
        bg-[linear-gradient(270deg,#D3FF33_66.6%,#65CF21_105.1%)]
        bg-clip-text text-transparent
        "
        >
          Redefining Science for the Modern Age
        </div>
        <p
          className="mt-4 font-marbold uppercase text-[#F2FFE9] text-[32px] leading-[40px]
        md:leading-none -tracking-[0.8px]"
        >
          Science demands transformation
        </p>
        <p
          className=" mt-6 text-[16px] tracking-[-0.16px] 
        md:mt-10 md:text-[24px] font-semibold md:-tracking-[0.24px] text-[#798675]"
        >
          The current scientific ecosystem is becoming obsolete as we enter a
          new era of technological possibility.
        </p>
      </div>

      {/* decorator image */}
      <div
        className="w-full flex items-center 
      my-10 justify-center h-[247px] -ml-12
      md:my-0 md:ml-0 md:w-[785px] md:h-[760px] md:absolute md:top-[106px] md:right-[-50px] md:z-10
      "
      >
        <div
          className=" w-[350px] h-[350px] mt-[-50px]
        md:w-[785px] md:h-[760px] "
        >
          <Image src={virus} alt="virus" />
        </div>
      </div>

      {/* idea cards */}
      <div
        className="w-full mt-0 flex flex-col px-4
      md:mt-[86px] md:flex-row md:px-0 items-center justify-center gap-4 relative z-20"
      >
        {IDEA_CARDS.map((item, index) => (
          <div
            key={index}
            className=" px-6 py-10 rounded-2xl w-full
            md:w-[416px]
            border border-[rgba(255,255,255,0.10)]
            bg-[rgba(12,37,4,0.50)] backdrop-blur-[25px]
            "
          >
            {/* card logo */}
            <div className="size-16 flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] p-3 bg-[rgba(18,18,18,0.18)]">
              <Image src={item.imgUrl} alt="idea icon" width={32} height={32} />
            </div>

            {/* card title */}
            <h3 className="mt-6 text-primaryText text-[16px] font-semibold">
              {item.title}
            </h3>

            {/* card content */}
            <p className=" text-[#F7FDFD] text-[14px] font-medium -tracking-[0.21px] mt-3">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
