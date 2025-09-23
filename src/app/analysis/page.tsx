"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const themes: { group: string; title: string; notes: string[] }[] = [
  { group: "Group 1", title: "Safety", notes: [
      "Safety features (lighting, cameras, reviews) are important",
      "Good to have camera",
      "Safety is a top concern → wants lighting, cameras, secure neighborhoods",
      "Some safety policy to protect driver and homeowner",
      "Uncomfortable parking in private driveways without secure system (tow risk)",
      "Safety concerns",
  ]},
  { group: "Group 2", title: "Convenience", notes: [
      "Would try an app to book nearby private driveways ASAP",
      "Many students commute even when living close by",
      "Would like availability on a map",
      "Would like option for EV charger",
      "Thinks the idea would be convenient",
      "Interested in cheaper parking even if walking 5–10 minutes",
      "Competitive pricing; better than garage prices or permits",
  ]},
  { group: "Group 3", title: "Interaction", notes: [
      "Most important features: distance + price",
      "Prefers reserving the night before with cancel option",
      "Parks in residential streets near campus (0.5–1 mile away)",
      "Would like the app to accommodate both small and very large cars",
      "Guarantee spot / time saver",
      "Feature that allows for reservations",
  ]},
  { group: "Group 4", title: "Current Issues", notes: [
      "Has been late to class due to parking delays",
      "Does not buy campus permit (lottery & cost not worth it)",
      "Takes 10–15 minutes to find a spot (sometimes more)",
      "Spends 15–30 min searching for parking before class",
      "Stress from unpredictability",
      "Difficulty finding parking in busy areas",
  ]},
];

const empathy = {
  hears: [
    "Parking is getting more expensive on/near campus",
    "Friends say lots are often full by 8–9am",
  ],
  sees: [
    "Lots of cars circling driveways/streets",
    "Parking garages are pricey and usually at capacity",
    "All nearby spots feel taken",
  ],
  saysDoes: [
    "I plan night‑before but still end up circling",
    "If I find something far, I’ll just walk",
    "I’ll pay if it’s guaranteed and safe",
  ],
  thinksFeels: [
    "Finding a spot is unpredictable and stressful",
    "Worried about being late to class or work",
    "Wants clear rules and no awkward host interactions",
  ],
  pain: [
    "High cost of permits/garages",
    "Time wasted looking for parking",
    "Safety concerns in sketchy areas at night",
  ],
  gain: [
    "Reliable, guaranteed spot",
    "Cheaper than garages/permits",
    "Safer, well‑lit driveway with clear rules",
  ],
};

const stages = ["Morning", "Commuting", "Parking search", "Work day", "Evening return"] as const;

const experience = {
  actions: {
    Morning: ["Leave driveway clear while at work"],
    Commuting: ["Drive to the office for 30–40 mins"],
    "Parking search": ["Circle blocks for ~15 mins", "Walk 0.5–1 mile from spot"],
    "Work day": ["Leave car parked far from office", "Hope it’s safe"],
    "Evening return": ["Walk back to car; return home to an empty driveway"],
  },
  goals: {
    Morning: ["Get to work on time"],
    Commuting: ["Arrive safely; avoid stress"],
    "Parking search": ["Find affordable, safe parking"],
    "Work day": ["Focus on work; don’t worry about car"],
    "Evening return": ["Make better use of driveway; consider passive income"],
  },
  feelings: {
    Morning: ["😀 Starts positive; mild anxiety about parking later"],
    Commuting: ["😓 Frustrated about traffic and time"],
    "Parking search": ["😰 Stressed; sometimes late"],
    "Work day": ["🤔 Distracted by worry about the car"],
    "Evening return": ["😌 Relief that car is fine; reflects on empty driveway"],
  },
  pain: {
    Morning: ["Driveway wasted while not occupied"],
    Commuting: ["Time lost in traffic + looking for spots"],
    "Parking search": ["High cost", "Unpredictability"],
    "Work day": ["Safety risk; no guarantee about belongings"],
    "Evening return": ["Long inconvenient walk; risk in poorly lit areas"],
  },
  opportunities: {
    Morning: ["Better financial use of idle driveway"],
    Commuting: ["Guaranteed parking to reduce anxiety"],
    "Parking search": ["Offer a reliable reserved option"],
    "Work day": ["Driveway access rules & simple verification"],
    "Evening return": ["Manage driveway securely with schedules"],
  },
};

import Image from "next/image";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">User Research Analysis</h1>
          <Link href="/" className="text-sm underline">← Back to Home</Link>
        </div>
        <p className="text-slate-600 mt-2">Data‑driven representation of our Affinity Themes, Empathy Map, and a current‑state Experience Map (no images).</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="sm"><a href="https://driveshare-app.vercel.app/" target="_blank" rel="noreferrer">Live Prototype <ExternalLink className="h-4 w-4 ml-2"/></a></Button>
          <Button asChild variant="secondary" size="sm"><a href="https://www.figma.com/board/eJV0RLI4pfxEZ70YkDWSWi/Fall2025-HCI?node-id=0-1&p=f" target="_blank" rel="noreferrer">Open FigJam <ExternalLink className="h-4 w-4 ml-2"/></a></Button>
        </div>

        {/* Affinity Themes */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Affinity Diagramming — Themes</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            {themes.map((t) => (
              <Card key={t.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Badge variant="secondary">{t.group}</Badge> {t.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                    {t.notes.map((n) => (<li key={n}>{n}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Personas (with images) */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Personas</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[{
              name: "Happy Henry",
              tag: "logical",
              img: "/analysis/persona-happy-henry.png",
              blurb: "College student, fitness‑oriented, okay with a short walk to save money. Tech‑savvy, introverted—prefers low‑friction interactions.",
              points: ["Age 18–20 in a metro city","Lots of classes + part‑time work","Budget sensitive; open to cheaper off‑street options"],
            },{
              name: "Bored Jordan",
              tag: "Renter",
              img: "/analysis/persona-bored-jordan.png",
              blurb: "Second‑year undergrad who commutes 3–4 days/week. Spends 15–30 minutes searching for parking and is sometimes late.",
              points: ["Drives 40–60 min from suburbs","Avoids expensive permits","Wants reliable, affordable spots"],
            },{
              name: "Sus Sally",
              tag: "Go‑Getter",
              img: "/analysis/persona-sus-sally.png",
              blurb: "Hospital staff with long shifts; driveway is empty most days. Interested in side income but cautious about security/liability.",
              points: ["Homeowner ~15 years","Open to renting driveway","Needs clear rules & safety"],
            },{
              name: "Practical Priya",
              tag: "Driver and Owner",
              img: "/analysis/persona-practical-priya.png",
              blurb: "Mid‑level professional near a university. Values trust, clear rules, and guaranteed spots.",
              points: ["Driveway idle by day","Wants orderly access","Likes guaranteed reservations"],
            }].map((p)=> (
              <Card key={p.name}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {p.name} <span className="text-slate-400 text-sm">— {p.tag}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4 items-start">
                  <Image src={p.img} alt={p.name} width={720} height={720} className="rounded-lg border"/>
                  <div>
                    <p className="text-sm text-slate-700">{p.blurb}</p>
                    <ul className="mt-3 text-sm list-disc pl-5 text-slate-700 space-y-1">
                      {p.points.map(pt=> <li key={pt}>{pt}</li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empathy Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Empathy Map</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">HEARS</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.hears.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">SEES</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.sees.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">SAYS & DOES</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.saysDoes.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">THINKS & FEELS</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.thinksFeels.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">PAIN</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.pain.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
            <Card><CardHeader className="pb-2"><CardTitle className="text-base">GAIN</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700">{empathy.gain.map((i)=> <li key={i}>{i}</li>)}</ul></CardContent></Card>
          </div>
        </section>

        {/* Experience Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Experience Map — Practical Priya</h2>
          <p className="text-slate-600 mt-2">Current‑state journey without the app; used to identify pain points and opportunities.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border rounded-xl overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 border">Row</th>
                  {stages.map((s) => (<th key={s} className="text-left p-3 border">{s}</th>))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-medium">User actions</td>
                  {stages.map((s) => (<td key={s+"-a"} className="p-3 border align-top"><ul className="list-disc pl-5 space-y-1">{experience.actions[s].map((i)=> <li key={i}>{i}</li>)}</ul></td>))}
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Goals & experiences</td>
                  {stages.map((s) => (<td key={s+"-g"} className="p-3 border align-top"><ul className="list-disc pl-5 space-y-1">{experience.goals[s].map((i)=> <li key={i}>{i}</li>)}</ul></td>))}
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Feelings & thoughts</td>
                  {stages.map((s) => (<td key={s+"-f"} className="p-3 border align-top"><ul className="list-disc pl-5 space-y-1">{experience.feelings[s].map((i)=> <li key={i}>{i}</li>)}</ul></td>))}
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Pain points</td>
                  {stages.map((s) => (<td key={s+"-p"} className="p-3 border align-top"><ul className="list-disc pl-5 space-y-1">{experience.pain[s].map((i)=> <li key={i}>{i}</li>)}</ul></td>))}
                </tr>
                <tr>
                  <td className="p-3 border font-medium">Opportunities</td>
                  {stages.map((s) => (<td key={s+"-o"} className="p-3 border align-top"><ul className="list-disc pl-5 space-y-1">{experience.opportunities[s].map((i)=> <li key={i}>{i}</li>)}</ul></td>))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="h-8"/>
      </div>
    </div>
  );
}