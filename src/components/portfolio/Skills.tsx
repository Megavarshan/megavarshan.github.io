import { Section } from "./Section";

const skillData = {
  Programming: ["Python", "C", "C++", "Java", "SQL"],
  AI_ML: ["Machine Learning", "Deep Learning", "Neural Networks", "Transformers", "Computer Vision", "NLP", "GANs", "LLMs", "RAG", "AI Agents", "Multi-Agent Systems"],
  Data: ["ETL", "Data Warehousing", "Data Modeling", "Feature Engineering", "EDA", "Apache Spark", "PySpark", "Hadoop"],
  Cloud: ["AWS", "Azure", "Firebase", "BigQuery", "SageMaker", "Bedrock"],
  Software_Engineering: ["Agile", "SDLC", "Docker", "Git/GitHub", "FastAPI", "PyTorch", "TensorFlow", "Scikit-learn"],
};

const nodeColors: Record<string, string> = {
  Programming: "border-cyan-500",
  Cloud: "border-blue-500",
  Data: "border-orange-500",
  AI_ML: "border-purple-500",
  Software_Engineering: "border-emerald-500",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills · n8n Workflow"
      title={<>Technical <span className="text-gradient">Skills</span>.</>}
      intro="A comprehensive visual workflow map demonstrating how my skills interconnect to build full-stack intelligent systems."
    >
      {/* DESKTOP VIEW */}
      <div className="hidden md:block relative w-full aspect-[5/3] max-h-[750px] max-w-6xl mx-auto overflow-visible mt-10">
        
        {/* SVG Connections */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {[
            { d: "M 20 50 C 23 50, 23 25, 26 25", color: "#06b6d4" }, // Prog to Cloud
            { d: "M 20 50 C 23 50, 23 75, 26 75", color: "#06b6d4" }, // Prog to Data
            { d: "M 46 25 C 49 25, 49 50, 52 50", color: "#3b82f6" }, // Cloud to AI
            { d: "M 46 75 C 49 75, 49 50, 52 50", color: "#f97316" }, // Data to AI
            { d: "M 78 50 L 82 50", color: "#a855f7" },               // AI to SE
          ].map((path, i) => (
            <path 
              key={i}
              d={path.d} 
              fill="none" 
              stroke={path.color} 
              strokeWidth="0.4" 
              className="opacity-80"
            />
          ))}
        </svg>

        {/* Nodes positioned precisely by their vertical center (y) to match SVG lines perfectly */}
        <N8nNode 
          title="Programming" sub="Trigger: Source" cat="Programming" 
          x={2} y={50} width={18} isTrigger
        />
        <N8nNode 
          title="Cloud Computing" sub="Infrastructure" cat="Cloud" 
          x={26} y={25} width={20} 
        />
        <N8nNode 
          title="Data Engineering" sub="Pipeline & ETL" cat="Data" 
          x={26} y={75} width={20} 
        />
        <N8nNode 
          title="AI & Machine Learning" sub="Intelligence Engine" cat="AI_ML" 
          x={52} y={50} width={26} 
        />
        <N8nNode 
          title="Software Engineering" sub="Delivery & Deployment" cat="Software_Engineering" 
          x={82} y={50} width={16} 
        />
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col gap-10 relative py-8 px-4 mt-8">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-white/10" />
        
        {[
          { title: "Programming", sub: "Trigger", cat: "Programming" },
          { title: "Cloud Computing", sub: "Infrastructure", cat: "Cloud" },
          { title: "Data Engineering", sub: "Pipeline", cat: "Data" },
          { title: "AI & ML", sub: "Intelligence", cat: "AI_ML" },
          { title: "Software Engineering", sub: "Delivery", cat: "Software_Engineering" },
        ].map((node) => (
          <div key={node.cat} className="relative z-10 w-full max-w-[280px] mx-auto flex flex-col items-center">
            <div className={`bg-[#202428]/90 backdrop-blur-md border ${nodeColors[node.cat]} rounded-2xl p-5 shadow-xl relative w-full mb-3 h-auto`}>
              <div className="flex flex-wrap justify-center gap-2 h-auto">
                {skillData[node.cat as keyof typeof skillData].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-[#111] border border-white/5 rounded text-[11px] sm:text-xs text-white/90">
                    {skill}
                  </span>
                ))}
              </div>
              <div className={`absolute bottom-2 right-2 w-4 h-4 ${nodeColors[node.cat].replace('border-', 'bg-')} rounded-full flex items-center justify-center`}>
                <svg className="w-3 h-3 text-[#202428]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div className="text-center font-bold text-white/90 text-base">{node.title}</div>
            <div className="text-center text-white/50 text-xs">{node.sub}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function N8nNode({ title, sub, cat, x, y, width, isTrigger }: any) {
  const borderColor = nodeColors[cat] || "border-[#10B981]";
  const bgColor = borderColor.replace('border-', 'bg-');

  return (
    <div 
      className="absolute flex flex-col items-center group cursor-pointer z-10"
      style={{ 
        left: `${x}%`, 
        top: `${y}%`, 
        width: `${width}%`, 
        transform: 'translateY(-50%)' // PERFECT CENTERING: Guarantees node center hits SVG 'y' precisely
      }}
    >
      {isTrigger && (
        <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-orange-500 z-20">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
      )}

      {/* Node Box - No height restriction, fully dynamic fit-content */}
      <div className={`bg-[#202428]/90 backdrop-blur-md border ${borderColor} rounded-2xl p-4 xl:p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative w-full h-auto mb-0 hover:scale-[1.02] transition-transform flex flex-col`}>
        
        {!isTrigger && (
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#555] rounded-full border-2 border-[#1e1f21] z-20" />
        )}
        
        {title !== "Software Engineering" && (
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#555] rounded-full border-2 border-[#1e1f21] z-20" />
        )}

        {/* Skills inside the node - Naturally wraps and pushes height */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 h-auto pb-4 content-start">
          {skillData[cat as keyof typeof skillData].map(skill => (
            <span 
              key={skill} 
              className="px-2 py-1 bg-[#111] border border-white/5 rounded text-[10px] lg:text-xs xl:text-sm text-white/90 hover:text-white hover:border-white/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className={`absolute bottom-3 right-3 w-4 h-4 xl:w-5 xl:h-5 ${bgColor} rounded-full flex items-center justify-center`}>
          <svg className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#202428]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Absolutely positioned text outside the flow so it doesn't shift the node's vertical center */}
      <div className="absolute top-[calc(100%+8px)] left-0 w-full flex flex-col items-center pointer-events-none">
        <div className="text-center font-bold text-white/90 text-xs xl:text-sm tracking-wide shrink-0">
          {title}
        </div>
        <div className="text-center text-white/40 text-[9px] xl:text-xs mt-0.5 shrink-0">
          {sub}
        </div>
      </div>
    </div>
  );
}
