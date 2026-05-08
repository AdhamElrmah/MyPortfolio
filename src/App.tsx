import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PortfolioLayout } from "./components/layout/PortfolioLayout";
import { ProjectDetailsPage } from "./components/features/projects/ProjectDetailsPage";
import { AllProjectsPage } from "./components/features/projects/AllProjectsPage";
import { NotFoundPage } from "./components/common/NotFoundPage";
import { WIPBanner } from "./components/common/WIPBanner";
import { CustomCursor } from "./components/common/CustomCursor";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { TerminalTerminal } from "./components/common/TerminalTerminal";
import { BackToTop } from "./components/common/BackToTop";
import { SocialSidebar } from "./components/layout/SocialSidebar";
import { PageTransition } from "./components/common/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <PortfolioLayout />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <AllProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/project/:id"
          element={
            <PageTransition>
              <ProjectDetailsPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <CustomCursor />
      <ScrollProgress />
      <WIPBanner />
      <TerminalTerminal />
      <AnimatedRoutes />
      <SocialSidebar />
      <BackToTop />
    </Router>
  );
}

export default App;
