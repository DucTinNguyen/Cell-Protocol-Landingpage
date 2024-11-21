import Image from "next/image";
import logo from "@images/logo.svg";
import teleIcon from "@images/telehead.svg";
import discordIcon from "@images/twitterhead.png";
import menu from "@images/menu.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full sticky top-9 h-14 z-50">
      <div
        className="flex items-center 
        pl-4 pr-5 py-1.5
        md:py-2.5 md:pl-4 md:pr-2 rounded-[100px] 
      backdrop-blur-[40px] border border-[#3C3C3C] bg-[rgba(255,255,255,0.10)]"
      >
        {/* logo */}
        <div className="flex items-center gap-6 md:mr-8 mr-6">
          <Image src={logo} alt="logo" width={32} height={32} />
          <p className="font-marbold text-white text-[14px] tracking-[-0.14px] hidden md:block">
            CELL PROTOCOL
          </p>
        </div>
        {/* sections */}
        <div
          className="items-center gap-4 text-[14px] md:flex hidden 
        font-semibold tracking-[-0.14px] mr-6"
        >
          <button className="text-primaryText">HOME</button>
          <button className="text-[#798675] uppercase">Token</button>
          <button className="text-[#798675] uppercase">Documentation</button>
          <Link
            target="_blank"
            className="text-[#798675]"
            href={"https://pump.fun/coin/EBSizwYBkVnZgViSraPFXqMtwAuioKmNnjZkcgy1pump"}
          >
            Pump.fun
          </Link>
        </div>

        {/* social links */}
        <div className="flex items-center gap-2 mr-6">
          <div
            className="md:size-[44px] size-8 rounded-full flex items-center justify-center
          bg-[linear-gradient(180deg,rgba(71,195,77,0.12)_0%,rgba(255,255,255,0.12)_100%)] border border-[rgba(255,255,255,0.04)]"
          >
            <Link
              href={"https://t.me/cell_protocol"}
              className="md:w-6 md:h-6 h-4 w-4 relative"
            >
              <Image
                src={teleIcon}
                alt="telegram"
                fill
                className="object-cover"
              />
            </Link>
          </div>
          <div
            className="md:size-[44px] size-8 rounded-full flex items-center justify-center
          bg-[linear-gradient(180deg,rgba(71,195,77,0.12)_0%,rgba(255,255,255,0.12)_100%)] border border-[rgba(255,255,255,0.04)]"
          >
            <Link
              href={"https://x.com/CellProtocol_"}
              className="md:w-6 md:h-6 h-4 w-4 relative"
            >
              <Image
                src={discordIcon}
                alt="telegram"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>

        {/* launch button */}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://dashboard.cellprotocol.science/"}
          className="py-3 px-4 rounded-[999px] text-[#010D01] font-cirka mr-6 md:mr-0
          md:text-[16px] font-bold md:leading-4 text-[14px] leading-[14px]
        bg-[linear-gradient(0deg,#DFFBBF_4.17%,#D3FF33_25.13%,#65CF21_122.92%)]
        "
        >
          LAUNCH APP
        </Link>

        {/* menu */}
        <div className="size-8 relative block md:hidden">
          <Image src={menu} alt="menu" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
