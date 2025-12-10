import instagramLogo from "./assets/instagramLogo.svg";
import mailIcon from "./assets/email.svg";
import linkedInLogo from "./assets/linkedin.svg";
import AxiomZenLogo from "./assets/axiomzen.svg?react";
import { motion } from "motion/react";

function App() {
  return (
    <main className="flex flex-col font-sans px-2 lg:px-[100px]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.75 }}
        className="w-full mt-3 lg:mb-12"
      >
        <h1 className="text-center font-medium text-[35px] tracking-wide">
          Summer-Lee Schoenfeld
        </h1>
      </motion.div>
      <section
        className="flex flex-col lg:flex-row ap-8 md:gap-16 pt-10 flex-wrap"
        aria-label="Portfolio Content"
      >
        <motion.div
          className="flex-1 w-full lg:w-2/3 lg:items-center p-6 lg:leading-10 text-lg lg:text-2xl font-extralight tracking-wide"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <h2 className="text-center lg:text-left">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            Hello!
          </h2>
          <br />
          <p className="text-center lg:text-left">
            I’m a product designer who brings clarity to ambiguity and momentum
            to ideas. I think holistically, experiment boldly, and ask the
            questions that shift conversations. I balance design intuition with
            data, and take ownership when direction is foggy. As I grow into
            design management, I’m bringing the same energy: steady leadership
            and decisions grounded in what users actually need.
          </p>
          <div className="mt-5 flex gap-4 items-center justify-center lg:justify-start">
            <a
              target="_blank"
              href="https://www.instagram.com/summerleeschoenfeld"
            >
              <img
                className="cursor-pointer"
                height="23px"
                width="23px"
                src={instagramLogo}
                alt="instagram logo"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/summer-lee-schoenfeld/"
            >
              <img
                className="cursor-pointer"
                height="20px"
                width="20px"
                src={linkedInLogo}
                alt="LinkedIn logo"
              />
            </a>
            <a target="_blank" href="mailto:summerleeschoenfeld20@gmail.com">
              <img
                className="cursor-pointer"
                height="28px"
                width="28px"
                src={mailIcon}
                alt="Mail icon"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="flex-1 p-6 w-full lg:w-1/3 "
        >
          <h2 className="leading-10 text-2xl font-extralight tracking-wide">
            Experience
          </h2>
          <br />
          <ul className="space-y-4 mt-4 ">
            <li>
              <strong>Axiom Zen</strong> — Product Designer · Product/Project
              Management Hybrid (2020–Present)
              <br />
              <span className="text-sm text-gray-600 ">
                A venture studio building and incubating digital products.
              </span>
            </li>
            <li>
              <strong>ZenHub</strong> — Product Designer (2023)
              <br />
              <span className="text-sm text-gray-600 ">
                Contracted through Axiom Zen to support design initiatives.
              </span>
            </li>
            <li>
              <strong>Dapper Labs</strong> — Product Designer (2019–2020)
              <br />
              <span className="text-sm text-gray-600 ">
                Creators of blockchain-based entertainment and digital
                collectibles
              </span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  style={{ height: "fit-content" }}
                  target="_blank"
                  href="https://www.axiomzen.com/"
                >
                  <AxiomZenLogo width="63px" height="26px" />
                </a>
                <a
                  style={{ height: "fit-content" }}
                  target="_blank"
                  href="https://www.dapperlabs.com/"
                >
                  <img
                    className="cursor-pointer"
                    width="63px"
                    height="20px"
                    src="/logo-dapperlabs.webp"
                  />
                </a>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a target="_blank" href="https://www.gettoby.com/">
                  <img
                    className="cursor-pointer"
                    width="26px"
                    height="26px"
                    src="/Toby+logo.webp"
                  />
                </a>
                <a target="_blank" href="https://www.cryptokitties.co/">
                  <img
                    className="cursor-pointer"
                    width="26px"
                    height="26px"
                    src="/kitties-logo.webp"
                  />
                </a>
                <a target="_blank" href="https://www.zenhub.com/">
                  <img
                    className="cursor-pointer"
                    width="26px"
                    height="26px"
                    src="/zenhub-logo-.webp"
                  />
                </a>
                <a target="_blank" href="https://nbatopshot.com/">
                  <img
                    className="cursor-pointer"
                    width="26px"
                    height="26px"
                    src="/tpo+shot-logo.webp"
                  />
                </a>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}

export default App;
