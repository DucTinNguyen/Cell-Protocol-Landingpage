import Image from "next/image";
import toolsBG from "@images/toolsBg.png";
import globeIcon from "@images/globe.svg";
import allTools from "@images/all-tools.png";
import hugIcon from "@images/hugface.png";
import openBioIcon from "@images/openbio.png";
import fastIcon from "@images/fastai.png";
import pytoIcon from "@images/pyto.png";
import arxivIcon from "@images/arxiv.png";
import bioIcon from "@images/bioxiv.png";

const FIRST_ROW = [
  {
    title: "Hugging Face",
    imgUrl: hugIcon,
  },
  {
    title: "Open Bio",
    imgUrl: openBioIcon,
  },
  {
    title: " fast",
    imgUrl: fastIcon,
  },
];

const SECOND_ROW = [
  {
    title: "PyTorch",
    imgUrl: pytoIcon,
  },
  {
    title: "Arxiv",
    imgUrl: arxivIcon,
  },
  {
    title: "BioXiv",
    imgUrl: bioIcon,
  },
];

export default function Tools() {
  return (
    <section
      className="w-full max-w-[1440px] h-[967px] px-20 pb-[60px] flex flex-col items-center justify-start 
    mt-10 md:h-[517px]
    md:mt-[60px] relative"
    >
      <div
        className=" w-[414px]
      md:w-[713.46px] h-[517px] absolute z-[5]"
      >
        <div className="w-full h-full relative">
          <Image src={toolsBG} alt="tools bg" fill className="object-cover" />
        </div>
      </div>

      <div
        className="mt-[50px]
      md:mt-[60px] relative z-10 w-full flex flex-col items-center justify-start"
      >
        <div className="size-16">
          <Image src={globeIcon} alt="globe icon" width={64} height={64} />
        </div>
        <div
          className="mt-8 font-marbold text-[24px] tracking-[-0.6px]
        md:text-[32px] text-[#F7FDFD] md:tracking-[-0.8px] uppercase"
        >
          Open Science tools
        </div>

        <div
          className=" mt-[60px] max-w-[1270px] flex flex-col items-center justify-center gap-[60px]
        md:gap-20 md:flex-row
        "
        >
          <div className="relative w-[320px] h-[64px]">
            <Image
              src={hugIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[320px] h-[64px] relative">
            <Image
              src={openBioIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-[320px] md:h-[64px] w-[230px] h-[48px] relative">
            <Image
              src={fastIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className=" mt-[60px] max-w-[1270px] flex flex-col items-center justify-center gap-[60px]
        md:gap-[93px] md:flex-row
        "
        >
          <div className="w-[230px] h-[64px] relative">
            <Image
              src={pytoIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[198px] h-[64px]  relative">
            <Image
              src={arxivIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[183px] h-[64px] relative">
            <Image
              src={bioIcon}
              alt="tool icon"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
