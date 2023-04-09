import React, { useState } from "react";
import "./News.scss"
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import { ProductView } from "../../components/News/Products/ProductsView";
import { ArticlesView } from "../../components/News/Articles/ArticlesView";

export const News = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [title, setTitle] = useState('Artykuły');
  const [buttonText, setButtonText] = useState('Produkty');

  const handleClick = () => {
    if (showProducts) {
      setShowProducts(false);
      setTitle('Artykuły')
      setButtonText('Produkty')
      return
    }
    setShowProducts(true);
    setTitle('Produkty')
    setButtonText('Artykuły')
  }

  return <>
    <ViewTitle title="Aktualności"/>
    <div className="News">
      <div className="container">
        <h3>{title}</h3>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
        {
          showProducts ? 
          <ProductView/> :
          <ArticlesView/>
        }
    </div>
  </>
}



    // <ViewTitle title="Aktualności"/>
    // <Article title="Na co zwrócić uwagę przy zakładaniu lokaty bankowej?" date="24.03.2023">
    //   Musisz też jednak pamiętać, iż podpisując umowę lokaty, zgadzasz się na kilka warunków, które w dłuższej perspektywie mogą okazać sięmniej korzystne.Po pierwsze, nie możesz wycofać oszczędności przed zadeklarowanym terminem ani dokonywać wpłat powiększających wartośćdepozytu. Ponadto, jeśli przed czasem zerwiesz lokatę, musisz liczyć się z utratą odsetek (choć nie jest to regułą we wszystkich bankach– niektóre oferty umożliwią ci zachowanie wypracowanych zysków nawet w takiej sytuacji). Po drugie, ta forma oszczędzania jest obłożona19% podatkiem Belki, który znacznie obniża zyski z lokat (w praktyce od każdej zarobionej złotówki aż 19 groszy zabierze Ci fiskus). Wefekcie np. depozyt z oprocentowaniem 3% w skali roku pozwoli Ci zarobić „na rękę” znacznie mniej, bo tylko 2,43%.
    // </Article>
    // <NewProduct 
    //   title="Nowa lokata w Banku Nova" 
    //   name="NOWYdepozyt GWARANTOWANY" 
    //   annualInterestRate={8.1} 
    //   date="22.03.2023" 
    //   durationInDays={180}
    //   minContribution={1000} 
    //   maxContribution={10000} 
    //   description="lokatę założysz tylko online w ciągu 85 dni od otwarcia rachunku depozytowego, służącego do obsługi lokatylokata tylko dlanowych klientów"/>
    // <NewProduct 
    //   title="Krótkoterminowa lokata Inbanku" 
    //   name="Lokata Na Start" 
    //   annualInterestRate={8.0} 
    //   date="20.03.2023" 
    //   durationInDays={90}
    //   minContribution={1000} 
    //   maxContribution={50000} 
    //   description="depozyty założone w Inbank gwarantowane są przez estoński fundusz gwarancyjny Tagatisfond, do 100 tys. euro
    //   lokata tylko dla nowych klientów Inbanku"
    // />
    // <Article title="Jak działa lokata?" date="20.03.2023">
    //   Lokata bankowa jest umową zawieraną między klientem a bankiem. Bank przyjmuje w depozyt oszczędności klienta i po ustalonym z góry czasie(czyli mówiąc bardziej fachowo - po zakończeniu okresu umownego) wypłaca pobrany kapitał wraz z należnymi odsetkami. Stanowią one swoiste"wynagrodzenie" dla pożyczkodawcy za to, że bank przez jakiś czas obracał jego pieniędzmiu
    // </Article>
    // <NewProduct 
    //   title="Konto Oszczędnościowe w promocji"
    //   name="Oszczędność z Citi handlowy"
    //   date="20.03.2023"
    //   annualInterestRate={8.1}
    //   durationInDays={120}
    //   minContribution={0}
    //   maxContribution={100000}
    //   description="z promocji nie mogą skorzystać osoby, które po 31 grudnia 2020 r. posiadały ROR lub konto oszczędnościowe w Citi Handlowym
    //   oferta jest dostępna do 31.03.2023 r. po założeniu Citikonta"
    // />
    // <Article title="Lokaty internetowe bez konta najbardziej pożądane, ale czy najlepsze?" date="19.03.2023">
    //   Klienci cenią wygodę, a ponadto możliwość uniknięcia wspomnianych już, dodatkowych warunków oferty. Z tego powodu prawdopodobnienajbardziej cenią oni lokaty internetowe bez konta. Nie dość, że można je otworzyć bez wychodzenia z domu, to jeszcze nie wymagają onejednoczesnego korzystania z rachunku osobistego. Nie warto jednak zamykać się na depozyty dostępne tylko dla posiadaczy kont, gdyż to oneproponują tradycyjnie nieco lepsze warunki. Lokaty bankowe mogą być dołączone do ROR-u o dobrych opłatach i interesujących usługachdodatkowych i może okazać się, że taki rachunek przyniesie nam więcej korzyści.
    // </Article> 