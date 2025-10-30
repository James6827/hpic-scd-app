import { useState } from "react";
import { libraryItems } from "../data/module1.js";

export default function Library({ lang = "en" }) {
  const [filter, setFilter] = useState("");
  const items = libraryItems.filter(i =>
    (lang === "en" ? i.title_en : i.title_fr).toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <section>
      <h2>Interactive Educational Library</h2>
      <input placeholder="Search..." value={filter} onChange={e=>setFilter(e.target.value)} />
      <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fill, minmax(240px,1fr))"}}>
        {items.map((i, idx) => (
          <div key={idx} style={{border:"1px solid #ddd", borderRadius:8, padding:12}}>
            <h3>{lang==="en" ? i.title_en : i.title_fr}</h3>
            <p style={{opacity:.7}}>{i.kind}</p>
            <a href={i.url}>Open</a>
          </div>
        ))}
      </div>
    </section>
  );
}
