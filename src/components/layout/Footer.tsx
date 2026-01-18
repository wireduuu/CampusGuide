import { Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-base font-semibold mb-2">
              FEN Campus Guide
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              A smart, student-friendly guide to navigating buildings,
              facilities, and essential locations on campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#buildings">Buildings</a>
              </li>
              <li>
                <a href="#essentials">Essentials</a>
              </li>
              <li>
                <a href="#categories">Categories</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                FEN Campus
              </li>

              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:info@fencampus.app">
                  info@fencampus.app
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Github size={14} />
                <a
                  href="#"
                  className="hover:underline"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <small>
            © {new Date().getFullYear()} FEN Campus Guide.
            All rights reserved.
          </small>

          <small className="text-text-muted">
            Built with ❤️ for students
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
