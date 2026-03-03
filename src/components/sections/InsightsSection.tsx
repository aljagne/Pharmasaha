import { Calendar, ArrowRight, Clock } from "lucide-react";

const insights = [
  {
    category: "Market Analysis",
    title: "West African Pharmaceutical Market: 2024 Outlook",
    excerpt: "An in-depth analysis of growth opportunities, regulatory changes, and emerging trends shaping the pharmaceutical landscape in West Africa.",
    date: "Oct 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
  {
    category: "Regulatory Update",
    title: "New Drug Registration Guidelines in The Gambia",
    excerpt: "Understanding the latest regulatory requirements and how they impact pharmaceutical market entry strategies.",
    date: "Oct 8, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80",
  },
  {
    category: "Industry Trends",
    title: "Cold Chain Innovation in African Healthcare",
    excerpt: "How new technologies are revolutionizing pharmaceutical distribution and ensuring medicine integrity across the continent.",
    date: "Sep 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-[#001E22] border-y border-[#00363D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#745A37] font-medium text-sm uppercase tracking-wider">
              Insights & News
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Industry Intelligence
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center text-[#745A37] font-medium mt-4 md:mt-0 hover:text-[#5E482C] transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.title}
              className="group bg-[#001E22] border-y border-[#00363D] rounded-2xl overflow-hidden border border-[#C2EED0]/20 hover:border-[#745A37]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${
                    index % 2 === 0 ? "bg-[#745A37]" : "bg-[#BAB9FF]"
                  }`}>
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#745A37] transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-white/80 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {insight.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {insight.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
