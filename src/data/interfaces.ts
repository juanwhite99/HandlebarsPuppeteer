export interface IReportObjects {
  name: string;
  reports: Array<IReportObject>;
}

export interface IReportObject {
  header: IReportHeader;
  data: Array<IDataObject>;
}

interface IReportHeader {
  title: string;
  customer: string;
  module: string;
  reportDateText: string;
  generatedBy: string;
  logo: string;
}

interface IDataObject {
  sectionName: string;
  sectionHeading: Array<string>;
  sectionData: Array<Array<string>>;
}
