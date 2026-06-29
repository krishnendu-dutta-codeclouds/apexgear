import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProProof from './components/ProProof';
import ProductExplorer from './components/ProductExplorer';
import ProductSpotlight from './components/ProductSpotlight';
import BundleOffer from './components/BundleOffer';
import CompareSpecs from './components/CompareSpecs';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-slate-100 flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* Pro Social Proof Section */}
        <ProProof />

        {/* Product Explorer Catalog Section */}
        <ProductExplorer />

        {/* Customized Product Spotlight Section */}
        <ProductSpotlight />

        {/* Limited Championship Bundle Section */}
        <BundleOffer />

        {/* Spec Comparison Section */}
        <CompareSpecs />
      </main>

      {/* Cart Slider Overlay */}
      <CartDrawer />

      {/* Responsive Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
