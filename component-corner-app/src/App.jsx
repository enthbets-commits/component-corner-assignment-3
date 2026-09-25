import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header storeName="TechCorner" />

      <Hero
        title="Upgrade Your Setup"
        subtitle="Discover quality computer and gaming accessories built for your everyday setup."
        ctaText="Shop Now"
      />

      <main className="products-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <ProductCard
            name="Mechanical Keyboard"
            price="89.99"
            image="https://placehold.co/600x400/111827/ffffff?text=Mechanical+Keyboard"
            description="A responsive mechanical keyboard designed for gaming, work, and everyday use."
          />

          <ProductCard
            name="Gaming Mouse"
            price="49.99"
            image="https://placehold.co/600x400/374151/ffffff?text=Gaming+Mouse"
            description="A lightweight gaming mouse with precise tracking and customizable controls."
          />

          <ProductCard
            name="Wireless Headset"
            price="79.99"
            image="https://placehold.co/600x400/4b5563/ffffff?text=Wireless+Headset"
            description="Comfortable wireless headphones with clear audio for gaming and entertainment."
          />
        </div>
      </main>

      <Footer
        storeName="TechCorner"
        email="support@techcorner.com"
        phone="(555) 123-4567"
      />
    </div>
  );
}

export default App;