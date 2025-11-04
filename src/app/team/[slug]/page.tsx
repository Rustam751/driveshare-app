import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

import { teamMembers, type Member } from "../data"; // <-- FIXED

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between">
          <Link href="/team" className="text-sm underline inline-flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Team
          </Link>
          <Link href="/" className="text-sm underline">Home</Link>
        </div>

        <div className="mt-6 grid md:grid-cols-[160px,1fr] gap-6 items-start">
          <div className="relative h-40 w-40 rounded-2xl overflow-hidden border bg-slate-50">
            <Image src={member.avatar || "/team/avatar-fallback.png"} alt={member.name} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <p className="text-slate-500 mt-1">{member.role}</p>
            <p className="text-slate-700 text-sm mt-3">{member.bio}</p>
            {member.email && (
              <p className="text-xs mt-2">
                <a className="underline" href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            )}
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Blog Posts</h2>
          <div className="grid gap-3 mt-3">
            {member.blogs.length ? (
              member.blogs.map((b) => (
                <Card key={b.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <p className="text-sm text-slate-600">Reflection and deliverable link.</p>
                    <Button asChild size="sm" variant="secondary">
                      <a href={b.href} target="_blank" rel="noreferrer">
                        Open <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-sm text-slate-600">Coming soon.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
