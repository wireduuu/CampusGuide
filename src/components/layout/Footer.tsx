import { Link, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand / About */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-base font-semibold text-primary">
              FEN Campus Guide
            </h3>
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              A smart, student-friendly guide designed to help
              freshers and students easily locate buildings,
              lecture halls, departments, and essential places
              across campus.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#buildings" className="hover:opacity-80">
                  Buildings
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:opacity-80">
                  Categories
                </a>
              </li>
              <li>
                <a href="#essentials" className="hover:opacity-80">
                  Essentials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                FEN Campus
              </li>

              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a
                  href="tel:+233534091178"
                  className="hover:opacity-80"
                >
                  053 409 1178
                </a>
              </li>
              
              <li className="flex items-center gap-2">
                <Link size={14} />
                <a href="https://chat.whatsapp.com/GlwzF9bxzp7IAoOIG9olFI">Join our WhatsApp Community today!</a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a
                  href="mailto:futureengineersnetwork@gmail.com"
                  className="hover:opacity-80 break-all"
                >
                  futureengineersnetwork@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <small>
            © {new Date().getFullYear()} wired.u Technologies.
            All rights reserved.
          </small>

          <small className="text-text-muted">
            Built for students, by students.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
