import { serviceCategories } from "../data/services";
import { salon } from "../data/salon";

export function Services() {
  return (<section className="services section" id="services"><div className="section-heading"><div><p className="eyebrow">THE TREATMENT MENU</p><h2>A little care.<br /><em>A lot of possibility.</em></h2></div><p>From a simple polish refresh to a whole new set.<br />Choose your treatment, then call us to arrange your visit.</p></div><div className="service-list">{serviceCategories.map((category, index) => (
<details key={category.id} open={index === 0}>
  <summary><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="service-name">{category.title}</span><span className="service-note">{category.note}</span><span className="toggle" aria-hidden="true"></span></summary>
  <div className="service-details"><p>{category.description}</p>{category.items.length > 0 ? <ul>{category.items.map(item => <li key={item}>{item}</li>)}</ul> : <a className="text-link" href={salon.phoneHref}>Enquire about waxing</a>}</div>
</details>
))}</div><p className="menu-note">For treatment prices, availability and appointments, call <a href={salon.phoneHref}>{salon.phone}</a>.</p></section>);
}
