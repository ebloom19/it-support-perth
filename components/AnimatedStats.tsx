'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  number: string;
  label: string;
  description?: string;
  icon?: string;
  prefix?: string;
  suffix?: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
  title?: string;
  description?: string;
  variant?: 'default' | 'gradient' | 'cards';
}

function CountingNumber({ 
  target, 
  duration = 2000,
  prefix = '',
  suffix = '' 
}: { 
  target: string; 
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract number from target string
    const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
    
    if (isNaN(numericValue)) {
      // If it's not a number, just display the target
      setCount(numericValue);
      return;
    }

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(numericValue * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  const displayValue = target.includes('%') 
    ? Math.round(count) + '%'
    : target.includes('.')
    ? count.toFixed(1)
    : target.includes('k')
    ? Math.round(count) + 'k'
    : target.includes('Min')
    ? Math.round(count) + ' Min'
    : Math.round(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function AnimatedStats({ 
  stats, 
  title = "Our Track Record",
  description = "Numbers that speak for themselves",
  variant = 'default' 
}: AnimatedStatsProps) {
  if (variant === 'cards') {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#01042b] to-[#3c91e6] bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden bg-white dark:bg-background rounded-2xl p-8 shadow-lg border group-hover:shadow-xl transition-all duration-500">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3c91e6]/5 to-[#01042b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center">
                    {stat.icon && (
                      <div className="text-4xl mb-4">{stat.icon}</div>
                    )}
                    <div className="text-4xl md:text-5xl font-bold text-[#3c91e6] mb-3">
                      <CountingNumber 
                        target={stat.number}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                    {stat.description && (
                      <div className="text-sm text-muted-foreground">{stat.description}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'gradient') {
    return (
      <section className="py-20 bg-gradient-to-r from-[#3c91e6]/10 to-[#01042b]/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.icon && (
                  <div className="text-5xl mb-4">{stat.icon}</div>
                )}
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#3c91e6] to-[#01042b] bg-clip-text text-transparent mb-3">
                  <CountingNumber 
                    target={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
                {stat.description && (
                  <div className="text-muted-foreground">{stat.description}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-16 bg-gradient-to-r from-[#3c91e6]/5 to-[#01042b]/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#3c91e6] mb-2">
                <CountingNumber target={stat.number} />
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              {stat.description && (
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}