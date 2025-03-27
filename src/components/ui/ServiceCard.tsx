import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <Card className={cn("h-full border border-transparent hover:border-taisan-light/30 transition-all duration-300 hover:shadow-card overflow-hidden group", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-taisan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md flex items-center justify-center bg-taisan-light/10 text-taisan">
            {icon}
          </div>
          <CardTitle className="text-xl font-serif">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-foreground/70">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
