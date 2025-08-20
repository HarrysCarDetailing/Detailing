import { Button } from "@/components/ui/button";
import { PricingCard, pricingOptions } from "@/components/PricingCard";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Clock, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-car-detailing.jpg";

const Index = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground">
            Harry's Car <span className="text-transparent bg-clip-text bg-accent-gradient">Detailing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Professional car detailing services that bring out the best in your vehicle. Quality, precision, and care in every detail.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToPricing}
            className="text-lg px-8 py-4 h-auto"
          >
            View Our Services
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality car detailing at unbeatable prices. We're passionate about making your car look great without breaking the bank.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
                <p className="text-muted-foreground">
                  Get professional-quality car detailing at prices that won't hurt your wallet. Great value for money.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Care</h3>
                <p className="text-muted-foreground">
                  Your car gets my full attention and care. I treat every vehicle like it's my own.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="mx-auto mb-4 p-3 rounded-full bg-accent/10 w-fit">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliable & Punctual</h3>
                <p className="text-muted-foreground">
                  We value your time and always deliver our services on schedule with consistent quality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 border shadow-elegant">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">About Our Service</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Harry! I'm passionate about cars and love making them look their best. 
                While I may not have decades of experience, I make up for it with enthusiasm, attention to detail, 
                and competitive prices that won't empty your wallet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's a quick exterior wash or a comprehensive full detail, I take pride in my work 
                and guarantee you'll be happy with the results. Your car deserves to look great without costing a fortune.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose from our range of professional detailing packages. All prices are starting rates and may vary based on vehicle size and condition.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Notttingham, Sherwood/Arnold</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingOptions.map((option, index) => (
              <PricingCard
                key={index}
                title={option.title}
                price={option.price}
                description={option.description}
                features={option.features}
                icon={option.icon}
                popular={option.popular}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="bg-card border rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Important Pricing Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Vehicle Size Adjustments:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Small cars (hatchbacks): Standard pricing</li>
                    <li>• Medium cars (saloons): +£2-5</li>
                    <li>• Large cars (SUVs, vans): +£5-10</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Condition Adjustments:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Light cleaning: Standard pricing</li>
                    <li>• Moderate dirt/stains: +£3-8</li>
                    <li>• Heavy cleaning required: +£8-10</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to give your car the treatment it deserves? Contact us today for a personalized quote.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call or Text</h3>
              <a 
                href="tel:+44 7403 237308" 
                className="text-2xl font-bold text-accent hover:underline"
              >
                +44 7403 237308
              </a>
              <p className="text-muted-foreground mt-2">Available 7 days a week</p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a 
                href="mailto:contact@harrymarrittknight@gmail.com" 
                className="text-xl font-bold text-accent hover:underline break-all"
              >
                contact@harrymarrittknight@gmail.com
              </a>
              <p className="text-muted-foreground mt-2">We'll respond within 24 hours</p>
            </Card>
          </div>

          <Button 
            variant="cta" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
            onClick={() => window.location.href = 'tel:+447403237308'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Book Your Detail Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;