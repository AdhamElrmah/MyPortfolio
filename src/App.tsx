import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioLayout } from "./components/layout/PortfolioLayout";
import { ProjectDetailsPage } from "./components/features/projects/ProjectDetailsPage";
import { AllProjectsPage } from "./components/features/projects/AllProjectsPage";
import { WIPBanner } from "./components/common/WIPBanner";

function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <WIPBanner />
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
