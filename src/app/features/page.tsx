"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Car, House, MapPin, Clock, Calendar, Route, CreditCard, Home, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">DriveShare App Features</h1>
          <Link href="/" className="text-sm underline">← Back to Home</Link>
        </div>

        {/* Drivers Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold flex items-center gap-2"><Car className="h-5 w-5 text-emerald-600"/> For Drivers</h2>
          <p className="text-slate-600 mt-2 mb-6">Seamlessly find, book, and navigate to driveways near your destination.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Home className="h-5 w-5"/> Home Page</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Simple interface with “Find Spot” button, recent bookings, and quick filters.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/> Spot Selection</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Interactive map showing available driveways, pricing, and distance filters.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5"/> Time Selection</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Choose custom parking durations and availability windows directly in the app.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Route className="h-5 w-5"/> Directions to Spot</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Built-in navigation support through Google Maps or Apple Maps.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5"/> Secure Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Integrated cashless payments with instant digital receipts and booking confirmation.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5"/> Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Quick review screen summarizing time, address, and total cost before final confirmation.</CardContent>
            </Card>
          </div>
        </section>

        {/* Homeowners Section */}
        <section>
          <h2 className="text-2xl font-semibold flex items-center gap-2"><House className="h-5 w-5 text-cyan-600"/> For Homeowners</h2>
          <p className="text-slate-600 mt-2 mb-6">Effortlessly rent your driveway, set schedules, and manage your listings.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Home className="h-5 w-5"/> Listing Page</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Upload driveway photos, add address, and set pricing per hour or day.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calendar className="h-5 w-5"/> Availability Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Set time windows when your driveway is available — daily, weekly, or custom.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/> Driveway Info</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Add notes like “Fits SUV,” “No blocking gate,” or “Electric charging available.”</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CreditCard className="h-5 w-5"/> Rent & Payout</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">View upcoming reservations and receive automatic payouts to your account.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/> Safety & Control</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Host verification, time windows, and visibility control ensure security and peace of mind.</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Route className="h-5 w-5"/> Host Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">Monitor your listings, earnings, and user ratings in one intuitive dashboard.</CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
