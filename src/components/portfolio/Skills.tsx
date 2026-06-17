import { Section } from "./Section";

const groups = [
  {
    title: "Programming",
    items: ["Python", "Java", "C++", "SQL", "Linux"],
  },
  {
    title: "Machine Learning & AI",
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Transformers", "GANs", "Computer Vision", "NLP", "LLMs", "Model Explainability"],
  },
  {
    title: "Generative AI & LLM",
    items: ["Prompt Engineering", "LangChain", "RAG", "AI Agents", "Multi-Agent Systems", "LLM Fine-Tuning", "FAISS", "ChromaDB"],
  },
  {
    title: "Data Engineering",
    items: ["ETL Pipelines", "Data Warehousing", "Data Modeling", "Feature Engineering", "EDA", "Apache Spark", "PySpark", "Hadoop", "Hive"],
  },
  {
    title: "Frameworks & Tools",
    items: ["TensorFlow", "PyTorch", "Scikit-Learn", "FastAPI", "Docker", "GitHub"],
  },
  {
    title: "Cloud",
    items: ["AWS", "Azure", "Firebase", "BigQuery", "SageMaker", "Bedrock"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills · Command Center"
      title={<>The <span className="text-gradient">stack</span> behind the systems.</>}
      intro="A working AI operations dashboard — tools and techniques I use daily to ship intelligent products."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="glass glow-border rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{g.title}</h3>
              <span className="font-mono text-[10px] text-[var(--neon)]">{g.items.length.toString().padStart(2, "0")}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-3 py-1.5 text-xs text-foreground/90 transition hover:border-[var(--neon)]/40 hover:text-[var(--neon)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
