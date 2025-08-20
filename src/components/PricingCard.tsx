import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp, Car, Sparkles, Home } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

export const PricingCard = ({ title, price, description, features, icon, popular }: PricingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`relative transition-all duration-300 hover:shadow-glow ${popular ? 'border-accent shadow-glow' : ''}`}>
      {popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-accent-gradient text-accent-foreground">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10">
          {icon}
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="text-3xl font-bold text-accent">{price}</div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full mb-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Less Info' : 'More Info & Contact'}
          {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
        
        {isExpanded && (
          <div className="space-y-4 animate-accordion-down">
            <div>
              <h4 className="font-semibold mb-2">What's included:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-card-gradient rounded-lg border">
              <h4 className="font-semibold mb-2">Contact & Booking:</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> <a href="tel:+447123456789" className="text-accent hover:underline">+44 7123 456 789</a></p>
                <p><strong>Email:</strong> <a href="mailto:contact@cardetailing.co.uk" className="text-accent hover:underline">contact@cardetailing.co.uk</a></p>
                <p className="text-muted-foreground mt-2">
                  <strong>Note:</strong> Prices may vary based on vehicle size and condition. Contact for exact quote.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Pre-configured pricing options
export const pricingOptions = [
  {
    title: "Exterior Wash",
    price: "£15",
    description: "Professional exterior cleaning",
    features: [
      "Complete exterior wash",
      "Wheel and tire cleaning",
      "Glass cleaning",
      "Exterior trim treatment",
      "Quick inspection"
    ],
    icon: <Car className="h-6 w-6 text-accent" />
  },
  {
    title: "Full Service",
    price: "£30",
    description: "Complete interior & exterior detailing",
    features: [
      "Everything from exterior wash",
      "Complete interior vacuum",
      "Dashboard and console cleaning",
      "Seat cleaning and conditioning",
      "Interior glass cleaning",
      "Air freshening"
    ],
    icon: <Sparkles className="h-6 w-6 text-accent" />,
    popular: true
  },
  {
    title: "Interior Only",
    price: "£15",
    description: "Deep interior cleaning",
    features: [
      "Thorough interior vacuum",
      "Seat cleaning and treatment",
      "Dashboard detailing",
      "Door panel cleaning",
      "Floor mat cleaning",
      "Interior glass cleaning"
    ],
    icon: <Home className="h-6 w-6 text-accent" />
  }
];