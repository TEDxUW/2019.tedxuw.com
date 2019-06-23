import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft,
  faArrowRight,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add these FontAwesome icons individually to our 'library' to reduce bundle size when building
library.add(
  faLightbulb,
  faExclamation,
  faTimes,
  faCheck,
  faDoorClosed,
  faDoorOpen,
  faQuestion,
  faChevronUp,
  faChevronDown,
  faChevronCircleLeft,
  faArrowRight,
  faTrophy,
  faFacebookSquare,
  faInstagram,
  faLinkedin
);

const Icon = ({ name, size = "1x" }) => (
  <FontAwesomeIcon icon={name} size={size} />
);

export default Icon;
