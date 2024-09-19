import { m } from "framer-motion";

const whyChooseContent = [
  {
    heading: "Structured learning paths",
    paragraph: "Tailored curriculum and mentorship.",
  },
  {
    heading: "Practical experience",
    paragraph: "Work on real-world projects.",
  },
  {
    heading: "Career development services",
    paragraph:
      "Job opportunities, CV writing, personal branding and proposal writing.",
  },
  {
    heading: "Networking",
    paragraph: "Connect with recruiters and hr professionals in our community.",
  },
];
const headingVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const WhyChooseSection = () => {
  return (
    <section className="why-choose py-24" id="about-us">
      <div className="container flex lg:flex-row flex-col gap-10 justify-center items-center">
        <m.h2
          variants={headingVariants}
          viewport={{ once: true, amount: 0.8 }}
          whileInView="visible"
          initial="hidden"
          className="lg:text-[44px] text-dark-blue-600 font-semibold text-wrap md:text-4xl sm:text-3xl text-2xl text-center lg:text-right"
        >
          Why Choose CareerGrowth?
        </m.h2>
        <div className="flex flex-col gap-3 text-dark-blue-500 flex-grow">
          {whyChooseContent.map(({ heading, paragraph }) => (
            <m.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              className="bg-dark-blue-200 border-dark-blue-300 rounded-lg p-8 border"
              key={heading}
            >
              <h3 className="text-lg font-semibold">{heading}</h3>
              <p className="xl:whitespace-nowrap">{paragraph}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
