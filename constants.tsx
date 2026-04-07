
import React from 'react';
import type { BlueprintStep, PlaybookWeek, Tool } from './types';
import { ToolCategory } from './types';
import { LinkIcon, CheckCircleIcon, CogIcon, RadarIcon, DollarSignIcon, ZapIcon } from './components/Icons';

export const BLUEPRINT_STEPS: BlueprintStep[] = [
  {
    title: "1. Smartlink & Pre-Save",
    description: "Einsatz von Diensten, um einen einzigen Link für alle Plattformen zu erstellen.",
    icon: <LinkIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "2. TuneCore Release-Qualitätssicherung",
    description: "Sicherstellung korrekter Metadaten, Überprüfung der Stores und Aktivierung von YouTube Content ID.",
    icon: <CheckCircleIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "3. Content Engine",
    description: "Automatisierte Erstellung von visuellen Inhalten wie Visualizern, Kurzvideos und KI-generierten Bildunterschriften.",
    icon: <CogIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "4. Trend Radar",
    description: "Überwachung von Trends auf TikTok und anderen Plattformen, um auf virale Wellen schnell reagieren zu können.",
    icon: <RadarIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "5. Monetarisierung",
    description: "Neben Streaming-Einnahmen wird die Monetarisierung von User-Generated Content (UGC) forciert.",
    icon: <DollarSignIcon className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "6. Automation Layer",
    description: "Verknüpfung der Tools durch Zapier oder Make, um Prozesse zu automatisieren.",
    icon: <ZapIcon className="w-8 h-8 text-cyan-400" />
  }
];

export const AI_TOOLS: Tool[] = [
    { name: "Feature.fm", description: "Pre-Save-Kampagnen, Smart Links, Analytics für Releases.", price: "ab $19/Monat", category: ToolCategory.Distribution },
    { name: "Songstats", description: "Echtzeit-Daten über Spotify/Apple Music/YouTube.", price: "$12,99/Monat", category: ToolCategory.Distribution },
    { name: "Rotor Videos", description: "Musikvideos & Loops automatisch erstellen.", price: "ab €25 pro Video", category: ToolCategory.Visuals },
    { name: "Headliner", description: "Audiogramme, Lyric Videos, Kurzclips.", price: "Free + Pro ab $7,99/Monat", category: ToolCategory.Visuals },
    { name: "Kaiber AI", description: "KI-generierte Musikvisuals, Animationen, Loop-Content.", price: "ab $10/Monat", category: ToolCategory.Visuals },
    { name: "Kapwing AI", description: "Automatisches Kurzvideo-Cutting, Captions.", price: "Free + Pro $16/Monat", category: ToolCategory.Shortform },
    { name: "Veed.io", description: "Auto-Subtitles, Editing, Templates.", price: "Free + Pro $12/Monat", category: ToolCategory.Shortform },
    { name: "Copy.ai", description: "Captions, Social Media Posts.", price: "Free + Pro $36/Monat", category: ToolCategory.Captions },
    { name: "Flick", description: "Hashtags, Content Planner, AI-Captions.", price: "ab $11/Monat", category: ToolCategory.Captions },
    { name: "Later", description: "Cross-Posting & Scheduling.", price: "ab $18/Monat", category: ToolCategory.Publishing },
    { name: "Buffer", description: "Post-Automatisierung.", price: "ab $6/Monat", category: ToolCategory.Publishing },
    { name: "Metricool", description: "Auto-Publish für TikTok, Instagram, YouTube.", price: "Free + ab $18/Monat", category: ToolCategory.Publishing },
    { name: "Chartmetric", description: "Genre-Trends, Playlist-Tracker.", price: "ab $140/Monat (Pro)", category: ToolCategory.Analysis },
    { name: "Exolyt", description: "TikTok-Analytics, Trend-Tracker, Influencer-Analyse.", price: "Free + Pro (Custom)", category: ToolCategory.Analysis },
    { name: "Soundcharts", description: "Echtzeit-Radio/Playlist/Chartdaten.", price: "Custom", category: ToolCategory.Analysis },
    { name: "IndieFlow", description: "Release Mgmt, Split-Payments, Task Automation.", price: "$19/Monat", category: ToolCategory.Monetization },
    { name: "Identifyy", description: "YouTube Content ID & Facebook Rights Manager.", price: "Free (Revenue Share)", category: ToolCategory.Monetization },
    { name: "Patreon + Ko-Fi", description: "Direkte Monetarisierung durch Fan-Support & Donations.", price: "Plattformgebühren", category: ToolCategory.Monetization },
];

export const PLAYBOOK_WEEKS: PlaybookWeek[] = [
  {
    week: 1,
    title: "Release-Boost",
    focus: "Fokus auf Teaser, Behind-the-Scenes und erste Fan-Interaktionen, um initiales Momentum aufzubauen.",
    details: [
      "**Day 1:** Teaser-Clip (15s Car Drift + Song Snippet). CTA: „Pre-Save/Link in Bio“.",
      "**Day 2:** Behind-the-Beat (kurzer Studio-Shot).",
      "**Day 3:** Loop Visualizer mit Cover.",
      "**Day 4:** Meme/Anime Edit mit der Hook des Songs.",
      "**Day 5:** Nutze einen aktuellen Sound-Trend und lege deinen eigenen Song darunter.",
      "**Day 6:** Fan-Aufruf: „Zeig dein Auto mit meinem Sound“.",
      "**Day 7:** Compilation der besten Clips der Woche.",
    ]
  },
  {
    week: 2,
    title: "Growth Push",
    focus: "Tägliche Content-Rotation zwischen den Kern-Ästhetiken, um ein breiteres Publikum zu erreichen und den Algorithmus zu füttern.",
    details: [
      "**Täglich:** Wechsle zwischen Drift-Clips, Anime-Aesthetic und Gym-Edits, um die Reichweite zu maximieren.",
      "**Effizienz:** Nutze Kapwing/Veed.io für schnelle und wirkungsvolle Video-Edits.",
      "**Konsequenz:** Integriere in jedes Video einen klaren CTA zum Spotify-Profil oder Linktree in der Bio.",
    ]
  },
  {
    week: 3,
    title: "Community Build",
    focus: "Stärkung der Community-Bindung durch Interaktion, UGC-Förderung und exklusive Einblicke.",
    details: [
      "**Day 15:** Q&A Clip („Was ist Drift Phonk?“) um Expertise zu zeigen.",
      "**Day 16:** Reposte die besten User-Generated Clips (UGC), um die Community zu würdigen (Erlaubnis einholen!).",
      "**Day 17:** Veröffentliche den vollen Visualizer auf YouTube, um die Plattform zu stärken.",
      "**Day 18-21:** Täglich 1 thematischer Edit (Anime/Car/Gym), um die Präsenz aufrechtzuerhalten.",
    ]
  },
  {
    week: 4,
    title: "Viral Stretch",
    focus: "Das Momentum nutzen, um virale Chancen zu ergreifen und den nächsten Release vorzubereiten.",
    details: [
      "**Trends:** Nutze aktuelle Trend-Challenges auf TikTok mit deinem Sound.",
      "**Kollaboration:** Arbeite mit kleineren Creators für Shoutouts und Cross-Promotion zusammen.",
      "**Highlight-Reel:** Erstelle eine Zusammenfassung der besten Momente des Songs.",
      "**Teaser:** Kündige den nächsten Release an, um Follower zu binden und Vorfreude zu schaffen.",
    ]
  }
];


export const KPIS = [
  "Über 100.000 kombinierte Streams",
  "50-100 UGC-Clips mit dem eigenen Sound",
  "Platzierung in mehreren User-Playlists"
];

export const NEXT_STEPS = [
  "Erstellung eines Smartlinks für den Release.",
  "Rendern von visuellen Inhalten (Visualizer, Loops).",
  "Vorbereiten von Video-Templates für TikTok, Reels & Shorts.",
  "Befüllen der Posting-Warteschlange für die ersten 14 Tage."
];

export const TOOL_USAGE_SUMMARY = [
    "Rotor/Headliner/Kaiber für Visuals",
    "Kapwing/Veed für TikTok-Edits",
    "Copy.ai/Flick für Captions/Hashtags",
    "Later/Buffer/Metricool für Autoposts",
    "Songstats/Chartmetric/Exolyt für Trend-Feedback",
    "Identifyy für UGC-Monetarisierung"
];