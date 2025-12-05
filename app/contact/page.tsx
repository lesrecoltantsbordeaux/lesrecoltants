import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ContactForm from "@/components/ui/ContactForm";
import PageHero from "@/components/ui/PageHero";
import { Metadata } from "next";
import { siteConfig } from "@/lib/seo/config";
import Image from "next/image";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  MessageCircleIcon,
  CalendarIcon,
  SparklesIcon,
  RestaurantIcon,
  BasketIcon
} from "@/components/ui/Icons";

// Alias pour compatibilité
const CheckIcon = CheckCircleIcon;

export const metadata: Metadata = {
  title: "Contact & Réservation - Nous Contacter",
  description: "Contactez Les Récoltants à Bordeaux pour une réservation, une demande de devis traiteur ou privatisation. Formulaire de contact et coordonnées.",
  keywords: ["contact restaurant bordeaux", "réservation bordeaux", "devis traiteur", "contact les récoltants"],
};

export default function Contact() {
  const faqs = [
    {
      question: "Comment réserver une table au restaurant ?",
      answer: "Vous pouvez réserver par téléphone, email ou via le formulaire ci-dessous. Nous vous confirmerons votre réservation sous 24h."
    },
    {
      question: "Quel est le délai pour un devis traiteur ?",
      answer: "Nous vous envoyons un devis détaillé sous 48h après réception de votre demande. Pour les événements urgents, contactez-nous directement par téléphone."
    },
    {
      question: "Peut-on privatiser le restaurant ?",
      answer: "Oui ! Nous proposons la privatisation totale ou partielle de notre espace pour vos événements de 20 à 80 personnes."
    },
    {
      question: "Livrez-vous les bocaux et produits du marché ?",
      answer: "Nous proposons un service de retrait sur place. Pour les commandes importantes (>50€), nous étudions la possibilité de livraison à Bordeaux."
    }
  ];

  return (
    <>
      <Header />
      <FloatingCTA />

      <main className="flex-1">
        {/* HERO */}
        <PageHero
          title="Parlons de votre projet"
          highlightWord="projet"
          description="Une réservation, une question, un événement à organiser ? Nous sommes à votre écoute et vous répondons sous 24h."
          imageSrc="/images/contact/contact-hero.jpg"
          imageAlt="Contact Les Récoltants - Restaurant bistronomique Bordeaux"
          badge={{
            icon: <MessageCircleIcon size={14} />,
            text: "Réponse sous 24h · Devis gratuit",
          }}
          cta={{
            primary: {
              text: "Appeler maintenant",
              href: `tel:${siteConfig.business.telephone}`,
              icon: <PhoneIcon size={20} />,
            },
            secondary: {
              text: "Envoyer un message",
              href: "#formulaire",
            },
          }}
          imagePosition="right"
        />

        {/* CONTACT GRID MODERNE */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-15" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Section title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Nos{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    coordonnées
                  </span>
                </h2>
                <p className="text-xl font-courier text-neutral-medium max-w-2xl mx-auto">
                  Choisissez le moyen de contact qui vous convient le mieux
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Téléphone */}
                <a
                  href={`tel:${siteConfig.business.telephone}`}
                  className="group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                      <PhoneIcon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">Téléphone</h3>

                    <p className="text-2xl font-stencil text-brand-primary font-bold mb-4">
                      {siteConfig.business.telephone || "05 56 XX XX XX"}
                    </p>

                    <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <ClockIcon size={16} />
                        <span className="font-semibold">Disponibilité</span>
                      </div>
                      <p>Mardi - Samedi</p>
                      <p className="font-medium text-neutral-dark">10h-13h & 16h-19h</p>
                    </div>

                    <div className="mt-4 text-sm font-courier text-brand-primary font-semibold">
                      Réponse immédiate →
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                      <MailIcon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">Email</h3>

                    <p className="font-courier text-brand-primary font-bold break-all mb-4 text-sm lg:text-base">
                      {siteConfig.business.email || "contact@lesrecoltants.fr"}
                    </p>

                    <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <SparklesIcon size={16} />
                        <span className="font-semibold">Garantie</span>
                      </div>
                      <p className="font-medium text-neutral-dark">Réponse sous 24h</p>
                      <p className="text-xs mt-1">Du lundi au samedi</p>
                    </div>

                    <div className="mt-4 text-sm font-courier text-brand-primary font-semibold">
                      Pour demandes détaillées →
                    </div>
                  </div>
                </a>

                {/* Adresse */}
                <div className="group bg-gradient-to-br from-ceruse-light to-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-light/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                      <MapPinIcon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark mb-4">Adresse</h3>

                    <address className="not-italic font-courier text-neutral-medium mb-4">
                      <p className="font-medium text-neutral-dark mb-1">
                        {siteConfig.business.address.streetAddress || "[Adresse à compléter]"}
                      </p>
                      <p>
                        {siteConfig.business.address.postalCode || "33000"} {siteConfig.business.address.addressLocality}
                      </p>
                    </address>

                    <div className="bg-white rounded-xl p-4 text-sm font-courier text-neutral-medium mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPinIcon size={16} />
                        <span className="font-semibold">Accès</span>
                      </div>
                      <p>Tram C - Arrêt Quinconces</p>
                      <p className="text-xs mt-1">Parking à proximité</p>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.business.geo.latitude},${siteConfig.business.geo.longitude}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-courier text-brand-primary font-semibold hover:underline"
                    >
                      Voir sur Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Garanties */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                {[
                  { icon: CheckIcon, text: "Réponse garantie sous 24h" },
                  { icon: SparklesIcon, text: "Devis gratuit et sans engagement" },
                  { icon: CalendarIcon, text: "Disponible 6j/7" },
                  { icon: MessageCircleIcon, text: "Conseil personnalisé" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 border border-neutral-light/30 hover:shadow-lg transition-all group"
                  >
                    <item.icon size={24} className="text-brand-primary group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-courier text-center text-neutral-medium font-medium leading-tight">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAIRE + MAP */}
        <section id="formulaire" className="py-24 lg:py-32 bg-gradient-to-br from-ceruse-light to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Formulaire */}
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-4 py-2 rounded-full text-sm font-courier font-semibold mb-6">
                    <MailIcon size={14} />
                    Formulaire de contact
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-4">
                    Envoyez-nous un{" "}
                    <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                      message
                    </span>
                  </h2>

                  <p className="text-lg font-courier text-neutral-medium leading-relaxed">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                    <br />
                    <span className="text-sm">Les champs marqués d'un astérisque (*) sont obligatoires.</span>
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-neutral-light/20">
                  <ContactForm />
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-courier text-neutral-medium">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>Données sécurisées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>Réponse rapide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={16} className="text-brand-primary" />
                    <span>Sans spam</span>
                  </div>
                </div>
              </div>

              {/* Map + Infos */}
              <div className="space-y-8 order-1 lg:order-2">
                {/* Google Map */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-light/20">
                  <div className="aspect-[4/3] relative">
                    <iframe
                      src="https://maps.google.com/maps?q=18+rue+Sainte-Colombe+33000+Bordeaux&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Carte Google Maps - Les Récoltants Bordeaux"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-neutral-dark to-neutral-dark/90 text-white">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=18+rue+Sainte-Colombe+33000+Bordeaux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 text-white hover:text-brand-primary transition-colors font-courier font-semibold group"
                    >
                      <MapPinIcon size={20} />
                      <span>Ouvrir dans Google Maps</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>

                {/* Horaires détaillés */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-neutral-light/20">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                      <ClockIcon size={24} className="text-brand-primary" />
                    </div>
                    <h3 className="text-2xl font-stencil font-bold text-neutral-dark">
                      Horaires d'ouverture
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Restaurant & Marché - Lundi, Mardi & Mercredi */}
                    <div className="bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-6 border border-brand-primary/10">
                      <div className="flex items-center gap-2 mb-4">
                        <RestaurantIcon size={20} className="text-brand-primary" />
                        <span className="text-lg font-courier font-bold text-neutral-dark">Lundi, Mardi & Mercredi</span>
                      </div>
                      <div className="space-y-3 font-courier text-neutral-medium">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                            Restaurant & Marché
                          </span>
                          <span className="font-semibold text-neutral-dark">12h - 19h</span>
                        </div>
                      </div>
                    </div>

                    {/* Restaurant & Marché - Jeudi, Vendredi, Samedi */}
                    <div className="bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-6 border border-brand-primary/10">
                      <div className="flex items-center gap-2 mb-4">
                        <BasketIcon size={20} className="text-brand-primary" />
                        <span className="text-lg font-courier font-bold text-neutral-dark">Jeudi, Vendredi & Samedi</span>
                      </div>
                      <div className="space-y-3 font-courier text-neutral-medium">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                            Restaurant & Marché
                          </span>
                          <span className="font-semibold text-neutral-dark">12h - 22h30</span>
                        </div>
                      </div>
                    </div>

                    {/* Fermé */}
                    <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-4 text-center">
                      <p className="text-sm font-courier text-red-900 font-semibold flex items-center justify-center gap-2">
                        <ClockIcon size={16} className="text-red-600" />
                        Fermé dimanche
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Texture de fond - Ceruse normal (section secondaire) */}
          <div className="absolute inset-0 texture-ceruse-light opacity-15" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/30 text-brand-primary px-4 py-2 rounded-full text-sm font-courier font-semibold mb-6">
                  <MessageCircleIcon size={14} />
                  Questions fréquentes
                </div>

                <h2 className="text-4xl lg:text-5xl font-stencil font-bold text-neutral-dark mb-6">
                  Vous avez des{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                    questions
                  </span>{" "}
                  ?
                </h2>

                <p className="text-xl font-courier text-neutral-medium">
                  Nous avons rassemblé les réponses aux questions les plus courantes
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-ceruse-light to-white rounded-2xl p-8 border border-neutral-light/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <h3 className="text-xl font-stencil font-bold text-neutral-dark mb-4 flex items-start gap-3 group-hover:text-brand-primary transition-colors">
                      <span className="flex-shrink-0 w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary font-stencil font-bold text-sm group-hover:scale-110 transition-transform">
                        ?
                      </span>
                      {faq.question}
                    </h3>
                    <p className="font-courier text-neutral-medium leading-relaxed pl-11">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
