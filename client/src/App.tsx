import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Cancel from "./pages/Cancel";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Tokushoho from "./pages/Tokushoho";

function Router() {
  // GitHub Pages serves the site under a subpath (e.g. /meokarte-site/),
  // so routes must resolve relative to Vite's BASE_URL
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/success"} component={Success} />
        <Route path={"/cancel"} component={Cancel} />
        <Route path={"/tokushoho"} component={Tokushoho} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
