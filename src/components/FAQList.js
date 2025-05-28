import { useState } from "react";

const faqData = [
  {
    question: "Dlaczego warto wybrać Teraz.cash zamiast zwykłego konta bankowego?",
    answer: `Z nami to Ty masz pełną kontrolę nad swoimi pieniędzmi, bez pośredników, bez zbędnych formalności i bez ryzyka, że ktoś kiedyś zablokuje Ci konto. Wszystkie środki trzymasz w prywatnym portfelu on-chain i nikt poza Tobą nie ma do niego dostępu, 24/7, gdziekolwiek jesteś. `,
  },
  {
    question: "Jak Teraz.cash dba o moją prywatność?",
    answer: ` – Self-custody: aplikacja nie przechowuje Twoich kluczy ani nie udostępnia danych.<br />
 – Brak śledzenia: nikt nie monitoruje każdego Twojego przelewu.<br />
 – Minimalna weryfikacja: rejestracja prosta jak w neobanku, ale to Ty decydujesz, ile zdradzisz o sobie.`,
  },
  {
    question: "Jakie metody płatności obsługuje Teraz.cash?",
    answer: ` – Link/QR: wygeneruj link lub kod QR, udostępnij klientowi i odbierz zapłatę jednym kliknięciem.<br />
 – Karta: wirtualna lub fizyczna, działa od razu po doładowaniu — online i zbliżeniowo.<br />
 – Blik/przelew: prosto z banku, środki od razu w portfelu, bez opóźnień.`,
  },
  {
    question: "Jak zamówić i używać kartę Teraz.cash?",
    answer: `1. W zakładce Portfel stuknij „Utwórz kartę”.<br />
            2. Postępuj krok po kroku według instrukcji na ekranie.<br /><br />


        W ciągu kilku sekund karta pojawi się w aplikacji, gotowa do płatności online i stacjonarnie przez NFC.
`,
  },
  {
    question: "Czy Teraz.cash działa na całym świecie?",
    answer: `Tak — doładowujesz portfel i kartę, a potem płacisz i wypłacasz gotówkę 24/7 w dowolnym kraju, bez pośredników i ograniczeń geograficznych.
`,
  },
  {
    question: "Jak łatwo mogę przyjmować płatności jako firma lub freelancer?",
    answer: `Generujesz link lub kod QR w kilka sekund, wysyłasz go e-mailem, SMS-em lub umieszczasz na stronie. Klient płaci bez rejestracji, Ty natychmiast masz środki w portfelu — bez opóźnień, bez blokad.
`,
  },
  {
    question: "Czy Teraz.cash jest bezpieczne? / Gdzie i jak są przechowywane moje środki?",
    answer: `– Self-custodial: tylko Ty masz klucze i dostęp do portfela.<br />
– USDC (stablecoin) trzymasz w swoim prywatnym, non-custodial portfelu on-chain.<br />
– Partnerzy regulowani: środki FIAT przechowywane w bezpiecznych rachunkach powierniczych.<br />
– Szyfrowanie i weryfikacja przy wglądzie w dane karty.  To oznacza maksimum ochrony Twoich pieniędzy.<br />
 – Aplikacja nie gromadzi Twoich kluczy ani haseł – tylko Ty decydujesz o dostępie do swoich pieniędzy.
`,
  },
  {
    question: "Czy mogę też wysyłać i odbierać kryptowaluty?",
    answer: `Tak – wybierz „Transfer” → Portfel kryptowalut, wpisz adres odbiorcy lub zeskanuj kod QR i potwierdź. W kilka sekund środki USDC trafią na wskazany portfel on-chain.
`,
  },
  {
    question: "Co, jeśli potrzebuję pomocy?",
    answer: `W aplikacji masz czat 24/7 z zespołem wsparcia. Dodatkowo w każdym planie otrzymujesz poziom supportu dopasowany do Twoich potrzeb — Standard, Priority lub VIP.
`,
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="flex justify-between cursor-pointer font-satoshi-medium font-[500] gap-[24px] items-center w-full py-[48px] mq450:py-[32px] text-left bg-transparent font-palanquin text-[24px] no-underline visited:text-[#4040F2] text-[#4040F2] mq450:text-[16px] mq450:leading-[150%] px-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <img
          src="/faq-item.svg"
          alt="Toggle"
          className={`w-[40px] h-[40px] mq450:w-[32px] mq450:h-[32px] transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        />
      </button>
      <div
        className={`faq-answer-wrapper transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p
          className="faq-answer font-satoshi-medium font-[400] text-[#4040F2] text-[20px] mq450:text-[16px] leading-[150%] pb-[40px] m-0 no-underline visited:text-black"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
}

export default function FAQList() {
  return (
    <div className="flex flex-col w-full">
      {faqData.map((item, index) => (
        <div key={index}>
          <FAQItem question={item.question} answer={item.answer} />
          <div id="line" className="w-full h-[1px] bg-gradient-to-r from-[#4040F2] to-[#DCFF48]"></div>
        </div>
      ))}
    </div>
  );
}
