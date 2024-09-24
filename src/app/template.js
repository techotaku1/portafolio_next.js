import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { NavigationEvents } from "@/app/components/navigation-events";

export default function Template({ children }) {
  return (
    <>
      <NavigationEvents />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
