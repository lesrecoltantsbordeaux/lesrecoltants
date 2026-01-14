import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Les Récoltants",
  description: "Mentions légales du site Les Récoltants - Restaurant bistronomique à Bordeaux.",
  robots: "noindex, nofollow",
};

export default function MentionsLegales() {
  return (
    <div className="flex-1 bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-ceruse-light">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-stencil font-bold text-neutral-dark mb-6">
                Mentions légales
              </h1>
              <p className="text-lg font-courier text-neutral-medium">
                Conformément aux dispositions des articles 6-III et 19 de la loi pour la Confiance dans l&apos;Économie Numérique (LCEN).
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* Éditeur du site */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Éditeur du site
                </h2>
                <div className="font-courier text-neutral-dark space-y-2">
                  <p><strong>Nom du site :</strong> Les Récoltants</p>
                  <p><strong>Activité :</strong> Restaurant bistronomique – Cuisine locavore, direct producteur</p>
                </div>
              </div>

              {/* Propriétaire du site */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Propriétaire du site
                </h2>
                <div className="font-courier text-neutral-dark space-y-2">
                  <p><strong>LES RÉCOLTANTS</strong> – Société par actions simplifiée (SAS)</p>
                  <p><strong>SIREN :</strong> 911 214 369</p>
                  <p><strong>Siège social :</strong> 18 rue Sainte Colombe, 33000 Bordeaux – France</p>
                  <p><strong>Représentant légal :</strong> Roger Melia</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Contact
                </h2>
                <div className="font-courier text-neutral-dark space-y-2">
                  <p><strong>Téléphone :</strong> <a href="tel:0556381647" className="hover:text-brand-primary transition-colors">05 56 38 16 47</a></p>
                  <p><strong>Email :</strong> <a href="mailto:contact@lesrecoltants.fr" className="hover:text-brand-primary transition-colors">contact@lesrecoltants.fr</a></p>
                </div>
              </div>

              {/* Adresse du site */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Adresse du site
                </h2>
                <div className="font-courier text-neutral-dark">
                  <p><a href="https://lesrecoltants.fr" className="hover:text-brand-primary transition-colors">https://lesrecoltants.fr</a></p>
                </div>
              </div>

              {/* Hébergement */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Hébergement
                </h2>
                <div className="font-courier text-neutral-dark space-y-2">
                  <p>Le site est hébergé par :</p>
                  <p><strong>Vercel Inc.</strong></p>
                  <p>Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">vercel.com</a></p>
                  <p>Contact : <a href="https://vercel.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">vercel.com/contact</a></p>
                </div>
              </div>

              <hr className="border-neutral-light" />

              {/* Conditions d'utilisation */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Conditions d&apos;utilisation
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>L&apos;utilisation du site implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation décrites ci-après.</p>
                  <p>Les présentes mentions légales peuvent être modifiées ou complétées à tout moment, sans préavis.</p>
                </div>
              </div>

              {/* Informations fournies */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Informations fournies
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Les informations diffusées sur ce site sont fournies à titre indicatif.</p>
                  <p>Le propriétaire du site s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations publiées, mais ne saurait être tenu responsable d&apos;erreurs, d&apos;omissions ou d&apos;une indisponibilité temporaire des contenus.</p>
                  <p>Le propriétaire du site ne peut être tenu responsable des dommages directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation du site.</p>
                </div>
              </div>

              {/* Interactivité */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Interactivité
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Les utilisateurs peuvent être amenés à déposer du contenu (formulaire, commentaires, avis). Ils en restent seuls responsables sur le plan juridique.</p>
                  <p>Le propriétaire du site se réserve le droit de supprimer, sans préavis, tout contenu contrevenant à la législation en vigueur ou portant atteinte à l&apos;image du site.</p>
                </div>
              </div>

              {/* Propriété intellectuelle */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Propriété intellectuelle
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>L&apos;ensemble des éléments du site (textes, images, graphismes, logo, vidéos, icônes, sons, logiciels, etc.) est protégé par le droit de la propriété intellectuelle.</p>
                  <p>Toute reproduction, représentation, modification ou adaptation, totale ou partielle, de ces éléments est interdite sans autorisation écrite préalable du propriétaire.</p>
                  <p>Toute exploitation non autorisée du site ou de l&apos;un de ses éléments constitue une contrefaçon pouvant engager la responsabilité civile et pénale de son auteur.</p>
                </div>
              </div>

              {/* Liens hypertextes */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Liens hypertextes
                </h2>
                <div className="font-courier text-neutral-dark space-y-6 leading-relaxed">
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Liens sortants</h3>
                    <p>Le site peut contenir des liens vers des sites tiers. Le propriétaire du site ne saurait être tenu responsable du contenu, des politiques ou des pratiques de ces sites externes.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Liens entrants</h3>
                    <p>Les liens vers le site Les Récoltants sont autorisés, sous réserve qu&apos;ils n&apos;altèrent pas son image et qu&apos;ils ouvrent dans une nouvelle fenêtre. Le propriétaire se réserve le droit de demander la suppression de tout lien qu&apos;il jugerait non conforme.</p>
                  </div>
                </div>
              </div>

              {/* Données personnelles */}
              <div>
                <h2 className="text-2xl font-stencil font-bold text-brand-primary mb-4">
                  Données personnelles et confidentialité
                </h2>
                <div className="font-courier text-neutral-dark space-y-4 leading-relaxed">
                  <p>Conformément au Règlement Général sur la Protection des Données (RGPD), tout utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles le concernant.</p>
                  <p>Toute demande peut être adressée par écrit à l&apos;adresse email indiquée ci-dessus, accompagnée d&apos;un justificatif d&apos;identité.</p>
                  <p>
                    Pour plus d&apos;informations, l&apos;utilisateur est invité à consulter la page{" "}
                    <Link href="/politique-confidentialite" className="text-brand-primary hover:underline">
                      Politique de confidentialité
                    </Link>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
    </div>
  );
}
