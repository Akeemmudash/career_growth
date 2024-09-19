import { m } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="container h-[calc(100vh-70px)] flex flex-col items-center justify-center lg:h-[calc(100vh-86px)]"
    >
      <div className=" max-w-[960px] text-center mx-auto">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-dark-blue-600 font-semibold md:text-5xl mb-9  text-2xl sm:text-3xl"
        >
          You don&apos;t have to break the bank to learn that skill, or get
          access to quality mentorship that would grow your career.
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-dark-blue-400 lg:text-2xl text-base sm:text-lg mb-7"
        >
          Join CareerGrowth and unlock your career potential.
        </m.p>
        <m.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#form"
          className="bg-sky-blue-300 lg:text-2xl text-white md:px-8 px-6  py-3 md:py-5 rounded-3xl inline-flex justify-center items-center gap-4"
        >
          <span>click here to apply</span>
          <span className="bg-opacity-40 bg-white p-1 rounded-md">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7135 13.8107L14.8385 20.6857C14.6232 20.9009 14.3313 21.0219 14.0269 21.0219C13.7224 21.0219 13.4305 20.9009 13.2152 20.6857C13 20.4704 12.879 20.1785 12.879 19.874C12.879 19.5696 13 19.2777 13.2152 19.0624L18.1337 14.1458H4.09725C3.79336 14.1458 3.50191 14.0251 3.28702 13.8102C3.07214 13.5953 2.95142 13.3039 2.95142 13C2.95142 12.6961 3.07214 12.4047 3.28702 12.1898C3.50191 11.9749 3.79336 11.8542 4.09725 11.8542H18.1337L13.2171 6.93473C13.0019 6.71947 12.8809 6.42751 12.8809 6.12309C12.8809 5.81867 13.0019 5.52672 13.2171 5.31146C13.4324 5.0962 13.7243 4.97527 14.0288 4.97527C14.3332 4.97527 14.6251 5.0962 14.8404 5.31146L21.7154 12.1865C21.8222 12.2931 21.907 12.4197 21.9647 12.5591C22.0225 12.6986 22.0521 12.848 22.0519 12.999C22.0518 13.1499 22.0218 13.2993 21.9637 13.4386C21.9056 13.5779 21.8206 13.7043 21.7135 13.8107Z"
                fill="white"
              />
            </svg>
          </span>
        </m.a>
      </div>
    </section>
  );
};
