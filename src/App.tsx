import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioLayout } from "./components/layout/PortfolioLayout";
import { ProjectDetailsPage } from "./components/features/projects/ProjectDetailsPage";

function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
