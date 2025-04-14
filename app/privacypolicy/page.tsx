"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="text-left p-5 text-black dark:text-white">
      <header>
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> April 12, 2025
        </p>
        <p>
          <strong>Last Updated:</strong> April 12, 2025
        </p>
      </header>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to{" "}
          <strong>
            <Link href="https://chitranjan.me" prefetch={false} className="underline text-blue-500">chitranjan.me</Link>
          </strong>
          . Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you visit our
          website and interact with its content.
        </p>
      </section>

      <section>
        <h2>1. Who We Are</h2>
        <p>
          This website is owned and operated by <strong>Chitranjan</strong>. If
          you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          Email: <Link href="mailto:chitranjankumargupta123@gmail.com" className="underline text-blue-500">chitranjankumargupta123@gmail.com</Link>
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Automatically Collected Information:</strong> We collect
            data about your visit to our site, including your IP address,
            browser type, device type, referring URL, pages visited, and
            interaction with content.
          </li>
          <li>
            <strong>Voluntarily Provided Information:</strong> If you contact us
            via email, we may collect your name and email address.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Legal Basis for Processing (GDPR)</h2>
        <p>
          If you are located in the European Economic Area (EEA), we process
          your personal data based on the following legal grounds:
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> When you interact with the website or
            provide personal information (Article 6(1)(a) GDPR).
          </li>
          <li>
            <strong>Legitimate Interests:</strong> For performance analytics,
            website security, and improving user experience (Article 6(1)(f)
            GDPR).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Your Data Protection Rights (GDPR & CCPA)</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <h3>Under GDPR (EU Residents):</h3>
        <ul>
          <li>Right to access your data</li>
          <li>Right to rectification</li>
          <li>Right to erasure (Right to be forgotten)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent at any time</li>
        </ul>
        <h3>Under CCPA (California Residents):</h3>
        <ul>
          <li>
            Right to know what personal information is collected and how it’s
            used
          </li>
          <li>Right to request deletion of personal information</li>
          <li>
            Right to opt-out of the sale of personal information (Note: We do
            not sell your data)
          </li>
          <li>Right to non-discrimination for exercising privacy rights</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <Link href="mailto:chitranjankumargupta123@gmail.com" className="underline text-blue-500">chitranjankumargupta123@gmail.com</Link>.
        </p>
      </section>

      <section>
        <h2>5. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to monitor website
          performance and improve user experience. You may control the use of
          cookies through your browser settings or by clicking the cookie
          consent button when you first visit our site.
        </p>
        <p>
          For more information on how cookies are used on this site, please see
          our <Link href="/cookiepolicy" className="text-blue-500 underline">Cookie Policy</Link>.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          We use third-party services to analyze traffic and improve website
          performance:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> To track site performance and
            usage.{" "}
            <Link href="https://policies.google.com/privacy" className="underline text-blue-500" prefetch={false} target="_blank">
              Google Privacy Policy
            </Link>
          </li>
          <li>
            <strong>Google Tag Manager:</strong> To manage scripts on the site.{" "}
            <Link href="https://policies.google.com/privacy" className="underline text-blue-500" prefetch={false} target="_blank">
              Google Privacy Policy
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy or as required by law.
        </p>
      </section>

      <section>
        <h2>8. Data Security</h2>
        <p>
          We take appropriate technical and organizational measures to protect
          your personal data from unauthorized access, loss, or misuse.
        </p>
      </section>

      <section>
        <h2>9. International Data Transfers</h2>
        <p>
          If you are located outside the country where the Website is hosted,
          please be aware that your personal data may be transferred to and
          processed in other countries. By using this Website, you consent to
          the transfer of your data to such countries.
        </p>
      </section>

      <section>
        <h2>10. Children&apos;s Privacy</h2>
        <p>
          This website is not intended for children under the age of 13. We do
          not knowingly collect or solicit personal information from children
          under 13. If you believe we have collected personal information from a
          child, please contact us immediately.
        </p>
      </section>

      <section>
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When changes are
          made, the &quot;Last Updated&quot; date at the top of the page will be
          revised. Please check this page periodically for updates.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <p>
          Email: <Link href="mailto:chitranjankumargupta123@gmail.com" className="underline text-blue-500">chitranjankumargupta123@gmail.com</Link>
        </p>
      </section>
    </div>
  );
}
