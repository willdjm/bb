"use client"

import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contatct";
import { Depositions } from "./components/Depositions";
import { Footer } from "./components/Footer";
import { InformationsForEducators } from "./components/InformationsForEducators";
import { Navbar } from "./components/Navbar";
import { ObjectivesAndBenefits } from "./components/ObjectivesAndBenefits";
import { OrientationsGeneral } from "./components/OrientationsGeneral";
import { OurPartnersAndSponsors } from "./components/OurPartnersAndSponsors";
import { Programming } from "./components/Programming";
import { RulesAndRegulations } from "./components/RulesAndRegulations";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
<main>
<Navbar/>
<Banner/>
 <About/>
<ObjectivesAndBenefits/>
<OrientationsGeneral/>
<Programming/>
<InformationsForEducators/>
<RulesAndRegulations/>
<Depositions/>  
<OurPartnersAndSponsors/>
<Contact/>
<Footer/>
<ScrollToTop/>
</main>
  );
}
