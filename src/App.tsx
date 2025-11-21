import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import SignupLanding from "./pages/SignupLanding";
import PartnerOnboarding from "./pages/PartnerOnboarding";
import FindService from "./pages/FindService";
import Dashboard from "./pages/Dashboard";
import PrebuiltDesigns from "./pages/PrebuiltDesigns";
import Design from "./pages/Design";
import Workers from "./pages/Workers";
import Services from "./pages/Services";
import ServiceProviders from "./pages/ServiceProviders";
import AIMode from "./pages/AIMode";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup-landing" element={<SignupLanding />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/partner-onboarding" element={
              <ProtectedRoute>
                <PartnerOnboarding />
              </ProtectedRoute>
            } />
            <Route path="/find-service" element={
              <ProtectedRoute>
                <FindService />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/prebuilt-designs" element={
              <ProtectedRoute>
                <PrebuiltDesigns />
              </ProtectedRoute>
            } />
            <Route path="/design" element={<Design />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-providers" element={<ServiceProviders />} />
            <Route path="/ai-mode" element={<AIMode />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
