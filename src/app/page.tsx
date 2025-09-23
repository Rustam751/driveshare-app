"use client";

// This page uses React hooks (useState), so it must be a Client Component in Next.js App Router.
import { useState } from "react";
import { Car, House, Clock, CreditCard, MapPin, Shield, Menu, X, ArrowRight, CheckCircle2, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function DriveShareLanding() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<"driver" | "host">("driver");


return (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
    {/* Nav */}
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span className="font-semibold">DriveShare</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#idea" className="hover:opacity-70">Idea</a>
          <a href="#how" className="hover:opacity-70">How it works</a>
          <a href="#benefits" className="hover:opacity-70">Benefits</a>
          <a href="#safety" className="hover:opacity-70">Safety</a>
          <a href="/analysis" className="hover:opacity-70 font-medium">Research Analysis</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex" onClick={() => {setRole("driver"); setOpen(true);}}>I'm a Driver</Button>
          <Button className="hidden md:inline-flex" onClick={() => {setRole("host"); setOpen(true);}}>I'm a Homeowner</Button>
          <Button variant="ghost" className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </Button>
        </div>
      </div>
      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="#idea" onClick={()=>setOpen(false)} className="py-2">Idea</a>
            <a href="#how" onClick={()=>setOpen(false)} className="py-2">How it works</a>
            <a href="#benefits" onClick={()=>setOpen(false)} className="py-2">Benefits</a>
            <a href="#safety" onClick={()=>setOpen(false)} className="py-2">Safety</a>
            <a href="/analysis" onClick={()=>setOpen(false)} className="py-2 font-medium">Research Analysis</a>
            <div className="flex gap-2 pt-2">
              <Button variant="secondary" onClick={() => {setRole("driver");}}>I'm a Driver</Button>
              <Button onClick={() => {setRole("host");}}>I'm a Homeowner</Button>
            </div>
          </div>
        </div>
      )}
    </header>


    {/* Hero */}
    <section id="idea" className="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Park on driveways, <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">not meters</span>.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            DriveShare connects drivers with nearby private driveways. Hosts earn passive income. Drivers save money and time. Availability windows keep neighborhoods orderly—violations are tow‑eligible per host terms.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => {setRole("driver"); setOpen(true);}}>Find a spot <ArrowRight className="ml-2 h-4 w-4"/></Button>
            <Button size="lg" variant="secondary" onClick={() => {setRole("host"); setOpen(true);}}>List your driveway</Button>
            <Button size="lg" asChild>
              <a href="/analysis">View Research Analysis</a>
            </Button>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Cheaper than city meters (host‑set pricing)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Real‑time availability windows</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Simple cashless payments</li>
          </ul>
        </div>


        {/* Placeholder visual */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border bg-white shadow-sm grid place-items-center p-6">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Card className="border-dashed">
                <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><MapPin className="h-4 w-4"/> Nearby Driveways</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">123 Oak St — $2.50/30min<br/> 88 Pine Ave — $4/hr<br/> 12 Sunset Blvd — $6 flat</CardContent>
              </Card>
              <Card className="border-dashed">
                <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Clock className="h-4 w-4"/> Availability</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Today 6–10pm<br/> Weekdays 8am–5pm<br/> Weekends 24/7</CardContent>
              </Card>
              <Card className="col-span-2 border-dashed">
                <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><CreditCard className="h-4 w-4"/> Book & Pay</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">Tap to reserve → Navigate → Park. Digital receipt and host rules included.</CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How it works */}
      <section id="how" className="bg-slate-50 border-t border-b">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/> 1) Search</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">Drivers see nearby driveways with price and availability windows. Filters: EV‑friendly, size, and access notes.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5"/> 2) Reserve</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">Book for a time window, pay securely, get navigation and the host’s posted rules.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5"/> 3) Park</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">Arrive and park. If a car overstays or violates terms, the listing notes tow‑eligibility per local law.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Why DriveShare?</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5"/> For Drivers</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-sm space-y-2">
              <p><strong>Save money:</strong> Host‑set rates often beat meter pricing.</p>
              <p><strong>Save time:</strong> Book ahead and go straight to a spot.</p>
              <p><strong>Transparent rules:</strong> See access notes, vehicle size limits, and tow policy before you book.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><House className="h-5 w-5"/> For Homeowners</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 text-sm space-y-2">
              <p><strong>Earn passively:</strong> Monetize underused space with your schedule.</p>
              <p><strong>Control access:</strong> Set availability windows and house rules.</p>
              <p><strong>Neighborhood friendly:</strong> Clear expectations reduce conflict and blocking.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety & Policy */}
      <section id="safety" className="bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Trust, Safety & Policy</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/> Verified Listings</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">Hosts confirm property ownership and provide clear photos, markings, and access notes (e.g., gate codes).</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5"/> Availability Windows</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">Parking is valid only within the listed time window. Overstay/violations may be tow‑eligible per posted terms and local regulations.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Car className="h-5 w-5"/> Respect & Etiquette</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">No blocking sidewalks/garages. Keep noise down. Leave space as found. Repeat issues lead to account review.</CardContent>
            </Card>
          </div>
          <p className="text-xs text-slate-500 mt-6">
            <strong>Disclaimer:</strong> This is an academic HCI prototype. Actual towing and enforcement depend on jurisdiction and private‑property rules.
          </p>
        </div>
      </section>

      {/* Contact / Demo CTA */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Want to test the concept?</h3>
            <p className="text-slate-600 mt-2">Leave your email and we’ll share a clickable demo and our study plan.</p>
            <form className="mt-4 grid gap-3 max-w-md" onSubmit={(e)=>e.preventDefault()}>
              <Input placeholder="you@example.com" />
              <Button type="submit">Request demo</Button>
            </form>
          </div>
          <Card className="border-dashed">
            <CardHeader className="pb-2"><CardTitle className="text-base">Research Notes (HCI)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600 space-y-2">
              <p>• <strong>Primary personas:</strong> Urban commuters (drivers) & homeowners with off‑street parking.</p>
              <p>• <strong>Key tasks:</strong> Find/Filter → Book → Navigate → Park; Host: List → Set windows → Payout.</p>
              <p>• <strong>Risks:</strong> Misaligned time windows, unclear access, neighborhood policy conflicts.</p>
              <p>• <strong>Mitigations:</strong> Time‑boxed reservations, photo guidance, up‑front rules & receipts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
          <p>© {new Date().getFullYear()} DriveShare — HCI class demo</p>
          <div className="flex gap-4">
            <a href="#idea" className="hover:opacity-70">Concept</a>
            <a href="#how" className="hover:opacity-70">How it works</a>
            <a href="#safety" className="hover:opacity-70">Policy</a>
            <a href="/analysis" className="hover:opacity-70">Research Analysis</a>
          </div>
        </div>
      </footer>
    </div>
  );
}