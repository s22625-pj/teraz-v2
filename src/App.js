import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Regulamin from "./pages/Regulamin";
import Pw from "./pages/Pw.js";
import Pp from "./pages/Pp.js";

function RedirectComponent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/start") {
      window.location.replace("https://form.typeform.com/to/pf33IhfC?typeform-source=teraz.cash");
    }
  }, [location]);

  return null;
}

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Teraz.cash - Twoje finanse, Twoje zasady!";
        metaDescription = "Teraz.cash - Twoje finanse, Twoje zasady!";
        break;
      case "/pp":
        title = "Polityka prywatności";
        metaDescription = "Polityka prywatności";
        break;
      case "/regulamin":
        title = "Regulamin";
        metaDescription = "Regulamin";
        break;
      case "/aml":
        title = "Informacja o polityce AML";
        metaDescription = "Informacja o polityce AML";
        break;
      default:
        title = "My App";
        metaDescription = "Default description";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/regulamin" element={<Regulamin />} />
      <Route path="/aml" element={<Pw />} />
      <Route path="/pp" element={<Pp />} />
      <Route path="/start" element={<RedirectComponent />} />
    </Routes>
  );
}

export default App;
