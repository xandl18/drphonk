// Fix: Import `ReactNode` from 'react' because standard TypeScript files do not have global access to the React namespace.
import type { ReactNode } from 'react';

export enum ToolCategory {
  Distribution = "Musikvertrieb & Release-Management",
  Visuals = "Content-Visuals (YouTube, Audiogramme)",
  Shortform = "Kurzvideos (TikTok, IG, YT Shorts)",
  Captions = "AI Captions, Hashtags, Timing",
  Publishing = "Automatisches Publishing",
  Analysis = "Trendanalyse Drift Phonk",
  Monetization = "Monetarisierung"
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