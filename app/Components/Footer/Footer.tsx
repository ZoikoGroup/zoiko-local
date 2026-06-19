import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerSections = [
    {
        title: "Platform",
        links: [
            "Search Numbers",
            "Pricing",
            "Business",
            "Workspace",
            "Mobile Apps",
            "Status Page",
            "Contact Support",
            "Contact Sales",
        ],
    },
    {
        title: "Global Coverage",
        links: [
            "United States",
            "United Kingdom",
            "Canada",
            "European Numbers",
            "Nigeria",
            "South Africa",
            "Caribbean Numbers",
            "African Numbers",
            "All Countries",
        ],
    },
    {
        title: "Use Cases",
        links: [
            "Business Numbers",
            "Disposable Numbers",
            "Remote Teams",
            "International Expansion",
            "Customer Support",
            "Founder-Led Business",
        ],
    },
    {
        title: "Compare",
        links: [
            "Skype Alternative",
            "Google Voice Alternative",
            "OpenPhone Alternative",
            "Teams Phone Alternative",
            "Virtual Phone Number",
            "Local Business Number",
        ],
    },
    {
        title: "Legal",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Acceptable Use Policy",
            "Data Processing Agreement",
            "AI Terms",
            "Accessibility",
        ],
    },
    {
        title: "Company",
        links: [
            "About",
            "Communications",
            "Careers",
            "Press",
            "Contact",
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-slate-300 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Top */}
                <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/Zoiko-Local-Logo.png"
                                alt="Zoiko Local"
                                width={180}
                                height={40}
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            A governed local-number and business communications service — built for transparent billing, jurisdiction-aware compliance, verified account ownership, and trusted global business presence.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Compliance Led
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Global Coverage
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Enterprise Ready
                            </span>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <SocialIcon icon={<FaTwitter size={16} />} />
                            <SocialIcon icon={<FaLinkedin size={16} />} />
                            <SocialIcon icon={<FaFacebook size={16} />} />
                            <SocialIcon icon={<FaInstagram size={16} />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <Link
                                                href="#"
                                                className="text-sm text-slate-400 transition hover:text-white"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle */}
                <div className="my-12 h-px bg-white/10" />

                <div className="grid gap-8 md:grid-cols-3">
                    <InfoBlock
                        title="Platform Ownership"
                        text="Zoiko Local is a trading name of Zoiko Communications Group Inc., a
                            Zoiko Group company. Zoiko Local provides local-number, business
                            communication, verification, account management, and related
                            communications services, subject to the policies linked above."
                    />

                    <InfoBlock
                        title="Availability & Reliability"
                        text="Number availability, activation and verification requirements,
                            emergency-services access, porting, inbound and outbound calling,
                            SMS/MMS, recording, transcription, AI-assisted features, taxes,
                            surcharges, regulatory fees, and data processing may vary by
                            country, number type, customer category, carrier partner, and
                            applicable law."
                    />                          

                    <InfoBlock
                        title="Trademarks & Comparisons"
                        text="Zoiko Local is not affiliated with, endorsed by, or sponsored by Skype,
                            Microsoft, Microsoft Teams, Google, Google Voice, OpenPhone,
                            Zoom, RingCentral, Dialpad, Aircall, or any third-party brand
                            referenced for comparison, compatibility, or migration. All third-party
                            trademarks remain the property of their respective owners.                          "
                    />
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-lg">
                        © {new Date().getFullYear()} Zoiko Local  |  Zoiko Local is a trading name of Zoiko Communications
                        Group Inc., a Zoiko Group company  |  All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Accessibility</Link>
                        <Link href="#">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10">
            {icon}
        </button>
    );
}

function InfoBlock({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                {title}
            </h4>

            <p className="text-sm leading-6 text-slate-400">
                {text}
            </p>
        </div>
    );
}