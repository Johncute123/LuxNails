import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Visit } from "../components/Visit";

export function HomePage() {
  return <><Hero /><div className="service-ribbon" aria-label="Our specialties"><span>MANICURES</span><b aria-hidden="true">✧</b><span>PEDICURES</span><b aria-hidden="true">✧</b><span>NAIL ART</span><b aria-hidden="true">✧</b><span>BEAUTY & WAXING</span></div><Services /><Visit /></>;
}
