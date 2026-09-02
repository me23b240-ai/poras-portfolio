import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FieldAssignments } from "@/components/FieldAssignments";
import { Investigations } from "@/components/Investigations";
import { Dispatches } from "@/components/Dispatches";
import { Toolkit } from "@/components/Toolkit";
import { Dossier } from "@/components/Dossier";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Investigations />
        <Dispatches />
        <Toolkit />
        <Dossier />
        <Contact />
      </main>
      <Footer />
    </>
  );
}