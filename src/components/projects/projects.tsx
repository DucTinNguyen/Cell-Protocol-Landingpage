import projectImg from "@images/projects.png";
import jobImg from "@images/jobs.png";
import mapImg from "@images/map.png";
import nftImg from "@images/nft.png";
import lpImg from "@images/launchpad.png";
import marketImg from "@images/market.png";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="w-full max-w-[1440px] flex items-start flex-wrap mt-[60px] gap-4 px-20">
      {/* project */}
      <div className="w-[542px] h-[738px] rounded-[20px] border border-[#3C3C3C] relative">
        <Image src={projectImg} alt="project" className="object-cover" fill />
        <div className="absolute bottom-10 left-6">
          <div className="text-[#F7FDFD] text-[24px] font-marbold">PROJECT</div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            A repository of projects from across DeBio. The decentralised
            ecosystem consists of many independent teams working on specialised
            problems.
          </p>
        </div>
      </div>
      <div className="grow">
        {/* jobs */}
        <div className="w-full h-[361px] rounded-[20px] border border-[#3C3C3C] relative">
          <Image src={jobImg} alt="jobs" className="object-cover" fill />
          <div className="absolute bottom-10 left-6">
            <div className="text-[#F7FDFD] text-[24px] font-marbold">JOBS</div>

            <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
              Explore job opportunities posted by our trusted patners and dive
              in.
            </p>
          </div>
        </div>

        <div className="flex w-full mt-4 gap-4">
          {/* map */}
          <div className="w-[299px] h-[361px] rounded-[20px] border border-[#3C3C3C] relative">
            <Image src={mapImg} alt="jobs" className="object-cover" fill />
            <div className="absolute bottom-10 left-6">
              <div className="text-[#F7FDFD] text-[24px] font-marbold">
                DEBIO MAP
              </div>

              <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
                A community-sourced, data driven Map interface to better
                understand the world of DeSci. Contribute your mapping data to
                us!
              </p>
            </div>
          </div>

          {/* nft */}
          <div className="grow h-[361px] rounded-[20px] border border-[#3C3C3C] relative">
            <Image src={nftImg} alt="jobs" className="object-cover" fill />
            <div className="absolute bottom-10 left-6">
              <div className="text-[#F7FDFD] text-[24px] font-marbold">
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
      <div className="w-[855px] h-[405px] rounded-[20px] border border-[#3C3C3C] relative">
        <Image src={lpImg} alt="project" className="object-cover" fill />
        <div className="absolute bottom-10 left-6">
          <div className="text-[#F7FDFD] text-[24px] font-marbold">
            A launchpad and marketplace for science NFTs.
          </div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            A repository of community tools for conducting onchain research,
            powered by the Proof of Knowledge protocol.
          </p>
        </div>
      </div>

      {/* market */}
      <div className="grow h-[405px] rounded-[20px] border border-[#3C3C3C] relative">
        <Image src={marketImg} alt="project" className="object-cover" fill />
        <div className="absolute bottom-10 left-6">
          <div className="text-[#F7FDFD] text-[24px] font-marbold">
            P2P funding marketplace{" "}
          </div>

          <p className="mt-4 text-[#798675] font-medium text-[14px] leading-[20px] tracking-[-0.21px]">
            Harness the original vision of the internet and blockchain payment
            networks for funding research on chain, permissionlessly.
          </p>
        </div>
      </div>
    </div>
  );
}
