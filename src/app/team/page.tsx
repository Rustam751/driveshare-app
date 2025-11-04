"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail } from "lucide-react";
import { teamMembers } from "./data";

export type BlogLink = { title: string; href: string };
export type Member = {
  slug: string;
  name: string;
  role: string;
  email?: string;
  avatar?: string;
  bio: string;
  blogs: BlogLink[]; // Provide real links where available
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold">Meet the Team</h1>
          <Link href="/" className="text-sm underline">← Back to Home</Link>
        </div>
        <p className="text-slate-600 mt-2">Team directory with links to individual pages and HCI blogs.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {teamMembers.map((m) => (
            <Card key={m.slug} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{m.name} <span className="text-slate-400 text-sm">— {m.role}</span></CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-[96px,1fr] gap-4">
                <div className="relative h-24 w-24 rounded-xl overflow-hidden border bg-slate-50">
                  <Image src={m.avatar || "/team/avatar-fallback.png"} alt={m.name} fill className="object-cover"/>
                </div>
                <div>
                  <p className="text-sm text-slate-700">{m.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-3 items-center">
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-xs underline">
                        <Mail className="h-3.5 w-3.5"/> {m.email}
                      </a>
                    )}
                    <Badge variant="secondary">HCI 2025</Badge>
                    <Button asChild size="sm" className="ml-auto">
                      <Link href={`/team/${m.slug}`}>View profile</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}