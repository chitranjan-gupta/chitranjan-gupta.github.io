"use client";

import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen py-28 md:py-36 px-6 max-w-4xl mx-auto text-left text-text-primary">
      <header className="mb-10 pb-6 border-b border-[var(--border)]">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Cookie Policy</h1>
        <p className="text-sm text-text-secondary">
          <strong>Effective Date:</strong> April 12, 2025
        </p>
        <p className="text-sm text-text-secondary">
          <strong>Last Updated:</strong> April 12, 2025
        </p>
      </header>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">Introduction</h2>
        <p className="text-text-secondary leading-relaxed">
          Welcome to{" "}
          <strong>
            <Link href="https://chitranjan.me" className="text-accent-1 underline hover:text-accent-2 transition-colors" prefetch={false}>
              chitranjan.me
            </Link>
          </strong>
          . This Cookie Policy explains how we use cookies and similar
          technologies to recognize you when you visit our website. It also
          provides information on how you can manage your cookie settings.
        </p>
        <p className="text-text-secondary leading-relaxed">
          By using our website, you consent to the use of cookies in accordance
          with this Cookie Policy.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">1. What Are Cookies?</h2>
        <p className="text-text-secondary leading-relaxed">
          Cookies are small text files that are placed on your device when you
          visit a website. They help the website remember your actions and
          preferences over time, such as login details, language settings, and
          display preferences.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">2. Types of Cookies We Use</h2>
        <p className="text-text-secondary leading-relaxed">We use the following types of cookies on our website:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the functioning of the website and enable core features such as
            security and accessibility.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect
            information about how visitors use the website, such as pages
            visited and any errors encountered. We use these cookies to improve
            the performance of our website.
          </li>
          <li>
            <strong>Functional Cookies:</strong> These cookies remember your
            preferences, such as language or region, to provide a more
            personalized experience.
          </li>
          <li>
            <strong>Targeting/Advertising Cookies:</strong> These cookies are
            used to track your browsing behavior in order to deliver targeted
            ads or content based on your interests. We may also use these
            cookies to limit the number of times you see an ad and measure the
            effectiveness of advertising campaigns.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">3. How We Use Cookies</h2>
        <p className="text-text-secondary leading-relaxed">We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>To enable the basic functionality of the website.</li>
          <li>
            To analyze website usage and improve performance (e.g., through
            Google Analytics).
          </li>
          <li>
            To remember your preferences and provide a more personalized
            experience.
          </li>
          <li>
            To deliver relevant advertisements and content to you, both on and
            off our website.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">4. Third-Party Cookies</h2>
        <p className="text-text-secondary leading-relaxed">
          We use third-party services, such as Google Analytics, to help analyze
          our website traffic and improve our services. These third-party
          services may also use cookies to track your browsing activity. The
          third-party cookies we use include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            <strong>Google Analytics:</strong> Google Analytics uses cookies to
            help us understand how users engage with our website. For more
            information, please see{" "}
            <Link
              href="https://policies.google.com/privacy"
              prefetch={false}
              target="_blank"
              className="underline text-accent-1 hover:text-accent-2 transition-colors"
            >
              Google&apos;s Privacy Policy
            </Link>
            .
          </li>
          <li>
            <strong>Google Tag Manager:</strong> Google Tag Manager is used to
            manage scripts and tags on our website. For more details, please see{" "}
            <Link
              href="https://policies.google.com/privacy"
              prefetch={false}
              target="_blank"
              className="underline text-accent-1 hover:text-accent-2 transition-colors"
            >
              Google&apos;s Privacy Policy
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">5. Managing Cookies</h2>
        <p className="text-text-secondary leading-relaxed">
          You have the right to decide whether or not to accept cookies. You can
          manage your cookie preferences by:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>
            Adjusting your browser settings to block or delete cookies. Most
            browsers allow you to refuse or delete cookies by adjusting the
            settings in the browser preferences.
          </li>
          <li>
            Using the cookie consent banner to manage your cookie preferences
            when you first visit our website.
          </li>
        </ul>
        <p className="text-text-secondary leading-relaxed mt-2">
          Please note that if you disable certain cookies, some features of the
          website may not function properly.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">6. Your Consent</h2>
        <p className="text-text-secondary leading-relaxed">
          By using our website, you consent to the use of cookies as described
          in this Cookie Policy. When you first visit the website, you will be
          prompted with a cookie consent banner that asks for your consent to
          use cookies. You can manage or withdraw your consent at any time.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">7. Changes to This Policy</h2>
        <p className="text-text-secondary leading-relaxed">
          We may update this Cookie Policy from time to time. When we make
          updates, we will revise the “Last Updated” date at the top of this
          page. We encourage you to review this page periodically for any
          changes.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold">8. Contact Us</h2>
        <p className="text-text-secondary leading-relaxed">
          If you have any questions or concerns about our use of cookies or this
          Cookie Policy, please contact us at:
        </p>
        <p className="text-text-secondary">
          Email:{" "}
          <Link href="mailto:chitranjankumargupta123@gmail.com" className="text-accent-1 underline hover:text-accent-2 transition-colors">
            chitranjankumargupta123@gmail.com
          </Link>
        </p>
      </section>
    </main>
  );
}
