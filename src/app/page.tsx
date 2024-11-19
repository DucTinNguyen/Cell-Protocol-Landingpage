import Characteristics from "@/components/characteristics/characteristics";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Launcher from "@/components/launch/launch";
import Projects from "@/components/projects/projects";
import RedefineSection from "@/components/redefine/redefine";
import Tools from "@/components/tools/tools";
import WelcomeSection from "@/components/welcome/welcome";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#010D01] font-neueHaas">
      <div className="w-full flex flex-col items-center justify-start relative">
        <Header />
        <WelcomeSection />
        <RedefineSection />
        <Characteristics />
        <Projects />
        <Tools />
        <Launcher />
        <Footer />
      </div>
    </div>
  );
}
