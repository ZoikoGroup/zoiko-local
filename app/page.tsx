import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import { 
  FiMapPin, 
  FiPhone, 
  FiVideo, 
  FiMic, 
  FiUsers, 
  FiShield 
} from "react-icons/fi";
const features = [
  {
    icon: FiMapPin,
    label: "Local presence",
  },
  {
    icon: FiPhone,
    label: "Reliable calling",
  },
  {
    icon: FiVideo,
    label: "Video-ready",
  },
  {
    icon: FiMic,
    label: "AI-native",
  },
  {
    icon: FiUsers,
    label: "Business controls",
  },
  {
    icon: FiShield,
    label: "Compliance-led",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#F6F3EE] dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#F05A2B]">
                Global Numbers · Local Presence · AI-Native
              </p>

              <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Sound Local.
                <br />
                <span className="text-[#F05A2B]">Stay Close.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Get local phone numbers for business, work, and personal life in
                priority global markets — with calling, video, AI receptionist,
                voicemail intelligence, and ZoikoNex-powered billing.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-full bg-[#F05A2B] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  Get a Local Number
                  <span className="ml-2">→</span>
                </button>

                <button className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:text-white">
                  See Business Plans
                </button>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500" ></div>

                <p className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
                  Phase 1 markets include business-friendly and high-demand launch
                  countries. Availability and verification vary by jurisdiction.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center">
              {/* Top Floating Card */}
              <div className="absolute -top-2 left-0 z-20 sm:-top-8">
                <Image
                  src="/Images/Homepage/hero-top-icon.png"
                  alt="AI Receptionist"
                  width={164}
                  height={63}
                  priority
                  className="h-auto w-[120px] sm:w-[150px] md:w-[164px]"
                />
              </div>

              {/* Main Card */}
              <Image
                src="/Images/Homepage/hero-pic.png"
                alt="Find your local number"
                width={661}
                height={658}
                priority
                className="h-auto w-full max-w-[580px] object-contain"
              />

              {/* Bottom Floating Card */}
              <div className="absolute -bottom-6 right-0 z-20 sm:-bottom-6">
                <Image
                  src="/Images/Homepage/hero-bottom-icon.png"
                  alt="Video Ready"
                  width={166}
                  height={63}
                  priority
                  className="h-auto w-[120px] sm:w-[150px] md:w-[166px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="border-y border-[#D8D4CC] bg-[#F6F3EE] dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className={`
                  flex flex-col items-center justify-center
                  gap-3 px-4 py-6 text-center
                  transition-colors duration-300
                  hover:bg-white/60
                  dark:hover:bg-slate-900
                  ${
                    index !== features.length - 1
                      ? "border-r border-[#D8D4CC] dark:border-slate-800"
                      : ""
                  }
                `}
              >
                <Icon
                  size={20}
                  className="text-[#0D4F49] dark:text-emerald-400"
                  strokeWidth={1.8}
                />

                <span className="text-sm md:text-base font-medium text-[#163531] dark:text-slate-200">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
}
