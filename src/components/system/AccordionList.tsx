import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function AccordionList({ items, className = '', allowMultiple = false }: AccordionListProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isExpanded = expandedIds.has(item.id);

        return (
          <div 
            key={item.id} 
            className="border-b border-white/10 group overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between py-6 text-left outline-none group-hover:bg-white/5 transition-colors duration-300 px-4 rounded-t-xl"
              aria-expanded={isExpanded}
              aria-controls={`content-${item.id}`}
            >
              <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isExpanded ? 'text-[#BBBAFF]' : 'text-white'}`}>
                <span className="text-white/30 font-mono text-sm mr-6 block md:inline-block mb-2 md:mb-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {item.title}
              </span>
              
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isExpanded ? 'bg-[#BBBAFF]/10 border-[#BBBAFF] text-[#BBBAFF] rotate-180' : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'}`}>
                {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={`content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} // Cinematic ease
                >
                  <div className="px-4 pb-8 md:pl-20 text-white/60 text-lg leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
