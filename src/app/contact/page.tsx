import ContactFormWrapper from "../../components/home/ContactFormWrapper";
import { Suspense } from "react";

export default function ContactPage() {
  <Suspense fallback={<div>Loading...</div>}>
    return <ContactFormWrapper />;
  </Suspense>;
}
