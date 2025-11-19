const metrics = [
  {
    value: "40%",
    label: "Time Saved",
    description: "Prep time reduced by up to 40% with audio‑first insights and automated workflows.",
  },
  {
    value: "85%",
    label: "CRM Adoption",
    description: "CRM adoption improved through voice automation and seamless data capture.",
  },
  {
    value: "2.5×",
    label: "Engagement Quality",
    description: "Engagement quality enhanced with personalized, insight‑driven conversations.",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Measurable Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real results from sales teams using Rep Nexus to transform their engagement strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{metric.label}</h3>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Built for Compliance, Designed for Results
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Rep Nexus integrates seamlessly with your existing systems while maintaining the highest
            standards of data security and regulatory compliance. From GDPR to HIPAA, we've got you
            covered.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-6 py-3 bg-background rounded-lg border border-border font-semibold text-foreground">
              GDPR
            </div>
            <div className="px-6 py-3 bg-background rounded-lg border border-border font-semibold text-foreground">
              HIPAA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
