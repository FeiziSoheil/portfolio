"use client"
import React, { useEffect, useRef } from 'react';
import createGlobe, { type COBEOptions } from 'cobe';

interface Marker {
  location: [number, number];
  size: number;
}

interface CobeGlobeProps {
  width?: number;
  height?: number;
  markers?: Marker[];
  phi?: number;
  theta?: number;
  dark?: number;
  diffuse?: number;
  scale?: number;
  mapSamples?: number;
  mapBrightness?: number;
  baseColor?: [number, number, number];
  glowColor?: [number, number, number];
  markerColor?: [number, number, number];
  offset?: [number, number];
  rotationSpeed?: number;
}

const CobeGlobe: React.FC<CobeGlobeProps> = ({
  width = 1000,
  height = 1000,
  markers = [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.5 }
  ],
  phi = 0,
  theta = 0,
  dark = 1,
  diffuse = 6,
  scale = 1,
  mapSamples = 16000,
  mapBrightness = 6,
  baseColor = [1, 1, 1],
  glowColor = [1, 1, 1],
  markerColor = [1, 0.5, 1],
  offset = [1, 1],
  rotationSpeed = 0.01
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef<number>(phi);
  const requestRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current) return;

    const options: COBEOptions = {
      devicePixelRatio: 2,
      width,
      height,
      phi,
      theta,
      dark,
      diffuse,
      scale,
      mapSamples,
      mapBrightness,
      baseColor,
      markerColor,
      glowColor,
      offset,
      markers,
      onRender: (state: Record<string, number>) => {
        state.phi = phiRef.current;
        phiRef.current += rotationSpeed;
      }
    };

    const globe = createGlobe(canvasRef.current, options);

    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      globe.destroy();
    };
  }, [
    width,
    height,
    theta,
    dark,
    diffuse,
    scale,
    mapSamples,
    mapBrightness,
    rotationSpeed,
    markers,
    baseColor,
    markerColor,
    glowColor,
    offset
  ]);

  return (
    <canvas
      className="absolute top-12"
      ref={canvasRef}
      style={{
        width: width / 2,
        height: height / 2,
        cursor: 'grab',
        contain: 'layout paint size',
      }}
      width={width}
      height={height}
    />
  );
};

export default CobeGlobe;