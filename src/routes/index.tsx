import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-gym.jpg";
import boxingImg from "@/assets/boxing.jpg";
import bodybuildingImg from "@/assets/bodybuilding.jpg";
import functionalImg from "@/assets/functional.jpg";
import trainerImg from "@/assets/trainer.jpg";
import equipmentImg from "@/assets/equipment.jpg";
import catPhoto from "@/assets/cat-photo.jpeg.asset.json";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  MessageCircle,
  Dumbbell,
  ShieldCheck,
  Users,
  Accessibility,
  Car,
  Wallet,
  Bath,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONE = "9388001369";
const PHONE_DISPLAY = "+91 93880 01369";
const WHATSAPP = `https://wa.me/91${PHONE}`;
const TEL = `tel:+91${PHONE}`;
const DIRECTIONS = "https://maps.app.goo.gl/8LawdVikzaBJraUw5";
const ADDRESS = "Hotel Tharangini Buildings, Kuttanellur, Thrissur, Kerala 680014";
const MAP_EMBED =
  "https://www.google.com/maps?q=Team+Universal+Fitness+and+Boxing+Centre+Kuttanellur+Thrissur&output=embed";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Universal Fitness & Boxing Centre | Gym in Kuttanellur, Thrissur" },
      {
        name: "description",
        content:
          "Premier gym and boxing centre in Kuttanellur, Thrissur. Boxing, bodybuilding, functional & personal training. 4.7★ on Google. Call 93880 01369.",
      },
      { property: "og:title", content: "Team Universal Fitness & Boxing Centre — Thrissur" },
      {
        property: "og:description",
        content:
          "Train with skilled coaches at Thrissur's trusted gym & boxing centre. Beginners to athletes welcome.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Reviews />
      <Facilities />
      <LocationContact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Why Us", "#why"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ] as const;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] items-center h-16">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-primary text-primary-foreground font-display font-bold">
            TU
          </span>
          <span className="font-display font-bold tracking-wider text-sm sm:text-base truncate">
            Team Universal
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              {l}
            </a>
          ))}
          <a
            href={TEL}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-wider"
              >
                {l}
              </a>
            ))}
            <a
              href={TEL}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 font-semibold uppercase tracking-wider"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Boxer wrapping hands inside Team Universal Fitness & Boxing Centre"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 diag-stripes opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Kuttanellur · Thrissur · Kerala
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Build Strength.<br />
            <span className="text-primary">Train With</span><br />
            Purpose.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Team Universal Fitness & Boxing Centre — Thrissur's home for serious boxing,
            bodybuilding, and functional training. Skilled coaches. Pro-grade equipment.
            Built for everyone from first-timers to athletes.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={TEL}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-4 font-display font-semibold uppercase tracking-wider hover:bg-primary/90 transition group"
            >
              <Phone className="h-5 w-5" />
              Call Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 sm:px-8 py-4 font-display font-semibold uppercase tracking-wider hover:bg-foreground hover:text-background transition"
            >
              <MapPin className="h-5 w-5" />
              Get Directions
            </a>
          </div>
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur border border-border px-5 py-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">4.7</span>{" "}
              <span className="text-muted-foreground">Google Rating · 99 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={catPhoto.url}
            alt="Cat photo"
            width={1280}
            height={1024}
            loading="lazy"
            className="w-full h-[420px] sm:h-[520px] object-cover"
          />
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-primary text-primary-foreground p-6 sm:p-8 max-w-[220px]">
            <div className="font-display text-5xl font-bold">99+</div>
            <div className="text-sm font-semibold uppercase tracking-wider mt-1">
              5-Star Reviews
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>About the Centre</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
            A Gym Built On <span className="text-primary">Discipline</span> & Craft
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Team Universal Fitness & Boxing Centre is a well-maintained training facility
            in the heart of Kuttanellur, Thrissur. We bring together a friendly, focused
            environment with high-quality equipment and trainers who actually coach.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Whether you're stepping into a gym for the first time or chasing a competition
            physique, you'll find a program — and a corner — that fits.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Beginners", "Welcome"],
              ["Athletes", "Coached"],
              ["Boxing", "Specialists"],
              ["Personal", "Guidance"],
            ].map(([a, b]) => (
              <div key={a} className="border-l-2 border-primary pl-4 py-1">
                <div className="font-display font-bold text-xl">{a}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Boxing Coaching",
      desc: "Stance, footwork, combinations and conditioning under experienced coaches.",
      img: boxingImg,
    },
    {
      title: "Bodybuilding",
      desc: "Hypertrophy-focused programming with form correction and nutrition guidance.",
      img: bodybuildingImg,
    },
    {
      title: "Functional Training",
      desc: "Kettlebells, ropes, mobility and full-body strength for real-world performance.",
      img: functionalImg,
    },
    {
      title: "Gym Training",
      desc: "Open floor access with pro-grade machines, free weights and cardio.",
      img: equipmentImg,
    },
    {
      title: "Personal Guidance",
      desc: "One-on-one training tailored to your goal, schedule and starting point.",
      img: trainerImg,
    },
    {
      title: "Online Classes",
      desc: "Coached sessions you can join from home — same programming, remote.",
      img: heroImg,
    },
  ];
  return (
    <section id="services" className="py-20 sm:py-28 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <SectionLabel>What We Train</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
            Programs For Every <span className="text-primary">Goal</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden bg-background border border-border hover:border-primary transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition">
                <ArrowRight className="h-5 w-5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Users, t: "Experienced Trainers", d: "Coaches with the rounds and the reps to back the cues they give you." },
    { icon: ShieldCheck, t: "Friendly Staff", d: "A welcoming floor where every member gets a hello and a hand." },
    { icon: Dumbbell, t: "Quality Equipment", d: "Well-maintained machines, free weights and boxing gear that perform." },
    { icon: Star, t: "Beginner Friendly", d: "Zero-judgement coaching that meets you exactly where you start." },
    { icon: ShieldCheck, t: "Pro Guidance", d: "Programming, form and recovery advice from people who train daily." },
    { icon: MessageCircle, t: "On-site & Online", d: "Train at the centre or join coached sessions remotely — your call." },
  ];
  return (
    <section id="why" className="py-20 sm:py-28 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 diag-stripes opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
            Six Reasons Thrissur <span className="text-primary">Trains Here</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8 hover:bg-card transition group">
              <div className="grid h-14 w-14 place-items-center bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{t}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const quotes = [
    {
      q: "Well maintained and the staff seemed friendly.",
      n: "Verified Google Reviewer",
    },
    {
      q: "The trainers are very skilled, which makes the workout interesting.",
      n: "Verified Google Reviewer",
    },
    {
      q: "One place for beginners and professionals. Friendly staff, experienced guidance, and high-class equipment.",
      n: "Verified Google Reviewer",
    },
  ];
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionLabel center>Member Reviews</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
            Rated <span className="text-primary">4.7 ★</span> On Google
          </h2>
          <div className="inline-flex items-center gap-3 border border-border bg-background px-5 py-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">99</span>{" "}
              <span className="text-muted-foreground">5-star reviews and growing</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((r, i) => (
            <figure
              key={i}
              className="bg-background border border-border p-8 relative hover:border-primary transition"
            >
              <div className="font-display text-7xl text-primary leading-none mb-2">"</div>
              <blockquote className="text-lg leading-relaxed mb-6">{r.q}</blockquote>
              <figcaption className="flex items-center gap-2 pt-4 border-t border-border">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {r.n}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const items = [
    { icon: Accessibility, t: "Wheelchair Entrance" },
    { icon: Car, t: "Accessible Parking" },
    { icon: Bath, t: "Restroom" },
    { icon: Wallet, t: "Google Pay Accepted" },
  ];
  return (
    <section className="py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {items.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="bg-background p-6 flex flex-col items-center text-center gap-3"
            >
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <div className="font-display font-semibold text-sm uppercase tracking-wider">
                {t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationContact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Visit / Contact</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 leading-tight">
            Find Us In <span className="text-primary">Kuttanellur</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-8 sm:p-10 space-y-7">
            <ContactRow icon={MapPin} label="Address">
              {ADDRESS}
              <div className="text-xs text-muted-foreground mt-1">Plus Code: F7W3+VQ Thrissur</div>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a href={TEL} className="hover:text-primary transition">{PHONE_DISPLAY}</a>
            </ContactRow>
            <ContactRow icon={Clock} label="Hours">
              Open until 9:30 PM
            </ContactRow>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={TEL}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-display font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-[oklch(0.65_0.18_150)] text-background px-5 py-3 font-display font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={DIRECTIONS}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-2 border-foreground px-5 py-3 font-display font-semibold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition"
              >
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>
          <div className="bg-background relative min-h-[340px]">
            <iframe
              title="Team Universal Fitness & Boxing Centre map"
              src={MAP_EMBED}
              className="absolute inset-0 h-full w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          {label}
        </div>
        <div className="text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-display text-2xl font-bold mb-2">
              Team Universal <span className="text-primary">Fitness & Boxing</span>
            </div>
            <div
              className="text-muted-foreground mb-4"
              style={{ fontFamily: '"Noto Sans Malayalam", sans-serif' }}
            >
              ടീം യൂണിവേഴ്സൽ ഫിറ്റ്നസ് &amp; ബോക്സിങ് സെൻ്റർ
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thrissur's trusted gym and boxing centre. Train hard. Train smart.
            </p>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm mb-4">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Why Us", "#why"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="hover:text-primary transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display font-bold uppercase tracking-wider text-sm mb-4">
              Reach Us
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{ADDRESS}</li>
              <li>
                <a href={TEL} className="hover:text-primary transition">{PHONE_DISPLAY}</a>
              </li>
              <li>Open until 9:30 PM</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Team Universal Fitness & Boxing Centre. All rights reserved.</div>
          <div>Kuttanellur · Thrissur · Kerala</div>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-primary ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}
