import { features } from "../../data/features";
import FeatureCard from "./FeatureCard";
import { SECTION_IDS } from "../../constants/sections";
function Features() {
  return (
    <section className="bg-slate-900/20 pt-20" id={SECTION_IDS.features}>
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8 py-2 px-4 pb-12">
        <h2 className="text-white text-4xl max-w-4xl">Everything you need to stay productive</h2>
        <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-white/70">Powerful AI tools that help you organize  work,
          automate repetitive tasks, and collaborate faster.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 gap-8  p-4 mx-auto max-w-6xl flex flex-col items-center gap-8 py-2 px-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </section >
  );
}

export default Features;