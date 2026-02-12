import React, { useRef, useEffect, useState } from "react";
import { Renderer, Program, Mesh, Triangle, Texture } from "ogl";

const RippleImg = ({
  imageSrc,
  rippleIntensity = 0.04,
  mouseInteractionRadius = 0.5,
  // speed = 1.0,
}) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePositionRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const mouseInfluenceRef = useRef(0);

  // PRE-LOADER: Ensures the image source is valid before WebGL touches it
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.classList.add('ripple-img')
    img.onload = () => setIsLoaded(true);
    img.onerror = () => console.error("Could not load image at:", imageSrc);
  }, [imageSrc]);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      alpha: true,
    });
    const gl = renderer.gl;
    const container = containerRef.current;
    container.appendChild(gl.canvas);

    // TEXTURE SETUP
    const texture = new Texture(gl);
    const img = new Image();
    img.crossOrigin = "anonymous"; 
    img.src = imageSrc;
    img.onload = () => {
      texture.image = img;
      if (uniforms.uImageAspect) {
        uniforms.uImageAspect.value = img.width / img.height;
      }
    };

    const vert = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

const frag = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform float uImageAspect;
      uniform sampler2D uTexture; 
      uniform vec2 mousePosition;
      uniform float mouseInfluence;
      uniform float mouseInteractionRadius;
      uniform float rippleIntensity;
      varying vec2 vUv;

      void main() {
        // 1. Calculate Aspects
        float screenAspect = iResolution.x / iResolution.y;
        
        // 2. Object-fit: cover logic
        // We determine if the screen is "wider" or "taller" than the image
        vec2 uv = vUv;
        vec2 ratio = vec2(
            min(screenAspect / uImageAspect, 1.0),
            min(uImageAspect / screenAspect, 1.0)
        );

        // Center and scale the UVs
        vec2 displayUv = (uv - 0.5) * ratio + 0.5;

        // 3. Ripple Math (Using aspect-corrected distances)
        vec2 aspectCorrectedUv = vec2(vUv.x * screenAspect, vUv.y);
        vec2 aspectCorrectedMouse = vec2(mousePosition.x * screenAspect, mousePosition.y);
        
        float dist = distance(aspectCorrectedUv, aspectCorrectedMouse);
        
        // Decay ensures the ripple dies out far from the mouse
        float decay = exp(-dist * dist / (mouseInteractionRadius * 0.25));
        float wave = sin(dist * 25.0 - iTime * 7.0);
        float interaction = mouseInfluence * decay * wave * rippleIntensity;
        
        // 4. Apply Distortion to the scaled UVs
        // We use the normalized vector of the distance to push pixels away
        vec2 dir = normalize(aspectCorrectedUv - aspectCorrectedMouse);
        
        // We apply the distortion to our 'displayUv' which is already 'covered'
        vec2 distortedUv = displayUv + (dir * interaction);

        gl_FragColor = texture2D(uTexture, distortedUv);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [gl.canvas.width, gl.canvas.height] },
      uImageAspect: { value: 1 },
      uTexture: { value: texture },
      mousePosition: { value: [0.5, 0.5] },
      mouseInfluence: { value: 0 },
      mouseInteractionRadius: { value: mouseInteractionRadius },
      rippleIntensity: { value: rippleIntensity },
    };

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
    const mesh = new Mesh(gl, { geometry, program });

    let animationId;
    const render = (t) => {
      animationId = requestAnimationFrame(render);
      uniforms.iTime.value = t * 0.001;

      mousePositionRef.current.x += (targetMouseRef.current.x - mousePositionRef.current.x) * 0.1;
      mousePositionRef.current.y += (targetMouseRef.current.y - mousePositionRef.current.y) * 0.1;
      uniforms.mousePosition.value = [mousePositionRef.current.x, 1.0 - mousePositionRef.current.y];

      const targetInf = mouseInfluenceRef.current;
      uniforms.mouseInfluence.value += (targetInf - uniforms.mouseInfluence.value) * 0.1;

      renderer.render({ scene: mesh });
    };
    animationId = requestAnimationFrame(render);

    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w, h];
    };
    window.addEventListener("resize", resize);
    resize();

    const move = (e) => {
      const rect = container.getBoundingClientRect();
      targetMouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
      mouseInfluenceRef.current = 1.0;
    };
    
    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", () => mouseInfluenceRef.current = 0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      container.innerHTML = "";
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [isLoaded, imageSrc]); // Only fires once image is confirmed loaded

  return (
    <div ref={containerRef} className="w-full h-full bg-black/10">
      {!isLoaded && <div className="absolute inset-0 flex items-center justify-center text-white/20">Loading...</div>}
    </div>
  );
};

export default RippleImg;