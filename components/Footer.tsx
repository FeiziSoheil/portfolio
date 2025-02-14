"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github
} from "lucide-react";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  const socialLinks = {
    telegram: "https://t.me/yourusername",
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden 2xs:border-t-0 sm:pt-12 2xs:pt-44 sm:border-t  border-white/10 text-gray-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b0d12] via-[#0b0d12] to-[#0b0d12]"></div>

      {/* Main Footer Content */}
      <motion.div className="relative sm:container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 p-4 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white">About Me</h3>
            <p className="text-sm">
              Frontend Developer | React & Next.js Enthusiast | Passionate about
              AI & Bioinformatics.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="space-y-4  p-4 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Contact", "Blog"].map((link) => (
                <motion.li
                  key={link}
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 inline-block"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-4  p-4 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-2">
              {[
                { Icon: MapPin, text: "212 Modares Street, IR ARD" },
                { Icon: Phone, text: "+98 (914) 289-5825" },
                { Icon: Mail, text: "soheil.feizi@hotmail.com" },
              ].map(({ Icon, text }, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Icon size={20} />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 p-4 rounded-lg transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white">Social Media</h3>
            <div className="flex gap-4">
              {[
                { Icon: FaTelegramPlane, link: socialLinks.telegram },
                { Icon: Github, link: socialLinks.github },
                { Icon: Instagram, link: socialLinks.instagram },
                { Icon: Linkedin, link: socialLinks.linkedin },
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  variants={linkHoverVariants}
                  whileHover="hover"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={itemVariants}
        className="relative border-t border-gray-800"
      >
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </motion.div>

      {/* Grid Pattern SVG Background at Bottom */}
      <svg
        aria-hidden="true"
        className="-z-10 absolute bottom-0 left-0 right-0 h-32 stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y="0"
            id="footer-grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 100V.5H100" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="0" className="overflow-visible fill-white/5">
          <path d="M-100 0H1v101h-101zm400 0h101v101H300zM-200 300h101v101h-101zm300 100h101v101H100z"></path>
        </svg>
        <rect fill="url(#footer-grid)" width="100%" height="100%"></rect>
      </svg>

      {/* Blur Effect (Chess-like) at Bottom */}
      <div
        aria-hidden="true"
        className="-z-10 absolute 2xs:top-0 md:top-40  left-[calc(50%-4rem)] transform-gpu blur-3xl"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#7cc8ff] to-[#181130] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>
    </motion.footer>
  );
}

export default Footer;
