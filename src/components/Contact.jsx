import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-ground text-ink border-t border-hairline">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Get In <span className="text-ink-blue italic">Touch</span></h2>
          <div className="w-20 h-1 bg-ink-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
            <p className="text-secondary-ink font-mono text-sm mb-8">
              Feel free to reach out to me for any questions or opportunities. 
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary-ground rounded-full text-ink-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-muted">Location</h4>
                  <p className="text-ink">Egypt</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary-ground rounded-full text-ink-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-muted">Email</h4>
                  <p className="text-ink">mohamed2nabil5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary-ground rounded-full text-ink-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1 uppercase tracking-widest text-xs text-muted">Phone</h4>
                  <p className="text-ink">+20 1145252173</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold mb-4 font-mono uppercase tracking-widest text-xs text-muted">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/mohamed2nabil" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-secondary-ground hover:bg-ink-blue hover:text-ground transition-colors rounded-full text-ink">
                  Git
                </a>
                <a href="https://www.linkedin.com/in/mohamed-nabil-41047a223/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-secondary-ground hover:bg-ink-blue hover:text-ground transition-colors rounded-full text-ink">
                  In
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif mb-6">Send Me a Message</h3>
            <form className="space-y-4 font-mono text-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-muted text-xs uppercase tracking-widest">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-secondary-ground border border-hairline focus:border-ink-blue focus:outline-none" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-muted text-xs uppercase tracking-widest">Your Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-secondary-ground border border-hairline focus:border-ink-blue focus:outline-none" required />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-muted text-xs uppercase tracking-widest">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 bg-secondary-ground border border-hairline focus:border-ink-blue focus:outline-none" required></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-ink text-ground font-mono text-xs uppercase tracking-widest hover:bg-ink-blue transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
