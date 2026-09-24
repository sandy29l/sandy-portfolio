import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profile } from "../data";
import emailjs from '@emailjs/browser';

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const temp={
    name:form.name,
    email:form.email,
    subject:form.subject,
    message:form.message,
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i6nypn9', 'template_ywcvibq', temp, {
        publicKey: 'Rw4FXs2aJ5UY6flO6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Subject is required.";
    if (!form.message.trim()) next.message = "Message is required.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const next = validate();
  setErrors(next);

  if (Object.keys(next).length > 0) {
    return;
  }

  try {
    await emailjs.sendForm(
      "service_i6nypn9",
      "template_ywcvibq",
      e.currentTarget,
      {
        publicKey: "Rw4FXs2aJ5UY6flO6",
      }
    );

    console.log("SUCCESS!");

    setStatus("success");
    setForm(initialForm);

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  } catch (error) {
    console.error("FAILED...", error);
  }
};

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.social.email, href: `mailto:${profile.social.email}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.social.linkedin },
    { icon: Github, label: "GitHub", value: "View my work", href: profile.social.github },
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="section-eyebrow mb-3">Get In Touch</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-muted text-base leading-relaxed">
            Have an opportunity, project, or idea? I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* LEFT: contact info */}
          <ScrollReveal delay={0.1} className="space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl glass p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={19} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wide font-mono">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm font-medium text-ink hover:text-secondary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* RIGHT: form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl glass p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="What's this about?"
              />

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or idea..."
                  className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors duration-300 resize-none ${
                    errors.message ? "border-red-400/60" : "border-white/10 focus:border-primary/50"
                  }`}
                />
                {errors.message && <ErrorText text={errors.message} />}
              </div>

              <button
                type="submit"
                
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full px-7 py-3 text-sm font-semibold text-ink btn-gradient hover:scale-[1.02] active:scale-95"
              >
                <Send size={16} />
                Send Message
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3">
                  <CheckCircle2 size={16} />
                  Message ready — Message delivered Successfully :).
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono uppercase tracking-wide text-muted mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`w-full rounded-xl bg-white/[0.03] border px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors duration-300 ${
          error ? "border-red-400/60" : "border-white/10 focus:border-primary/50"
        }`}
      />
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
      <AlertCircle size={13} />
      {text}
    </p>
  );
}
