
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onDemoClick: () => void;
}

const HeroSection = ({ onDemoClick }: HeroSectionProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              School Management System
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              A complete Flutter + Firebase solution for modern educational institutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={onDemoClick}
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                View Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-blue-700"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-400 rounded-xl"></div>
              <div className="bg-white p-1 rounded-xl shadow-xl">
                <img 
                  src="https://storage.googleapis.com/images.lovable.dev/app-preview-phone-frame-black-embedded.png" 
                  alt="School App Preview" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
