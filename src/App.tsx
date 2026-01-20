import './App.css'  

// Updated with generic Agricultural names (No Kubota)
const tractorCards = [
  {
    id: 1,
    title: "Hayleys H-Series 4WD",
    description: "Maximum power for tough Sri Lankan terrain.",
    image: "https://images.unsplash.com/photo-1625246333195-f819634b8681?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Agri-Tech Harvester",
    description: "High efficiency harvesting for large scale paddy fields.",
    image: "https://images.unsplash.com/photo-1595245869403-0c46b539c321?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Eco Field Master",
    description: "Modern sustainable farming with low fuel consumption.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function App() {
  return (
    <main 
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat font-sans"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Main Layout Container --- */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between py-8">

        {/* --- HEADER (Logo) --- */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
          <div className="bg-white/90 p-3 rounded-lg shadow-md inline-block backdrop-blur-sm">
            <img 
              src="/logo.png" 
              alt="Hayleys Agriculture" 
              className="h-12 w-auto object-contain" 
            />
          </div>
        </div>

        {/* --- CONTENT (Cards) --- */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10 mt-10">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tractorCards.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-2xl bg-[#9d2e87] hover:bg-[#b03496] transition-all duration-300 shadow-2xl border border-white/20"
              >
                {/* Image Section */}
                <div className="h-56 w-full overflow-hidden bg-gray-300 relative">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xs">Loading...</span>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 block"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-5 leading-relaxed">{item.description}</p>
                  
                  <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold backdrop-blur-sm transition-colors border border-white/30 tracking-wide">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}