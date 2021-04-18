import React from "react";
import Section from "./Section";

import styles from "./../css/WorkHistory.module.scss";
import { motion } from "framer-motion";

const jobs = [
     {
          company: "SUMOFIBER",
          position: "Technical Support Specialist",
          responsibilities: [
               "Receive inbound calls and provide technical support",
               "Remotely troubleshoot issues",
          ],
          dates: "09/2014 - 03/2021",
     },
     {
          company: "SUMOFIBER",
          position: "Web Developer",
          responsibilities: ["Create custom forms using ReactJS"],
          dates: "03/2021 - Present",
     },
];

export default function WorkSection({ workSection, minHeight }) {
     const primaryColor = "#171715";
     const secondaryColor = "#2d3436";
     return (
          <>
               <Section
                    header="Work History"
                    backgroundColor={primaryColor}
                    hrColor={secondaryColor}
                    minHeight={minHeight}
                    hr
               >
                    <div style={{ paddingTop: "30px" }} />
                    <div className={styles.workHistory}>
                         {workSection && (
                              <div className="flex justify-around">
                                   {jobs.map((job, i) => (
                                        <motion.div
                                             whileHover={{
                                                  scale: 1.05,
                                             }}
                                             transition={{ duration: 0.3 }}
                                        >
                                             <motion.div
                                                  initial={{ x: 2000 }}
                                                  animate={{ x: 0 }}
                                                  transition={{
                                                       duration: 0.5 + i * 0.5,
                                                  }}
                                             >
                                                  <div
                                                       className={
                                                            styles.workCard
                                                       }
                                                       key={i}
                                                  >
                                                       <motion.div
                                                            initial={{
                                                                 x: 2000,
                                                            }}
                                                            animate={{ x: 0 }}
                                                            transition={{
                                                                 duration:
                                                                      0.5 +
                                                                      i * 0.8,
                                                            }}
                                                            className={
                                                                 styles.company
                                                            }
                                                       >
                                                            <h1>
                                                                 {job.company}
                                                            </h1>
                                                            <p
                                                                 className={
                                                                      styles.divider
                                                                 }
                                                            >
                                                                 -
                                                            </p>
                                                            <p>
                                                                 {job.position}
                                                            </p>
                                                            <p
                                                                 className={
                                                                      styles.divider
                                                                 }
                                                            >
                                                                 -
                                                            </p>
                                                            <p
                                                                 className={
                                                                      styles.date
                                                                 }
                                                            >
                                                                 {job.dates}
                                                            </p>
                                                       </motion.div>
                                                       <ul
                                                            className={
                                                                 styles.responsibilities
                                                            }
                                                       >
                                                            {job.responsibilities.map(
                                                                 (r, i) => (
                                                                      <li
                                                                           key={
                                                                                i
                                                                           }
                                                                      >
                                                                           {r}
                                                                      </li>
                                                                 )
                                                            )}
                                                       </ul>
                                                  </div>
                                             </motion.div>
                                        </motion.div>
                                   ))}
                              </div>
                         )}
                    </div>
               </Section>
          </>
     );
}
