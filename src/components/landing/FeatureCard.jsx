const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[#1D283A] border border-slate-600 rounded-2xl p-8
                    hover:bg-[#24324a] transition-all duration-300">

      <Icon className="text-blue-500 text-4xl mb-4" />

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
