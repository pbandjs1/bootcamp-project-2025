export const dynamic = "force-dynamic";
export const revalidate = 0;

import ContactForm from "./ContactForm";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
          <strong>contact</strong>
        </h1>

        <ContactForm />
      </main>
    </div>
  );
}
