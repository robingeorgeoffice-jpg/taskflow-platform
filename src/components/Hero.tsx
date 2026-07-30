import { SECTION_IDS } from "../constants/sections";
type HeroData = {
  title: string;
  subTitle: string[];
  buttonTextClear: string;
  buttonTextDemo: string;
};
type HeroProps = {
  hero: HeroData
};
function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-12" id={SECTION_IDS.home} >
      <div className="   absolute
    left-1/2
    top-16
    h-[750px]
    w-[750px]
    -translate-x-1/2
    rounded-full
    bg-blue-500/10
    blur-[220px]" />
      <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center gap-10  px-4 text-center ">
        <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4  text-xs font-medium text-white">
          <span>✨</span>
          <span>AI-FIRST PRODUCTIVITY PLATFORM</span>
        </p>
        <h1 className="text-white text-6xl font-bold tracking-tight max-w-4xl">{hero.title}</h1>
        <p className="text-white max-w-3xl text-xl leading-9 text-white/80 font-normal">  {hero.subTitle.map((line, index) => (
          <span key={index}>
            {line}
            {index < hero.subTitle.length - 1 && <br />}
          </span>
        ))}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="text-black rounded-full  border px-7 py-3 bg-white font-medium">{hero.buttonTextClear}</button>
          <button className="text-white font-medium rounded-full border border-white/40 px-7 py-3 shadow-md transition-all duration-300 transform hover:scale-105 hover:border-white hover:shadow-lg active:scale-95">
            {hero.buttonTextDemo}
          </button>
        </div>
      </div>



    </section >

  );
}

export default Hero;