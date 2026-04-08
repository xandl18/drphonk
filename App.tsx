
import React, { useState } from 'react';
import type { Tool, PlaybookWeek } from './types';
import { ToolCategory } from './types';
import { BLUEPRINT_STEPS, AI_TOOLS, PLAYBOOK_WEEKS, KPIS, NEXT_STEPS } from './constants';
import { CodeIcon, TargetIcon, ArrowRightIcon, MegaphoneIcon } from './components/Icons';

const Header: React.FC = () => (
  <header className="text-center p-6 md:p-10 border-b border-cyan-500/20">
    <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 tracking-wider uppercase" style={{ textShadow: '0 0 10px #00f2ea, 0 0 20px #00f2ea' }}>
      Drift Phonk Autopilot
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mt-2">
      Ein 30-Tage-Playbook zur Maximierung von Streams mit KI
    </p>
    <p className="text-sm text-gray-500 mt-1">
      Basierend auf der Strategie von ZØiSN
    </p>
  </header>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="py-8 md:py-12 px-4 md:px-8">
    <h2 className="text-3xl font-bold mb-6 text-center text-magenta-500" style={{color: '#f0f', textShadow: '0 0 8px #f0f'}}>
      {title}
    </h2>
    {children}
  </section>
);

const BlueprintCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/30 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 flex items-start space-x-4">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-bold text-lg text-cyan-300">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
    <h4 className="font-bold text-md text-gray-100">{tool.name}</h4>
    <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
    <p className="text-xs text-cyan-400 mt-2 font-mono">{tool.price}</p>
  </div>
);

const PlaybookTab: React.FC<{ week: PlaybookWeek; isActive: boolean; onClick: () => void }> = ({ week, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm md:text-base font-semibold border-b-2 transition-all duration-300 w-full text-left ${
      isActive
        ? 'border-cyan-400 text-cyan-400 bg-cyan-900/20'
        : 'border-transparent text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
    }`}
  >
    Woche {week.week}: {week.title}
  </button>
);

const PlaybookContent: React.FC<{ week: PlaybookWeek }> = ({ week }) => (
    <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
        <h3 className="text-xl font-bold text-cyan-300">{week.focus}</h3>
        <ul className="mt-4 space-y-3 text-gray-300">
            {week.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1">&#x25B8;</span>
                    <span dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong class=\"text-cyan-200\">$1</strong>') }} />
                </li>
            ))}
        </ul>
    </div>
);


const App: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<number>(1);

  const toolCategories = Object.values(ToolCategory);
  const groupedTools = toolCategories.map(category => ({
    category,
    tools: AI_TOOLS.filter(tool => tool.category === category)
  }));
  
  const CTAS = ["Link in Bio → Spotify", "Benutz den Sound für deine Clips", "Folge für nächste Drift"];

  return (
    <div className="min-h-screen bg-gray-900 font-sans leading-relaxed" style={{background: 'radial-gradient(circle, rgba(22,22,35,1) 0%, rgba(15,15,25,1) 100%)'}}>
      <main className="max-w-7xl mx-auto">
        <Header />
        
        <div className="p-4 md:p-8 text-center text-lg text-gray-300 bg-gray-800/20 max-w-4xl mx-auto rounded-lg my-8 border border-gray-700">
            Ein umsatzorientierter Ansatz, um mit minimalem Aufwand maximale Streaming-Zahlen zu erzielen, stark auf KI-Automatisierung und Kurzvideos für Plattformen wie TikTok setzend.
        </div>

        <Section title="Der Autopilot-Blueprint">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLUEPRINT_STEPS.map((step) => (
              <BlueprintCard key={step.title} {...step} />
            ))}
          </div>
        </Section>

        <Section title="Der KI-Werkzeugkasten">
            <div className="space-y-8">
                {groupedTools.map(({ category, tools }) => (
                    <div key={category}>
                        <h3 className="text-xl font-semibold mb-4 text-cyan-400 border-l-4 border-cyan-400 pl-3">{category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {tools.map(tool => <ToolCard key={tool.name} tool={tool} />)}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <Section title="Die 30-Tage-Content-Strategie">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex flex-col space-y-2">
                    {PLAYBOOK_WEEKS.map((week) => (
                        <PlaybookTab 
                            key={week.week}
                            week={week}
                            isActive={activeWeek === week.week}
                            onClick={() => setActiveWeek(week.week)}
                        />
                    ))}
                </div>
                <div className="md:w-3/4">
                    {PLAYBOOK_WEEKS.find(w => w.week === activeWeek) && <PlaybookContent week={PLAYBOOK_WEEKS.find(w => w.week === activeWeek)!} />}
                </div>
            </div>
        </Section>

        <Section title="Ziele & Nächste Schritte">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-cyan-300"><TargetIcon className="w-6 h-6 mr-2" /> Realistische Ziele (KPIs)</h3>
                    <ul className="space-y-2">
                        {KPIS.map((kpi, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                                <span className="text-cyan-400 mr-2">&#10003;</span> {kpi}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-cyan-300"><ArrowRightIcon className="w-6 h-6 mr-2" /> Nächste Schritte</h3>
                    <ul className="space-y-2">
                        {NEXT_STEPS.map((step, index) => (
                             <li key={index} className="flex items-center text-gray-300">
                                <span className="text-cyan-400 mr-2">&#10148;</span> {step}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>

        <Section title="Wichtige Call-to-Actions (CTAs)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {CTAS.map((cta, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                    <h3 className="text-lg font-semibold text-cyan-300 flex items-center">
                    <MegaphoneIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                    <span>{cta}</span>
                    </h3>
                </div>
                ))}
            </div>
        </Section>

        <footer className="text-center py-8 mt-8 border-t border-cyan-500/20">
            <p className="text-gray-500 flex items-center justify-center">
                <CodeIcon className="w-5 h-5 mr-2" />
                <span>Entwickelt als interaktives Playbook.</span>
            </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
