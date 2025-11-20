import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AudioWaveform, MessageSquare, Calendar, ArrowRight, Database, Brain, Users } from "lucide-react";

const modules = [
  {
    icon: AudioWaveform,
    title: "InsightO",
    tagline: "Your prep, simplified.",
    description:
      "Turn scattered data into clear, prioritized insights with audio‑first summaries. Perfect for last‑minute refresh during commute or waiting time.",
    iconColor: "text-primary",
    link: "https://auxo-frontend-stg.auxo.tech/login", // Replace with your link
  },
  {
    icon: MessageSquare,
    title: "Super Coach",
    tagline: "Practice like it's real.",
    description:
      "Simulate HCP conversations with AI‑driven roleplay and get instant feedback on tone, content, and objection handling. Build confidence before every call.",
    iconColor: "text-primary",
    link: "https://medpersona.auxo.tech/login?from=%2F", // Replace with your link
  },
  {
    icon: Calendar,
    title: "Rep Assistant",
    tagline: "Admin work? Done.",
    description:
      "A unified AI solution that accelerates document search, distills key insights, captures voice inputs, and eliminates routine administrative effort—delivering fast, clear information that saves time and sharpens preparation.",
    iconColor: "text-primary",
    isSpecial: true,
  },
];

const repAssistantOptions = [
  {
    icon: "\/static/knowsphere.jpg",
    name: "Knowsphere",
    description: "AI-powered platform that instantly retrieves, analyzes, and summarizes complex documents and thus improving accuracy, compliance, and decision-making across fu",
    link: "https://knowsphere.auxo.tech/chat",
  },
  {
    icon: "/static/agi.png",
    name: "AGI",
    isVideo: false,
    description: "A conversational AI solution that removes the complexity of traditional BI, delivering fast, self-serve insights.",
    link: "https://gi.auxo.tech/", 
  },
  {
    icon: "/static/user.png",
    name: "CRM",
    isVideo: true,
    description: "AI solution that captures voice notes and automates routine administrative tasks saving time and streamlining everyday workflows.",
    videoUrl: "\static\Demo_Voice2SalesforceN.mp4",
  }
];

const Modules = () => {
  const [showRepAssistant, setShowRepAssistant] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleModuleClick = (module: typeof modules[0]) => {
    if (module.isSpecial) {
      setShowRepAssistant(true);
    } else if (module.link) {
      window.open(module.link, "_blank");
    }
  };

  const handleOptionClick = (option: typeof repAssistantOptions[0]) => {
    if (option.isVideo) {
      setShowRepAssistant(false);
      setShowVideo(true);
    } else if (option.link) {
      window.open(option.link, "_blank");
    }
  };

  return (
    <section id="modules" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 mt-5">
            Rep Nexus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the tools that fit your workflow, or use them all together for maximum impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14 justify-items-center">
          {modules.map((module) => (
            <Card 
              key={module.title} 
              className="group hover:shadow-xl transition-all border-border cursor-pointer p-8 md:p-10
              min-h-[320px] md:min-h-[360px] lg:min-h-[400px] rounded-2xl"
              onClick={() => handleModuleClick(module)}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <module.icon className={`w-6 h-6 ${module.iconColor}`} />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-2">{module.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {module.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Rep Assistant Dialog */}
      <Dialog open={showRepAssistant} onOpenChange={setShowRepAssistant}>
        <DialogContent className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl p-10">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Choose an option</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-20 py-8 px-4">
            {repAssistantOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => handleOptionClick(option)}
                className="flex flex-col items-center gap-4 p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <img src={option.icon} className="w-10 h-10 object-contain" />
                </div>
                <span className="text-base font-medium text-foreground capitalize">{option.name}</span>
                <p className="text-base text-sm text-foreground text-left mt-3">{option.description}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Dialog */}
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>CRM Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              className="w-full h-full rounded-lg"
              src="/static/Demo_Voice2SalesforceN.mp4"
              controls
              autoPlay
              muted
              playsInline
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Modules;
