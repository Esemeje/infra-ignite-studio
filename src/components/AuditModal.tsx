import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdjegbn";

const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    revenue: "",
    bottleneck: "",
    currentTools: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      // Track modal open
      if (window.gtag) {
        window.gtag('event', 'modal_open', { 'modal_name': 'AI_Audit_Form' });
      }
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Track form submission attempt
    if (window.gtag) {
      window.gtag('event', 'form_submit', { 
        'form_name': 'AI_Audit_Request',
        'revenue_range': formData.revenue 
      });
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Work Email": formData.email,
          "Company Name": formData.company,
          "Website": formData.website,
          "Revenue Range": formData.revenue,
          "Biggest Bottleneck": formData.bottleneck,
          "Current Tools": formData.currentTools,
        }),
      });

      if (response.ok) {
        // Track successful submission
        if (window.gtag) {
          window.gtag('event', 'form_success', { 
            'form_name': 'AI_Audit_Request',
            'revenue_range': formData.revenue 
          });
        }
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          company: "",
          website: "",
          revenue: "",
          bottleneck: "",
          currentTools: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      // Track form error
      if (window.gtag) {
        window.gtag('event', 'form_error', { 'form_name': 'AI_Audit_Request' });
      }
      setError("Something went wrong. Please try again or email us directly at eomole@dgtpartner.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10">
              {isSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    Request Received!
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                    Thanks for reaching out. We'll review your information and get back to you within 24 hours to schedule your strategy session.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-3 rounded-full"
                  >
                    Close
                  </Button>
                </motion.div>
              ) : (
                /* Form State */
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                      Start Your Infrastructure Audit
                    </h2>
                    <p className="text-muted-foreground">
                      Tell us a bit about your business and current systems. We'll use this to make the session focused and useful.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Two-column layout for short fields on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Work Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                          placeholder="https://company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium mb-2">
                        Revenue Range <span className="text-accent">*</span>
                      </label>
                      <select
                        id="revenue"
                        name="revenue"
                        required
                        value={formData.revenue}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none cursor-pointer disabled:opacity-50"
                      >
                        <option value="" disabled>Select revenue range</option>
                        <option value="Less than $500K">Less than $500K</option>
                        <option value="$500K – $1M">$500K – $1M</option>
                        <option value="$1M – $5M">$1M – $5M</option>
                        <option value="$5M – $10M">$5M – $10M</option>
                        <option value="$10M+">$10M+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="bottleneck" className="block text-sm font-medium mb-2">
                        Biggest operational bottleneck right now? <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="bottleneck"
                        name="bottleneck"
                        required
                        rows={3}
                        value={formData.bottleneck}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none disabled:opacity-50"
                        placeholder="E.g., manual data entry, disconnected tools, lack of visibility into metrics..."
                      />
                    </div>

                    <div>
                      <label htmlFor="currentTools" className="block text-sm font-medium mb-2">
                        Current systems/tools in use <span className="text-muted-foreground text-xs">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="currentTools"
                        name="currentTools"
                        value={formData.currentTools}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all disabled:opacity-50"
                        placeholder="E.g., HubSpot, Airtable, Google Sheets, Zapier..."
                      />
                    </div>

                    {/* Error message */}
                    {error && (
                      <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    {/* Submit button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 font-bold py-6 text-base rounded-xl transition-all duration-200 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Request My Audit"
                        )}
                      </Button>
                    </div>

                    {/* Trust text */}
                    <p className="text-center text-muted-foreground text-sm">
                      No spam. No hard sell. Just a focused strategy conversation.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;
