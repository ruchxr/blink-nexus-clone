const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RN</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Rep Nexus</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
