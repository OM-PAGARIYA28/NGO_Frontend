import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import faqs from "../data/faqs.json";

const FaqComponent = () => {
    return (
        <div className="p-8 bg-gray-50">
            {/* FAQs Title */}
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                Frequently Asked Questions
            </h2>

            {/* Accordion for FAQs */}
            <div className="max-w-6xl mx-auto">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="w-full py-4 text-left font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default FaqComponent;
