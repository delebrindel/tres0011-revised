import { Footer } from "@tres-components/Footer/Footer";
import { Navbar } from "@tres-components/Navbar/Navbar";
import { ROUTES } from "@tres-global/routes";
import { Route, Routes } from "react-router-dom";
import { Curriculum } from "routes/Curriculum";
import { IndexPage } from "routes/IndexPage";
import { NotFound } from "routes/NotFound";
import { Portfolio } from "routes/Portfolio";
import { WorkExperience } from "routes/WorkExperience";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path={ROUTES.INDEX} element={<IndexPage />} />
        <Route path={ROUTES.CURRICULUM} element={<Curriculum />} />
        <Route path={ROUTES.WORK_EXPERIENCE} element={<Portfolio />} />
        <Route path={ROUTES.PORTFOLIO} element={<WorkExperience />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
