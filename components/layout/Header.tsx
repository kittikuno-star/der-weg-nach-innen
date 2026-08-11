"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { routes } from "@/lib/routes";

const englishNavigation = [
  {
    id: "home",
    label: "Home",
    href: "/en",
  },
  {
    id: "meditation",
    label: "Meditation",
    href: "/en/meditation",
  },
  {
    id: "courses",
    label: "Meditation courses",
    href: "/en/courses",
  },
  {
    id: "retreats",
    label: "Retreats",
    href: "/en/retreats",
  },
  {
    id: "locations",
    label: "Locations",
    href: "/en/locations",
  },
  {
    id: "inspiration",
    label: "Inspiration",
    href: "/en/inspiration",
  },
  {
    id: "about",
    label: "About us",
    href: "/en/about-us",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/en/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  const isEnglish =
    pathname === "/en" ||
    pathname.startsWith("/en/");

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const activeNavigation = isEnglish
    ? englishNavigation
    : navigation.filter(
        (item) => item.visible,
      );

  const homeHref = isEnglish
    ? "/en"
    : routes.home;

  const offersHref = isEnglish
    ? "/en/offers"
    : routes.offers;

  const offersLabel = isEnglish
    ? "View offers"
    : "Angebote ansehen";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const mobileMenu =
    mounted && menuOpen
      ? createPortal(
          <div
            id="mobile-navigation"
            className="fixed inset-0 z-[9999] overflow-y-auto bg-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={
              isEnglish
                ? "Mobile navigation"
                : "Mobile Navigation"
            }
          >
            <Container>
              <div className="flex min-h-20 items-center justify-between border-b border-[#E8E5DD]">
                <Link
                  href={homeHref}
                  onClick={closeMenu}
                  aria-label={
                    isEnglish
                      ? "The Way Within — home"
                      : "Der Weg nach innen — Startseite"
                  }
                  className="py-3"
                >
                  <p className="font-serif text-2xl leading-none tracking-tight text-[#153B36] sm:text-3xl">
                    {isEnglish
                      ? "THE WAY"
                      : "DER WEG"}
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.34em] text-[#B08D57] sm:text-[11px]">
                    {isEnglish
                      ? "WITHIN"
                      : "NACH INNEN"}
                  </p>
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label={
                    isEnglish
                      ? "Close menu"
                      : "Menü schließen"
                  }
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E4E0D7] bg-white text-[#153B36] shadow-sm transition hover:bg-[#F7F4ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-2"
                >
                  <X
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                </button>
              </div>

              <nav
                className="flex flex-col py-10"
                aria-label={
                  isEnglish
                    ? "Mobile navigation"
                    : "Mobile Navigation"
                }
              >
                {activeNavigation.map(
                  (item) => {
                    const isActive =
                      pathname === item.href;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={
                          isActive
                            ? "page"
                            : undefined
                        }
                        className={`border-b border-[#ECE9E2] py-4 font-serif text-[1.65rem] leading-tight transition sm:text-3xl ${
                          isActive
                            ? "text-[#B08D57]"
                            : "text-[#153B36] hover:text-[#B08D57]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  },
                )}
              </nav>

              <div className="flex items-center gap-3 border-t border-[#ECE9E2] pt-7">
                <Link
                  href="/"
                  onClick={closeMenu}
                  aria-current={
                    !isEnglish
                      ? "page"
                      : undefined
                  }
                  className={
                    !isEnglish
                      ? "rounded-full bg-[#153B36] px-5 py-2.5 text-sm font-medium text-white"
                      : "rounded-full px-5 py-2.5 text-sm text-gray-500 transition hover:bg-[#F7F4ED] hover:text-[#153B36]"
                  }
                >
                  DE
                </Link>

                <Link
                  href="/en"
                  onClick={closeMenu}
                  aria-current={
                    isEnglish
                      ? "page"
                      : undefined
                  }
                  className={
                    isEnglish
                      ? "rounded-full bg-[#153B36] px-5 py-2.5 text-sm font-medium text-white"
                      : "rounded-full px-5 py-2.5 text-sm text-gray-500 transition hover:bg-[#F7F4ED] hover:text-[#153B36]"
                  }
                >
                  EN
                </Link>

                <span
                  className="cursor-not-allowed rounded-full px-5 py-2.5 text-sm text-gray-300"
                  aria-label={
                    isEnglish
                      ? "Thai version coming later"
                      : "Thailändische Version folgt später"
                  }
                >
                  TH
                </span>
              </div>

              <div className="py-8">
                <Button
                  href={offersHref}
                  onClick={closeMenu}
                  className="w-full justify-center"
                >
                  {offersLabel}
                </Button>
              </div>
            </Container>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-[#E9E6DF] bg-white/95 backdrop-blur-lg lg:border-transparent lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href={homeHref}
              className="min-w-0 cursor-pointer"
              aria-label={
                isEnglish
                  ? "The Way Within — home"
                  : "Der Weg nach innen — Startseite"
              }
            >
              <p className="font-serif text-2xl leading-none tracking-tight text-[#153B36] sm:text-3xl">
                {isEnglish
                  ? "THE WAY"
                  : "DER WEG"}
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.34em] text-[#B08D57] sm:text-[11px] sm:tracking-[0.38em]">
                {isEnglish
                  ? "WITHIN"
                  : "NACH INNEN"}
              </p>
            </Link>

            <nav
              className="hidden items-center gap-8 lg:flex"
              aria-label={
                isEnglish
                  ? "Main navigation"
                  : "Hauptnavigation"
              }
            >
              {activeNavigation.map(
                (item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="relative whitespace-nowrap text-[16px] font-medium text-gray-700 transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#153B36] after:transition-all after:duration-300 hover:text-[#153B36] hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href="/"
                aria-current={
                  !isEnglish
                    ? "page"
                    : undefined
                }
                className={
                  !isEnglish
                    ? "rounded-full bg-[#153B36] px-4 py-2 text-sm font-medium text-white"
                    : "text-sm text-gray-500 transition hover:text-[#153B36]"
                }
              >
                DE
              </Link>

              <Link
                href="/en"
                aria-current={
                  isEnglish
                    ? "page"
                    : undefined
                }
                className={
                  isEnglish
                    ? "rounded-full bg-[#153B36] px-4 py-2 text-sm font-medium text-white"
                    : "text-sm text-gray-500 transition hover:text-[#153B36]"
                }
              >
                EN
              </Link>

              <span
                className="cursor-not-allowed text-sm text-gray-300"
                aria-label={
                  isEnglish
                    ? "Thai version coming later"
                    : "Thailändische Version folgt später"
                }
              >
                TH
              </span>

              <Button
                href={offersHref}
                size="sm"
              >
                {offersLabel}
              </Button>
            </div>

            <button
              type="button"
              onClick={() =>
                setMenuOpen(true)
              }
              aria-label={
                isEnglish
                  ? "Open menu"
                  : "Menü öffnen"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E4E0D7] bg-white text-[#153B36] shadow-sm transition hover:bg-[#F7F4ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] focus-visible:ring-offset-2 lg:hidden"
            >
              <Menu
                aria-hidden="true"
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </Container>
      </header>

      {mobileMenu}
    </>
  );
}