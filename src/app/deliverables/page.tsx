import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, FolderGit2, Film } from "lucide-react";

const files = [
  { title: "Project Proposal (DOCX)", path: "/deliverables/HCI-Project-Proposal.docx" },
  { title: "Medium‑Fidelity Prototype README (DOCX)", path: "/deliverables/DriveShare-MidFi-README.docx" },
  { title: "Medium‑Fidelity Prototype & Testing Report (DOCX)", path: "/deliverables/DriveShare-MidFi-Testing-Report.docx" },
];

const externals = [
  { title: "Figma Prototype", href: "https://www.figma.com/board/eJV0RLI4pfxEZ70YkDWSWi/Fall2025-HCI?node-id=0-1&p=f", icon: Film },
  { title: "Live Site / Landing", href: "/", icon: ExternalLink },
  { title: "Research Analysis Page", href: "/analysis", icon: FolderGit2 },
];

export default function DeliverablesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold">Deliverables</h1>
          <Link href="/" className="text-sm underline">← Back to Home</Link>
        </div>
        <p className="text-slate-600 mt-2">
            All required submissions are organized below. If a file link returns 404,
            place the file under <code className="font-mono">/public/deliverables/</code> with the matching name.
        </p>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Documents</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {files.map((f) => (
              <Card key={f.title}>
                <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4"/> {f.title}</CardTitle></CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">Download from the site.</p>
                  <Button asChild size="sm"><a href={f.path}>Download</a></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">External Artifacts</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {externals.map((e) => (
              <Card key={e.title}>
                <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2">{<e.icon className="h-4 w-4"/>} {e.title}</CardTitle></CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-sm text-slate-600">Opens in a new tab.</p>
                  <Button asChild size="sm" variant="secondary"><a href={e.href} target="_blank" rel="noreferrer">Open <ExternalLink className="h-4 w-4 ml-1"/></a></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
