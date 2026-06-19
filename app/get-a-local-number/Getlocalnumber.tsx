import React from 'react';
import {
    FiSearch,
    FiCheck,
    FiInfo, FiMapPin,
    FiSend,
    FiSmartphone,
    FiExternalLink,
    FiShield,
    FiMonitor,
    FiUsers,
    FiGlobe,
    FiMic,
} from "react-icons/fi";

const steps = [
    "Search",
    "Choose",
    "Verify",
    "Pay",
    "Set Up",
];

const availableNumbers = [
    {
        number: "+1 (212) 555-0148",
        country: "US",
        location: "New York · Manhattan · Local",
        tags: [
            "Recommended",
            "Works with AI Receptionist",
            "Easy to remember",
        ],
        secondaryBtn: "Compare",
    },
    {
        number: "+1 (212) 555-0192",
        country: "US",
        location: "New York · Manhattan · Local",
        tags: [
            "Easy to remember",
            "Works with AI Receptionist",
        ],
        secondaryBtn: "Save for Later",
    },
    {
        number: "+1 (800) 555-0110",
        country: "US",
        location: "United States · Toll-free",
        tags: [
            "Business verification required",
            "National inbound",
        ],
        secondaryBtn: "Compare",
    },
    {
        number: "+1 (646) 555-0173",
        country: "US",
        location: "New York · Local",
        tags: [
            "Works with AI Receptionist",
            "Team routing ready",
        ],
        secondaryBtn: "Copy Number",
    },
];
const numberTypes = [
    {
        icon: <FiMapPin />,
        title: "Local Number",
        description: "City, regional and business presence.",
        points: [
            "Best for local credibility",
            "Fast setup where available",
            "Light verification in some markets",
        ],
    },
    {
        icon: <FiSend />,
        title: "Toll-Free",
        description: "Customer support and national inbound, where available.",
        points: [
            "Best for national support",
            "Business verification often required",
        ],
    },
    {
        icon: <FiSmartphone />,
        title: "Mobile / Virtual",
        description: "Shown only where supported and compliant.",
        points: [
            "Country-dependent",
            "Subject to local rules",
        ],
    },
    {
        icon: <FiExternalLink />,
        title: "Port Existing Number",
        description: "Skype replacement, existing lines and continuity.",
        points: [
            "Keep your known number",
            "Subject to porting eligibility",
        ],
    },
];
const benefits = [
    {
        icon: <FiShield />,
        title: "Sales trust",
        description:
            "Local presence increases confidence for customers choosing who to call.",
    },
    {
        icon: <FiMonitor />,
        title: "Operational clarity",
        description:
            "Separate business calls from your personal number, cleanly.",
    },
    {
        icon: <FiUsers />,
        title: "Team coverage",
        description:
            "Route calls to the right person, queue or branch.",
    },
    {
        icon: <FiGlobe />,
        title: "International expansion",
        description:
            "Serve customers in countries where you are building demand.",
    },
    {
        icon: <FiExternalLink />,
        title: "Skype continuity",
        description:
            "Protect customer-facing contact points as legacy products decline.",
    },
    {
        icon: <FiMic />,
        title: "AI-ready endpoint",
        description:
            "Attach AI Receptionist so missed calls become captured enquiries.",
    },
];
const availabilityData = [
    {
        code: "US",
        country: "United States",
        dial: "+1",
        status: "Available online",
        setup: "Self-serve",
        color: "green",
    },
    {
        code: "GB",
        country: "United Kingdom",
        dial: "+44",
        status: "Verification required",
        setup: "ID / address",
        color: "yellow",
    },
    {
        code: "JM",
        country: "Jamaica",
        dial: "+1 876",
        status: "Available online",
        setup: "Self-serve",
        color: "green",
    },
    {
        code: "CA",
        country: "Canada",
        dial: "+1",
        status: "Verification required",
        setup: "ID / address",
        color: "yellow",
    },
    {
        code: "NG",
        country: "Nigeria",
        dial: "+234",
        status: "Sales-assisted",
        setup: "Talk to sales",
        color: "blue",
    },
    {
        code: "ZA",
        country: "South Africa",
        dial: "+27",
        status: "Coming soon",
        setup: "Notify me",
        color: "gray",
    },
];

export default function Getlocalnumber() {
    return (
        <>
            {/* ================= Hero Search Section ================= */}
            <section className="bg-[#E1DACE] dark:bg-[#0F172A] py-10 lg:py-16 px-5">

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#E86845] mb-4">
                            Get A Local Number For Your Business
                        </p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#123533] dark:text-white">
                            Choose a local number that makes your business{" "}
                            <span className="italic text-[#EB643F]">
                                easier to reach
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Search by country, city or area code. Use your Zoiko Local
                            number for business calls, team routing, voicemail,
                            AI Receptionist, video contact flows and Skype replacement.
                        </p>

                    </div>

                    {/* Progress */}

                    <div className="flex flex-wrap justify-center gap-3 mt-12">

                        {steps.map((step, index) => (
                            <div
                                key={step}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition
          ${index === 0
                                        ? "bg-white border-[#0F6660] text-[#0F6660] dark:bg-slate-800 dark:text-white dark:border-[#0F6660]"
                                        : "bg-white border-gray-300 text-gray-500 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300"
                                    }`}
                            >
                                <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs
            ${index === 0
                                            ? "bg-[#0F6660] text-white"
                                            : "bg-gray-200 dark:bg-slate-700"
                                        }`}
                                >
                                    {index + 1}
                                </span>

                                {step}
                            </div>
                        ))}

                    </div>

                    {/* Search Card */}

                    <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border border-[#E6DED2] dark:border-slate-700 shadow-2xl p-8">

                        {/* Row 1 */}

                        <div className="grid lg:grid-cols-12 gap-5">

                            <div className="lg:col-span-5">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Country & city
                                </label>

                                <div className="mt-2 relative">

                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="New York, United States"
                                        className="w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent pl-11 pr-4 py-3 outline-none focus:border-[#0F6660]"
                                    />

                                </div>

                            </div>

                            <div className="lg:col-span-3">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Area code
                                    <span className="text-gray-400 font-normal">
                                        {" "}
                                        (optional)
                                    </span>
                                </label>

                                <input
                                    placeholder="212"
                                    className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]"
                                />

                            </div>

                            <div className="lg:col-span-4">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Number type
                                </label>

                                <select className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]">
                                    <option>Local number</option>
                                </select>

                            </div>

                        </div>

                        {/* Row 2 */}

                        <div className="grid lg:grid-cols-12 gap-5 mt-6">

                            <div className="lg:col-span-6">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Business purpose
                                </label>

                                <input
                                    placeholder="Sales"
                                    className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]"
                                />

                            </div>

                            <div className="lg:col-span-6">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Availability preview
                                </label>

                                <div className="mt-3 flex flex-wrap gap-3">

                                    <span className="rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 text-sm">
                                        ● Numbers available
                                    </span>

                                    <span className="rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 text-sm">
                                        ● Verification may apply
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <button className="rounded-full text-sm md:text-base bg-[#EC643E] hover:bg-[#D95934] transition text-white py-4 font-semibold">
                                Search Available Numbers →
                            </button>

                            <button className="rounded-full text-sm md:text-base border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 py-4 font-semibold text-[#123533] dark:text-white">
                                Port an Existing Number
                            </button>

                        </div>

                        {/* Bottom */}

                        <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                            <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">

                                <FiInfo className="mt-1" />

                                <p>
                                    Availability, setup time and verification requirements
                                    vary by country, number type and use case.
                                </p>

                            </div>

                            <button className="text-[#E66845] font-semibold hover:underline">
                                Talk to Sales →
                            </button>

                        </div>

                    </div>

                    {/* Bottom Features */}

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#0F6660] dark:text-green-400 font-medium text-sm">

                        {[
                            "Fast setup where available",
                            "Business-ready routing",
                            "Skype replacement path",
                            "Secure verification",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">

                                <FiCheck />

                                {item}

                            </div>
                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Available Numbers ================= */}
            <section className="bg-[#FFFFFF] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#EB643F] mb-4">
                            Available Numbers
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Pick a number that{" "}

                            <span className="italic text-[#EB643F]">
                                fits your business.
                            </span>

                        </h2>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Sample results for your search. Reserve a number to hold it while
                            you complete a secure checkout, where reservation is supported.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 gap-7 mt-14">

                        {availableNumbers.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-[#E8DDD0] dark:border-slate-700 bg-[#F5ECDD] dark:bg-slate-800 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >

                                {/* Top */}

                                <div className="flex justify-between items-start">

                                    <div className="flex gap-3">

                                        <span className="text-xl font-medium text-[#123533] dark:text-white">
                                            {item.country}
                                        </span>

                                        <div>

                                            <h3 className="text-2xl font-bold text-[#123533] dark:text-white">
                                                {item.number}
                                            </h3>

                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {item.location}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="text-right">

                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            from
                                        </p>

                                        <p className="font-bold text-[#123533] dark:text-white">
                                            catalog price
                                        </p>

                                    </div>

                                </div>

                                {/* Tags */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {item.tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#DDEEEB] dark:bg-slate-700 text-[#0E6760] dark:text-green-300"
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                                {/* Buttons */}

                                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                                    <button className="flex-1 rounded-full bg-[#EB643F] hover:bg-[#D95934] transition text-white font-semibold py-3">

                                        Reserve This Number

                                    </button>

                                    <button className="flex-1 rounded-full border border-[#D8D0C5] dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 transition font-semibold text-[#123533] dark:text-white py-3">

                                        {item.secondaryBtn}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Bottom Note */}

                    <div className="mt-10 flex justify-center">

                        <div className="flex items-start gap-3 text-center max-w-3xl text-sm text-gray-500 dark:text-gray-400">

                            <FiInfo className="mt-1 flex-shrink-0 text-[#0E6760]" />

                            <p>
                                Prices shown are placeholders rendered from the pricing
                                catalog. Selected numbers may be held temporarily during
                                checkout where reservation is supported and released after
                                timeout or failed payment.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Number Types Section ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4">
                            Choose Number Type
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            The right number,
                            <span className="italic text-[#EB643F]">
                                {" "}without the telecom confusion.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Each option shows what it's best for, what setup it needs,
                            expected activation timing and any verification note.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {numberTypes.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-[#EEF3F2] dark:bg-slate-700 flex items-center justify-center text-[#0E6760] text-xl">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                                {/* Bullet List */}

                                <div className="mt-6 space-y-3">

                                    {item.points.map((point) => (

                                        <div
                                            key={point}
                                            className="flex items-start gap-3"
                                        >
                                            <FiCheck className="text-[#0E6760] mt-1 flex-shrink-0" />

                                            <span className="text-sm text-[#123533] dark:text-gray-300 leading-5">
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Why Get A Local Number ================= */}
            <section className="bg-[#FFFFFF] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Why Get A Local Number
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            A local presence customers{" "}
                            <span className="italic text-[#EB643F]">
                                actually trust.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Turn national interest into a reachable, professional business front door.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {benefits.map((item, index) => (

                            <div
                                key={index}
                                className="group rounded-3xl border border-[#E5DCCF] dark:border-slate-700 bg-[#F6ECDC] dark:bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-14 h-14 rounded-xl bg-[#EEF2EF] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-2xl transition-transform duration-300 group-hover:scale-110">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Availability & Eligibility ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Availability & Eligibility
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            Clear status,
                            <span className="italic text-[#EB643F]">
                                {" "}before you commit.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Some countries require proof of address, business registration
                            or identity verification before a number can be activated.
                        </p>

                    </div>

                    {/* Table */}

                    <div className="mt-14 overflow-hidden rounded-3xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">

                        {/* Header */}

                        <div className="hidden md:grid grid-cols-12 bg-[#032E2C] text-white text-xs uppercase tracking-wider font-semibold px-8 py-5">

                            <div className="col-span-5">Country</div>
                            <div className="col-span-4">Status</div>
                            <div className="col-span-3">Setup Path</div>

                        </div>

                        {/* Rows */}

                        {availabilityData.map((item, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 px-6 md:px-8 py-5 border-t border-gray-200 dark:border-slate-700 hover:bg-[#FAF7F2] dark:hover:bg-slate-700/40 transition"
                            >

                                {/* Country */}

                                <div className="md:col-span-5 flex items-center gap-3">

                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-8">
                                        {item.code}
                                    </span>

                                    <div>

                                        <h4 className="font-semibold text-[#123533] dark:text-white">
                                            {item.country}
                                        </h4>

                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {item.dial}
                                        </span>

                                    </div>

                                </div>

                                {/* Status */}

                                <div className="md:col-span-4 flex items-center">

                                    <span
                                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
              ${item.color === "green"
                                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                : item.color === "yellow"
                                                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                                    : item.color === "blue"
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                                        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            }`}
                                    >
                                        ● {item.status}
                                    </span>

                                </div>

                                {/* Setup */}

                                <div className="md:col-span-3 flex items-center text-gray-500 dark:text-gray-400">

                                    {item.setup}

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Footer Note */}

                    <div className="mt-8 flex justify-center">

                        <div className="max-w-4xl flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">

                            <FiInfo className="mt-1 text-[#0E6760] flex-shrink-0" />

                            <p>
                                Number availability changes. We use "where available" and
                                "subject to verification" rather than promising universal
                                instant activation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
