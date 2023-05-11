import Head from "next/head";
import SectionFirstLook from "@/components/home/section-first-look/page";
import Liscategories from "./categories/cards/page";


  
export default function Home() {
  return (
    <html>
 <Head>
        <title>l'Escale Beauté | Chaises à Besançon</title>
        <meta
          name="description"
          content="l'Escale Beauté & Extérieur"
        />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
</Head>
<body> 
   
  <div className="interface-home">
  <div className="banner-item-01">
          <div className="text-content">
            <h4>Le Choix en Beauté</h4>
            <h2>UN VOYAGE SENSORIEL HORS DU TEMPS</h2>
          </div>
    </div>
    <div className="paragraphe-first">
     <div> 
    CONTACT
4 rue de l'Escale

25000 Besançon

+33 03 81 51 53 61

contact@lescale-meuble.fr
</div>

<div>
HORAIRES
Du Lundi au Vendredi : 09:00 - 19:00

Samedi : 09:00 - 17:00
</div>
<hr/>
<div>
Vous souhaitez acheter  un meuble d'entrée ou de décorer votre jardin avec de jolies chaises et tables. Ou si vous êtes un professionnel et avez envie d'acheter du meuble bureautique, ou scolaire. Nous avons tout ce qu'il vous faut.
En effectuant vos commandes de meubles chez nous, vous opterez pour le meilleur rapport qualité prix, d'offres promotionnelles et beaucoup d'autres avantages.
Maintenant, vous pouvez commander et régler en toute sérénité, grâce à notre système de paiement en ligne, tout en bénéficiant de la possibilité de payer un Accompte pour vos commandes en ligne!
</div>
    </div>
    <div className="banner-item-02">
    <SectionFirstLook
   
    descriptionPrimary={`NOTRE PRIORITÉ ABSOLUE EST DE VOUS PROPOSER DES PRODUITS D’EXCEPTION`}
    
    linkButton={true} //we will put the redirection link in this attribute
    withArrowJump={"info"}
  />
  </div>
 <Liscategories/>
  </div>
  </body> 
  </html>
  )
}
