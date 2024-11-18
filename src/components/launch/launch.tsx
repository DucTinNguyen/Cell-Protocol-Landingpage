import Image from "next/image";
import bg from "@images/launch-bg.png";
import realise from "@images/realise.png";
import virusIcon from "@images/virus-final.png";
import dnaIcon from "@images/dna.png";

export default function Launcher() {
  return (
    <div className="w-full mt-[60px] h-[729px] relative">
      <div className="w-full relative h-full">
        <Image src={bg} alt="launch bg" fill className="object-cover" />
      </div>

      <div className="absolute top-[193px] w-full flex items-center justify-center z-10">
        <div className="p-2 rounded-[32px] bg-[linear-gradient(90deg,#D3FF33_0%,#12873A_100%)] relative">
          <div className="absolute top-[-134px] -left-[140px] z-[-1]">
            <Image src={virusIcon} alt="virus icon" width={280} height={268} />
          </div>

          <div className="absolute bottom-[-80px] -right-[120px]">
            <Image src={dnaIcon} alt="virus icon" width={280} height={268} />
          </div>

          <div className="w-[912px] h-[351px] p-12 flex flex-col items-center justify-start bg-white rounded-[32px]">
            <Image src={realise} alt="realise" width={427} height={174} />
            <p className="text-center text-[#010D01] text-[16px] font-medium leading-6 tracking-[-0.16px] mt-4">
              DeBio provides a new intellectual landscape for the curious and
              passionate to explore. <br /> Diversity of thought is encouraged.
            </p>
            <button className="text-[18px] text-[#003304] font-semibold leading-none mt-9 px-9 py-2.5 flex items-center justify-center rounded-[999px] bg-[#8CE339]">
              Launch Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
