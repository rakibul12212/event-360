import Container from "@/components/ui/Container";
import { ArrowRight } from "@phosphor-icons/react";
import { CurrencyEur, Globe, PersonArmsSpread } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-stone-800 text-white">
      <Container className="py-[48px]">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div>
            <ol className="space-y-2"> 
          <a href="/" className="font-bold text-amber-400 border rounded px-4 py-2">
          Planorama
          </a>
              <li className="hover:text-[#FFD600]">Product</li>
              <li className="hover:text-[#FFD600]">Price</li>
              <li className="hover:text-[#FFD600]">Overview</li>
             
            </ol>
          </div>
          <div>
            <ol className="space-y-2">
              <li className="hover:text-[#FFD600]">Solutions</li>
              <li className="hover:text-[#FFD600]">Brainstorming</li>
              <li className="hover:text-[#FFD600]">Idealion</li>
              <li className="hover:text-[#FFD600]">Wirefirming</li>
              <li className="hover:text-[#FFD600]">Research </li>
            </ol>
          </div>
          <div>
            <ol className="space-y-2">
              <li className="hover:text-[#FFD600]">Resources</li>
              <li className="hover:text-[#FFD600]">Help Center</li>
              <li className="hover:text-[#FFD600]">Blog</li>
              <li className="hover:text-[#FFD600]">Tutorials</li>
              <li className="hover:text-[#FFD600]">FAQs</li>
            </ol>
          </div>
          <div>
            <ol className="space-y-2">
              <li className="hover:text-[#FFD600]">Support</li>
              <li className="hover:text-[#FFD600]">Contact Us</li>
              <li className="hover:text-[#FFD600]">Developers</li>
              <li className="hover:text-[#FFD600]">Documentation</li>
              <li className="hover:text-[#FFD600]">Intrigations</li>
            </ol>
          </div>
          <div>
            <ol className="space-y-2">
              <li className="hover:text-[#FFD600]">Company</li>
              <li className="hover:text-[#FFD600]">About</li>
              <li className="hover:text-[#FFD600]">Press</li>
              <li className="hover:text-[#FFD600]">Event</li>
              <div className="flex items-center gap-2 hover:text-[#FFD600]">
                <li>Request Demo</li>
                <ArrowRight size={18} />
              </div>
            </ol>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row pt-5 mt-5 border-slate-600 border-t-2">
          <div>
            <p> @ {currentYear}. All rights reserved.</p>
          </div>

          <ol className="flex items-center gap-5 overflow-x-hidden">
            <li className="hover:text-[#FFD600]">Terms</li>
            <li className="hover:text-[#FFD600]">Privacy</li>
            <li className="hover:text-[#FFD600]">Contact</li>
            <li className="flex items-center gap-2 hover:text-[#FFD600]">
              <Globe size={18} />
              <span>EN</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#FFD600]">
              <CurrencyEur size={18} />
              <span>EUR</span>
            </li>
            <li className="border p-1 rounded-full hover:text-[#FFD600] hover:border-[#FFD600]">
              <PersonArmsSpread size={16} />
            </li>
          </ol>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
