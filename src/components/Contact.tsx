import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your sales engagement? Let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company
            </label>
            <Input id="company" placeholder="Your Company" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your needs..."
              rows={5}
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
