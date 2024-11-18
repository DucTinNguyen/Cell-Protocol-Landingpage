import Image from "next/image";
import toolsBG from "@images/toolsBg.png";
import globeIcon from "@images/globe.svg";
import allTools from "@images/all-tools.png";

export default function Tools() {
  return (
    <section className="w-full max-w-[1440px] h-[517px] px-20 py-[60px] flex flex-col items-center justify-start mt-[60px] relative">
      <div className="w-[713.46px] h-[517px] absolute z-[5]">
        <div className="w-full h-full relative">
          <Image src={toolsBG} alt="tools bg" fill className="object-cover" />
        </div>
      </div>

      <div className="mt-[60px] relative z-10 w-full flex flex-col items-center justify-start">
        <div className="size-16">
          <Image src={globeIcon} alt="globe icon" width={64} height={64} />
        </div>
        <div className="mt-8 font-marbold text-[32px] text-[#F7FDFD] tracking-[-0.8px] uppercase">
          Open Science tools
        </div>

        <Image src={allTools} alt="all tools" height={517} className="mt-8" />
      </div>
    </section>
  );
}
