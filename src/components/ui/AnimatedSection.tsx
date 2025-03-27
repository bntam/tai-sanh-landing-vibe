
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  once?: boolean;
  threshold?: number;
  id?: string;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(section);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [once, threshold]);

  const getAnimationClass = () => {
    switch (direction) {
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "up":
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={cn(
        "transition-opacity duration-500",
        {
          "opacity-0": !isVisible,
          [getAnimationClass()]: isVisible,
        },
        className
      )}
      style={{
        animationDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
