/**
 * Zentrale Einstellungen für Huzur & Co.
 * Texte, Links und das Launch-Formular kannst du hier ändern, ohne die Seiten anzufassen.
 */

export const site = {
  name: 'Huzur & Co',
  url: 'https://huzurandco.de',
  title: 'Huzur & Co – Finde dein Huzur | Handveredelte Duftkerzen',
  description:
    'Huzur & Co bringt Ruhe nach Hause: handveredelte Duftkerzen aus Sojawachs mit türkischen Namen und warmem Licht. Jetzt für den Launch eintragen.',
  email: 'kontakt@huzurandco.de',
  instagram: 'https://www.instagram.com/huzur_co/',
  tiktok: 'https://www.tiktok.com/@huzur_co',
  handle: '@huzur_co',
};

/**
 * Launch-Liste / Newsletter
 *
 * action:  Die URL deines Newsletter-Dienstes (z. B. Brevo, Mailchimp, Formspree, Shopify).
 *          Leer lassen = Vorschau-Modus: Das Formular zeigt nur die Danke-Meldung, es wird nichts gesendet.
 * mode:    'fetch'  → Senden im Hintergrund, Besucher bleibt auf der Seite (Formspree, Brevo-API u. ä.)
 *          'native' → klassisches Formular-Absenden mit Weiterleitung (Mailchimp-Embed, Shopify)
 * emailField: Name des E-Mail-Felds, den dein Dienst erwartet (Mailchimp: 'EMAIL', Shopify: 'contact[email]').
 * hiddenFields: zusätzliche versteckte Felder, die dein Dienst verlangt
 *          (Shopify z. B. { form_type: 'customer', utf8: '✓', 'contact[tags]': 'launch' }).
 */
export const launchForm = {
  action: '',
  mode: 'fetch' as 'fetch' | 'native',
  emailField: 'email',
  hiddenFields: {} as Record<string, string>,
};
