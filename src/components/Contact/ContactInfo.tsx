import { Building2, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="w-full max-w-sm pt-10 space-y-6">
      {/* Address */}
      <div className="flex items-start gap-4">
        <Building2 className="h-6 w-6 text-slate-400 mt-1 flex-shrink-0" />

        <div>
          <p className="text-lg font-semibold text-white">
            545 Mavis Island
          </p>
          <p className="text-lg font-semibold text-white">
            Chicago, IL 99191
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <Phone className="h-6 w-6 text-slate-400 flex-shrink-0" />

        <a
          href="tel:+15552345678"
          className="text-lg font-semibold text-white hover:text-blue-400 transition"
        >
          +1 (555) 234-5678
        </a>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <Mail className="h-6 w-6 text-slate-400 flex-shrink-0" />

        <a
          href="mailto:hello@example.com"
          className="text-lg font-semibold text-white hover:text-blue-400 transition"
        >
          hello@example.com
        </a>
      </div>
    </div>
  );
}

