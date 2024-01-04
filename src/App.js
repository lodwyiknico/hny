import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023👋"]);

  const particlesInitial = async(engine)=>{
    await loadFireworksPreset(engine);
  }
  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
   <>
    <Particles
      init={particlesInitial}
      options={{preset: "fireworks"}}
    />
    <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <Typewriter 
            words={newYearMessage}
            cursor
            cursorStyle={"_"}
            loop={false}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat",
                "Tahun",
                "Baru",
                "✨HNY 2024✨",
              ])
            }
          />
        </div>
    </div>
   </>
  );
}

export default App;
