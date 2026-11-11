'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { createForm } from '@/app/actions/notion';

const CONTACT_ITEMS = [
    {
        label: 'Primary Email', value: 'chitranjankumargupta123@gmail.com', href: 'mailto:chitranjankumargupta123@gmail.com',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        label: 'Alternative Email', value: 'chitranjankumargupta@outlook.com', href: 'mailto:chitranjankumargupta@outlook.com',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        label: 'Phone', value: '+91-9113178457', href: 'tel:+919113178457',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
    },
    {
        label: 'WhatsApp', value: '+91 9113178457', href: 'https://wa.me/+919113178457',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>,
    },
    {
        label: 'Telegram', value: '@chitranjangupta', href: 'https://t.me/chitranjangupta',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    },
    {
        label: 'X (Twitter)', value: '@chitranjan___', href: 'https://www.x.com/chitranjan___',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
    {
        label: 'Medium', value: '@chitranjankumargupta', href: 'https://medium.com/@chitranjankumargupta',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
    },
    {
        label: 'GitHub', value: 'github.com/chitranjan-gupta', href: 'https://github.com/chitranjan-gupta',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
    },
    {
        label: 'LinkedIn', value: 'linkedin.com/in/chitranjan-gupta', href: 'https://www.linkedin.com/in/chitranjan-gupta',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
    {
        label: 'YouTube', value: '@chitranjan_gupta', href: 'https://www.youtube.com/@chitranjan_gupta',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
    },
];

export default function Contact() {
    const { design } = useTheme();
    if (design === 'tron') return <ContactTron />;
    if (design === 'ares') return <ContactAres />;
    if (design === 'cod') return <ContactCod />;
    if (design === 'modern') return <ContactModern />;
    if (design === 'indic') return <ContactIndic />;
    if (design === 'apple') return <ContactApple />;
    if (design === 'hacker') return <ContactHacker />;
    return <ContactAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage contact layout
 ═══════════════════════════════════════ */
function ContactIndic() {
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-transparent border-b-2 border-indic-border/30 px-0 py-3 text-indic-fg placeholder:text-indic-fg/30 outline-none focus:border-indic-saffron transition-all font-medium italic text-[0.95rem]';

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

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-start">
                    <div className="animate-modern-reveal">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-indic-border/30 bg-indic-bg/60 hover:bg-indic-bg/90 hover:border-indic-saffron transition-all flex items-center gap-3.5 group shadow-sm">
                                    <div className="w-11 h-11 shrink-0 rounded-full bg-indic-bg border border-indic-border/30 flex items-center justify-center text-indic-terracotta group-hover:text-indic-saffron group-hover:border-indic-saffron transition-all shadow-inner">
                                        {icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[0.65rem] uppercase tracking-wider text-indic-terracotta font-bold mb-0.5">{label}</div>
                                        <div className="text-indic-fg font-bold tracking-tight text-[0.88rem] italic group-hover:text-indic-saffron transition-colors truncate" title={value}>{value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="jaali-card p-8 md:p-12 animate-modern-reveal" style={{ animationDelay: '0.2s' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                            <div className="space-y-1">
                                <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">FIRST NAME *</label>
                                <input name="first_name" type="text" placeholder="First Name" value={formState.first_name} onChange={handleChange} className={`${inputCls} ${errors.first_name ? 'border-red-500' : ''}`} />
                                {errors.first_name && <span className="text-[0.7rem] text-red-500 font-sans">{errors.first_name}</span>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">MIDDLE NAME</label>
                                <input name="middle_name" type="text" placeholder="Middle (optional)" value={formState.middle_name} onChange={handleChange} className={inputCls} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">LAST NAME *</label>
                                <input name="last_name" type="text" placeholder="Last Name" value={formState.last_name} onChange={handleChange} className={`${inputCls} ${errors.last_name ? 'border-red-500' : ''}`} />
                                {errors.last_name && <span className="text-[0.7rem] text-red-500 font-sans">{errors.last_name}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-1">
                                <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">ईमेल EMAIL *</label>
                                <input name="email" type="email" placeholder="you@example.com" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`} />
                                {errors.email && <span className="text-[0.7rem] text-red-500 font-sans">{errors.email}</span>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">दूरभाष PHONE NUMBER</label>
                                <input name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputCls} />
                            </div>
                        </div>

                        <div className="space-y-1 mb-8">
                            <label className="text-[0.75rem] font-bold text-indic-terracotta uppercase tracking-tighter">संदेश MESSAGE *</label>
                            <textarea name="message" rows={4} placeholder="What vision shall we manifest together?" value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`} />
                            {errors.message && <span className="text-[0.7rem] text-red-500 font-sans">{errors.message}</span>}
                        </div>

                        <button type="submit" disabled={sending} className="btn-indic w-full py-4 text-[1.05rem] flex items-center justify-center gap-3">
                            {sending ? 'सक्रिय... SENDING' : 'भेजें SEND MESSAGE'}
                            {!sending && <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                        </button>

                        {success && (
                            <div className="mt-8 p-5 rounded-sm bg-indic-saffron/10 border border-indic-saffron/20 text-indic-saffron text-center font-bold italic animate-bounce">
                                Message sent successfully
                            </div>
                        )}
                        {apiError && (
                            <div className="mt-8 p-4 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 text-center font-medium text-sm">
                                {apiError}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

function useContactForm() {
    const [formState, setFormState] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [apiError, setApiError] = useState(null);

    const validate = () => {
        const errs = {};
        if (!formState.first_name.trim()) errs.first_name = 'First name is required.';
        if (!formState.last_name.trim()) errs.last_name = 'Last name is required.';
        if (!formState.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) errs.email = 'Please enter a valid email.';
        if (!formState.message || formState.message.trim().length < 10) errs.message = 'Message must be at least 10 characters.';
        return errs;
    };

    const handleChange = (e) => {
        setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
        setErrors((e2) => ({ ...e2, [e.target.name]: undefined }));
        setApiError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSending(true);
        setApiError(null);

        try {
            const res = await createForm({
                first_name: formState.first_name.trim(),
                middle_name: formState.middle_name.trim(),
                last_name: formState.last_name.trim(),
                email: formState.email.trim(),
                phone_number: formState.phone_number.trim(),
                messages: formState.message.trim(),
            });

            if (res && res.success === false) {
                setApiError('Message sent is unsuccssful');
            } else {
                setSuccess(true);
                setFormState({
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    message: '',
                });
                setTimeout(() => setSuccess(false), 6000);
            }
        } catch (err) {
            console.error('Contact submission error:', err);
            setApiError('Message sent is unsuccssful');
        } finally {
            setSending(false);
        }
    };

    return { formState, errors, sending, success, apiError, handleChange, handleSubmit };
}


/* ═══════════════════════════════════════
   AURORA — Glassmorphic form
═══════════════════════════════════════ */
function ContactAurora() {
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
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
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-start">
                    <div className="flex flex-col reveal">
                        <p className="text-text-secondary leading-[1.8] mb-8 text-[1rem]">
                            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open!
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 px-4 py-3 bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[14px] transition-all duration-200 hover:border-[rgba(99,102,241,0.4)] hover:bg-white/[0.07] min-w-0 group">
                                    <div className="flex items-center justify-center w-9 h-9 min-w-[36px] rounded-[8px] bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(6,182,212,0.15))] text-accent-2 group-hover:scale-105 transition-transform">{icon}</div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[0.68rem] uppercase tracking-[0.08em] text-text-muted font-semibold mb-0.5">{label}</p>
                                        <span className="block text-[0.82rem] font-semibold text-text-primary transition-all duration-200 group-hover:text-accent-2 truncate" title={value}>{value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <form className="flex flex-col gap-4 bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[28px] p-8 md:p-10 reveal" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="aurora-fname" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">First Name *</label>
                                <input id="aurora-fname" name="first_name" type="text" placeholder="John" value={formState.first_name} onChange={handleChange} className={`${inputBase} ${errors.first_name ? inputError : ''}`} />
                                {errors.first_name && <span className="text-[0.72rem] text-[#f87171]">{errors.first_name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="aurora-mname" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">Middle Name</label>
                                <input id="aurora-mname" name="middle_name" type="text" placeholder="Optional" value={formState.middle_name} onChange={handleChange} className={inputBase} />
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="aurora-lname" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">Last Name *</label>
                                <input id="aurora-lname" name="last_name" type="text" placeholder="Doe" value={formState.last_name} onChange={handleChange} className={`${inputBase} ${errors.last_name ? inputError : ''}`} />
                                {errors.last_name && <span className="text-[0.72rem] text-[#f87171]">{errors.last_name}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="aurora-email" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">Email *</label>
                                <input id="aurora-email" name="email" type="email" placeholder="john@example.com" value={formState.email} onChange={handleChange} className={`${inputBase} ${errors.email ? inputError : ''}`} />
                                {errors.email && <span className="text-[0.72rem] text-[#f87171]">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="aurora-phone" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">Phone Number</label>
                                <input id="aurora-phone" name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputBase} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[0.35rem]">
                            <label htmlFor="aurora-message" className="text-[0.78rem] font-semibold text-text-secondary tracking-[0.02em]">Message *</label>
                            <textarea id="aurora-message" name="message" rows={4} placeholder="Tell me about your project..." value={formState.message} onChange={handleChange} className={`${inputBase} ${errors.message ? inputError : ''}`} />
                            {errors.message && <span className="text-[0.72rem] text-[#f87171]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending} className="w-full flex justify-center items-center gap-2 px-7 py-3.5 rounded-full text-[0.9rem] font-semibold text-white bg-gradient-accent shadow-[0_4px_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.55)] disabled:opacity-70 disabled:cursor-not-allowed">
                            <span>{sending ? 'Sending...' : 'Send Message'}</span>
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                        </button>
                        {success && (
                            <div className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-[#4ade80] text-[0.9rem] font-semibold">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                                Message sent successfully
                            </div>
                        )}
                        {apiError && (
                            <div className="p-4 rounded-[14px] bg-red-500/10 border border-red-500/30 text-red-400 text-center font-medium text-sm">
                                {apiError}
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
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
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

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 items-start">
                    {/* Channels */}
                    <div className="reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-5"
                            style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 20px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-4">{'// AVAILABLE_CHANNELS'}</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {CONTACT_ITEMS.map(({ label, value, href }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="block font-mono p-2.5 border border-[color-mix(in_srgb,var(--accent-1)_15%,transparent)] transition-all duration-200 hover:border-accent-1 min-w-0"
                                        style={{ background: 'rgba(0,4,8,0.7)' }}>
                                        <div className="text-[0.58rem] tracking-[0.12em] text-accent-1 uppercase">{label.toUpperCase()}:</div>
                                        <div className="text-[0.78rem] text-accent-2 truncate" title={value}>{value}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate
                        className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-6 reveal"
                        style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 25px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                        <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-5">{'// TRANSMIT_MESSAGE'}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="tron-fname" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; FIRST_NAME *</label>
                                <input id="tron-fname" name="first_name" type="text" placeholder="JOHN" value={formState.first_name} onChange={handleChange} className={`${inputCls} ${errors.first_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.first_name && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.first_name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="tron-mname" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; MID_NAME</label>
                                <input id="tron-mname" name="middle_name" type="text" placeholder="OPTIONAL" value={formState.middle_name} onChange={handleChange} className={inputCls} />
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="tron-lname" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; LAST_NAME *</label>
                                <input id="tron-lname" name="last_name" type="text" placeholder="DOE" value={formState.last_name} onChange={handleChange} className={`${inputCls} ${errors.last_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.last_name && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.last_name}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="tron-email" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; RETURN_ADDR *</label>
                                <input id="tron-email" name="email" type="email" placeholder="john@domain.com" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="tron-phone" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; COMM_PHONE</label>
                                <input id="tron-phone" name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputCls} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[0.35rem] mb-5">
                            <label htmlFor="tron-message" className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-accent-1">&gt; MESSAGE_BODY *</label>
                            <textarea id="tron-message" name="message" rows={4} placeholder="Enter transmission content..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
                            {errors.message && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending}
                            className="w-full font-mono text-[0.8rem] tracking-[0.18em] uppercase text-accent-1 border border-accent-1 py-3 transition-all duration-200 hover:bg-[color-mix(in_srgb,var(--accent-1)_10%,transparent)] hover:shadow-[0_0_20px_-3px_var(--accent-1)] disabled:opacity-50"
                            style={{ boxShadow: '0 0 12px -3px var(--accent-1)' }}>
                            {sending ? '> TRANSMITTING...' : '> TRANSMIT [ENTER]'}
                        </button>
                        {success && (
                            <div className="mt-4 font-mono text-[0.8rem] text-accent-2 p-3 border border-accent-2"
                                style={{ background: 'rgba(0,8,16,0.8)', boxShadow: '0 0 10px -3px var(--accent-2)' }}>
                                &gt; Message sent successfully
                            </div>
                        )}
                        {apiError && (
                            <div className="mt-4 font-mono text-[0.8rem] text-red-400 p-3 border border-red-500/50"
                                style={{ background: 'rgba(239,68,68,0.1)' }}>
                                &gt; {apiError}
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
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
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

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 items-start">
                    {/* Contact items */}
                    <div className="reveal">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {CONTACT_ITEMS.map(({ label, value, href }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="block border-2 border-[rgba(255,255,255,0.08)] p-3.5 transition-all duration-150 hover:border-accent-1 hover:translate-x-0.5 hover:translate-y-0.5 min-w-0"
                                    style={{ background: 'rgba(5,5,5,0.9)', boxShadow: '3px 3px 0 color-mix(in srgb, var(--accent-1) 25%, transparent)' }}>
                                    <div className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-text-muted mb-1">{label}</div>
                                    <div className="text-[0.82rem] font-bold text-accent-1 truncate" title={value}>{value}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate
                        className="border-2 border-[rgba(255,255,255,0.08)] p-8 reveal"
                        style={{ background: 'rgba(5,5,5,0.95)', boxShadow: '8px 8px 0 var(--accent-1)' }}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="ares-fname" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">FIRST NAME *</label>
                                <input id="ares-fname" name="first_name" type="text" placeholder="JOHN" value={formState.first_name} onChange={handleChange} className={`${inputCls} ${errors.first_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.first_name && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.first_name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="ares-mname" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">MID NAME</label>
                                <input id="ares-mname" name="middle_name" type="text" placeholder="OPTIONAL" value={formState.middle_name} onChange={handleChange} className={inputCls} />
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="ares-lname" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">LAST NAME *</label>
                                <input id="ares-lname" name="last_name" type="text" placeholder="DOE" value={formState.last_name} onChange={handleChange} className={`${inputCls} ${errors.last_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.last_name && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.last_name}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="ares-email" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">EMAIL *</label>
                                <input id="ares-email" name="email" type="email" placeholder="JOHN@EXAMPLE.COM" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="text-[0.7rem] font-bold text-[#ef4444]">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.4rem]">
                                <label htmlFor="ares-phone" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">PHONE</label>
                                <input id="ares-phone" name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputCls} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[0.4rem] mb-5">
                            <label htmlFor="ares-message" className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-text-muted">MESSAGE *</label>
                            <textarea id="ares-message" name="message" rows={4} placeholder="TELL ME ABOUT YOUR PROJECT..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
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
                                ✓ Message sent successfully
                            </div>
                        )}
                        {apiError && (
                            <div className="mt-4 p-4 border-2 border-red-500 text-red-400 font-bold text-[0.85rem] uppercase tracking-[0.1em]"
                                style={{ background: 'rgba(239,68,68,0.1)' }}>
                                ! {apiError}
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
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
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

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8 items-start">
                    {/* Channels */}
                    <div className="reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">{'// SECURE CHANNELS'}</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {CONTACT_ITEMS.map(({ label, value, href }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="block p-2.5 border border-[color-mix(in_srgb,var(--accent-1)_20%,transparent)] transition-colors hover:text-accent-1 hover:border-accent-1 min-w-0"
                                        style={{ background: 'rgba(8,10,6,0.7)' }}>
                                        <div className="font-mono text-[0.55rem] tracking-[0.15em] text-text-muted uppercase mb-0.5">{label}</div>
                                        <div className="font-mono text-[0.78rem] text-text-primary truncate" title={value}>{value}</div>
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
                            {'// MESSAGE FORM'}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="cod-fname" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">FIRST NAME *</label>
                                <input id="cod-fname" name="first_name" type="text" placeholder="CALLSIGN" value={formState.first_name} onChange={handleChange} className={`${inputCls} ${errors.first_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.first_name && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.first_name}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="cod-mname" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">MID NAME</label>
                                <input id="cod-mname" name="middle_name" type="text" placeholder="OPT" value={formState.middle_name} onChange={handleChange} className={inputCls} />
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="cod-lname" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">LAST NAME *</label>
                                <input id="cod-lname" name="last_name" type="text" placeholder="UNIT" value={formState.last_name} onChange={handleChange} className={`${inputCls} ${errors.last_name ? 'border-[#ef4444]' : ''}`} />
                                {errors.last_name && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.last_name}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="cod-email" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">COMMS ID (EMAIL) *</label>
                                <input id="cod-email" name="email" type="email" placeholder="EMAIL ADDRESS" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-[#ef4444]' : ''}`} />
                                {errors.email && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col gap-[0.35rem]">
                                <label htmlFor="cod-phone" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">FREQ (PHONE)</label>
                                <input id="cod-phone" name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputCls} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-[0.35rem] mb-5">
                            <label htmlFor="cod-message" className="font-mono text-[0.58rem] tracking-[0.15em] uppercase text-[color-mix(in_srgb,var(--accent-1)_80%,#a0956b)]">TRANSMISSION *</label>
                            <textarea id="cod-message" name="message" rows={4} placeholder="ENTER MESSAGE CONTENT..." value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-[#ef4444]' : ''}`} />
                            {errors.message && <span className="font-mono text-[0.62rem] text-[#ef4444]">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={sending}
                            className="w-full font-mono text-[0.78rem] tracking-[0.2em] uppercase text-[#0a0b07] bg-accent-1 border border-accent-1 py-3 transition-all duration-150 hover:brightness-110 disabled:opacity-60"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                            {sending ? '⊕ TRANSMITTING...' : '⊕ SEND TRANSMISSION'}
                        </button>
                        {success && (
                            <div className="mt-4 font-mono text-[0.8rem] text-[#4ade80] p-3 border border-[#4ade80]"
                                style={{ background: 'rgba(34,197,94,0.05)' }}>
                                ⊕ Message sent successfully
                            </div>
                        )}
                        {apiError && (
                            <div className="mt-4 font-mono text-[0.8rem] text-red-400 p-3 border border-red-500/50"
                                style={{ background: 'rgba(239,68,68,0.1)' }}>
                                ⊕ {apiError}
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
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
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

    const inputCls = 'w-full bg-geist-gray-100 border border-geist-gray-200 rounded-xl px-4 py-3.5 text-geist-foreground placeholder:text-geist-gray-400 outline-none focus:border-[var(--accent-2)] focus:ring-1 focus:ring-[var(--accent-2)] transition-all font-medium text-[0.92rem]';

    return (
        <section id="contact" ref={sectionRef} className="py-32 md:py-48 bg-geist-background relative overflow-hidden border-t border-geist-gray-200">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="bento-grid">
                    {/* Left Panel: Contact Info */}
                    <div className="bento-card col-span-12 lg:col-span-6 p-8 md:p-12 animate-modern-reveal">
                        <div className="geist-badge mb-6">Contact</div>
                        <h2 className="text-[2.6rem] font-black tracking-tighter leading-[0.95] mb-6">
                            Let&apos;s build <br /><span className="text-gradient">something now.</span>
                        </h2>
                        <p className="text-geist-gray-500 text-[1rem] leading-relaxed mb-8 font-medium">
                            I&apos;m currently open to new opportunities and collaborations. Drop me a message and I&apos;ll get back to you promptly.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="flex items-center gap-3.5 p-3 rounded-xl bg-geist-gray-100 border border-geist-gray-200/80 hover:border-[var(--accent-2)] hover:bg-white dark:hover:bg-black transition-all group min-w-0 shadow-sm">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-white dark:bg-black border border-geist-gray-200 flex items-center justify-center text-geist-gray-400 group-hover:text-[var(--accent-2)] group-hover:border-[var(--accent-2)] transition-all shadow-sm">
                                        {icon}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[0.65rem] uppercase tracking-wider text-geist-gray-400 font-bold mb-0.5">{label}</div>
                                        <div className="text-geist-foreground font-bold tracking-tight text-[0.85rem] group-hover:text-[var(--accent-2)] transition-colors truncate" title={value}>{value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="bento-card col-span-12 lg:col-span-6 p-8 md:p-12 animate-modern-reveal" style={{ animationDelay: '0.1s' }}>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                                <div className="space-y-1.5">
                                    <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">First Name *</label>
                                    <input name="first_name" type="text" placeholder="John" value={formState.first_name} onChange={handleChange} className={`${inputCls} ${errors.first_name ? 'border-red-500' : ''}`} />
                                    {errors.first_name && <span className="text-xs text-red-500">{errors.first_name}</span>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">Middle</label>
                                    <input name="middle_name" type="text" placeholder="Optional" value={formState.middle_name} onChange={handleChange} className={inputCls} />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">Last Name *</label>
                                    <input name="last_name" type="text" placeholder="Doe" value={formState.last_name} onChange={handleChange} className={`${inputCls} ${errors.last_name ? 'border-red-500' : ''}`} />
                                    {errors.last_name && <span className="text-xs text-red-500">{errors.last_name}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                                <div className="space-y-1.5">
                                    <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">Email Address *</label>
                                    <input name="email" type="email" placeholder="you@example.com" value={formState.email} onChange={handleChange} className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`} />
                                    {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">Phone Number</label>
                                    <input name="phone_number" type="tel" placeholder="+91 98765 43210" value={formState.phone_number} onChange={handleChange} className={inputCls} />
                                </div>
                            </div>

                            <div className="space-y-1.5 mb-6">
                                <label className="text-[0.8rem] font-bold text-geist-gray-600 tracking-tight">Message *</label>
                                <textarea name="message" rows={4} placeholder="What are you building?" value={formState.message} onChange={handleChange} className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`} />
                                {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                            </div>

                            <button type="submit" disabled={sending} className="btn-vercel w-full py-4 text-[1rem] flex items-center justify-center gap-3">
                                {sending ? 'Dispatching...' : 'Send Message'}
                                {!sending && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>}
                            </button>

                            {success && (
                                <div className="mt-6 p-4 rounded-xl bg-[var(--accent-2)]/10 border border-[var(--accent-2)]/20 text-[var(--accent-2)] text-center font-bold">
                                    Message sent successfully
                                </div>
                            )}
                            {apiError && (
                                <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center font-bold text-sm">
                                    {apiError}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Cupertino Clean Contact
═══════════════════════════════════════ */
function ContactApple() {
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-apple-input-bg border border-apple-border rounded-xl px-5 py-4 text-apple-heading placeholder:text-apple-muted outline-none focus:border-apple-accent focus:ring-2 focus:ring-apple-accent/20 transition-all font-normal text-[1rem]';

    return (
        <section id="contact" className="py-28 md:py-36 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Connect</span>
                    <h2 className="apple-section-title">
                        Let&apos;s build something <br />
                        <span className="text-apple-subtle">remarkable together.</span>
                    </h2>
                    <p className="text-apple-body text-[1.1rem] mt-4 max-w-[550px] mx-auto font-normal">
                        Have a project in mind or interested in collaborating? Reach out anytime.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Details Card */}
                    <div className="apple-card lg:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <div className="apple-card-tag mb-3">Direct Channels</div>
                            <h3 className="text-[1.4rem] font-semibold text-apple-heading tracking-tight mb-6">
                                Available for opportunities & consulting.
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {CONTACT_ITEMS.map(({ label, value, href, icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-apple-pill-bg border border-apple-border/40 hover:border-apple-border transition-all group min-w-0"
                                    >
                                        <div className="w-10 h-10 shrink-0 rounded-xl bg-apple-icon-bg border border-apple-border flex items-center justify-center text-apple-accent group-hover:scale-105 transition-transform">
                                            {icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-[0.65rem] font-semibold uppercase tracking-wider text-apple-muted mb-0.5">{label}</div>
                                            <div className="text-[0.84rem] font-medium text-apple-heading truncate" title={value}>{value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 p-4 rounded-xl bg-apple-pill-bg border border-apple-border text-[0.8rem] text-apple-body">
                            ⚡ Typically responds within 24 hours. Based in India (IST / UTC+5:30).
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="apple-card lg:col-span-6 p-6 md:p-10">
                        <form onSubmit={handleSubmit} noValidate>
                            {/* Name Row: First, Middle, Last */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                                <div className="space-y-2">
                                    <label className="text-[0.85rem] font-medium text-apple-heading">First Name *</label>
                                    <input
                                        name="first_name"
                                        type="text"
                                        placeholder="First name"
                                        value={formState.first_name}
                                        onChange={handleChange}
                                        className={`${inputCls} ${errors.first_name ? 'border-red-500' : ''}`}
                                    />
                                    {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.85rem] font-medium text-apple-heading">Middle Name</label>
                                    <input
                                        name="middle_name"
                                        type="text"
                                        placeholder="Middle"
                                        value={formState.middle_name}
                                        onChange={handleChange}
                                        className={inputCls}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.85rem] font-medium text-apple-heading">Last Name *</label>
                                    <input
                                        name="last_name"
                                        type="text"
                                        placeholder="Last name"
                                        value={formState.last_name}
                                        onChange={handleChange}
                                        className={`${inputCls} ${errors.last_name ? 'border-red-500' : ''}`}
                                    />
                                    {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
                                </div>
                            </div>

                            {/* Contact Details Row: Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                <div className="space-y-2">
                                    <label className="text-[0.85rem] font-medium text-apple-heading">Email Address *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="you@domain.com"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.85rem] font-medium text-apple-heading">Phone Number</label>
                                    <input
                                        name="phone_number"
                                        type="tel"
                                        placeholder="+1 234 567 890"
                                        value={formState.phone_number}
                                        onChange={handleChange}
                                        className={inputCls}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-[0.85rem] font-medium text-apple-heading">Message *</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project, timeline, or goal..."
                                    value={formState.message}
                                    onChange={handleChange}
                                    className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`}
                                />
                                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="apple-btn-primary w-full py-4 text-[1rem] justify-center"
                            >
                                {sending ? 'Transmitting Message...' : 'Send Message'}
                                {!sending && (
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>

                            {success && (
                                <div className="mt-6 p-4 rounded-xl bg-apple-pill-bg border border-apple-accent text-apple-accent text-center font-medium text-[0.95rem]">
                                    ✓ Message sent successfully
                                </div>
                            )}
                            {apiError && (
                                <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-400 text-center text-sm">
                                    {apiError}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM — Contact
═══════════════════════════════════════ */
function ContactHacker() {
    const { formState, errors, sending, success, apiError, handleChange, handleSubmit } = useContactForm();
    const inputCls = 'w-full bg-black/60 border border-[var(--hacker-border)] focus:border-[var(--hacker-accent)] px-4 py-3 rounded text-sm text-white placeholder:text-text-muted outline-none transition font-mono';

    return (
        <section id="contact" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// SECURE_SOCKET_CHANNEL: TLS 1.3'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Establish Encrypted Comms <span className="text-[var(--hacker-accent)]">[PORT_443]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        HANDSHAKE: RSA_4096 // CIPHER_OK
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Comm Nodes */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="hacker-card p-6">
                            <div className="text-xs text-[var(--hacker-accent)] font-bold mb-3 uppercase tracking-wider">
                                {'// PUBLIC KEYS & DIRECT HANDOFF'}
                            </div>
                            <p className="text-xs text-text-secondary leading-relaxed mb-6">
                                Ready to discuss application security auditing, Red Team engagements, or full-stack architectural engineering. Signal packets routed through verified channels.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {CONTACT_ITEMS.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 p-2.5 bg-black/40 border border-[var(--hacker-border)]/50 hover:border-[var(--hacker-accent)] rounded transition group min-w-0"
                                    >
                                        <div className="text-[var(--hacker-accent)] group-hover:scale-110 transition shrink-0">{item.icon}</div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-[0.6rem] text-text-muted uppercase mb-0.5">{item.label}</div>
                                            <div className="text-[0.78rem] font-bold text-white group-hover:text-[var(--hacker-accent)] transition truncate" title={item.value}>{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Encrypted Transmission Terminal */}
                    <div className="lg:col-span-6">
                        <form onSubmit={handleSubmit} className="hacker-card p-6 md:p-8">
                            <div className="text-xs text-[var(--hacker-accent)] font-bold mb-6 pb-2 border-b border-[var(--hacker-border)]/40 flex items-center justify-between">
                                <span>PAYLOAD_TRANSMITTER.SH</span>
                                <span className="text-[var(--hacker-secondary)]">READY</span>
                            </div>

                            <div className="space-y-5">
                                {/* Name Triplet */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <label className="block text-[0.7rem] text-text-muted mb-1 font-bold uppercase">
                                            FIRST_NAME *
                                        </label>
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder="John"
                                            value={formState.first_name}
                                            onChange={handleChange}
                                            className={`${inputCls} ${errors.first_name ? 'border-red-500' : ''}`}
                                        />
                                        {errors.first_name && <p className="text-red-400 text-xs mt-1">{errors.first_name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-[0.7rem] text-text-muted mb-1 font-bold uppercase">
                                            MID_NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="middle_name"
                                            placeholder="M."
                                            value={formState.middle_name}
                                            onChange={handleChange}
                                            className={inputCls}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[0.7rem] text-text-muted mb-1 font-bold uppercase">
                                            LAST_NAME *
                                        </label>
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder="Doe"
                                            value={formState.last_name}
                                            onChange={handleChange}
                                            className={`${inputCls} ${errors.last_name ? 'border-red-500' : ''}`}
                                        />
                                        {errors.last_name && <p className="text-red-400 text-xs mt-1">{errors.last_name}</p>}
                                    </div>
                                </div>

                                {/* Endpoint & Comms */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[0.7rem] text-text-muted mb-1.5 font-bold uppercase">
                                            RETURN_ENDPOINT (Email) *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@matrix.sec"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`}
                                        />
                                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-[0.7rem] text-text-muted mb-1.5 font-bold uppercase">
                                            SECURE_PHONE (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone_number"
                                            placeholder="+1 555-0199"
                                            value={formState.phone_number}
                                            onChange={handleChange}
                                            className={inputCls}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[0.7rem] text-text-muted mb-1.5 font-bold uppercase">
                                        ENCRYPTED_PAYLOAD (Message) *
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Enter project specs, vulnerability disclosure, or collaboration parameters..."
                                        value={formState.message}
                                        onChange={handleChange}
                                        className={`${inputCls} ${errors.message ? 'border-red-500' : ''}`}
                                    />
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="btn-hacker-primary w-full justify-center text-sm py-4"
                                >
                                    {sending ? 'TRANSMITTING_PACKET...' : '[>] TRANSMIT_ENCRYPTED_MESSAGE()'}
                                </button>

                                {success && (
                                    <div className="p-3 bg-black border border-[var(--hacker-accent)] text-[var(--hacker-accent)] text-xs text-center font-bold">
                                        [✓] Message sent successfully
                                    </div>
                                )}
                                {apiError && (
                                    <div className="p-3 bg-red-950/60 border border-red-500/60 text-red-400 text-xs text-center font-mono font-bold">
                                        [!] ERROR: {apiError}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
