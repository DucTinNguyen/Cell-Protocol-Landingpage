import Image from "next/image";
import introImage from "@images/intro-image.png";
import welcomeBG from "@images/welcome-bg.png";
export default function WelcomeSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-start 
    md:h-[1159px]"
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

      <div className="w-full max-w-[1440px] flex flex-col items-center justify-start relative z-10">
        {/* title */}
        <h1
          className="
      mt-[172px] text-center font-marbold text-[64px] leading-[76px] -tracking-[2.24px]
      bg-[linear-gradient(270deg,#AFEB2B_18.91%,#8DFF33_47.94%,#DFFBBF_99.95%)] bg-clip-text text-transparent"
        >
          THE
          <span className="mx-4 text-[80px] font-medium leading-[76px] tracking-[-2.8px] font-cirka">
            FUTURE
          </span>
          OF <br /> DECENTRALIZED SCIENCE
        </h1>

        {/* motto */}
        <p className="mt-6 text-[rgba(242,255,233,0.72)] text-[24px] leading-none -tracking-[0.24px] font-medium">
          Discover the next wave of research: blockchain powered and boundless
        </p>

        {/* join link */}
        <button
          className="shadow-[0px_0px_40px_10px_rgba(140,227,57,0.50)] mt-8 h-12 p-[3px] flex items-center justify-center
      rounded-[999px] bg-[linear-gradient(90deg,#D3FF33_0%,#12873A_100%)]
      "
        >
          <div
            className=" text-white h-full flex items-center justify-center px-6 py-2.5
        rounded-[999px] bg-[#F7FDFD] text-[#003304] text-[18px] leading-none font-semibold
        
        "
          >
            Join our community
          </div>
        </button>
      </div>

      {/* intro image */}
      <div className="absolute z-10 md:w-[1098px] md:h-[655px] md:top-[504px] ">
        <Image src={introImage} alt="intro image" />
      </div>
    </section>
  );
}
