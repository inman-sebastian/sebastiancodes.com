"use client"

import * as React from "react";

export type GlitchImageProps = {
    src: string;
    intensity?: number; // 0..1 controls how severe glitches are
    frequency?: number; // 0..1 controls how often glitches occur
    animate?: boolean; // whether to continuously animate
    className?: string;
}

export default function GlitchImage({ 
    src, 
    intensity = 0.3, 
    frequency = 0.15,
    animate = true,
    className = ""
}: GlitchImageProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const imageRef = React.useRef<HTMLImageElement | null>(null);
    const rafRef = React.useRef<number | null>(null);
    
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const image = new Image();
        image.crossOrigin = "anonymous";
        
        image.onload = () => {
            imageRef.current = image;
            
            // Set canvas size to match image
            const dpr = window.devicePixelRatio || 1;
            canvas.width = image.width * dpr;
            canvas.height = image.height * dpr;
            canvas.style.width = `${image.width}px`;
            canvas.style.height = `${image.height}px`;
            ctx.scale(dpr, dpr);
            
            // Draw initial frame
            drawGlitch();
            
            // Start animation if enabled
            if (animate) {
                startAnimation();
            }
        };
        
        image.src = src;

        function drawGlitch() {
            if (!imageRef.current || !ctx || !canvas) return;
            
            const img = imageRef.current;
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw base image
            ctx.drawImage(img, 0, 0);
            
            // Apply glitch effect with random slices
            const shouldGlitch = Math.random() < frequency;
            
            if (shouldGlitch) {
                const numSlices = Math.floor(3 + Math.random() * 8);
                
                for (let i = 0; i < numSlices; i++) {
                    const sliceY = Math.random() * img.height;
                    const sliceHeight = 1 + Math.random() * 15;
                    
                    // Random horizontal offset
                    const offsetX = (Math.random() - 0.5) * intensity * 50;
                    
                    // Randomly apply RGB channel separation
                    if (Math.random() < 0.3) {
                        // RGB channel shift
                        const channelShift = intensity * 5;
                        
                        ctx.globalCompositeOperation = 'lighter';
                        
                        // Red channel
                        ctx.globalAlpha = 0.8;
                        ctx.drawImage(
                            img,
                            0, sliceY, img.width, sliceHeight,
                            offsetX - channelShift, sliceY, img.width, sliceHeight
                        );
                        
                        // Green channel (no shift)
                        ctx.drawImage(
                            img,
                            0, sliceY, img.width, sliceHeight,
                            offsetX, sliceY, img.width, sliceHeight
                        );
                        
                        // Blue channel
                        ctx.drawImage(
                            img,
                            0, sliceY, img.width, sliceHeight,
                            offsetX + channelShift, sliceY, img.width, sliceHeight
                        );
                        
                        ctx.globalCompositeOperation = 'source-over';
                        ctx.globalAlpha = 1;
                    } else {
                        // Simple horizontal displacement
                        ctx.drawImage(
                            img,
                            0, sliceY, img.width, sliceHeight,
                            offsetX, sliceY, img.width, sliceHeight
                        );
                    }
                }
            }
        }
        
        function startAnimation() {
            function loop() {
                drawGlitch();
                // Randomize frame rate for more organic glitching
                const delay = 50 + Math.random() * 150;
                rafRef.current = window.setTimeout(() => {
                    rafRef.current = requestAnimationFrame(loop);
                }, delay);
            }
            loop();
        }
        
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                clearTimeout(rafRef.current);
            }
        };
    }, [src, intensity, frequency, animate]);

    return (
        <canvas 
            ref={canvasRef} 
            className={className}
            aria-hidden="true"
        />
    );
}