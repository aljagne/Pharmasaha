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
    <section id="contact" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-[#F78C1E] font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-6">
              Let's Build the Future of West African Healthcare Together
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're a global pharmaceutical company seeking market entry
              or a local distributor looking for quality products, we're here to
              help you succeed.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#F78C1E]/10 flex items-center justify-center group-hover:bg-[#F78C1E]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#F78C1E]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Email</div>
                  <div className="text-[#1A1A1A] font-medium">info@pharmasaha.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#00C1A8]/10 flex items-center justify-center group-hover:bg-[#00C1A8]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#00C1A8]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Phone</div>
                  <div className="text-[#1A1A1A] font-medium">+220 123 4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#F78C1E]/10 flex items-center justify-center group-hover:bg-[#F78C1E]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#F78C1E]" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Location</div>
                  <div className="text-[#1A1A1A] font-medium">Banjul, The Gambia</div>
                </div>
              </div>
            </div>

            {/* Form Type Toggle */}
            <div className="bg-white rounded-xl p-2 inline-flex border border-[#E1E6ED] shadow-sm">
              <button
                onClick={() => setFormType("partner")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  formType === "partner"
                    ? "bg-[#F78C1E] text-white shadow-md"
                    : "text-gray-600 hover:text-[#F78C1E]"
                }`}
              >
                Partner for Market Access
              </button>
              <button
                onClick={() => setFormType("explore")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  formType === "explore"
                    ? "bg-[#00C1A8] text-white shadow-md"
                    : "text-gray-600 hover:text-[#00C1A8]"
                }`}
              >
                Explore Solutions
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#E1E6ED] shadow-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#00C1A8]/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#00C1A8]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your inquiry and will get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className={`w-6 h-6 ${formType === "partner" ? "text-[#F78C1E]" : "text-[#00C1A8]"}`} />
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {formType === "partner"
                      ? "Partner for Market Access"
                      : "Explore Solutions"}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-[#1A1A1A]">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-[#F5F7FA] border-[#E1E6ED] focus:border-[#F78C1E] text-[#1A1A1A]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="text-[#1A1A1A]">Contact Name</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#F5F7FA] border-[#E1E6ED] focus:border-[#F78C1E] text-[#1A1A1A]"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1A1A1A]">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="bg-[#F5F7FA] border-[#E1E6ED] focus:border-[#F78C1E] text-[#1A1A1A]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1A1A1A]">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="bg-[#F5F7FA] border-[#E1E6ED] focus:border-[#F78C1E] text-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-[#1A1A1A]">Organization Type</Label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#F5F7FA] border border-[#E1E6ED] text-[#1A1A1A] focus:outline-none focus:border-[#F78C1E]"
                  >
                    <option value="Lab">Pharmaceutical Lab</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Hospital">Hospital/Healthcare Provider</option>
                    <option value="Government">Government/NGO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1A1A1A]">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={4}
                    className="bg-[#F5F7FA] border-[#E1E6ED] focus:border-[#F78C1E] text-[#1A1A1A]"
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
                    formType === "partner" ? "btn-orange" : "bg-[#00C1A8] hover:bg-[#009688] text-white"
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
