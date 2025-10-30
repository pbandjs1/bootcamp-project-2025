import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>
          <strong>contact</strong>
        </h1>
        <form className={style.form} id="contact-form">
          <label className={style.label} htmlFor="name">
            Name
          </label>
          <input
            className={style.textarea}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={style.textarea}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label className={style.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={style.textarea}
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button className={style.button}>
            <input type="submit" value="Submit" />
          </button>
        </form>
      </main>
    </div>
  );
}
