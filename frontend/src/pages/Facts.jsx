import { useState } from "react";
import { facts } from "../data/module1.js";

export default function Facts({ lang = "en" }) {
  const [i, setI] = useState(0);
  const f = facts[i % facts.length];
  return (
    <section>
      <h2>Did you know?</h2>
      <div style={{border:"1px solid #ddd", borderRadius:8, padding:12, margin:"12px 0"}}>
        {lang === "en" ? f.en : f.fr}
      </div>
      <button onClick={()=>setI(i+1)}>Next fact</button>
    </section>
  );
}
