import { useState } from "react";
import { Send, Building2, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

type FormType = "partner" | "explore";

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}

export default function ContactSection() {
  const [formType, setFormType] = useState<FormType>("partner");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    type: "Lab",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase.from("leads").insert({
        company_name: formData.companyName,
        contact_name: formData.contactName,
        email: formData.email,
        phone: formData.phone || null,
        organization_type: formData.type,
        message: formData.message,
        form_type: formType,
      });

      if (supabaseError) {
        throw supabaseError;
      }

      setIsSubmitted(true);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        type: "Lab",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to submit inquiry. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#001D21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-[#705B3C] font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Let's Build the Future of West African Healthcare Together
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Whether you're a global pharmaceutical company seeking market entry
              or a local distributor looking for quality products, we're here to
              help you succeed.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#705B3C]/10 flex items-center justify-center group-hover:bg-[#705B3C]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#705B3C]" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">Email</div>
                  <div className="text-white font-medium">info@pharmasaha.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#BBBAFF]/10 flex items-center justify-center group-hover:bg-[#BBBAFF]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#BBBAFF]" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">Phone</div>
                  <div className="text-white font-medium">+220 123 4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#705B3C]/10 flex items-center justify-center group-hover:bg-[#705B3C]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#705B3C]" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">Location</div>
                  <div className="text-white font-medium">Banjul, The Gambia</div>
                </div>
              </div>
            </div>

            {/* Form Type Toggle */}
            <div className="bg-[#001D21] border-y border-[#1A3F45] rounded-xl p-2 inline-flex border border-[#B8DFC2] shadow-sm">
              <button
                onClick={() => setFormType("partner")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  formType === "partner"
                    ? "bg-[#705B3C] text-white shadow-md"
                    : "text-white/80 hover:text-[#705B3C]"
                }`}
              >
                Partner for Market Access
              </button>
              <button
                onClick={() => setFormType("explore")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  formType === "explore"
                    ? "bg-[#BBBAFF] text-white shadow-md"
                    : "text-white/80 hover:text-[#BBBAFF]"
                }`}
              >
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#001D21] border-y border-[#1A3F45] rounded-2xl p-8 border border-[#B8DFC2] shadow-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#BBBAFF]/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#BBBAFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-white/80">
                  We've received your inquiry and will get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className={`w-6 h-6 ${formType === "partner" ? "text-[#705B3C]" : "text-[#BBBAFF]"}`} />
                  <h3 className="text-xl font-bold text-white">
                    {formType === "partner"
                      ? "Partner for Market Access"
                      : "Explore Solutions"}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-white">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-[#001D21] border-[#B8DFC2] focus:border-[#705B3C] text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-white">Contact Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#001D21] border-[#B8DFC2] focus:border-[#705B3C] text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-[#001D21] border-[#B8DFC2] focus:border-[#705B3C] text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="bg-[#001D21] border-[#B8DFC2] focus:border-[#705B3C] text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-white">Organization Type</Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#001D21] border border-[#B8DFC2] text-white focus:outline-none focus:border-[#705B3C]"
                  >
                    <option value="Lab">Pharmaceutical Lab</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Hospital">Hospital/Healthcare Provider</option>
                    <option value="Government">Government/NGO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="bg-[#001D21] border-[#B8DFC2] focus:border-[#705B3C] text-white"
                    required
                  />
                </div>

                {error && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-6 ${
                    formType === "partner" ? "btn-orange" : "bg-[#BBBAFF] hover:bg-[#009688] text-white"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
