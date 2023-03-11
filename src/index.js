// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
import { Elements } from "./scripts/modules/elements";

// Import methods
import { includeHTML } from "./scripts/methods/_includeComponents";

// Bisiness logic
document.addEventListener('DOMContentLoaded', () => {
  includeHTML();
  console.log(calcSubtractNumbers(10, 5));
  console.log(calcSumNumbers(10, 5));
  const elements = new Elements();
  elements.addElement('element 1');
  elements.addElement('element 2');
  elements.addElement('element 3');
  console.log(elements);
});