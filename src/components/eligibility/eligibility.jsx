"use client"

import { AnimatePresence, motion } from "framer-motion"
import BlurText from "../animations/BlurText"
import { CgArrowLongLeft } from "react-icons/cg"
import { Helmet, HelmetProvider } from "react-helmet-async"


// Animation variants for page transitions
const pageVariants = {
    initial: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        },
    },
    exit: (direction) => ({
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
        },
    }),
}

export default function Eligibility({ children, onBack, tabNumber, heading, subheading, buttontext, onClick, direction, setDirection }) {



    return (
        <div className="relative bg-[#FFE6DF] flex items-center justify-center px-4 py-12 min-h-screen">
            <HelmetProvider>
                              <Helmet>
                                <title>Check Eligibility for Online Weight Loss Programs | Neu Eu</title>
                                <meta
                                  name="description"
                                  content="Check eligibility for Neu Eu’s prescription and online weight loss programs. Find out if GLP‑1 medication‑assisted plans are the right choice for your journey."
                                />
                              </Helmet>
                            </HelmetProvider>
            <div className="md:mt-10 mt-5 max-w-xl w-full">
                <BlurText
                    text="Let's check your eligibility"
                    delay={ 150 }
                    animateBy="words"
                    direction="bottom"
                    className="text-4xl md:text-5xl justify-center font-semibold text-[#751010] text-center"
                />
                <p className="text-center mt-3 opacity-80">
                    Please answer a few questions so that our providers can review <br className="hidden md:block" />& respond
                    with your personalized eligibility!
                </p>
                {/* card */ }
                <AnimatePresence mode="wait" custom={ direction }>
                    <motion.div
                        custom={ direction }
                        variants={ pageVariants }
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full"
                    >
                        <div className="bg-white rounded-xl shadow-lg mt-10 md:max-w-10/12 md:mx-auto">
                            <div className="flex items-center justify-between p-5">
                                <div>
                                    { onBack && (
                                        <button onClick={ onBack } className="text-2xl text-gray-600 hover:text-[#751010] transition-colors cursor-pointer">
                                            <CgArrowLongLeft />
                                        </button>
                                    ) }
                                </div>
                                <div className="opacity-90 font-medium">
                                    <span>{ tabNumber }</span> / <span>9</span>
                                </div>
                            </div>
                            <div className="relative w-full h-1.5 bg-[#F8F8F8]">
                                <div
                                    className="absolute bg-[#751010] h-1.5"
                                    style={ { width: `${(Number.parseInt(tabNumber) / 9) * 100}%` } }
                                ></div>
                            </div>
                            <div className="p-8 py-12 ">
                                <h3 className="text-2xl text-center font-bold">{ heading }</h3>
                                { subheading && <p className="text-center text-[#751010] mt-2">{ subheading }</p> }
                                {/* children */ }
                                <div className="mt-6">{ children }</div>
                                {/* children */ }
                                <div className="flex justify-center">
                                    <motion.button
                                        whileHover={ { scale: 1.05 } }
                                        whileTap={ { scale: 0.95 } }
                                        type="submit"
                                        onClick={ onClick }
                                        className="w-fit px-14 rounded-full bg-primary text-white py-2.5 mx-auto mt-8"
                                    >
                                        { buttontext }
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    )
}



