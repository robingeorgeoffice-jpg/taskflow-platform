type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group flex min-h-[320px] flex-col rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Icon */}
      <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition-all duration-300 group-hover:bg-cyan-200">
        <Icon className="h-8 w-8 text-cyan-600 transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mx-auto max-w-xs text-base leading-7 text-slate-600">
        {description}
      </p>


    </div>


  );
}
export default FeatureCard;