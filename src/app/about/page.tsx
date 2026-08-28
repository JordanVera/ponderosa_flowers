import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ABOUT_CONTENT,
  COMPANY,
  STUDIO_INFO,
  TEAM_MEMBERS,
} from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Meet Kasey Miller and Kristen Trahan, co-founders of Ponderosa Flower Studio — blending traditional florals with a fresh, modern twist in Houston.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/about/hero.jpg"
          alt="Ponderosa Flower Studio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#f59a88] uppercase">
            Ponderosa&apos;s Story
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">About</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <blockquote className="border-l-2 border-[#f59a88]/40 pl-6">
          <p className="font-serif text-xl leading-relaxed text-foreground/80 italic sm:text-2xl">
            {ABOUT_CONTENT.story}
          </p>
        </blockquote>
      </section>

      <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-serif text-4xl text-white sm:text-5xl">
            Meet the Team
          </h2>

          <div className="grid gap-16 md:grid-cols-2 md:gap-12">
            {TEAM_MEMBERS.map((member) => (
              <article key={member.name} className="flex flex-col items-center text-center">
                <div className="relative mb-8 aspect-3/4 w-full max-w-sm overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
                <h3 className="font-serif text-3xl text-white italic sm:text-4xl">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm tracking-[0.15em] text-[#f59a88] uppercase">
                  {member.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              Studio Location
            </p>
            <p className="font-serif text-2xl text-foreground">
              {STUDIO_INFO.location}
            </p>
            <p className="mt-1 text-foreground/70">{STUDIO_INFO.city}</p>
            <p className="mt-3 text-sm text-foreground/50 italic">
              ({STUDIO_INFO.locationNote})
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              Studio Hours
            </p>
            <div className="space-y-4">
              {STUDIO_INFO.hours.map((slot) => (
                <div key={slot.days}>
                  <p className="font-serif text-xl text-foreground">{slot.days}</p>
                  <p className="mt-1 text-foreground/70">{slot.time}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/50 italic">
              ({STUDIO_INFO.hoursNote})
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              Contact
            </p>
            <p className="font-serif text-2xl text-foreground">{COMPANY.name}</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-3 inline-block text-foreground/70 transition-colors hover:text-[#f59a88]"
            >
              {COMPANY.email}
            </a>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-[#f59a88] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#ffb3a1]"
              >
                Get in Touch
              </Link>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-border px-8 py-3.5 text-xs tracking-[0.2em] text-foreground uppercase transition-all duration-200 hover:border-[#f59a88] hover:text-[#f59a88]"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
