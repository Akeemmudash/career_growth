import { m } from "framer-motion";

export const Pricing = () => {
  return (
    <m.section id="pricing" className="bg-dark-blue-600 py-24">
      <div className="container flex justify-center items-center text-center">
        <div className="">
          <m.h2
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4 },
            }}
            initial={{ opacity: 0, scale: 1.2 }}
            className="bg-sky-blue-200 capitalize text-dark-blue-600 rounded-pill inline-block px-10 py-4 rounded-full mx-auto font-medium mb-5"
          >
            pricing
          </m.h2>
          <p className="text-sky-blue-200 mb-4 text-lg">Membership Fee</p>
          <m.p
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            initial={{ y: 40, opacity: 0 }}
            className="text-white font-semibold text-xl md:text-3xl"
          >
            20,000 Naira/month
          </m.p>
        </div>
      </div>
    </m.section>
  );
};
