import earningPotential from "../../assets/images/earning-potential.png";
import { m } from "framer-motion";

export const EarningPotential = () => {
  return (
    <section className="py-24">
      <div className="container">
        <figure className="flex gap-14 lg:flex-row flex-col">
          <div className="flex-1">
            <img
              src={earningPotential}
              alt="A Person Picture"
              className="w-full"
            />
          </div>
          <figcaption className="flex-1 flex flex-col justify-center">
            <h2 className="lg:text-[44px] text-dark-blue-600 font-semibold text-wrap md:text-4xl sm:text-3xl text-2xl mb-10 inline-block">
              <m.span
                className="block"
                initial={{
                  y: -40,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
              >
                Your Earning Potential
              </m.span>
              <m.span
                initial={{ scaleX: 0, transformOrigin: 0 }}
                whileInView={{ scaleX: 1, transition: { delay: 0.6 } }}
                viewport={{ amount: 0.6, once: true }}
                className="w-2/6 h-2 block bg-sky-blue-100 mt-4"
              ></m.span>
            </h2>
            <p className="text-dark-blue-400">
              Upon joining our community and completing our comprehensive
              program, members are equipped with the skills, knowledge, and
              network necessary to achieve their career goals. Many of our
              members have secured high-paying jobs in their chosen fields,
              earning up to 6 - 8 figures, per month .
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
