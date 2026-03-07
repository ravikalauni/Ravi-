import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Documents from "./components/Documents";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DocumentsPage from "./pages/DocumentsPage";
import DocumentDetailPage from "./pages/DocumentDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsOverviewPage from "./pages/ProjectsOverviewPage";
import AboutLipiksaPage from "./pages/AboutLipiksaPage";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Documents />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white bg-grid-pattern dark:bg-black transition-colors duration-300">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/documents/:id" element={<DocumentDetailPage />} />
              <Route path="/projects/overview" element={<ProjectsOverviewPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/about-lipiksa" element={<AboutLipiksaPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
