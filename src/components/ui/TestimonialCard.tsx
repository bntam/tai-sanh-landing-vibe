
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  content: string;
  location?: string;
  className?: string;
}

const TestimonialCard = ({ name, content, location, className }: TestimonialCardProps) => {
  return (
    <Card className={cn("h-full transition-all duration-300 hover:shadow-card bg-white border border-taisan/10", className)}>
      <CardContent className="pt-6">
        <svg
          className="h-8 w-8 text-taisan-gold mb-4 opacity-80"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="mb-4 text-base leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="border-t border-taisan/10 pt-4">
        <div>
          <p className="font-medium">{name}</p>
          {location && <p className="text-sm text-foreground/60">{location}</p>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
