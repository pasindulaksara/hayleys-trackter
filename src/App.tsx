import  "./App.css"
   

export default function App() {
  return (
    // Main Container: Locked to screen height, no scrolling
    <div className="relative w-full h-screen overflow-hidden font-sans bg-gray-100">
      
      {/* --- 1. FULL BACKGROUND IMAGE --- */}
      {/* Covers the whole screen initially, but we cover the bottom part with white later */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* --- LOGO --- */}
        {/* Floating in the sky area */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <div className="bg-white px-10 py-4 rounded-xl shadow-lg">
            <img 
              src="/logo.jpg" 
              alt="Hayleys Agriculture" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* --- 2. WHITE FOOTER SECTION --- */}
      {/* This sits at the bottom 30% of the screen */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white z-0 flex items-end pb-6">
        {/* Footer Text */}
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[#2f4f2f] text-[10px] md:text-xs font-bold tracking-wide">
          <p className="text-center md:text-left">
            Hayleys Agriculture Holding Limited. &nbsp; No. 25, Foster Lane, Colombo 10, Sri Lanka
          </p>
          <p className="text-center md:text-right mt-1 md:mt-0">
            info@agro.hayleys.com &nbsp;&nbsp;&nbsp; Copyright © 2026
          </p>
        </div>
      </div>

      {/* --- 3. OVERLAPPING CARDS LAYER --- */}
      {/* Absolute positioning to float exactly over the split line (70% / 30%) */}
      {/* We center this layer vertically around the 70% mark */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none translate-y-16">
        
        {/* Cards Container - Max width constrained to keep cards SMALL */}
        <div className="w-full max-w-5xl px-4 pointer-events-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            
            {/* Card 1 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
              <img 
                src="/card1.jpg" 
                alt="Tech Clinic" 
                className="w-full h-full "
              />
            </div>

            {/* Card 2 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
              <img 
                src="/card2.jpg" 
                alt="Kubota Tractor" 
                className="w-full h-full "
              />
            </div>

            {/* Card 3 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
              <img 
                src="/card3.jpg" 
                alt="Kubota Spare Parts" 
                className="w-full h-full "
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}