'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessFlowDiagramProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ProcessFlowDiagram({ 
  steps, 
  title = "Our Process", 
  description = "A proven approach to deliver results" 
}: ProcessFlowDiagramProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background">
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

        {/* Desktop Flow */}
        <div className="hidden lg:block">
          {/* Multi-row layout for better spacing */}
          <div className="space-y-16">
            {/* Row 1: Steps with better spacing */}
            <div className="flex justify-center items-center gap-8 xl:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center w-48 xl:w-56"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Step Circle */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3c91e6] to-[#01042b] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.icon ? (
                        <span className="text-2xl">{step.icon}</span>
                      ) : (
                        step.step
                      )}
                    </div>
                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#3c91e6]/30 to-[#01042b]/30 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center bg-white dark:bg-background rounded-xl p-6 shadow-lg border min-h-[140px] flex flex-col justify-start">
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{step.description}</p>
                  </div>

                  {/* Flowing Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-10 left-full ml-4 text-[#3c91e6] z-10"
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-8 h-8" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Row 2: Connection visualization */}
            <div className="relative">
              <div className="flex justify-center">
                <motion.div
                  className="h-1 bg-gradient-to-r from-[#3c91e6] via-[#01042b] to-[#3c91e6] rounded-full"
                  style={{ width: `${(steps.length - 1) * 15}rem` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                  className="text-center text-sm text-muted-foreground bg-background px-4 py-2 rounded-full border shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Seamless workflow from start to finish
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Flow */}
        <div className="lg:hidden max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Circle */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3c91e6] to-[#01042b] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.icon ? (
                    <span className="text-xl">{step.icon}</span>
                  ) : (
                    step.step
                  )}
                </div>
                
                {/* Vertical Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#3c91e6] to-[#01042b] mx-auto mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-white dark:bg-background rounded-xl p-6 shadow-lg border">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}