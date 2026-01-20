import  "./App.css"
   
 

export default function App() {
  return (
    // Main Container
    // Mobile: min-h-screen (allows scrolling), flex-col
    // Desktop: h-screen (locked), overflow-hidden, block
    <div className="relative w-full min-h-screen flex flex-col md:block md:h-screen md:overflow-hidden font-sans bg-white">
      
      {/* --- 1. BACKGROUND IMAGE SECTION --- */}
      {/* Mobile: Height 50vh (half screen), Relative */}
      {/* Desktop: Height 70%, Absolute top */}
      <div 
        className="relative w-full h-[50vh] md:absolute md:top-0 md:left-0 md:h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        {/* --- LOGO --- */}
        {/* Centered near top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4">
          <div className="bg-white px-6 py-3 md:px-10 md:py-4 rounded-xl shadow-lg">
            <img 
              src="/logo.jpg" 
              alt="Hayleys Agriculture" 
              className="h-10 md:h-16 w-auto object-contain" 
            />
          </div>
        </div>
      </div>

      {/* --- 2. CARDS SECTION --- */}
      {/* Mobile: Negative margin (-mt-24) to pull cards up into image, Normal flow */}
      {/* Desktop: Absolute center, locked in position */}
      <div className="relative z-10 px-6 -mt-24 mb-12 md:mb-0 md:mt-0 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:translate-y-16 pointer-events-none">
        
        {/* Cards Wrapper */}
        <div className="w-full max-w-5xl pointer-events-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 md:hover:-translate-y-2">
              <img 
                src="/card1.jpg" 
                alt="Tech Clinic" 
                className="w-full h-full "
              />
            </div>

            {/* Card 2 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 md:hover:-translate-y-2">
              <img 
                src="/card2.jpg" 
                alt="Kubota Tractor" 
                className="w-full h-full "
              />
            </div>

            {/* Card 3 */}
            <div className="group relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform transition-transform duration-300 hover:scale-105 md:hover:-translate-y-2">
              <img 
                src="/card3.jpg" 
                alt="Kubota Spare Parts" 
                className="w-full h-full "
              />
            </div>

          </div>
        </div>
      </div>

      {/* --- 3. FOOTER SECTION --- */}
      {/* Mobile: Normal block at bottom, centered text */}
      {/* Desktop: Absolute bottom 30%, aligns to grid */}
      <div className="relative bg-white pb-8 px-6 md:absolute md:bottom-0 md:left-0 md:w-full md:h-[30%] md:z-0 md:flex md:items-end md:pb-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#2f4f2f] text-[10px] md:text-xs font-bold tracking-wide gap-2">
          <p className="text-center md:text-left">
            Hayleys Agriculture Holding Limited. &nbsp; No. 25, Foster Lane, Colombo 10, Sri Lanka
          </p>
          <p className="text-center md:text-right">
            info@agro.hayleys.com &nbsp;&nbsp;&nbsp; Copyright © 2026
          </p>
        </div>
      </div>

    </div>
  );
}