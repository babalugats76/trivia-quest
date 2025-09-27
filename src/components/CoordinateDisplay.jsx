import { useEffect, useState } from "react";

/**
 * COORDINATE DISPLAY - Development Helper
 *
 * This component helps find x,y coordinates for zone positioning
 */
export default function CoordinateDisplay() {
  const [coordinates, setCoordinates] = useState({
    screenX: 0,
    screenY: 0,
    svgX: 0,
    svgY: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mapContainer = document.querySelector(".map-canvas");
      if (!mapContainer) return;

      const rect = mapContainer.getBoundingClientRect();
      const isOverMap =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!isOverMap) {
        setIsVisible(false);
        return;
      }

      setIsVisible(true);

      const svg = mapContainer.querySelector("svg");
      if (!svg) return;

      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
      const screenX = Math.round(e.clientX - rect.left);
      const screenY = Math.round(e.clientY - rect.top);
      setCoordinates({
        screenX,
        screenY,
        svgX: Math.round(svgP.x * 100) / 100,
        svgY: Math.round(svgP.y * 100) / 100,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="coordinate-display">
          SVG: x={coordinates.svgX}, y={coordinates.svgY}
          <br />
          Screen: x={coordinates.screenX}, y={coordinates.screenY}
        </div>
      )}
    </>
  );
}
