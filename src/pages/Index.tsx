
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import AppPreview from "@/components/AppPreview";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = () => {
    setShowDemo(true);
    toast.success("App preview loaded successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection onDemoClick={handleDemoClick} />
      
      {showDemo ? (
        <div className="flex-grow container mx-auto py-8 px-4">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">App Preview</h2>
            <Button variant="outline" onClick={() => setShowDemo(false)}>
              Back to Landing
            </Button>
          </div>
          <AppPreview />
        </div>
      ) : (
        <FeaturesSection />
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
