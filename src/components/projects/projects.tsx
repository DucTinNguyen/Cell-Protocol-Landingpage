import Image from "next/image";
import projectImg from "@images/projects.png";
import projectMobileImg from "@images/project-mobile.png";
import jobImg from "@images/jobs.png";
import jobMobileImg from "@images/jobs-mobile.png";
import mapImg from "@images/map.png";
import mapMobileImg from "@images/map-mobile.png";
import nftImg from "@images/nft.png";
import nftMobileImg from "@images/nft-mobile.png";
import lpImg from "@images/launchpad.png";
import lpMobileImg from "@images/launchpad-mobile.png";
import fundImg from "@images/fund.png";
import marketMobileImg from "@images/market-mobile.png";

export default function Projects() {
  return (
    <div
      className="mt-10 w-full max-w-[414px] p-4
      md:max-w-[1440px] flex md:items-start flex-wrap 
    md:mt-[60px] gap-4 md:px-20"
    >
      {/* project */}
      <div
        className="w-[382px] h-[541px]
      md:w-[542px] md:h-[738px] rounded-[20px] border border-[#3C3C3C] relative"
      >
        <Image
          src={projectImg}
          alt="project"
          className="object-cover rounded-[20px] hidden md:block"
          fill
        />
        <Image
          src={projectMobileImg}
          alt="project"
          className="object-cover rounded-[20px] md:hidden"
          fill
        />
        <div className="absolute bottom-10 px-6">
          <div className="text-[#F7FDFD] text-[24px] font-marbold">PROJECT</div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            DeSci represents a vibrant network of independent research teams
            integrated with Pump.fun, each tackling distinct scientific
            challenges through decentralized collaboration and specialized
            expertise.
          </p>
        </div>
      </div>
      <div className="grow">
        {/* funds */}
        <div
          className="h-[495px] w-[382px]
        md:w-full md:h-[361px] rounded-[20px] border border-[#3C3C3C] relative"
        >
          <Image
            src={fundImg}
            alt="jobs"
            className="object-cover rounded-[20px] hidden md:block"
            fill
          />
          <Image
            src={marketMobileImg}
            alt="jobs"
            className="object-cover rounded-[20px] md:hidden"
            fill
          />
          <div className="absolute bottom-10 px-6">
            <div className="text-[#F7FDFD] text-[24px]  font-marbold uppercase">
              Pump.fun Fundraising For Experiments
            </div>

            <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
              A platform integrated with Pump.fun where developers can launch
              and fundraise for longevity experiments through tokenized rights
              to their work
            </p>
          </div>
        </div>

        <div
          className="flex w-full mt-4 gap-4 flex-col
        md:flex-row
        "
        >
          {/* map */}
          <div
            className="w-[382px] h-[541px]
          md:w-[299px] md:h-[361px] rounded-[20px] border border-[#3C3C3C] relative"
          >
            <Image
              src={mapImg}
              alt="jobs"
              className="object-cover rounded-[20px] hidden md:block"
              fill
            />
            <Image
              src={mapMobileImg}
              alt="jobs"
              className="object-cover rounded-[20px] md:hidden"
              fill
            />
            <div className="absolute bottom-10 px-6">
              <div className="text-[#F7FDFD] text-[24px] font-marbold uppercase">
                MAP
              </div>

              <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
                Explore our interactive DeSci landscape through our
                collaborative mapping platform. This data-driven visualization
                is powered by community contributions – add your insights to
                help chart the future of decentralized science!
              </p>
            </div>
          </div>

          {/* nft */}
          <div
            className=" w-[382px]
          md:grow h-[361px] rounded-[20px] border border-[#3C3C3C] relative"
          >
            <Image
              src={nftImg}
              alt="jobs"
              className="object-cover rounded-[20px] hidden md:block"
              fill
            />
            <Image
              src={nftMobileImg}
              alt="jobs"
              className="object-cover rounded-[20px] md:hidden"
              fill
            />
            <div className="absolute bottom-10 px-6">
              <div className="text-[#F7FDFD] text-[24px] font-marbold uppercase">
                NFTs
              </div>

              <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
                A launchpad and marketplace for science NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* launch pad */}
      <div
        className=" w-[382px]
      md:w-[855px] h-[405px] rounded-[20px] border border-[#3C3C3C] relative"
      >
        <Image
          src={lpImg}
          alt="project"
          className="object-cover rounded-[20px] hidden md:block"
          fill
        />
        <Image
          src={lpMobileImg}
          alt="project"
          className="object-cover rounded-[20px] md:hidden"
          fill
        />

        <div className="absolute bottom-10 px-6">
          <div className="text-[#F7FDFD] text-[24px] leading-[30px] font-marbold uppercase">
            A launchpad and <br /> marketplace for science <br /> NFTs.
          </div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            A repository of community tools for conducting onchain research,
            powered by the Proof of Knowledge protocol.
          </p>
        </div>
      </div>

      {/* jobs */}
      <div
        className="w-[382px]
      md:grow h-[405px] rounded-[20px] border border-[#3C3C3C] relative"
      >
        <Image
          src={jobImg}
          alt="project"
          className="rounded-[20px] object-cover hidden md:block"
          fill
        />
        <Image
          src={jobMobileImg}
          alt="project"
          className="rounded-[20px] object-cover md:hidden"
          fill
        />
        <div className="absolute bottom-10 px-6">
          <div className="text-[#F7FDFD] text-[24px] font-marbold">JOBS</div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            Discover exciting career paths with our verified partners and take
            your next professional step forward.
          </p>
        </div>
      </div>
    </div>
  );
}
