import { Sparkles } from "lucide-react";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/10 to-white/20" />

      <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
        <Sparkles className="h-4 w-4 text-cyan-400" />
      </div>

      <div className="h-px w-48 bg-gradient-to-l from-transparent via-white/10 to-white/20" />
    </div>
  );
}

export default SectionDivider;