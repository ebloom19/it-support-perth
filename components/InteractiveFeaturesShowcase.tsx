'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Sparkles } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  color?: string;
  highlight?: boolean;
}

interface InteractiveFeaturesShowcaseProps {
  features: Feature[];
  title?: string;
  description?: string;
  variant?: 'grid' | 'carousel' | 'masonry';
}

export function InteractiveFeaturesShowcase({ 
  features,
  title = "What We Offer",
  description = "Comprehensive solutions designed to meet your specific business needs",
  variant = 'grid'
}: InteractiveFeaturesShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  if (variant === 'carousel') {
    return (
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  onHoverStart={() => setActiveFeature(index)}
                  onHoverEnd={() => setActiveFeature(null)}
                  className="group cursor-pointer"
                >
                  <Card className="h-full border-0 bg-white dark:bg-background shadow-lg relative overflow-hidden flex flex-col">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#3c91e6]/5 to-[#01042b]/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeFeature === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Highlight Badge */}
                    {feature.highlight && (
                      <motion.div
                        className="absolute top-3 right-3"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </motion.div>
                    )}

                    <CardHeader className="pb-4 relative z-10 flex-shrink-0">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="p-3 rounded-xl bg-gradient-to-br from-[#3c91e6]/10 to-[#3c91e6]/5"
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-2xl">{feature.icon}</span>
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-lg group-hover:text-[#3c91e6] transition-colors duration-300">
                            {feature.title}
                          </CardTitle>
                          <motion.div
                            className="h-0.5 bg-gradient-to-r from-[#3c91e6] to-[#01042b] rounded-full mt-2"
                            initial={{ width: 0 }}
                            animate={{ width: activeFeature === index ? "100%" : 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 flex flex-col flex-1">
                      <motion.p 
                        className="text-muted-foreground leading-relaxed flex-1"
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: activeFeature === index ? 1 : 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                      
                      <motion.div
                        className="flex items-center gap-2 mt-4 text-[#3c91e6] font-medium flex-shrink-0"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ 
                          x: activeFeature === index ? 0 : -10,
                          opacity: activeFeature === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-sm">Learn more</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    </CardContent>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#3c91e6]/20 to-[#01042b]/20 rounded-lg blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeFeature === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Default grid variant
  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={hoverVariants.hover}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="group"
            >
              <Card className="h-full border-0 bg-white dark:bg-background shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col">
                {/* Animated Background Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 dark:to-gray-800/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                <CardHeader className="pb-4 relative z-10 flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-[#3c91e6]/10 to-[#3c91e6]/5 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.2
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">{feature.icon}</span>
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-[#3c91e6] transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </div>
                  
                  {/* Animated Underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#3c91e6] to-[#01042b] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeFeature === index ? "100%" : "20%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </CardHeader>

                <CardContent className="relative z-10 flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Floating Particles Effect */}
                {activeFeature === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#3c91e6] rounded-full"
                        initial={{ 
                          x: Math.random() * 100 + "%",
                          y: "100%",
                          opacity: 0
                        }}
                        animate={{
                          y: "-10%",
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.5,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}