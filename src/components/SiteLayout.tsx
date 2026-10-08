import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { salon } from "../data/salon";

export function SiteLayout({ children }: { children: ReactNode }) {
  return <>
<div className="topline">A LITTLE LUXURY, IN THE HEART OF SURFERS PARADISE</div>
<header className="header"><Logo /><nav aria-label="Main navigation"><a href="#services">Our services</a><a href="#visit">Find us</a><a className="button small" href={salon.phoneHref}>Call to book</a></nav></header>
<main>{children}</main>
<footer><Logo /><p>A little luxury. All yours.</p><span>© <span>{new Date().getFullYear()}</span> Lux Nails · Surfers Paradise</span></footer><a className="mobile-book" href={salon.phoneHref}>Call to book <span>{salon.phone}</span></a>
</>;
}
