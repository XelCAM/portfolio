
export default function Banner() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url('https://wallpapercave.com/wp/wp12050249.jpg')`,
          filter: "brightness(0.5) blur(3px)", 
        }}
      ></div>
      <div className="text-white text-center flex justify-center items-center min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-8xl font-bold mb-4">Charles Axel Morante</h1>
          <p className="text-lg mb-8">
            A diligent student at the University of Pangasinan, known for my insatiable curiosity and passion for learning.        
          </p>
          <div className="flex justify-center gap-2">
            <a className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" href="#projects">
              Explore my works
            </a>
            <a className="hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" href="#contactme">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
