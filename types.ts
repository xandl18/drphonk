// Fix: Import `ReactNode` from 'react' because standard TypeScript files do not have global access to the React namespace.
import type { ReactNode } from 'react';

export enum ToolCategory {
  Distribution = "Vertrieb & Management",
  Visuals = "Visuals",
  Shortform = "Shortform-Content",
  Planning = "Content-Planung & Optimierung",
  Posting = "Automatisierung des Postings",
  Analysis = "Trend-Analyse",
  Monetization = "Monetarisierung von UGC"
}

export interface Tool {
  name: string;
  description: string;
  price: string;
  category: ToolCategory;
}

export interface BlueprintStep {
  title: string;
  description: string;
  // Fix: Use the imported `ReactNode` type.
  icon: ReactNode;
}

export interface PlaybookDay {
  day: string;
  task: string;
}

export interface PlaybookWeek {
  week: number;
  title: string;
  focus: string;
  details: string[];
}