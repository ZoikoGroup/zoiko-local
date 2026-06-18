import React from 'react';
import Image from 'next/image';
import {
    FiMapPin,
    FiExternalLink,
    FiMic, FiSettings, FiClock, FiSend,
    FiUsers, FiPlus, FiInfo,
    FiArrowRight,
    FiCheck, FiCreditCard,
    FiDollarSign,
    FiShield, FiMail, FiLock,
} from "react-icons/fi";


export default function Startfree() {
    return (
        <>
            {/* ===================== START FREE HERO ===================== */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-5xl text-center">

                    {/* Top Label */}

                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                        Free Forever · Upgrade Anytime
                    </p>

                    {/* Heading */}

                    <h1 className="mx-auto max-w-3xl text-[30px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                        Start free with a smarter local
                        <br />
                        <span className="mt-2 text-[#F26B45]">
                            business phone system.
                        </span>
                    </h1>

                    {/* Description */}

                    <p className="mx-auto mt-6 max-w-3xl text-[15px] md:text-base leading-7 text-slate-600 dark:text-slate-400">
                        Create your local business identity, then answer confidently,
                        route calls with AI Receptionist wherever you work —
                        with calling, video and support tools built into one workspace.
                    </p>

                    {/* Signup Card */}

                    <div className="mx-auto mt-14 max-w-[820px]">

                        <div
                            className="
                                rounded-[26px]
                                border
                                border-[#D9D3CA]
                                bg-white
                                p-7
                                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                                dark:border-slate-700
                                dark:bg-slate-900
                                "
                        >

                            {/* Steps */}

                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                                {[
                                    "Business profile",
                                    "Number country",
                                    "Workspace",
                                    "First call",
                                ].map((step, index) => (

                                    <div
                                        key={step}
                                        className={`
                                            rounded-2xl
                                            border
                                            p-5
                                            text-center
                                            transition-all

                                            ${index === 0
                                                ? "border-[#B7D3CB] bg-[#EEF6F3]"
                                                : "border-transparent bg-[#F6F3EE]"
                                            }
                                        `}
                                    >

                                        <div
                                            className={`
                                                mx-auto
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                text-sm
                                                font-bold

                                                ${index === 0
                                                    ? "bg-[#143A36] text-white"
                                                    : "bg-[#E7E2DA] text-[#7D7D7D]"
                                                }
                                                `}
                                        >
                                            {index + 1}
                                        </div>

                                        <p
                                            className={`
                                                mt-4
                                                text-[15px]
                                                font-medium

                                                ${index === 0
                                                    ? "text-[#143A36]"
                                                    : "text-[#6F827C]"
                                                }

                                                 dark:text-white
                                                                      `}
                                        >
                                            {step}
                                        </p>

                                    </div>

                                ))}

                            </div>

                            {/* CTA */}

                            <button
                                className="
                                    mt-6
                                    flex
                                    h-[58px]
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-[#E95F33]
                                    text-lg
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-[#D9552D]
                                "
                            >
                                Create My Free Workspace

                                <FiArrowRight />
                            </button>

                            {/* Benefits */}

                            <div className="mt-7 flex flex-wrap justify-center gap-8">

                                {[
                                    "No pressure",
                                    "Guided setup",
                                    "Sales support available",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-2"
                                    >
                                        <FiCheck
                                            className="text-[#0D7A4D]"
                                            size={16}
                                        />

                                        <span className="text-[15px] text-[#143A36] dark:text-slate-300">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Bottom Links */}

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">

                            <button className="font-semibold text-[#143A36] hover:text-[#0D5C54] dark:text-white">
                                Talk to Sales
                            </button>

                            <button className="font-semibold text-[#F26B45] hover:underline">
                                Switching from Skype? →
                            </button>

                        </div>

                    </div>

                </div>
            </section>
            {/* Choose Your Start Path */}
            <section className="bg-[#FFFFFF] py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl px-4">

                    {/* Heading */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Choose Your Start Path
                        </p>

                        <h2 className="text-[36px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[52px]">
                            Start in the way that{" "}
                            <span className="text-[#E95F33] italic">
                                fits your
                            </span>

                            <br />

                            <span className="text-[#E95F33] italic">
                                business.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-slate-500 dark:text-slate-400">
                            Pick a path and we'll route you to the right setup —
                            no one-size-fits-all signup.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Start with a local number",
                                desc: "The fastest way to a professional local presence.",
                                icon: FiMapPin,
                            },
                            {
                                title: "Move from Skype",
                                desc: "Keep your customers reachable through the switch.",
                                icon: FiExternalLink,
                            },
                            {
                                title: "Add AI Receptionist",
                                desc: "Answer overflow and after-hours calls.",
                                icon: FiMic,
                            },
                            {
                                title: "Set up my business team",
                                desc: "Numbers, roles and routing for the whole team.",
                                icon: FiUsers,
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-2xl
              border
              border-[#DDD4C8]
              bg-[#F6F1E8]
              p-6
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#F26B45]
              hover:bg-[#F8F3EB]
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]

              dark:border-slate-700
              dark:bg-slate-900
            "
                                >

                                    {/* Circle */}

                                    <div
                                        className="
                absolute
                right-5
                top-5
                h-4
                w-4
                rounded-full
                border
                border-[#D7CDBF]
                transition-all

                group-hover:border-[#F26B45]
                group-hover:bg-[#F26B45]
            "
                                    />

                                    {/* Icon */}

                                    <div
                                        className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white
                shadow-sm
                transition-all

                group-hover:scale-105
                group-hover:bg-[#FFF7F4]
              "
                                    >

                                        <Icon
                                            size={20}
                                            className="
                  text-[#0D5C54]
                  transition-colors

                  group-hover:text-[#F26B45]
                "
                                        />

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-6 text-[19px] font-semibold leading-7 text-[#143A36] dark:text-white">
                                        {item.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-3 text-[14px] leading-7 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                    {/* Bottom */}

                    <div className="mt-10 text-center">

                        <span className="text-[15px] text-slate-500">
                            Not sure?
                        </span>

                        <button className="ml-2 inline-flex items-center gap-2 font-semibold text-[#F26B45] transition hover:gap-3">
                            Use guided setup

                            <FiArrowRight />
                        </button>

                    </div>

                </div>
            </section>
            {/* ===================== CHECK AVAILABILITY ===================== */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Check Availability
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[52px]">
                            Where do you want to be
                            <br />
                            <span className="italic text-[#F26B45]">
                                reachable?
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-slate-500 dark:text-slate-400">
                            Tell us where your business wants a presence.
                            We'll show available number options and setup paths.
                        </p>

                    </div>

                    {/* Form Card */}
                    <div className="mx-auto mt-16 max-w-4xl">

                        <div
                            className="
          rounded-[24px]
          border
          border-[#DED7CF]
          bg-white
          p-7
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          dark:border-slate-700
          dark:bg-slate-900
        "
                        >

                            {/* Inputs */}
                            <div className="grid gap-6 md:grid-cols-2">

                                {/* Country */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#143A36] dark:text-white">
                                        Country / Region
                                    </label>

                                    <select
                                        className="
                h-14
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-white
                px-4
                text-[15px]
                outline-none
                transition
                focus:border-[#F26B45]
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Nigeria</option>
                                        <option>South Africa</option>
                                        <option>Ghana</option>
                                        <option>Kenya</option>
                                        <option>Jamaica</option>
                                        <option>Ireland</option>
                                        <option>Australia</option>
                                        <option>Singapore</option>
                                        <option>Mexico</option>

                                    </select>
                                </div>

                                {/* Area */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#143A36] dark:text-white">
                                        City / Area Code
                                    </label>

                                    <input
                                        placeholder="e.g. New York / 212"
                                        className="
                h-14
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-white
                px-4
                text-[15px]
                outline-none
                placeholder:text-slate-400
                focus:border-[#F26B45]
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    />
                                </div>

                                {/* Number */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#143A36] dark:text-white">
                                        Number Type
                                    </label>

                                    <select
                                        className="
                h-14
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-white
                px-4
                text-[15px]
                outline-none
                focus:border-[#F26B45]
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>Local Number</option>
                                        <option>Toll-Free</option>
                                        <option>Mobile</option>
                                        <option>National</option>
                                    </select>
                                </div>

                                {/* Use */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#143A36] dark:text-white">
                                        Use
                                    </label>

                                    <select
                                        className="
                h-14
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-white
                px-4
                text-[15px]
                outline-none
                focus:border-[#F26B45]
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>Business</option>
                                        <option>Personal</option>
                                        <option>Team</option>
                                    </select>
                                </div>

                            </div>

                            {/* Checkbox */}
                            <div className="mt-5 flex items-center gap-3">

                                <input
                                    id="port"
                                    type="checkbox"
                                    className="h-4 w-4 accent-[#F26B45]"
                                />

                                <label
                                    htmlFor="port"
                                    className="text-sm text-slate-500 dark:text-slate-400"
                                >
                                    I want to port an existing number
                                </label>

                            </div>

                            {/* Button */}
                            <button
                                className="
            mt-7
            flex
            h-14
            w-full
            items-center
            justify-center
            rounded-full
            bg-[#F26B45]
            text-[16px]
            font-semibold
            text-white
            transition-all
            hover:bg-[#E55D34]
            hover:shadow-lg
          "
                            >
                                Check Availability
                            </button>

                            {/* Status Pills */}
                            <div className="mt-6 flex flex-wrap justify-center gap-3">

                                {[
                                    {

                                        text: "Available",
                                        bg: "bg-green-100",
                                        color: "text-green-700",
                                    },
                                    {

                                        text: "Limited availability",
                                        bg: "bg-yellow-100",
                                        color: "text-yellow-700",
                                    },
                                    {

                                        text: "Sales-assisted setup",
                                        bg: "bg-blue-100",
                                        color: "text-blue-700",
                                    },
                                    {

                                        text: "Not available — notify me",
                                        bg: "bg-slate-100",
                                        color: "text-slate-700",
                                    },
                                ].map((item) => {
                                    return (
                                        <div
                                            key={item.text}
                                            className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${item.bg} ${item.color}`}
                                        >
                                            <span className="block h-2 w-2 rounded-full bg-current"></span>
                                            {item.text}
                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ==================== NO PRICE ANXIETY ==================== */}
            <section className="bg-[#FFFFFF] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            No Price Anxiety
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[52px]">
                            Start free. Choose a plan{" "}
                            <span className="italic text-[#E95F33]">
                                only
                            </span>

                            <br />

                            <span className="italic text-[#E95F33]">
                                when you're ready.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-slate-500 dark:text-slate-400">
                            Activate paid calling, numbers, AI usage or team features
                            when it makes sense for your business.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        {[
                            {
                                title: "Transparent plans",
                                desc: "Clear capabilities and add-ons, priced per market in the catalog.",
                                icon: FiCreditCard,
                            },
                            {
                                title: "Usage controls",
                                desc: "See and manage what you use as your business grows.",
                                icon: FiDollarSign,
                            },
                            {
                                title: "Upgrade when ready",
                                desc: "No commitment until you choose to activate.",
                                icon: FiShield,
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="
              group
              rounded-[18px]
              border
              border-[#DED7CF]
              bg-white
              p-8
              text-center
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[#F26B45]
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]

              dark:border-slate-700
              dark:bg-slate-900
            "
                                >

                                    {/* Icon */}

                                    <div
                                        className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-[#F6EBDD]
                transition-all

                group-hover:bg-[#FFF4EF]
            "
                                    >

                                        <Icon
                                            size={22}
                                            className="
                  text-[#0D5C54]
                  transition-colors

                  group-hover:text-[#F26B45]
                "
                                        />

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-7 text-[22px] font-semibold text-[#143A36] dark:text-white">
                                        {item.title}
                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 text-[15px] leading-7 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>

                                </div>

                            );

                        })}

                    </div>

                    {/* Button */}

                    <div className="mt-12 flex justify-center">

                        <button
                            className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#D8D0C6]
          bg-white
          px-7
          py-3
          text-sm
          font-semibold
          text-[#143A36]
          transition-all

          hover:border-[#F26B45]
          hover:text-[#F26B45]

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
        "
                        >
                            View Pricing

                            <FiArrowRight size={15} />

                        </button>

                    </div>

                </div>
            </section>
            {/* ===================== SETUP DETAILS ===================== */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            A Few Quick Details
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[50px]">
                            Help us tailor your{" "}
                            <span className="italic text-[#F26B45]">
                                setup.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-slate-500 dark:text-slate-400">
                            We only ask what improves routing and activation.
                            Skip anything you're not ready to share.
                        </p>

                    </div>

                    {/* Form */}
                    <div className="mx-auto mt-16 max-w-4xl">

                        <div
                            className="
          rounded-[22px]
          border
          border-[#DED7CF]
          bg-white
          p-6
          shadow-[0_15px_40px_rgba(0,0,0,0.06)]
          dark:border-slate-700
          dark:bg-slate-900
        "
                        >

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Company Size */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Company size
                                    </label>

                                    <select
                                        className="
                h-12
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-[#FCFAF7]
                px-4
                text-sm
                outline-none
                transition-all
                focus:border-[#F26B45]
                focus:ring-2
                focus:ring-[#F26B45]/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>Just me</option>
                                        <option>2-10 people</option>
                                        <option>11-50 people</option>
                                        <option>50-200 people</option>
                                        <option>200+ people</option>
                                    </select>
                                </div>

                                {/* Industry */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Industry
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="e.g. Professional services"
                                        className="
                h-12
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-[#FCFAF7]
                px-4
                text-sm
                outline-none
                placeholder:text-slate-400
                transition-all
                focus:border-[#F26B45]
                focus:ring-2
                focus:ring-[#F26B45]/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    />
                                </div>

                                {/* Primary Use */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Primary use case
                                    </label>

                                    <select
                                        className="
                h-12
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-[#FCFAF7]
                px-4
                text-sm
                outline-none
                transition-all
                focus:border-[#F26B45]
                focus:ring-2
                focus:ring-[#F26B45]/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>Sales</option>
                                        <option>Support</option>
                                        <option>Operations</option>
                                        <option>Personal</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                {/* Call Volume */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Expected call volume
                                    </label>

                                    <select
                                        className="
                h-12
                w-full
                rounded-xl
                border
                border-[#DDD4C8]
                bg-[#FCFAF7]
                px-4
                text-sm
                outline-none
                transition-all
                focus:border-[#F26B45]
                focus:ring-2
                focus:ring-[#F26B45]/20
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
              "
                                    >
                                        <option>Light</option>
                                        <option>Moderate</option>
                                        <option>Heavy</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-7 flex flex-col gap-4 sm:flex-row">

                                <button
                                    className="
              flex-1
              rounded-full
              bg-[#F26B45]
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-[#E85B34]
              hover:shadow-lg
            "
                                >
                                    Continue
                                </button>

                                <button
                                    className="
              rounded-full
              border
              border-[#D7CEC3]
              bg-white
              px-8
              py-3.5
              text-sm
              font-semibold
              text-[#143A36]
              transition-all
              hover:border-[#F26B45]
              hover:text-[#F26B45]
              dark:border-slate-700
              dark:bg-slate-900
              dark:text-white
            "
                                >
                                    Skip for now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ================= CREATE WORKSPACE ================= */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Create Your Workspace
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[52px]">
                            Open your business
                            <br />
                            <span className="italic text-[#F26B45]">
                                communication workspace.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-8 text-slate-500 dark:text-slate-400">
                            Minimal details to get started. You can invite your team
                            and configure everything next.
                        </p>

                    </div>

                    {/* Form */}
                    <div className="mx-auto mt-16 max-w-4xl">

                        <div
                            className="
          rounded-[22px]
          border
          border-[#DDD4C8]
          bg-[#F8F5EF]
          p-7
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          dark:border-slate-700
          dark:bg-slate-900
        "
                        >

                            {/* Inputs */}
                            <div className="grid gap-5 md:grid-cols-2">

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Work email
                                    </label>

                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="email"
                                            placeholder="you@company.com"
                                            className="h-12 w-full rounded-xl border border-[#DDD4C8] bg-white pl-11 pr-4 text-sm outline-none focus:border-[#F26B45] focus:ring-2 focus:ring-[#F26B45]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Company name
                                    </label>

                                    <input
                                        placeholder="Acme Trade Co"
                                        className="h-12 w-full rounded-xl border border-[#DDD4C8] bg-white px-4 text-sm outline-none focus:border-[#F26B45] focus:ring-2 focus:ring-[#F26B45]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Password
                                    </label>

                                    <div className="relative">
                                        <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            className="h-12 w-full rounded-xl border border-[#DDD4C8] bg-white pl-11 pr-4 text-sm outline-none focus:border-[#F26B45] focus:ring-2 focus:ring-[#F26B45]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                        />
                                    </div>

                                    <p className="mt-2 text-[11px] text-slate-500">
                                        Use 10+ characters with a mix of letters and numbers.
                                    </p>
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="mb-2 block text-[13px] font-semibold text-[#143A36] dark:text-white">
                                        Country
                                    </label>

                                    <select
                                        className="h-12 w-full rounded-xl border border-[#DDD4C8] bg-white px-4 text-sm outline-none focus:border-[#F26B45] focus:ring-2 focus:ring-[#F26B45]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                                    >
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>Nigeria</option>
                                        <option>South Africa</option>
                                        <option>Ghana</option>
                                        <option>Kenya</option>
                                        <option>Jamaica</option>
                                        <option>Ireland</option>
                                        <option>Australia</option>
                                        <option>Singapore</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>

                            </div>

                            {/* Terms */}
                            <label className="mt-6 flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 accent-[#F26B45]"
                                />

                                <span className="text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                                    I agree to the{" "}
                                    <span className="font-medium text-[#F26B45]">
                                        Terms
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-medium text-[#F26B45]">
                                        Privacy Policy
                                    </span>
                                    , and understand availability and features vary
                                    by country and configuration.
                                </span>
                            </label>

                            {/* CTA */}
                            <button
                                className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#F26B45] text-sm font-semibold text-white transition-all hover:bg-[#E65C34] hover:shadow-lg"
                            >
                                Create Workspace

                                <FiArrowRight />
                            </button>

                            {/* Divider */}
                            <div className="my-7 flex items-center gap-4">
                                <div className="h-px flex-1 bg-[#DDD4C8]" />

                                <span className="text-sm text-slate-500">
                                    or continue with
                                </span>

                                <div className="h-px flex-1 bg-[#DDD4C8]" />
                            </div>

                            {/* Social Login */}
                            <div className="grid gap-4 sm:grid-cols-2">

                                <button className="flex h-12 items-center justify-center gap-3 rounded-full border border-[#DDD4C8] bg-white text-sm font-semibold text-[#143A36] transition  dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                                    <Image
                                        src="/images/platform/google.webp"
                                        alt="Google"
                                        width={18}
                                        height={18}
                                    />
                                    Google
                                </button>

                                <button className="flex h-12 items-center justify-center gap-3 rounded-full border border-[#DDD4C8] bg-white text-sm font-semibold text-[#143A36] transition dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                                    <Image
                                        src="/images/platform/microsoft.webp"
                                        alt="Microsoft"
                                        width={18}
                                        height={18}
                                    />
                                    Microsoft
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ================= LOCAL NUMBER SETUP ================= */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}

                    <div className="mx-auto max-w-3xl text-center">

                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Local Number Setup
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[48px]">
                            New number, or{" "}
                            <span className="italic text-[#F26B45]">
                                bring your own.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-7 text-slate-500 dark:text-slate-400">
                            Connect your signup straight to the strongest product value.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">

                        {[
                            {
                                title: "Get a new number",
                                desc: "Choose a local or toll-free number by country and city, reserved in your name, ready to receive calls.",
                                icon: FiPlus,
                                button: "Reserve This Number",
                                primary: true,
                            },
                            {
                                title: "Port existing number",
                                desc: "Keep the number your customers already know, subject to eligibility and carrier confirmation.",
                                icon: FiExternalLink,
                                button: "Port My Existing Number",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-[20px] border border-[#DED7CF] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F26B45] hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6EBDD] transition-all group-hover:bg-[#FFF4EF]">
                                        <Icon
                                            size={20}
                                            className="text-[#0D5C54] group-hover:text-[#F26B45]"
                                        />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-[#143A36] dark:text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-[15px] leading-7 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>

                                    <button
                                        className={`mt-6 rounded-full px-5 py-2.5 text-sm font-semibold transition ${item.primary
                                            ? "bg-[#F26B45] text-white hover:bg-[#E55C34]"
                                            : "border border-[#D8D0C6] text-[#143A36] hover:border-[#F26B45] hover:text-[#F26B45] dark:border-slate-700 dark:text-white"
                                            }`}
                                    >
                                        {item.button}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Note */}

                    <div className="mx-auto mt-8 flex max-w-4xl items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <FiInfo className="mt-1 text-[#0D5C54]" />
                        <p>
                            Number ownership and availability are subject to eligibility,
                            carrier confirmation and emergency service rules that vary by
                            country and configuration.
                        </p>
                    </div>
                </div>
            </section>
            {/* ================= AI RECEPTIONIST ================= */}
            <section className="bg-[#FAF8F4] px-4 py-8 md:py-14 dark:bg-slate-900">
                <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-1">
                    <div className="flex flex-col mx-auto max-w-4xl text-center">
                         <p className="mb-4 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Optional • AI Receptionist
                        </p>
                    
                        <h2 className="text-[30px] font-bold max-w-2xl leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                            Want Zoiko Local to answer{" "}
                            <span className="italic text-center text-[#F26B45]">
                                when your team can't?
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-[16px] leading-7 text-slate-500 dark:text-slate-400">
                            Add it now or later and keep full human control over scripts,
                            hours, routing and escalation.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-10 grid-cols-1 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                       

                        <div className="mt-10 space-y-6">

                            {[
                                {
                                    icon: FiMic,
                                    title: "Set your greeting",
                                    desc: "Welcome callers in your business voice.",
                                },
                                {
                                    icon: FiClock,
                                    title: "Choose hours",
                                    desc: "Decide when AI answers overflow and after-hours.",
                                },
                                {
                                    icon: FiSend,
                                    title: "Route & capture callback",
                                    desc: "Send enquiries to the right person.",
                                },
                                {
                                    icon: FiUsers,
                                    title: "Human handoff",
                                    desc: "AI answers overflow while your team takes over when needed.",
                                },
                            ].map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-4 border-b border-[#E8DED2] pb-5 dark:border-slate-700"
                                    >
                                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF4EF]">
                                            <Icon size={18} className="text-[#F26B45]" />
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#143A36] dark:text-white">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Card */}

                    <div
                        className="
        rounded-[24px]
        bg-gradient-to-br
        from-[#0D5C54]
        via-[#0B524C]
        to-[#063A37]
        p-8
        text-white
        shadow-[0_25px_70px_rgba(0,0,0,0.18)]
      "
                    >
                        <h3 className="text-2xl font-semibold">
                            You stay in control
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-white/80">
                            AI Receptionist supports automated call handling and routing.
                            It never replaces professional judgement, medical, financial or
                            emergency advice.
                        </p>

                        <div className="mt-8 space-y-4">

                            {[
                                "Custom greeting disclosure toggle",
                                "Editable scripts & escalation levels",
                                "Reviewable summaries",
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <FiCheck className="text-[#79E2A5]" />
                                    <span>{item}</span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-10 flex flex-col gap-4">

                            <button className="rounded-full bg-[#F26B45] px-6 py-3 font-semibold text-white transition hover:bg-[#E45A33]">
                                Configure AI Receptionist
                            </button>

                            <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                                Skip and add later
                            </button>

                        </div>

                    </div>
                </div>
                </div>
            </section>
            
        </>
    )
}
