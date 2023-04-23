import { useCallback, useState, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

const Background = () => {
  const [delayedRender, setDelayedRender] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDelayedRender(true);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return delayedRender ? (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions} // Update the JSON to update the background style
    />
  ) : null;
};

export default Background;
