"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { NavigationEvents } from "@/app/components/navigation-events";

export default function Template({ children }) {
  return (
    <>
      <NavigationEvents />
      <Navbar />
      <section className="container my-4 p-4 bg-light rounded shadow">
        {children}
      </section>
      <Footer />
    </>
  );
}
