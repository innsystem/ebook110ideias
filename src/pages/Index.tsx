
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import PricingSection from '@/components/PricingSection';
import AuthorSection from '@/components/AuthorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header com fundo gradiente escuro */}
      <div className="bg-gradient-dark">
        <Navigation />
        <HeroSection />
      </div>
      
      {/* Seções do conteúdo */}
      <ContentSection />
      <TargetAudienceSection />
      <PricingSection />
      <AuthorSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Index;
