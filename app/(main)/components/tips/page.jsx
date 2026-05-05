import React from "react";
import { Droplet, Sun, LayoutHeaderColumns, Umbrella } from "@gravity-ui/icons";

const SummerCare = () => {
  const tips = [
    {
      title: "Deep Hydration",
      desc: "Drink at least 3L of water. Add lemon or mint for a refreshing electrolyte boost.",
      icon: <Droplet className="text-blue-500" size={24} />,
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "SPF is Mandatory",
      desc: "Apply SPF 50+ every 2 hours, even indoors. Protection is the best anti-aging.",
      icon: <Sun className="text-orange-500" size={24} />,
      bg: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      title: "Breathable Fabrics",
      desc: "Switch to linen or organic cotton to allow your skin to breathe in the humidity.",
      icon: <LayoutHeaderColumns className="text-teal-500" size={24} />,
      bg: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      title: "After-Sun Care",
      desc: "Use Aloe Vera based gels to soothe skin after long outdoor grocery runs.",
      icon: <Umbrella className="text-rose-500" size={24} />,
      bg: "bg-rose-50 dark:bg-rose-900/20",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
            SUMMER <span className="text-orange-500">CARE GUIDE</span>
          </h2>
          <p className="text-zinc-500 mt-4 mb-3 font-medium">Stay fresh, protected, and hydrated all season long.</p>
        </div>

        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => (
            <div key={idx} className={`${tip.bg} p-8 rounded-[32px] border border-white/50 dark:border-zinc-800 transition-transform hover:-translate-y-2`}>
              <div className="mb-4 p-3 bg-white dark:bg-zinc-900 w-fit rounded-2xl shadow-sm">
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCare;