import Image from "next/image";
import introImage from "@images/intro-image.png";
import welcomeBG from "@images/welcome-bg.png";
export default function WelcomeSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-start 
    md:h-[1159px] h-[810px]"
    >
      <div className="w-full h-[810px] absolute top-0 left-0">
        <div className="w-full h-full relative">
          <Image
            src={welcomeBG}
            alt="welcome bg"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full md:max-w-[1440px] max-w-[414px] flex flex-col items-center justify-start relative z-10">
        {/* title */}
        <h1
          className="mt-[160px] text-[36px] leading-[46px] tracking-[-1.26px] mx-4
      md:mt-[172px] text-center font-marbold md:text-[64px] md:leading-[76px] md:-tracking-[2.24px]
      bg-[linear-gradient(270deg,#AFEB2B_18.91%,#8DFF33_47.94%,#DFFBBF_99.95%)] bg-clip-text text-transparent"
        >
          THE
          <span
            className="text-[44px] leading-[46px] tracking-[-1.54px]
          mx-4 md:text-[80px] font-medium md:leading-[76px] md:tracking-[-2.8px] font-cirka"
          >
            FUTURE
          </span>
          OF <br /> DECENTRALIZED SCIENCE
        </h1>

        {/* motto */}
        <p
          className=" mt-4 text-[14px] leading-[20px] tracking-[-0.14px] text-center
        md:mt-6 text-[rgba(242,255,233,0.72)] md:text-[24px] md:leading-none md:-tracking-[0.24px] font-medium"
        >
          Discover the next wave of research: blockchain powered and boundless
        </p>

        {/* join link */}
        <button
          className="shadow-[0px_0px_40px_10px_rgba(140,227,57,0.50)] mt-8 h-12 p-[3px] flex items-center justify-center
      rounded-[999px] bg-[linear-gradient(90deg,#D3FF33_0%,#12873A_100%)]
      "
        >
          <div
            className="h-full flex items-center justify-center px-6 py-2.5
        rounded-[999px] bg-[#F7FDFD] text-[#003304] text-[18px] leading-none font-semibold
        
        "
          >
            Join our community
          </div>
        </button>
      </div>

      {/* intro image */}
      <div
        className=" w-[370px] h-[220.719px]
      md:absolute mt-20 md:mt-0 z-10 md:w-[1098px] md:h-[655px] md:top-[544px] "
      >
        <Image src={introImage} alt="intro image" />
      </div>
    </section>
  );
}
