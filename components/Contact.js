'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const CONTACT_ITEMS = [
    {
        label: 'Email', value: 'chitranjan@example.com', href: 'mailto:chitranjan@example.com',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        label: 'GitHub', value: 'github.com/chitranjan', href: 'https://github.com',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
    },
    {
        label: 'LinkedIn', value: 'linkedin.com/in/chitranjan', href: 'https://linkedin.com',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
];

export default function Contact() {
    const { design } = useTheme();
    if (design === 'tron') return <ContactTron />;
    if (design === 'ares') return <ContactAres />;
    if (design === 'cod') return <ContactCod />;
    if (design === 'modern') return <ContactModern />;
    if (design === 'indic') return <ContactIndic />;
    return <ContactAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage contact layout
 ═══════════════════════════════════════ */
function ContactIndic() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-transparent border-b-2 border-indic-border/30 px-0 py-4 text-indic-fg placeholder:text-indic-fg/30 outline-none focus:border-indic-saffron transition-all font-medium italic';

    return (
        <section id="contact" className="py-32 md:py-48 bg-indic-bg relative overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-24 text-center animate-modern-reveal">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-4">अतिथि देवो भव: ATITHI DEVO BHAVA</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 italic">
                        Let&apos;s Weave <span className="indic-gradient-text">Something Grand</span>.
                    </h2>
                    <p className="max-w-[600px] mx-auto text-indic-fg/70 italic font-medium">
                        Whether it is a project inquiry or just a greeting, I welcome your message with traditional warmth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
                    <div className="animate-modern-reveal">
                        <div className="space-y-12">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                                    <div className="w-16 h-16 rounded-full bg-indic-bg border-2 border-indic-border/20 flex items-center justify-center text-indic-terracotta group-hover:text-indic-saffron group-hover:border-indic-saffron transition-all shadow-inner">
                                        {icon}
                                    </div>
                                    <div>
                                        <div className="text-[0.7rem] uppercase tracking-widest text-indic-terracotta font-bold mb-1">{label}</div>
                                        <div className="text-indic-fg font-bold tracking-tight text-[1.4rem] italic group-hover:text-indic-saffron transition-colors">{value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="jaali-card p-10 md:p-16 animate-modern-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
                            <div className="space-y-2">
                                <label className="text-[0.8rem] font-bold text-indic-terracotta uppercase tracking-tighter">निजी विवरण NAME</label>
                                <input name="name" type="text" placeholder="Arjun Sharma" value={formState.name} onChange={handleChange} className={`${inputCls} ${errors.name ? 'border-red-500' : ''}`} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.8rem] font-bold text-indic-terracotta uppercase tracking-tighter">ईमेल EMAIL</label>
                                <input name="email" type="email" placeholder="arjun@heritage.in" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`} />
                            </div>
                        </div>
                        <div className="space-y-2 mb-10">
                            <label className="text-[0.8rem] font-bold text-indic-terracotta uppercase tracking-tighter">विषय SUBJECT</label>
                            <input name="subject" type="text" placeholder="Collaboration Inquiry" value={formState.subject} onChange={handleChange} className={inputCls} />
                        </div>
                        <div className="space-y-2 mb-12">
                            <label className="text-[0.8rem] font-bold text-indic-terracotta uppercase tracking-tighter">संदेश MESSAGE</label>
                            <textarea name="message" rows={4} placeholder="What vision shall we manifest together?" value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`} />
                        </div>

                        <button type="submit" disabled={sending} className="btn-indic w-full py-5 text-[1.1rem] flex items-center justify-center gap-4">
                            {sending ? 'सक्रिय... SENDING' : 'भेजें SEND MESSAGE'}
                            {!sending && <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                        </button>

                        {success && (
                            <div className="mt-10 p-6 rounded-sm bg-indic-saffron/10 border border-indic-saffron/20 text-indic-saffron text-center font-bold italic animate-bounce">
                                सन्देश सफलतापूर्वक भेजा गया! Message sent.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

function useContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const errs = {};
        if (!formState.name.trim()) errs.name = 'Please enter your name.';
        if (!formState.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) errs.email = 'Please enter a valid email.';
        if (!formState.message || formState.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
        return errs;
    };

    const handleChange = (e) => {
        setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
        setErrors((e2) => ({ ...e2, [e.target.name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSending(true);
        await new Promise((r) => setTimeout(r, 1400));
        setSending(false);
        setSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
    };

    return { formState, errors, sending, success, handleChange, handleSubmit };
}


/* ═══════════════════════════════════════
   AURORA — Glassmorphic form
═══════════════════════════════════════ */
function ContactAurora() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const inputBase = 'w-full bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[14px] px-4 py-[0.8rem] text-text-primary font-[inherit] text-[0.9rem] outline-none transition-all duration-200 placeholder:text-text-muted resize-vertical focus:border-accent-1 focus:bg-[rgba(99,102,241,0.05)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]';
    const inputError = 'border-[#f87171]';

    return (
        <section id="contact" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16 reveal">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Let&apos;s work together</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Get In{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Touch</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
                    <div className="flex flex-col reveal">
                        <p className="text-text-secondary leading-[1.8] mb-8 text-[1rem]">
                            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
                        </p>
                        <div className="flex flex-col gap-5">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <div key={label} className="flex items-start gap-4 px-5 py-4 bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[14px] transition-all duration-200 hover:border-[rgba(99,102,241,0.4)]">
                                    <div className="flex items-center justify-center w-10 h-10 min-w-[40px] rounded-[8px] bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(6,182,212,0.15))] text-accent-2">{icon}</div>
                                    <div>
                                        <p className="text-[0.72rem] uppercase tracking-[0.1em] text-text-muted font-semibold mb-[0.2rem]">{label}</p>
                                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            className="block text-[0.9rem] font-semibold text-text-primary transition-all duration-200 hover:text-accent-2">{value}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form className="flex flex-col gap-5 bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[28px] p-9 md:p-[2.25rem] reveal" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-[0.45rem]">
                                <label htmlFor="name" className="text-[0.82rem] font-semibold text-text-secondary tracking-[0.02em]">Name</label>
                                <input id="name" name="name" type="text" placeholder="John Doe" value={formState.name} onChange={handleChange} className={`${inputBase} ${errors.name ? inputError : ''}`} />
                                {errors.name && <span className="text-[0.75rem] text-[#f87171]">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.45rem]">
                                <label htmlFor="email" className="text-[0.82rem] font-semibold text-text-secondary tracking-[0.02em]">Email</label>
                                <input id="email" name="email" type="email" placeholder="john@example.com" value={formState.email} onChange={handleChange} className={`${inputBase} ${errors.email ? inputError : ''}`} />
                                {errors.email && <span className="text-[0.75rem] text-[#f87171]">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.45rem]">
                            <label htmlFor="subject" className="text-[0.82rem] font-semibold text-text-secondary tracking-[0.02em]">Subject</label>
                            <input id="subject" name="subject" type="text" placeholder="Project Collaboration" value={formState.subject} onChange={handleChange} className={inputBase} />
                        </div>
                        <div className="flex flex-col gap-[0.45rem]">
                            <label htmlFor="message" className="text-[0.82rem] font-semibold text-text-secondary tracking-[0.02em]">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." value={formState.message} onChange={handleChange} className={`${inputBase} ${errors.message ? inputError : ''}`} />
                            {errors.message && <span className="text-[0.75rem] text-[#f87171]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending} className="w-full flex justify-center items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold text-white bg-gradient-accent shadow-[0_4px_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.55)] disabled:opacity-70 disabled:cursor-not-allowed">
                            <span>{sending ? 'Sending...' : 'Send Message'}</span>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                        </button>
                        {success && (
                            <div className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-[#4ade80] text-[0.9rem] font-semibold">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                                Message sent! I&apos;ll get back to you soon.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   TRON — Terminal CLI form
═══════════════════════════════════════ */
function ContactTron() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-[rgba(0,4,8,0.9)] border border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)] px-4 py-[0.7rem] text-accent-2 font-mono text-[0.85rem] outline-none transition-all duration-200 placeholder:text-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] placeholder:tracking-[0.06em] focus:border-accent-1 focus:shadow-[0_0_0_2px_color-mix(in_srgb,var(--accent-1)_15%,transparent),0_0_12px_-3px_var(--accent-1)]';

    return (
        <section id="contact" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1 font-mono text-[0.8rem]">&gt;</span>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent-1">COMMS // CONTACT</span>
                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]" />
                    </div>
                    <h2 className="font-mono text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-[0.1em] uppercase"
                        style={{ textShadow: '0 0 15px var(--accent-1)' }}>
                        &gt; ESTABLISH_LINK
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
                    {/* Channels */}
                    <div className="reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-5"
                            style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 20px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-4">// AVAILABLE_CHANNELS</div>
                            <div className="space-y-3">
                                {CONTACT_ITEMS.map(({ label, value, href }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="block font-mono p-3 border border-[color-mix(in_srgb,var(--accent-1)_15%,transparent)] transition-all duration-200 hover:border-accent-1"
                                        style={{ background: 'rgba(0,4,8,0.7)' }}>
                                        <div className="text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase">{label.toUpperCase()}:</div>
                                        <div className="text-[0.85rem] text-accent-2">{value}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate
                        className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-6 reveal"
                        style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 25px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                        <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-5">// TRANSMIT_MESSAGE</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="name" className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent-1">&gt; ENTER_NAME:</label>
                                <input id="name" name="name" type="text" placeholder="JOHN_DOE" value={formState.name} onChange={handleChange} className={`${inputCls} ${errors.name ? 'border-[#ef4444]' : ''}`} />
                                {errors.name && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="email" className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent-1">&gt; ENTER_EMAIL:</label>
                                <input id="email" name="email" type="email" placeholder="john@domain.com" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-4">
                            <label htmlFor="subject" className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent-1">&gt; SUBJECT:</label>
                            <input id="subject" name="subject" type="text" placeholder="PROJECT_COLLABORATION" value={formState.subject} onChange={handleChange} className={inputCls} />
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-5">
                            <label htmlFor="message" className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent-1">&gt; MESSAGE_BODY:</label>
                            <textarea id="message" name="message" rows={5} placeholder="Enter transmission content..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
                            {errors.message && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending}
                            className="w-full font-mono text-[0.8rem] tracking-[0.18em] uppercase text-accent-1 border border-accent-1 py-3 transition-all duration-200 hover:bg-[color-mix(in_srgb,var(--accent-1)_10%,transparent)] hover:shadow-[0_0_20px_-3px_var(--accent-1)] disabled:opacity-50"
                            style={{ boxShadow: '0 0 12px -3px var(--accent-1)' }}>
                            {sending ? '> TRANSMITTING...' : '> TRANSMIT [ENTER]'}
                        </button>
                        {success && (
                            <div className="mt-4 font-mono text-[0.8rem] text-accent-2 p-3 border border-accent-2"
                                style={{ background: 'rgba(0,8,16,0.8)', boxShadow: '0 0 10px -3px var(--accent-2)' }}>
                                &gt; TRANSMISSION SUCCESSFUL. RESPONSE PENDING...
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   ARES — Brutalist bold form
═══════════════════════════════════════ */
function ContactAres() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-[rgba(0,0,0,0.8)] border-2 border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)] px-4 py-[0.8rem] text-text-primary font-[inherit] text-[0.85rem] uppercase tracking-[0.04em] outline-none transition-all duration-150 placeholder:text-text-muted placeholder:uppercase placeholder:tracking-[0.06em] focus:border-accent-1 focus:shadow-[3px_3px_0_var(--accent-1)]';

    return (
        <section id="contact" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="w-12 h-[5px] bg-accent-1 mb-4" />
                    <h2 className="text-[clamp(3rem,7vw,5rem)] font-black uppercase tracking-[0.02em] leading-[0.95]">
                        SAY<br /><span className="text-accent-1">HELLO.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                    {/* Contact items */}
                    <div className="reveal">
                        <div className="flex flex-col gap-4">
                            {CONTACT_ITEMS.map(({ label, value, href }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="block border-2 border-[rgba(255,255,255,0.08)] p-5 transition-all duration-150 hover:border-accent-1 hover:translate-x-1 hover:translate-y-1"
                                    style={{ background: 'rgba(5,5,5,0.9)', boxShadow: '4px 4px 0 color-mix(in srgb, var(--accent-1) 25%, transparent)' }}>
                                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-text-muted mb-1">{label}</div>
                                    <div className="text-[1rem] font-bold text-accent-1">{value}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate
                        className="border-2 border-[rgba(255,255,255,0.08)] p-8 reveal"
                        style={{ background: 'rgba(5,5,5,0.95)', boxShadow: '8px 8px 0 var(--accent-1)' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="name" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">NAME</label>
                                <input id="name" name="name" type="text" placeholder="JOHN DOE" value={formState.name} onChange={handleChange} className={`${inputCls} ${errors.name ? 'border-[#ef4444]' : ''}`} />
                                {errors.name && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="email" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">EMAIL</label>
                                <input id="email" name="email" type="email" placeholder="JOHN@EXAMPLE.COM" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-4">
                            <label htmlFor="subject" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">SUBJECT</label>
                            <input id="subject" name="subject" type="text" placeholder="PROJECT COLLABORATION" value={formState.subject} onChange={handleChange} className={inputCls} />
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-5">
                            <label htmlFor="message" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">MESSAGE</label>
                            <textarea id="message" name="message" rows={5} placeholder="TELL ME ABOUT YOUR PROJECT..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
                            {errors.message && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending}
                            className="w-full text-[0.85rem] font-black uppercase tracking-[0.2em] text-[#000] bg-accent-1 border-2 border-accent-1 py-4 transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-60"
                            style={{ boxShadow: '4px 4px 0 color-mix(in srgb, var(--accent-1) 60%, black)' }}>
                            {sending ? 'SENDING...' : 'SEND IT →'}
                        </button>
                        {success && (
                            <div className="mt-4 p-4 border-2 border-[#4ade80] text-[#4ade80] font-bold text-[0.85rem] uppercase tracking-[0.1em]"
                                style={{ background: 'rgba(34,197,94,0.08)', boxShadow: '4px 4px 0 #4ade80' }}>
                                ✓ MESSAGE SENT SUCCESSFULLY.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   WARFARE — Transmission request
═══════════════════════════════════════ */
function ContactCod() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-[rgba(8,9,6,0.9)] border border-[color-mix(in_srgb,var(--accent-1)_25%,rgba(80,70,40,0.4))] px-4 py-[0.7rem] text-text-primary font-mono text-[0.82rem] tracking-[0.04em] outline-none transition-all duration-200 placeholder:text-[rgba(150,130,90,0.4)] placeholder:uppercase placeholder:tracking-[0.08em] placeholder:text-[0.72rem] focus:border-accent-1 focus:bg-[rgba(14,16,10,0.95)]';

    return (
        <section id="contact" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-10 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1">⊕</span>
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent-1">COMMS // TRANSMISSION</span>
                        <div className="h-[2px] flex-1"
                            style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-[0.06em]">
                        ⊕ TRANSMISSION <span className="text-accent-1">REQUEST</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
                    {/* Channels */}
                    <div className="reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">// SECURE CHANNELS</div>
                            <div className="space-y-3">
                                {CONTACT_ITEMS.map(({ label, value, href }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="block py-3 border-b border-[color-mix(in_srgb,var(--accent-1)_15%,transparent)] transition-colors hover:text-accent-1">
                                        <div className="font-mono text-[0.55rem] tracking-[0.2em] text-text-muted uppercase">{label}</div>
                                        <div className="font-mono text-[0.85rem] text-text-primary">{value}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate
                        className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-6 reveal"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))', background: 'rgba(14,16,10,0.95)' }}>
                        <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-5 pb-2 border-b border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]">
                            // MESSAGE FORM
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="name" className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">CALLSIGN:</label>
                                <input id="name" name="name" type="text" placeholder="ENTER NAME" value={formState.name} onChange={handleChange} className={`${inputCls} ${errors.name ? 'border-[#ef4444]' : ''}`} />
                                {errors.name && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="email" className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">COMMS ID:</label>
                                <input id="email" name="email" type="email" placeholder="EMAIL ADDRESS" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-4">
                            <label htmlFor="subject" className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">SUBJECT:</label>
                            <input id="subject" name="subject" type="text" placeholder="MISSION BRIEF" value={formState.subject} onChange={handleChange} className={inputCls} />
                        </div>
                        <div className="flex flex-col gap-[0.4rem] mb-5">
                            <label htmlFor="message" className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">TRANSMISSION:</label>
                            <textarea id="message" name="message" rows={5} placeholder="ENTER MESSAGE CONTENT..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
                            {errors.message && <span className="font-mono text-[0.65rem] text-[#ef4444]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending}
                            className="w-full font-mono text-[0.78rem] tracking-[0.2em] uppercase text-[#0a0b07] bg-accent-1 border border-accent-1 py-3 transition-all duration-150 hover:brightness-110 disabled:opacity-60"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                            {sending ? '⊕ TRANSMITTING...' : '⊕ SEND TRANSMISSION'}
                        </button>
                        {success && (
                            <div className="mt-4 font-mono text-[0.8rem] text-[#4ade80] p-3 border border-[#4ade80]"
                                style={{ background: 'rgba(34,197,94,0.05)' }}>
                                ⊕ TRANSMISSION SUCCESSFUL. AWAITING RESPONSE.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   MODERN — Minimal professional form
═══════════════════════════════════════ */
function ContactModern() {
    const { formState, errors, sending, success, handleChange, handleSubmit } = useContactForm();
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const cards = sectionRef.current.querySelectorAll('.bento-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const inputCls = 'w-full bg-geist-gray-100 border border-geist-gray-200 rounded-xl px-5 py-4 text-geist-foreground placeholder:text-geist-gray-400 outline-none focus:border-[var(--accent-2)] focus:ring-1 focus:ring-[var(--accent-2)] transition-all font-medium';

    return (
        <section id="contact" ref={sectionRef} className="py-32 md:py-48 bg-geist-background relative overflow-hidden border-t border-geist-gray-200">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="bento-grid">
                    {/* Left Panel: Contact Info */}
                    <div className="bento-card col-span-12 lg:col-span-5 p-12 animate-modern-reveal">
                        <div className="geist-badge mb-6">Contact</div>
                        <h2 className="text-[3rem] font-black tracking-tighter leading-[0.9] mb-10">
                            Let&apos;s build <br /><span className="text-gradient">something now.</span>
                        </h2>
                        <p className="text-geist-gray-500 text-[1.1rem] leading-relaxed mb-12 font-medium">
                            I&apos;m currently open to new opportunities and collaborations. Drop me a message and I&apos;ll get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-geist-gray-100 border border-geist-gray-200 flex items-center justify-center text-geist-gray-400 group-hover:text-[var(--accent-2)] group-hover:border-[var(--accent-2)] transition-all shadow-sm">
                                        {icon}
                                    </div>
                                    <div>
                                        <div className="text-[0.7rem] uppercase tracking-widest text-geist-gray-400 font-bold mb-1">{label}</div>
                                        <div className="text-geist-foreground font-bold tracking-tight text-[1.1rem]">{value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="bento-card col-span-12 lg:col-span-7 p-12 animate-modern-reveal" style={{ animationDelay: '0.1s' }}>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <label className="text-[0.85rem] font-bold text-geist-gray-600 tracking-tight">Full Name</label>
                                    <input name="name" type="text" placeholder="Lee Robinson" value={formState.name} onChange={handleChange} className={`${inputCls} ${errors.name ? 'border-red-500' : ''}`} />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[0.85rem] font-bold text-geist-gray-600 tracking-tight">Email Address</label>
                                    <input name="email" type="email" placeholder="lee@vercel.com" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`} />
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <label className="text-[0.85rem] font-bold text-geist-gray-600 tracking-tight">Subject</label>
                                <input name="subject" type="text" placeholder="Project Inquiry" value={formState.subject} onChange={handleChange} className={inputCls} />
                            </div>
                            <div className="space-y-3 mb-10">
                                <label className="text-[0.85rem] font-bold text-geist-gray-600 tracking-tight">Message</label>
                                <textarea name="message" rows={5} placeholder="What are you building?" value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`} />
                            </div>

                            <button type="submit" disabled={sending} className="btn-vercel w-full py-4 text-[1rem] flex items-center justify-center gap-3">
                                {sending ? 'Dispatching...' : 'Send Message'}
                                {!sending && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                            </button>

                            {success && (
                                <div className="mt-8 p-4 rounded-xl bg-[var(--accent-2)]/10 border border-[var(--accent-2)]/20 text-[var(--accent-2)] text-center font-bold">
                                    Message sent successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
