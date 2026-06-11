import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Monitor, Award } from 'lucide-react';
import Button from '../atoms/Button';
import { fadeUpItem } from '../../lib/animations';
import { openWhatsApp } from '../../lib/utils/whatsapp';

const ProgramCard = ({ prog, index }) => {
    return (
        <motion.div
            key={index}
            variants={fadeUpItem}
            className="group premium-card p-8 flex flex-col lg:flex-row gap-8"
        >
            {/* Left: number + title */}
            <div className="lg:w-72 flex-shrink-0">
                <div className="flex items-center gap-3 mb-3">
                    <span className="font-playfair text-4xl font-bold text-royal/80">{prog.number}</span>
                    <span className="eyebrow-text">{prog.level}</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-ink mb-2">{prog.level}</h3>
                <p className="text-sm text-ink-muted italic mb-4">{prog.subtitle}</p>

                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-ink-light">
                        <Clock size={14} className="text-royal flex-shrink-0" />
                        Duration: <span className="font-medium text-ink">{prog.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-light">
                        <Monitor size={14} className="text-royal flex-shrink-0" />
                        Mode: <span className="font-medium text-ink">{prog.mode}</span>
                    </div>
                </div>

                <Button
                    variant="primary"
                    onClick={() =>
                        openWhatsApp(
                            prog.whatsappMessage
                        )
                    }
                >
                    {prog.ctaLabel}
                </Button>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-border-light flex-shrink-0" />

            {/* Right: topics + outcome */}
            <div className="flex-1">
                <p className="text-xs font-bold tracking-widest uppercase text-ink-muted mb-4">What students will learn:</p>
                <ul className="space-y-2 mb-6">
                    {prog.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-light">
                            <CheckCircle size={15} className="text-royal mt-0.5 flex-shrink-0" />
                            {t}
                        </li>
                    ))}
                </ul>

                <div className="bg-royal-50 border border-royal/15 rounded-xl px-5 py-4">
                    <div className="flex items-start gap-3">
                        <Award size={16} className="text-royal mt-0.5 flex-shrink-0" />
                        <div>
                            <p className="text-xs font-bold tracking-widest uppercase text-royal mb-1">Outcome</p>
                            <p className="text-sm text-ink-light">{prog.outcome}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProgramCard;