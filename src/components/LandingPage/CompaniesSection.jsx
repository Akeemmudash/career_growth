import { m } from "framer-motion";
import enyata from "../../assets/images/companies/enyata.png";
import propel from "../../assets/images/companies/propel.png";
import sterling from "../../assets/images/companies/sterling.png";
import vella from "../../assets/images/companies/vella.png";
import yassir from "../../assets/images/companies/yassir.png";

const companies = {
  enyata,
  sterling,
  yassir,
  propel,
  vella,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const CompaniesSection = () => {
  return (
    <m.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}
      className=" text-center bg-dark-blue-300 "
    >
      <div className="container py-24">
        <m.h2
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="md:text-4xl text-2xl lg:text-4xl font-semibold text-dark-blue-600"
        >
          Gain job experience with tops companies
        </m.h2>
        <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
          {" "}
          {Object.keys(companies).map((company, index) => (
            <m.div key={index} variants={itemVariants}>
              <img
                src={companies[company]}
                alt={`${company} logo`}
                className="w-32 sm:w-44  lg:w-44 object-cover"
              />
            </m.div>
          ))}
        </div>
      </div>
    </m.section>
  );
};
