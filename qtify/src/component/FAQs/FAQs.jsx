import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import styles from "./FAQs.module.css";
import { useState } from "react";

export default function FAQs() {
  const [expanded, setExpanded] = useState('panel2');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Box className={styles.fqaBox}>
        <h1 className={styles.heading}>FAQs</h1>
        <Accordion
          className={styles.fqaItem}
          expanded={expanded === "panel1"} 
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.question}
          >
            Is QTify free to use?
          </AccordionSummary>
          <AccordionDetails className={styles.faqsDetails}>
            <Typography className={styles.faqsText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography> 
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded
          className={styles.fqaItem}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.icon} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.question}
          >
            Can I download and listen to songs offline?
          </AccordionSummary>
          <AccordionDetails className={styles.faqsDetails}>
            <Typography className={styles.faqsText}>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
