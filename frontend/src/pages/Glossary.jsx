import { useState } from "react";
import { glossary } from "../data/module1.js";

export default function Glossary({ lang = "en" }) {
  const [q, setQ] = useState("");
  const items = glossary.filter(g =>
    (lang==="en" ? g.term_en : g.term_fr).toLowerCase().includes(q.toLowerCase())
  );
  return (
    <section>
      <h2>Health Glossary</h2>
      <input placeholder="Search term..." value={q} onChange={e=>setQ(e.target.value)} />
      <ul style={{marginTop:12}}>
        {items.map((g, i) => (
          <li key={i}><strong>{lang==="en" ? g.term_en : g.term_fr}</strong>: {lang==="en" ? g.def_en : g.def_fr}</li>
        ))}
      </ul>
    </section>
  );
}
