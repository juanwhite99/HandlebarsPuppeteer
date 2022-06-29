import { IReportObjects, IReportObject } from './interfaces'
import { logo } from './logo';

const twoColsArray = ["PlaceHolder", "PlaceHolder"];
const threeColsArray = ["PlaceHolder", "PlaceHolder", "PlaceHolder"];
const fourColsArray = ["PlaceHolder", "PlaceHolder", "PlaceHolder", "PlaceHolder"];

const reportPage: IReportObject =     {
  header: {
    title: "Handlebars and Puppeteer Report Example",
    customer: `Customer's Name`,
    module: "Page Description",
    reportDateText: "06/28/2022",
    generatedBy: "JP",
    logo
  },
  data: [
    {
      sectionName: "Two Columns",
      sectionHeading: twoColsArray,
      sectionData: new Array(10).fill(twoColsArray)
    },
    {
      sectionName: "Three Columns",
      sectionHeading: threeColsArray,
      sectionData: new Array(10).fill(threeColsArray)
    },
    {
      sectionName: "Four Columns",
      sectionHeading: fourColsArray,
      sectionData: new Array(10).fill(fourColsArray)
    }
  ]
};

export const data: IReportObjects = {
  name: "application report",
  reports: new Array(3).fill(reportPage)
};
