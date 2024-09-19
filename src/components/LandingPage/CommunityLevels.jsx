import { m } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const itemsVariants = {
  visible: { opacity: 1, x: 0 },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
export const CommunityLevels = () => {
  return (
    <section id="community-levels" className="py-24 bg-dark-blue-100">
      <div className="container">
        <div className="text-center">
          <m.h2
            variants={headingVariants}
            viewport={{ once: true, amount: 0.8 }}
            whileInView="visible"
            initial="hidden"
            className="lg:text-[44px] text-dark-blue-600 font-semibold text-wrap md:text-4xl sm:text-3xl text-2xl "
          >
            Our Community Levels
          </m.h2>
          <m.p
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            className="text-lg text-dark-blue-400 mt-3 md:mt-5 lg:mt-7 lg:text-2xl"
          >
            Choose Your Path
          </m.p>
        </div>
        <m.div
          variants={containerVariants}
          whileInView="visible"
          viewport={{ amount: 0.45, once: true }}
          className="flex flex-col md:flex-row gap-4 mt-16"
        >
          <div className="flex gap-4 flex-col md:w-7/12">
            <m.div
              initial={{ opacity: 0, x: -50 }}
              variants={itemsVariants}
              className="bg-dark-blue-200 border-dark-blue-300 rounded-lg p-8 border"
            >
              <h3 className="text-lg font-semibold">Beginner Level</h3>
              <p className="">Skill development</p>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: -50 }}
              variants={itemsVariants}
              className="bg-dark-blue-200 border-dark-blue-300 rounded-lg p-8 border"
            >
              <h3 className="text-lg font-semibold">Intermediate Level</h3>
              <p className="">
                Apply your knowledge. Gain practical experience, access to paid
                internships and build your portfolio. Duration - 2 month
              </p>
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            variants={itemsVariants}
            className="bg-dark-blue-200 border-dark-blue-300 rounded-lg p-8 border md:w-5/12"
          >
            <h3 className="text-lg font-semibold">Opportunity Room</h3>
            <p className="">
              Access full-time and freelance gigs, discover job opportunities,
              network with professionals, and advance your career. Duration - as
              long as subscription is active
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};
