import Image from "next/image";
import bg from "@images/launch-bg.png";
import realiseIcon from "@images/realise.png";
import virusIcon from "@images/virus-final.png";
import dnaIcon from "@images/dna.png";
import Link from "next/link";

export default function Launcher() {
  return (
    <div
      className="w-full mt-10 h-[714px] overflow-hidden
    md:mt-[60px] md:h-[729px] relative"
    >
      <div className="w-full relative h-full">
        <Image src={bg} alt="launch bg" fill className="object-cover" />
      </div>

      <div
        className="absolute px-4 py-2.5 md:p-0 top-[143px]
      md:top-[193px] w-full flex items-center justify-center z-10"
      >
        <div className="p-2 rounded-[32px] bg-[linear-gradient(90deg,#D3FF33_0%,#12873A_100%)] relative ">
          <div className="absolute top-[-134px] -left-[140px] z-[-1]">
            <Image src={virusIcon} alt="virus icon" width={280} height={268} />
          </div>

          <div
            className="absolute md:bottom-[-80px] md:-right-[120px] md:w-[280px] md:h-[268px] 
          bottom-[-140px] -right-[65px]
          "
          >
            <div
              className="md:w-[280px] md:h-[268px] 
            w-[240px] h-[230px] relative"
            >
              <Image
                src={dnaIcon}
                alt="virus icon"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div
            className=" w-full py-12 px-4
          md:w-[912px] h-[351px] md:p-12 flex flex-col items-center justify-start bg-white rounded-[32px]"
          >
            <Image src={realiseIcon} alt="realise" width={427} height={174} />
            <p
              className="text-center text-[#010D01] text-[14px] leading-[20px] 
            md:text-[16px] font-normal md:leading-6 tracking-[-0.16px] mt-4"
            >
              DeSci welcomes diverse perspectives, creating an open frontier
              where innovative minds can freely explore and challenge scientific
              boundaries.
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://dashboard.cellprotocol.science/"}
              className="text-[18px] text-[#003304] font-semibold mt-9 px-9 py-2.5 flex items-center justify-center rounded-[999px] bg-[#8CE339]"
            >
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
