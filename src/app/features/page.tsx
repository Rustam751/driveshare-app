"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Car, House, MapPin, Clock, Calendar, Route, CreditCard, Home, CheckCircle2, Shield, BarChart3, LayoutDashboard } from "lucide-react";

function FeatureTile({
  title,
  description,
  icon,
  src,
  alt,
  priority = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{icon}{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        <p>{description}</p>
        <div className="mt-3">
          <div className="relative w-full overflow-hidden rounded-lg border">
            <div className="aspect-[8/5] relative">
              <Image
                src={src}
                alt={alt}
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={priority}
                />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">DriveShare App Features</h1>
          <Link href="/" className="text-sm underline">← Back to Home</Link>
        </div>

        {/* DRIVERS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Car className="h-5 w-5 text-emerald-600" /> For Drivers
          </h2>
          <p className="text-slate-600 mt-2 mb-6">
            Find, book, and navigate to driveways near your destination.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureTile
              title="Map Interface"
              description="See nearby driveways with price bubbles; pan and zoom the area."
              icon={<MapPin className="h-5 w-5" />}
              src="/features/driver-map.png"
              alt="Driver map with pins and price"
              priority
            />
            <FeatureTile
              title="Spot Selection"
              description="Browse nearby driveways on the map, compare prices, and tap to book instantly."
              icon={<MapPin className="h-5 w-5" />}
              src="/features/driver-spot-selection.png"
              alt="Zoomed-in map with green pins showing driveway prices"
            />
            <FeatureTile
              title="Time Selection"
              description="Pick start/end times or quick presets for your reservation."
              icon={<Clock className="h-5 w-5" />}
              src="/features/driver-time-selection.png"
              alt="Time selection calendar and sliders"
            />
            <FeatureTile
              title="Booking Confirmed"
              description="Clear summary with location, date, time, total cost, and ‘Get Directions’."
              icon={<CheckCircle2 className="h-5 w-5" />}
              src="/features/driver-booking-confirmed.png"
              alt="Booking confirmation screen"
            />
            <FeatureTile
              title="Directions to Spot"
              description="Turn-by-turn route to your reserved driveway."
              icon={<Route className="h-5 w-5" />}
              src="/features/driver-directions.png"
              alt="Navigation route to driveway"
            />
            <FeatureTile
              title="Cashless Payment"
              description="Pay securely in-app; receipts saved to your bookings."
              icon={<CreditCard className="h-5 w-5" />}
              src="/features/driver-booking-confirmed.png"
              alt="Booking confirmation shows paid status"
            />
          </div>
        </section>

        {/* HOMEOWNERS */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <House className="h-5 w-5 text-cyan-600" /> For Homeowners
          </h2>
          <p className="text-slate-600 mt-2 mb-6">
            List your driveway, set schedules, and track earnings.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureTile
              title="Host Dashboard"
              description="Manage active listings and pause/reactivate anytime."
              icon={<LayoutDashboard className="h-5 w-5" />}
              src="/features/host-dashboard.png"
              alt="Host dashboard with listings overview"
              priority
            />
            <FeatureTile
              title="List Your Driveway"
              description="Add address, rate, spot type, upload photos, and publish."
              icon={<Home className="h-5 w-5" />}
              src="/features/host-renting-page.png"
              alt="List your driveway form"
            />
            <FeatureTile
              title="Driveway Info"
              description="Detailed page with photo, rules, and special notes for drivers."
              icon={<MapPin className="h-5 w-5" />}
              src="/features/host-driveway-info.png"
              alt="Driveway details"
            />
            <FeatureTile
              title="Availability Schedule"
              description="Choose days and time windows; add morning/evening blocks."
              icon={<Calendar className="h-5 w-5" />}
              src="/features/host-availability.png"
              alt="Availability calendar"
            />
            <FeatureTile
              title="Safety & Control"
              description="Verified listing, require driver photo ID, lighting checks, and support."
              icon={<Shield className="h-5 w-5" />}
              src="/features/host-safety.png"
              alt="Safety and control options"
            />
            <FeatureTile
              title="Earnings Dashboard"
              description="Weekly earnings chart and payout history; transfer to bank."
              icon={<BarChart3 className="h-5 w-5" />}
              src="/features/host-earnings.png"
              alt="Earnings dashboard with chart"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
