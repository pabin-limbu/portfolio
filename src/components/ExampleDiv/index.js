import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

function ExampleDiv() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div>
        <p>Element 1</p>
        <p>Element 2</p>
        <AnimatePresence>
          {isExpanded && (
            <>
              <motion.p
                key="element3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                layout
              >
                Element 3
              </motion.p>
              <motion.p
                key="element4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                layout
              >
                Element 4
              </motion.p>
              <motion.p
                key="element5"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                layout
              >
                Element 5
              </motion.p>
              {/* Add more elements as needed */}
            </>
          )}
        </AnimatePresence>
      </div>
      <button onClick={toggleExpand}>
        {isExpanded ? "View Less" : "View More"}
      </button>
    </div>
  );
}

export default ExampleDiv;
