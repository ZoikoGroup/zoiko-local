import React from 'react'
import {
    FiArrowUpRight,
    FiGlobe,
    FiMic, FiUser, FiMapPin,
    FiPhone, FiCheck, FiVideo,
} from "react-icons/fi";

const pricingHighlights = [
    {
        icon: <FiArrowUpRight />,
        title: "No legacy Skype\nlock-in",
    },
    {
        icon: <FiGlobe />,
        title: "Country-aware\nnumber pricing",
    },
    {
        icon: <FiMic />,
        title: "Add AI when ready",
    },
    {
        icon: <FiUser />,
        title: "Business support\navailable",
    },
];
const businessNeeds = [
    {
        icon: <FiMapPin />,
        title: "Local presence",
        description:
            "A professional number where your customers are.",
    },
    {
        icon: <FiPhone />,
        title: "Team calling",
        description:
            "Professional call flows and routing for a team.",
    },
    {
        icon: <FiMic />,
        title: "AI call handling",
        description:
            "Capture missed and after-hours calls.",
    },
    {
        icon: <FiGlobe />,
        title: "Multi-country",
        description:
            "Coverage and control across markets.",
    },
];
const corePlans = [
    {
        title: "Starter",
        subtitle: "Solo professionals, new businesses and small teams.",
        price: "catalog",
        pricePrefix: "from",
        note:
            "per month + usage, taxes and number charges where applicable.",
        button: "Start Starter",
        primary: false,
        popular: false,
        features: [
            "Local number access",
            "Essential calling",
            "Voicemail & summaries",
            "Basic account controls",
            "Add video or AI when ready",
        ],
    },
    {
        title: "Business",
        subtitle:
            "Growing teams that need reliable customer communication.",
        price: "catalog",
        pricePrefix: "from",
        note:
            "per month + selected numbers, usage and add-ons.",
        button: "Choose Business",
        primary: true,
        popular: true,
        features: [
            "Everything in Starter",
            "Team controls & roles",
            "Call routing",
            "Video collaboration",
            "Reporting & business support",
            "Optional AI Receptionist",
        ],
    },
    {
        title: "Advanced / Scale",
        subtitle:
            "Multi-location, high-volume and multi-country businesses.",
        price: "Custom quote",
        pricePrefix: "",
        note:
            "based on geography, usage, AI, compliance and support needs.",
        button: "Talk to Sales",
        primary: false,
        popular: false,
        features: [
            "Advanced routing",
            "Higher volume",
            "Multi-number management",
            "AI Receptionist options",
            "Sales onboarding",
            "Custom support",
        ],
    },
];
const capabilityPricing = [
    {
        icon: <FiMapPin />,
        title: "Local number pricing",
        description:
            "Varies by country, number type, availability, verification and porting eligibility. We show clear 'from' ranges and a country selector, not one misleading global price.",
        button: "Search Available Numbers",
        primary: false,
    },
    {
        icon: <FiPhone />,
        title: "Calling pricing",
        description:
            "Choose pay-as-you-go, bundled minutes or a custom calling package. Destination rates and fair-use principles are shown by country.",
        button: "View Calling Options",
        primary: false,
    },
    {
        icon: <FiVideo />,
        title: "Video pricing",
        description:
            "Part of the same workspace: client meetings, team sessions, consultations and support calls. Seats, recording, storage and admin controls are plan variables.",
        button: "Add Video to My Plan",
        primary: false,
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist pricing",
        description:
            "When missed calls start costing revenue, add a smarter front desk. Pricing may depend on call volume, answering minutes, routing rules, summaries, languages and transcription. Starter, Business and Advanced AI packages available.",
        button: "Add AI Receptionist",
        primary: true,
    },
];
const bundlePlans = [
    {
        title: "Local Presence Pack",
        description:
            "Replace a basic Skype number or add a market presence.",
        features: [
            "One or more local numbers",
            "Inbound calling",
            "Essential controls",
        ],
        button: "Search Numbers",
    },
    {
        title: "Business Communication Pack",
        description:
            "Standardize calls and meetings across the team.",
        features: [
            "Numbers + team calling",
            "Routing + video",
            "Admin & support",
        ],
        button: "Build My Plan",
    },
    {
        title: "AI Front Desk Pack",
        description:
            "Stop losing revenue from missed calls.",
        features: [
            "Numbers + calling",
            "AI Receptionist",
            "After-hours capture",
        ],
        button: "Add AI Front Desk",
    },
    {
        title: "Global Operations Pack",
        description:
            "Multi-country or regulated operations.",
        features: [
            "Multi-country coverage",
            "Custom routing",
            "Compliance review",
        ],
        button: "Contact Sales",
    },
];
export default function Planspricing() {
    return (
        <>
            {/* HERO section */}
            <section className="relative overflow-hidden bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                {/* Background Glow */}

                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#EB643F]/10 blur-[130px]" />

                </div>

                <div className="relative max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Pricing for the Modern Local Business Communication Stack

                        </p>

                        <h1 className="mt-6 text-4xl md:text-[64px] font-bold leading-[1.12] text-[#123533] dark:text-white">

                            Pricing that fits the way your

                            <br />

                            business

                            <span className="text-[#EB643F] italic">

                                {" "}communicates

                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl mx-auto text-[17px] leading-8 text-[#666] dark:text-gray-400">

                            Choose local numbers, calling, video and AI Receptionist
                            in one modern workspace. Start simple, add capability
                            as you grow, and get a clear quote for
                            multi-country or high-volume requirements.

                        </p>

                    </div>

                    {/* CTA Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-12 px-8 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">

                            Start Free

                        </button>

                        <button className="h-12 px-8 rounded-full bg-white dark:bg-slate-800 border border-[#D9D2C8] dark:border-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] dark:hover:text-[#0F6660] transition">

                            Build My Estimate

                        </button>

                        <button className="h-12 px-8 rounded-full bg-white dark:bg-slate-800 border border-[#D9D2C8] dark:border-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] dark:hover:text-[#0F6660] transition">

                            Talk to Sales

                        </button>

                    </div>

                    {/* Feature Cards */}

                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">

                        {pricingHighlights.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl border border-[#E4DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="w-11 h-11 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl flex-shrink-0">

                                    {item.icon}

                                </div>

                                <p className="whitespace-pre-line text-[15px] font-semibold leading-6 text-[#123533] dark:text-white">

                                    {item.title}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Guided Plan Selector */}
            <section className="bg-[#FFFFFF] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.32em] text-[10px] font-semibold text-[#EB643F]">

                            Guided Plan Selector

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Not sure where to start?

                            <span className="text-[#EB643F] italic">

                                {" "}Choose

                                <br className="hidden md:block" />

                                by business need.

                            </span>

                        </h2>

                        <p className="mt-8 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Find the right plan based on whether you need local presence,

                            team calling, video meetings, AI call handling,

                            or multi-country operations.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {businessNeeds.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-3xl border border-[#E5D9C9] dark:border-slate-700 bg-[#FBF0DE] dark:bg-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0F6660]/30 cursor-pointer"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl shadow-sm">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-[19px] font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-[14px] leading-6 text-[#666] dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-14 flex justify-center">

                        <button
                            className="h-12 px-9 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition-all duration-300"
                        >

                            Help Me Choose

                        </button>

                    </div>

                </div>

            </section>
            {/* Core Plans */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Core Plans

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] leading-[1.12] font-bold text-[#123533] dark:text-white">

                            Start with the right base plan.

                            <span className="text-[#EB643F] italic">

                                {" "}Add

                                <br className="hidden md:block" />

                                the rest as needed.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Pricing values are rendered from the approved billing catalog
                            and confirmed at checkout by market, currency and number type.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {corePlans.map((plan) => (

                            <div
                                key={plan.title}
                                className={`relative rounded-[28px] bg-white dark:bg-slate-800 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col
                    ${plan.popular
                                        ? "border-[#EB643F] shadow-lg"
                                        : "border-[#E5DED3] dark:border-slate-700"
                                    }`}
                            >

                                {plan.popular && (

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                        <span className="bg-[#EB643F] text-white text-[10px] font-semibold px-4 py-1 rounded-full shadow">

                                            Most Popular

                                        </span>

                                    </div>

                                )}

                                <div className="p-8 flex flex-col h-full">

                                    {/* Title */}

                                    <h3 className="text-[28px] font-bold text-[#123533] dark:text-white">

                                        {plan.title}

                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#666] dark:text-gray-400 min-h-[48px]">

                                        {plan.subtitle}

                                    </p>

                                    {/* Price */}

                                    <div className="mt-8">

                                        {plan.pricePrefix && (

                                            <span className="block text-sm text-gray-500">

                                                {plan.pricePrefix}

                                            </span>

                                        )}

                                        <h4 className="text-[42px] font-bold text-[#123533] dark:text-white leading-none">

                                            {plan.price}

                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-[#777] dark:text-gray-400">

                                            {plan.note}

                                        </p>

                                    </div>

                                    {/* Features */}

                                    <div className="mt-8 space-y-4 flex-1">

                                        {plan.features.map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-start gap-3"
                                            >

                                                <FiCheck className="text-[#0F6660] mt-1 flex-shrink-0" />

                                                <span className="text-[15px] text-[#123533] dark:text-gray-300">

                                                    {feature}

                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                    {/* Button */}

                                    <button
                                        className={`mt-10 h-12 rounded-full font-semibold transition-all duration-300
                            ${plan.primary
                                                ? "bg-[#EB643F] text-white shadow-lg hover:bg-[#D95A37]"
                                                : "border border-[#D9D2C8] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white hover:border-[#0F6660] hover:text-[#0F6660]"
                                            }`}
                                    >

                                        {plan.button}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Pricing by Capability */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Priced by Capability

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] leading-[1.12] font-bold text-[#123533] dark:text-white">

                            Pay for the parts of the stack

                            <span className="text-[#EB643F] italic">

                                <br className="hidden md:block" />

                                you actually use.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Each capability is priced transparently and varies by
                            market where regulation applies.

                        </p>

                    </div>

                    {/* Pricing Rows */}

                    <div className="mt-16 space-y-5">

                        {capabilityPricing.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-[24px] border border-[#E6DCCF] dark:border-slate-700 bg-[#FBF0DE] dark:bg-slate-800 px-6 md:px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-all duration-300 hover:shadow-lg"
                            >

                                {/* Left */}

                                <div className="flex items-start gap-5 flex-1">

                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl shadow-sm flex-shrink-0">

                                        {item.icon}

                                    </div>

                                    <div>

                                        <h3 className="text-[22px] font-semibold text-[#123533] dark:text-white">

                                            {item.title}

                                        </h3>

                                        <p className="mt-2 text-[15px] leading-7 text-[#666] dark:text-gray-400">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                                {/* Button */}

                                <div className="lg:ml-10 flex-shrink-0">

                                    <button
                                        className={`h-11 px-7 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap
                            ${item.primary
                                                ? "bg-[#EB643F] text-white shadow-lg hover:bg-[#D95A37]"
                                                : "bg-white dark:bg-slate-700 border border-[#D9D2C8] dark:border-slate-600 text-[#123533] dark:text-white hover:border-[#0F6660] hover:text-[#0F6660]"
                                            }`}
                                    >

                                        {item.button}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Bundle Plans */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Bundle Savings

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Bundle the stack.

                            <span className="text-[#EB643F] italic">

                                Reduce

                                <br className="hidden md:block" />

                                complexity.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Bundles are easier procurement paths, not discount gimmicks.
                            Preferred package pricing applies where approved.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {bundlePlans.map((plan) => (

                            <div
                                key={plan.title}
                                className="rounded-[26px] bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 p-7 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                            >

                                <h3 className="text-xl font-bold text-[#123533] dark:text-white">

                                    {plan.title}

                                </h3>

                                <p className="mt-3 text-[14px] leading-6 text-[#666] dark:text-gray-400 min-h-[60px]">

                                    {plan.description}

                                </p>

                                <div className="mt-6 space-y-3 flex-1">

                                    {plan.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >

                                            <FiCheck className="text-[#0F6660] mt-1" />

                                            <span className="text-[14px] text-[#123533] dark:text-gray-300">

                                                {feature}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                <button className="mt-8 h-11 rounded-full border border-[#D9D2C8] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] transition">

                                    {plan.button}

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}
