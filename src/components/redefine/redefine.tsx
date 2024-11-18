import ideaIcon from "@images/ideas.svg";
import Image from "next/image";
import virus from "@images/redefine-virus.png";

export default function RedefineSection() {
  const IDEA_CARDS = [
    {
      title: "NSTITUTIONAL BARRIERS",
      content:
        " - traditional academia's exclusive culture and rigid hierarchies stifle creativity and breakthrough discoveries",
    },
    {
      title: "STAGNATION",
      content:
        "- scientific advancement has hit roadblocks due to limited resources and outdated infrastructure",
    },
    {
      title: "UNFAIR COMPENSATION",
      content:
        "Clusionary and elitist academic cultures reduce richness of ideas and hold back novel innovations",
    },
  ];

  return (
    <section className="relative w-full max-w-[1440px] flex flex-col justify-start">
      {/* marque */}
      <div className="my-[60px] h-[76px] bg-yellow-200 w-full"></div>

      {/* content */}
      <div
        className="
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
        <p className="mt-4 font-marbold uppercase text-[#F2FFE9] text-[32px] leading-none -tracking-[0.8px] ">
          Science Needs an update
        </p>
        <p className="mt-10 text-[24px] font-semibold -tracking-[0.24px] text-[#798675]">
          The current scientific ecosystem is becoming obsolete as we enter a
          new era of technological possibility.
        </p>
      </div>

      {/* decorator image */}
      <div className="absolute top-[106px] right-[-50px] w-[785px] h-[760px] z-10">
        <Image src={virus} alt="virus" />
      </div>

      {/* idea cards */}
      <div className="w-full mt-[86px] flex items-center justify-center gap-4 relative z-20">
        {IDEA_CARDS.map((item, index) => (
          <div
            key={index}
            className=" px-6 py-10 w-[416px] rounded-2xl
            border border-[rgba(255,255,255,0.10)]
            bg-[rgba(12,37,4,0.50)] backdrop-blur-[25px]
            "
          >
            {/* card logo */}
            <div className="size-16 rounded-full border border-[rgba(255,255,255,0.12)] p-3 bg-[rgba(18,18,18,0.18)]">
              <Image src={ideaIcon} alt="idea icon" />
            </div>

            {/* card title */}
            <h3 className="mt-6 text-[#F7FDFD] text-[16px] font-semibold">
              {item.title}
            </h3>

            {/* card content */}
            <p className="text-primaryText text-[14px] font-medium -tracking-[0.21px] mt-3">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
