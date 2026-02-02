import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#1D283A] py-20 text-center text-white px-10 rounded-2xl border border-slate-600">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Your Trading Journey?
      </h2>

      <p className="text-slate-400 mb-8 max-w-xl mx-auto">
        Join thousands of traders practicing their skills with virtual portfolios.
      </p>

      <button
        onClick={() => navigate("/auth")}
        className="bg-blue-500 hover:bg-blue-600
                   text-black font-semibold
                   px-8 py-3 rounded-xl
                   transition-all duration-300"
      >
        Create Free Account
      </button>

    </section>
  );
};

export default CTASection;
