import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Les Récoltants",
  description: "Politique de confidentialité et protection des données personnelles du site Les Récoltants - Restaurant bistronomique à Bordeaux.",
  robots: "noindex, nofollow",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-ceruse-light">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6">
                Politique de confidentialité
              </h1>
              <p className="text-lg font-courier text-neutral-medium">
                Dernière mise à jour : 15 décembre 2025
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Responsable du traitement */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Qui est responsable du traitement
                </h2>
                <div className="font-courier text-neutral-dark space-y-2">
                  <p>Le présent site (ci-après "le Site") est édité par :</p>
                  <p><strong>LES RÉCOLTANTS</strong> – Société par actions simplifiée (SAS)</p>
                  <p><strong>SIREN :</strong> 911 214 369</p>
                  <p><strong>Siège social :</strong> 18 rue Sainte Colombe, 33000 Bordeaux – France</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@lesrecoltants.fr" className="hover:text-brand-primary transition-colors">contact@lesrecoltants.fr</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:0556381647" className="hover:text-brand-primary transition-colors">05 56 38 16 47</a></p>
                  <p className="mt-4">LES RÉCOLTANTS agit en tant que responsable de traitement des données personnelles collectées via le Site.</p>
                </div>
              </div>

              {/* Données collectées */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Données personnelles collectées
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Selon votre usage du Site, nous pouvons collecter :</p>

                  <div className="mt-6">
                    <h3 className="font-bold text-neutral-dark mb-2">Données collectées automatiquement (données de navigation)</h3>
                    <p>Lors de votre visite, certaines données peuvent être collectées automatiquement :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-medium">
                      <li>adresse IP, type de navigateur, système d'exploitation</li>
                      <li>pages consultées, temps de navigation, source de trafic</li>
                      <li>identifiants techniques et cookies (selon vos choix)</li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold text-neutral-dark mb-2">Données fournies volontairement</h3>
                    <p>Lorsque vous remplissez un formulaire (contact, réservation, demande d'info), nous pouvons collecter :</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-medium">
                      <li>nom, prénom</li>
                      <li>email, numéro de téléphone</li>
                      <li>contenu du message</li>
                      <li>toute information que vous choisissez de nous transmettre</li>
                    </ul>
                  </div>

                  <p className="mt-4 p-4 bg-ceruse-light rounded-lg text-sm">
                    <strong>Important :</strong> le Site n'a pas vocation à collecter des données "sensibles" (santé, opinions, etc.). Merci de ne pas en transmettre via les formulaires.
                  </p>
                </div>
              </div>

              {/* Finalités */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Finalités et bases légales du traitement
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Nous traitons vos données pour :</p>

                  <div className="space-y-4 mt-4">
                    <div className="p-4 border-l-4 border-brand-primary bg-ceruse-light/50">
                      <p className="font-bold">Répondre à vos demandes (contact, informations)</p>
                      <p className="text-sm text-neutral-medium mt-1">Base légale : intérêt légitime et/ou mesures précontractuelles</p>
                    </div>

                    <div className="p-4 border-l-4 border-brand-primary bg-ceruse-light/50">
                      <p className="font-bold">Gérer la relation client et les échanges</p>
                      <p className="text-sm text-neutral-medium mt-1">Base légale : intérêt légitime / exécution d'un contrat (si applicable)</p>
                    </div>

                    <div className="p-4 border-l-4 border-brand-primary bg-ceruse-light/50">
                      <p className="font-bold">Assurer le bon fonctionnement du Site, sa sécurité, et prévenir la fraude</p>
                      <p className="text-sm text-neutral-medium mt-1">Base légale : intérêt légitime</p>
                    </div>

                    <div className="p-4 border-l-4 border-brand-primary bg-ceruse-light/50">
                      <p className="font-bold">Mesurer l'audience et améliorer l'expérience (statistiques, performance)</p>
                      <p className="text-sm text-neutral-medium mt-1">Base légale : consentement (lorsque des cookies non essentiels sont utilisés)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Cookies
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Le Site peut utiliser des cookies :</p>

                  <div className="mt-4">
                    <h3 className="font-bold text-neutral-dark mb-2">Cookies nécessaires</h3>
                    <p>Indispensables au fonctionnement technique du Site.</p>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-bold text-neutral-dark mb-2">Cookies de mesure d'audience / marketing (si activés)</h3>
                    <p>Ils permettent d'analyser la fréquentation ou de proposer des contenus adaptés.</p>
                    <p className="mt-2">Ils ne sont déposés qu'avec votre consentement, que vous pouvez modifier à tout moment via le bandeau cookies (si présent) ou les paramètres de votre navigateur.</p>
                  </div>
                </div>
              </div>

              {/* Destinataires */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Destinataires des données
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Vos données sont destinées uniquement :</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-medium">
                    <li>aux équipes des Récoltants habilitées à les traiter</li>
                    <li>à certains prestataires techniques nécessaires au fonctionnement du Site (hébergement, outils de mesure d'audience, formulaire, etc.)</li>
                  </ul>
                  <p className="mt-4 font-bold">Nous ne vendons ni ne louons vos données personnelles.</p>
                </div>
              </div>

              {/* Hébergement et transferts */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Hébergement et transferts hors Union Européenne
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Le Site est hébergé par <strong>Vercel Inc.</strong> (États-Unis).</p>
                  <p>Dans ce cadre, certaines données techniques (ex : logs, IP) peuvent être traitées sur des infrastructures situées hors Union Européenne.</p>
                  <p>Lorsque des transferts hors UE ont lieu, nous veillons à ce qu'ils soient encadrés par des mécanismes conformes au RGPD (ex : clauses contractuelles types, mesures de sécurité complémentaires), lorsque cela est applicable.</p>
                </div>
              </div>

              {/* Durées de conservation */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Durées de conservation
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Nous conservons vos données uniquement le temps nécessaire aux finalités prévues :</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-medium">
                    <li>demandes via formulaire : durée de traitement + archivage limité (ex : jusqu'à 12/24 mois selon le contexte)</li>
                    <li>données liées à une relation contractuelle : durée légale et comptable applicable</li>
                    <li>logs techniques/sécurité : durée limitée</li>
                    <li>cookies : selon leur durée de vie et vos choix (consentement)</li>
                  </ul>
                </div>
              </div>

              {/* Sécurité */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Sécurité
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Nous mettons en oeuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre la perte, l'accès non autorisé, l'altération ou la divulgation.</p>
                  <p>Toutefois, aucune transmission sur Internet n'est totalement sécurisée : vous utilisez le Site à vos propres risques.</p>
                </div>
              </div>

              <hr className="border-neutral-light" />

              {/* Vos droits */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Vos droits (RGPD)
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Si vous êtes résident de l'Union Européenne, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-medium">
                    <li>droit d'accès</li>
                    <li>droit de rectification</li>
                    <li>droit d'effacement</li>
                    <li>droit à la limitation du traitement</li>
                    <li>droit d'opposition</li>
                    <li>droit à la portabilité des données</li>
                    <li>droit de retirer votre consentement (quand le traitement est basé dessus)</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@lesrecoltants.fr" className="text-brand-primary hover:underline">contact@lesrecoltants.fr</a>
                  </p>
                  <p>Nous pourrons demander une preuve d'identité si nécessaire (uniquement pour sécuriser la demande).</p>
                  <p>Vous avez également le droit d'introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">CNIL</a>.</p>
                </div>
              </div>

              {/* Liens tiers */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Liens vers des sites tiers
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Le Site peut contenir des liens vers des sites externes.</p>
                  <p>Nous ne sommes pas responsables de leurs contenus ni de leurs politiques de confidentialité. Nous vous invitons à consulter leurs propres conditions.</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Contact
                </h2>
                <div className="font-courier text-neutral-dark space-y-2 leading-relaxed">
                  <p>Pour toute question relative à cette politique ou à vos données :</p>
                  <p><a href="mailto:contact@lesrecoltants.fr" className="text-brand-primary hover:underline">contact@lesrecoltants.fr</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
