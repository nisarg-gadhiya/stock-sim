import FeatureCard from "./FeatureCard";
import { landingFeatures } from "../../data/landingFeatures";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 text-white">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Everything You Need to Learn Trading
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {landingFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

    </section>
  );
};

export default FeaturesSection;
