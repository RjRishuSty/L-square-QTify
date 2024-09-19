import React from "react";
import { Button } from "@mui/material";
import styles from './FeedbackButton.module.css'

export default function FeedbackButton() {
  return (
    <Button className={styles.giveFeedback} variant="contained">
      Give Feedback
    </Button>
  );
}
 