import React from "react";
import { motion } from "framer-motion";
import styles from "./../css/Home.module.scss";
import Particles from "react-particles-js";

export default function Hero() {
     return (
          <div className={styles.main}>
               <div className={styles.main_content}>
                    <motion.h1
                         initial={{ x: -1300 }}
                         animate={{ x: 0 }}
                         transition={{ duration: 0.5 }}
                    >
                         Hello, I'm <span>Chase Burr</span>
                    </motion.h1>
                    <motion.h3
                         initial={{ x: -1300 }}
                         animate={{ x: 0 }}
                         transition={{ duration: 0.6 }}
                    >
                         I'm a <span>Developer</span>
                    </motion.h3>
                    <motion.div whileHover={{ rotate: 2 }}>
                         <motion.div
                              initial={{ x: -1300 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.7 }}
                              style={{ marginTop: "20px" }}
                              onClick={() => {
                                   window.scrollTo(0, 1572);
                              }}
                         >
                              <a className="btn btn-primary">
                                   <span>View My Work</span>
                                   <img src="./../../files/scroll.gif" alt="" />
                              </a>
                         </motion.div>
                    </motion.div>
               </div>
               {/* <div className={styles.scroll_gif}></div> */}
               <div className="particles">
                    <Particles />
               </div>
          </div>
     );
}
