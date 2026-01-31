import React, { useState } from "react";
import { Loader2, Sparkles, CheckCircle2, MoveRight } from "lucide-react";
import { analyzeLead } from "../services/geminiService";
import type { ContactFormData, AIAnalysisResponse } from "../types";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    industry: "Technology",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [analysis, setAnalysis] = useState<AIAnalysisResponse | null>(null);

  const sendContactEmail = async (
    data: ContactFormData & { analysis: AIAnalysisResponse }
  ) => {
    const res = await axios.post(
      "https://portfolio-kappa-lovat-61.vercel.app/api/v1/contact",
      {
        name: data.name,
        email: data.email,
        company: data.company,
        industry: data.industry,
        message: data.message,
        aiAnalysis: {
          priority: data.analysis.priority,
          sentiment: data.analysis.sentiment,
          greeting: data.analysis.personalizedGreeting,
        },
        submittedAt: new Date().toISOString(),
      }
    );

    console.log(res)

    if (res.status !== 200) {

      throw new Error("Failed to send email");
    }

    return res.data;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // 1. AI Analysis
      const result = await analyzeLead(formData);
      setAnalysis(result);

      // 2. Send email via API
      await sendContactEmail({
        ...formData,
        analysis: result,
      });

      // 3. Success
      setStatus("success");
    } catch (err) {
      console.error("Contact submission failed:", err);
      setStatus("error");
    }
  };

  if (status === "success" && analysis) {
    return (
      <section className="py-40 px-4 bg-white dark:bg-black transition-colors duration-500">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] animate-in zoom-in-95 duration-700 border border-slate-200 dark:border-white/10">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-hero font-bold text-slate-900 dark:text-white mb-4">
              Submission Verified
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg tracking-tight">
              The Nexus engine has completed its preliminary assessment.
            </p>
          </div>

          <div className="space-y-10">
            <div className="p-10 bg-slate-50 dark:bg-white/5 rounded-[2rem] border border-slate-100 dark:border-white/10 relative overflow-hidden group">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600 block mb-6">
                AI Assessment Context
              </span>
              <p className="text-2xl text-slate-800 dark:text-slate-200 font-medium italic leading-relaxed">
                "{analysis.personalizedGreeting}"
              </p>
              <Sparkles className="absolute bottom-6 right-6 w-12 h-12 text-slate-900/5 dark:text-white/5" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-3xl text-center transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2">
                  Priority
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-xl uppercase tracking-widest">
                  {analysis.priority}
                </span>
              </div>
              <div className="p-8 bg-white dark:bg-[#111111] border border-slate-100 dark:border-white/10 rounded-3xl text-center transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-2">
                  Sentiment
                </span>
                <span className="text-slate-900 dark:text-white font-bold text-xl uppercase tracking-widest">
                  {analysis.sentiment}
                </span>
              </div>
            </div>

            <button
              onClick={() => setStatus("idle")}
              className="w-full py-6 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-black uppercase tracking-widest rounded-full hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-3"
            >
              Finish Assessment
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-48 bg-white dark:bg-black transition-colors duration-500 reveal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-slate-400 dark:text-slate-500 font-black mb-4 uppercase tracking-[0.4em] text-[10px]">
                Consultation
              </h2>
              <h3 className="text-5xl md:text-8xl font-hero font-bold text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.9]">
                Initiate <br />
                <span className="text-slate-300 dark:text-slate-600">
                  Audit
                </span>
              </h3>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-lg">
                Submit your enterprise parameters. Our initial diagnostic is
                performed by NexusCore to ensure technical compatibility with
                our high-throughput clusters.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                  <MoveRight className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                    Direct Liaison
                  </p>
                  <p className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
                    nexus@strategic.group
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[4rem] border border-slate-200 dark:border-white/10 relative overflow-hidden">
            {status === "loading" && (
              <div className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center rounded-[4rem] animate-in fade-in duration-500">
                <Loader2 className="w-14 h-14 text-slate-900 dark:text-white animate-spin mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] animate-pulse text-slate-400">
                  Diagnostic Cluster Active
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-2xl border border-red-200 bg-red-50 dark:bg-red-500/10 dark:border-red-500/20">
                <p className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                  Transmission Failed
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  We couldn’t send your request right now. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Entity
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-all font-bold text-lg placeholder:text-slate-300 dark:placeholder:text-slate-700"
                    placeholder="Full identity"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                    Connectivity
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-all font-bold text-lg placeholder:text-slate-300 dark:placeholder:text-slate-700"
                    placeholder="Work email"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">
                  Strategy Brief
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-slate-900 dark:focus:border-white transition-all font-bold text-lg resize-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  placeholder="Summarize your mission critical AI objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-black font-black py-7 rounded-full transition-all flex items-center justify-center gap-4 group text-xs uppercase tracking-[0.3em] hover:scale-[1.02] active:scale-[0.98] shadow-2xl dark:shadow-white/20"
              >
                Launch Assessment
                <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
