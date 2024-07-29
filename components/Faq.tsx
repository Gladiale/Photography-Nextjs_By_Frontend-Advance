"use client";

import { Fade } from "react-awesome-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
            <h2 className="section-title mb-12 text-center mx-auto">Our Studio</h2>
          </Fade>
        </div>
        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="ms-3">01. What kind of photography equipment do you use?</div>
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ut consequuntur
                inventore perferendis, reprehenderit, delectus labore autem similique asperiores
                ullam at. Voluptate eos recusandae adipisci voluptas doloremque, qui modi tempora.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="ms-3">02. Do I have to come to your studio to view my photos?</div>
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ut consequuntur
                inventore perferendis, reprehenderit, delectus labore autem similique asperiores
                ullam at. Voluptate eos recusandae adipisci voluptas doloremque, qui modi tempora.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="ms-3">03. How long have you been in business?</div>
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ut consequuntur
                inventore perferendis, reprehenderit, delectus labore autem similique asperiores
                ullam at. Voluptate eos recusandae adipisci voluptas doloremque, qui modi tempora.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Fade>
      </div>
    </section>
  );
};

export default Faq;
