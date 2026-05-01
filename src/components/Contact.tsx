"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userMessage.email.length > 0 && userMessage.message.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [userMessage]);

  const msgSend = async () => {
    try {
      setLoading(true);
      await axios.post("/api/contact", {
        name: userMessage.name,
        email: userMessage.email,
        message: userMessage.message,
      });
      toast.success("Message sent successfully!");
      setUserMessage({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20 px-6">
      <div>
        <h2 className="flex items-center justify-center font-bold text-4xl pb-4 tracking-tight">
          Contact Me
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-16">
          Have a project in mind? Let&apos;s talk.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-10">
        {/* Left: Info */}
        <div className="flex flex-col gap-6 sm:w-64 flex-shrink-0">
          <div>
            <h3 className="font-semibold text-base mb-1">Get in touch</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
              I&apos;m currently open to new opportunities. Whether you have a
              question or just want to say hi — my inbox is always open!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:opupal07@gmail.com"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Mail size={14} />
              </span>
              opupal07@gmail.com
            </a>
            <Link
              href="https://github.com/opurbo007"
              target="_blank"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Github size={14} />
              </span>
              github.com/opurbo007
            </Link>
            <Link
              href="https://www.linkedin.com/in/opu-pal-9b72a52b0/"
              target="_blank"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-purple-400 transition-colors"
            >
              <span className="p-2 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <Linkedin size={14} />
              </span>
              Opu Pal on LinkedIn
            </Link>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-white dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 focus:border-purple-500 transition-colors rounded-xl h-11"
            value={userMessage.name}
            onChange={(e) =>
              setUserMessage({ ...userMessage, name: e.target.value })
            }
          />
          <Input
            type="email"
            placeholder="Your Email Address"
            className="bg-white dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 focus:border-purple-500 transition-colors rounded-xl h-11"
            value={userMessage.email}
            onChange={(e) =>
              setUserMessage({ ...userMessage, email: e.target.value })
            }
          />
          <Textarea
            className="bg-white dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 focus:border-purple-500 transition-colors rounded-xl h-36 resize-none"
            placeholder="Tell me about your project or just say hello..."
            value={userMessage.message}
            onChange={(e) =>
              setUserMessage({ ...userMessage, message: e.target.value })
            }
          />
          <button
            onClick={msgSend}
            disabled={disable || loading}
            className={`flex items-center justify-center gap-2 w-full h-11 rounded-xl text-sm font-medium transition-all duration-200
              ${disable || loading
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25 cursor-pointer"
              }`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

