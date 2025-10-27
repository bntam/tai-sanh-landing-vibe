
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  className?: string;
}

const DoctorCard = ({ name, title, bio, imageSrc, className }: DoctorCardProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-card group", className)}>
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-serif">{name}</CardTitle>
        <CardDescription className="font-medium text-taisan">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70">{bio}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-taisan text-taisan hover:bg-taisan hover:text-white transition-colors">
          Xem thêm
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
