'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const accordionData = [
    {
        question: 'What is Neueu’s weight loss program?',
        answer:
            'Neueu offers a medication-assisted weight loss program designed to help you achieve sustainable results. Our virtual clinic provides personalized plans tailored to your health needs, prescribed by licensed medical professionals.',
    },
    {
        question: 'How does the virtual weight loss program work?',
        answer:
            'You’ll start with an online consultation where our licensed clinicians assess your goals and medical history. Based on that, we create a customized weight loss plan, including medication (if prescribed), lifestyle recommendations, and ongoing support.',
    },
    {
        question: 'What medications are used in the program?',
        answer:
            'Our licensed medical team may prescribe clinically approved weight loss medications based on your specific needs. These could include nutritional guidance, exercise plans and prescribed medication for patients that are eligible.',
    },
    {
        question: 'Is the program safe for everyone?',
        answer:
            'We prioritize safety and effectiveness. Before starting, our licensed providers evaluate your medical history to ensure the program is suitable for you. If you have pre-existing conditions, we’ll work with you to find the best approach.',
    },
    {
        question: 'How soon can I see results?',
        answer:
            'Results vary for each person, but many clients begin noticing significant weight loss within the first few weeks. Consistency with your plan and lifestyle adjustments will help you achieve the best outcomes.',
    },
    {
        question: 'Which States do we Services?',
        answer:
            'We are currently providing services in Texas and Oregon.',
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            className="bg-white px-6 py-5 rounded-2xl border-l-[10px] border-[#C28686] w-full cursor-pointer"
            onClick={ onClick }
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, amount: 0.2 } }
            transition={ { duration: 0.5 } }
        >
            <div className="flex justify-between items-center text-primary font-semibold md:text-lg text-sm">
                <span>{ question }</span>
                <span>{ isOpen ? '−' : '+' }</span>
            </div>

            <AnimatePresence initial={ false }>
                { isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={ {
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        } }
                        transition={ { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
                        className="overflow-hidden"
                    >
                        <div className="pt-4 text-primary text-sm leading-relaxed">
                            { answer }
                        </div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </motion.div>
    );
};

export default function AccordionSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full lg:w-2/3 md:w-3/4 mx-auto space-y-5 py-16 px-4">
            { accordionData.map((item, index) => (
                <AccordionItem
                    key={ index }
                    question={ item.question }
                    answer={ item.answer }
                    isOpen={ openIndex === index }
                    onClick={ () => toggleAccordion(index) }
                />
            )) }
        </div>
    );
}
