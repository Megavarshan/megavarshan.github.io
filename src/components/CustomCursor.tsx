import { useEffect, useState, useRef } from "react";

// The ClickEffect component renders a single click animation
function ClickEffect({ x, y, onComplete }: { x: number; y: number; onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 600); // Remove after animation finishes
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Generate 5 random photon streaks for a sci-fi blast effect
  const sparks = useRef(Array.from({ length: 6 }).map(() => ({
    angle: Math.random() * 360,
    distance: 40 + Math.random() * 60,
    thickness: 1.5 + Math.random() * 2,
    length: 15 + Math.random() * 20,
    delay: Math.random() * 0.05,
    color: Math.random() > 0.5 ? '#22d3ee' : '#a855f7', // mix of cyan and purple lasers
  }))).current;

  return (
    <div 
      className="pointer-events-none fixed z-[9998]"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      {/* Expanding shockwave */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0"
        style={{ 
          width: '30px', height: '30px', marginLeft: '-15px', marginTop: '-15px',
          animation: 'shockwave 0.4s cubic-bezier(0.1, 0.8, 0.2, 1) forwards'
        }}
      />

      {/* Photon streaks shooting out */}
      {sparks.map((spark, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: 0,
            top: 0,
            transformOrigin: 'left center',
            transform: `rotate(${spark.angle}deg)`,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: spark.length,
              height: spark.thickness,
              backgroundColor: spark.color,
              boxShadow: `0 0 8px ${spark.color}`,
              animation: `photon-fly 0.5s cubic-bezier(0.1, 0.8, 0.2, 1) forwards`,
              animationDelay: `${spark.delay}s`,
              opacity: 0, // start invisible until animation kicks in
              '--photon-tx': `${spark.distance}px`,
            } as React.CSSProperties}
          />
        </div>
      ))}
    </div>
  );
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // State to manage multiple simultaneous click effects
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const clickIdRef = useRef(0);
  
  // Real mouse position
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing rocket position
  const rocketPos = useRef({ x: -100, y: -100 });
  // Rocket angle
  const rocketAngle = useRef(0);
  
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (mousePos.current.x === -100 && mousePos.current.y === -100) {
        rocketPos.current = { x: e.clientX, y: e.clientY };
      }
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Only spawn click effect if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = !!target.closest('a, button, [role="button"]') || 
                          window.getComputedStyle(target).cursor === 'pointer';
                          
      if (isClickable) {
        const id = clickIdRef.current++;
        setClicks(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      }
    };
    
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    let animationFrameId: number;
    const update = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
      }

      // Calculate direction towards the mouse
      const rawDx = mousePos.current.x - rocketPos.current.x;
      const rawDy = mousePos.current.y - rocketPos.current.y;
      
      if (Math.abs(rawDx) > 1 || Math.abs(rawDy) > 1) {
         rocketAngle.current = Math.atan2(rawDy, rawDx) * (180 / Math.PI);
      }
      
      // Set the target position 40px behind the mouse so it never overlaps the circle
      const offset = 40;
      const angleRad = rocketAngle.current * (Math.PI / 180);
      const targetX = mousePos.current.x - Math.cos(angleRad) * offset;
      const targetY = mousePos.current.y - Math.sin(angleRad) * offset;
      
      // Smoothly move towards the offset target
      const tx = targetX - rocketPos.current.x;
      const ty = targetY - rocketPos.current.y;
      
      rocketPos.current.x += tx * 0.15;
      rocketPos.current.y += ty * 0.15;
      
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${rocketPos.current.x}px, ${rocketPos.current.y}px) translate(-50%, -50%)`;
        const rocketIcon = rocketRef.current.querySelector('.rocket-icon') as HTMLElement;
        if (rocketIcon) {
          rocketIcon.style.transform = `rotate(${rocketAngle.current + 45}deg)`;
        }
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isTouchDevice]);

  const removeClick = (id: number) => {
    setClicks(prev => prev.filter(c => c.id !== id));
  };

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        /* Hide the default cursor everywhere */
        body, body * {
          cursor: none !important;
        }
        
        @keyframes shockwave {
          0% {
            transform: scale(0.5);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
            border-width: 0px;
          }
        }

        @keyframes photon-fly {
          0% {
            transform: translateX(0) scaleX(0);
            opacity: 1;
          }
          20% {
            transform: translateX(calc(var(--photon-tx) * 0.2)) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: translateX(var(--photon-tx)) scaleX(0);
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Render active click effects */}
      {clicks.map(click => (
        <ClickEffect 
          key={click.id} 
          x={click.x} 
          y={click.y} 
          onComplete={() => removeClick(click.id)} 
        />
      ))}

      {/* 1. Exact mouse pointer (circle with a dot) */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{ willChange: 'transform' }}
      >
        <div 
          className={`flex items-center justify-center rounded-full border border-cyan-400 transition-all duration-75 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${isClicking ? 'scale-75' : 'scale-100'}`}
          style={{ width: '24px', height: '24px' }}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
        </div>
      </div>

      {/* 2. Trailing Rocket */}
      <div
        ref={rocketRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="relative flex h-12 w-12 items-center justify-center">
          {/* Glowing dark aura / thruster effect behind the rocket */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900 to-indigo-950 opacity-40 blur-md" />
          
          <div className="rocket-icon absolute flex items-center justify-center transition-transform duration-100 ease-out">
            <span className="text-3xl drop-shadow-[0_0_12px_rgba(139,92,246,0.8)] filter">
              🚀
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
