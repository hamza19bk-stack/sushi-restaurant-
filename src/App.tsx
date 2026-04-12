/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Plus, ChevronLeft, ChevronRight, X, Globe, Star } from 'lucide-react';
import { motion } from 'motion/react';

type Language = 'en' | 'fr' | 'ar';

const translations = {
  en: {
    heroTitle: "Fresh Healthy\nDelicious\nSushi",
    heroSub: "We made fresh and healthy sushi with different recipes",
    viewMenu: "View Menu",
    highlightTitle: "The best sushi restaurant for delectable sushi delights, sashimi & more.",
    highlightSub: "Sushi Counter offers the most eclectic affair of sushi infused cuisine. Opt traditional with our rolls, tartares & platters, or try our exclusive poke bowls, sushi counter street foods & sushi squares.",
    promoTitle: "Try our newly salmon sushi Combo with 6 pieces of Fresh salmon fish",
    promoSub: "Fresh cuts of thickly sliced salmon fish\nWith wake seaweed, mooli and lemon",
    specTitle: "We specialize in modern Asian food",
    specSub: "Great for the whole family, friends or for a quick snack, our restaurants are designed with a modern, simple atmosphere that reflects the food we serve. Our delivery service will arrive promptly in elegant, practical packaging that seals in the freshness of our meals.",
    reviewsTitle: "What our customers say on Google",
    reserveTitle: "Want to Reserve a table?",
    letTalk: "Let's Talk",
    contactBtn: "Contact us Now",
    reserveSub: "Just one phone call and We will reserve a table for you also you can choose table According you requirements family members.",
    addressTitle: "Address & Hours",
    followInsta: "Follow us on Instagram",
    menuTitle: "Our Menu"
  },
  fr: {
    heroTitle: "Sushi Frais\nSain et\nDélicieux",
    heroSub: "Nous préparons des sushis frais et sains avec différentes recettes",
    viewMenu: "Voir le Menu",
    highlightTitle: "Le meilleur restaurant pour de délicieux sushis, sashimis et plus.",
    highlightSub: "Sushi Counter offre la cuisine la plus éclectique infusée de sushis. Optez pour le traditionnel avec nos makis, tartares et plateaux, ou essayez nos poke bowls exclusifs et nos spécialités.",
    promoTitle: "Essayez notre nouveau Combo de sushis au saumon avec 6 pièces de saumon frais",
    promoSub: "Des tranches épaisses de saumon frais\nAvec des algues wakame, du radis et du citron",
    specTitle: "Nous sommes spécialisés dans la cuisine asiatique moderne",
    specSub: "Idéal pour toute la famille, entre amis ou pour une collation rapide, nos restaurants sont conçus avec une atmosphère moderne et simple. Notre service de livraison arrivera rapidement dans un emballage élégant.",
    reviewsTitle: "Ce que nos clients disent sur Google",
    reserveTitle: "Vous souhaitez réserver une table ?",
    letTalk: "Parlons-en",
    contactBtn: "Contactez-nous",
    reserveSub: "Un simple appel téléphonique et nous vous réserverons une table. Vous pouvez également choisir votre table selon vos besoins.",
    addressTitle: "Adresse et Horaires",
    followInsta: "Suivez-nous sur Instagram",
    menuTitle: "Notre Menu"
  },
  ar: {
    heroTitle: "سوشي طازج\nصحي\nولذيذ",
    heroSub: "نحن نحضر سوشي طازج وصحي بوصفات مختلفة",
    viewMenu: "عرض القائمة",
    highlightTitle: "أفضل مطعم سوشي لأشهى المأكولات، الساشيمي والمزيد.",
    highlightSub: "يقدم مطعمنا أطباق السوشي المتنوعة. اختر الأطباق التقليدية مع اللفائف والطرطار، أو جرب أطباق البوكي الحصرية الخاصة بنا.",
    promoTitle: "جرب كومبو السوشي بالسلمون الجديد مع 6 قطع من سمك السلمون الطازج",
    promoSub: "شرائح سميكة من سمك السلمون الطازج\nمع أعشاب واكامي البحرية والفجل والليمون",
    specTitle: "نحن متخصصون في المأكولات الآسيوية الحديثة",
    specSub: "رائع لجميع أفراد الأسرة أو الأصدقاء أو لتناول وجبة خفيفة سريعة، تم تصميم مطاعمنا بجو عصري وبسيط يعكس الطعام الذي نقدمه.",
    reviewsTitle: "ما يقوله عملاؤنا على جوجل",
    reserveTitle: "هل ترغب في حجز طاولة؟",
    letTalk: "لنتحدث",
    contactBtn: "اتصل بنا الآن",
    reserveSub: "مكالمة هاتفية واحدة وسنحجز لك طاولة، كما يمكنك اختيار الطاولة وفقًا لمتطلبات أفراد عائلتك.",
    addressTitle: "العنوان وساعات العمل",
    followInsta: "تابعنا على إنستغرام",
    menuTitle: "قائمتنا"
  }
};

const googleReviews = [
  {
    name: "Sarah M.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+M&background=random",
    text: "Best sushi in Ifrane! The salmon combo is incredibly fresh and the atmosphere is great.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Karim B.",
    avatar: "https://ui-avatars.com/api/?name=Karim+B&background=random",
    text: "Excellent service and delicious food. The poke bowls are a must-try. Will definitely come back!",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Youssef A.",
    avatar: "https://ui-avatars.com/api/?name=Youssef+A&background=random",
    text: "Very clean place, modern Asian vibe, and the staff is super friendly. Highly recommended.",
    rating: 5,
    date: "2 months ago"
  }
];

const menuImages = [
  "https://i.ibb.co/tptwVNzj/Capture-d-cran-2026-04-07-193323.png",
  "https://i.ibb.co/V7yq6QF/Capture-d-cran-2026-04-07-193339.png",
  "https://i.ibb.co/ksCJCt61/Capture-d-cran-2026-04-07-193410.png",
  "https://i.ibb.co/Xk7kgbtj/Capture-d-cran-2026-04-07-193429.png",
  "https://i.ibb.co/jBKDczW/Capture-d-cran-2026-04-07-193446.png",
  "https://i.ibb.co/JjntN2QT/Capture-d-cran-2026-04-07-193506.png"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <img src="https://i.ibb.co/VckgmpCk/287500926-697577624684374-2303723854524683746-n.jpg" alt="Logo" className="h-16 w-auto rounded-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <Globe size={18} className="text-gray-500" />
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-transparent text-sm font-medium outline-none cursor-pointer"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-16 md:py-24 relative min-h-[85vh] flex items-center justify-start text-start">
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden rounded-b-[3rem] md:rounded-[3rem]">
           <div className="absolute inset-0 bg-white/40 z-10"></div>
           <video 
             src="https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1775998308/Chef_slicing_salmon_202604121451_kpuxfp.mp4" 
             className="w-full h-full object-cover scale-105" 
             autoPlay 
             loop 
             muted 
             playsInline 
           />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl z-20 flex flex-col items-start px-4 md:px-12"
        >
          <h1 className="text-6xl md:text-8xl font-serif font-bold italic leading-[1.1] mb-6 text-black tracking-tight whitespace-pre-line">
            {t.heroTitle}
          </h1>
          <p className="text-gray-900 font-medium text-lg md:text-2xl mb-10 leading-relaxed max-w-md">
            {t.heroSub}
          </p>
          <button onClick={() => setIsMenuOpen(true)} className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors shadow-xl shadow-black/20 cursor-pointer text-lg">
            {t.viewMenu} <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
          </button>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-row gap-4 sm:gap-8 relative justify-center lg:justify-start">
          {/* Navigation Arrows */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:flex gap-3">
             <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-400 hover:text-black"><ChevronLeft size={20} /></button>
             <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-400 hover:text-black"><ChevronRight size={20} /></button>
          </div>

          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative w-1/2 sm:w-64 aspect-[9/16]"
          >
            <img src="https://i.ibb.co/skbGsvv/Capture-d-cran-2026-04-07-193943.png" alt="Sushi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative w-1/2 sm:w-64 mt-12 sm:mt-16 aspect-[9/16]"
          >
            <img src="https://i.ibb.co/v6sbc7z2/Capture-d-cran-2026-04-07-193832.png" alt="Sushi" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto lg:mx-0 text-center lg:text-left mt-12 lg:mt-0 flex flex-col"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            {t.highlightTitle}
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            {t.highlightSub}
          </p>
          <img src="https://i.ibb.co/7NWJDHmQ/Capture-d-cran-2026-04-07-193038.png" alt="Sushi Counter" className="w-full rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
        </motion.div>
      </section>

      {/* Promo Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="https://i.ibb.co/RGbPLJ2t/Capture-d-cran-2026-04-07-193015.png" alt="Salmon Combo" className="w-full h-auto object-cover rounded-[2.5rem] shadow-2xl" referrerPolicy="no-referrer" />
        </motion.div>
      </section>

      {/* Text between Images */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            {t.promoTitle}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed whitespace-pre-line">
            {t.promoSub}
          </p>
        </motion.div>
      </section>

      {/* Specialization Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
           <div className="absolute -inset-4 bg-white/40 rounded-[3rem] blur-xl -z-10"></div>
          <img src="https://i.ibb.co/WNTRRQqm/Capture-d-cran-2026-04-07-193213.png" alt="Modern Asian Food" className="w-full h-auto object-cover rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" />
        </motion.div>
      </section>

      {/* Specialization Text */}
      <section className="max-w-7xl mx-auto px-6 py-8 md:py-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            {t.specTitle}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {t.specSub}
          </p>
        </motion.div>
      </section>

      {/* Google Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-gray-50/80 rounded-[3rem] my-12 shadow-sm border border-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t.reviewsTitle}</h2>
          <div className="flex justify-center items-center gap-2 text-xl font-bold">
            4.9 
            <div className="flex text-yellow-400">
              <Star fill="currentColor" size={20}/>
              <Star fill="currentColor" size={20}/>
              <Star fill="currentColor" size={20}/>
              <Star fill="currentColor" size={20}/>
              <Star fill="currentColor" size={20}/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {googleReviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video & Gallery Section */}
      <section id="app-promo-placeholder" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl bg-black"
          >
            <video 
              src="https://res.cloudinary.com/ddfazkkij/video/upload/q_auto/f_auto/v1775586232/SaveClip.App_AQOBXmsLTCOBX0RTNXHWfD_lRv262syhJw0n45d1kTr7_OUU_8TUaoh0n0oQoCCbwcD6ZHAOodAOUcN3-HH9X8hpT-9J5IWsvqYsyJY_ksghku.mp4" 
              className="w-full h-full object-cover aspect-[9/16]"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
          <div className="w-full lg:w-1/3 flex flex-col gap-8 justify-center">
            <motion.img 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://i.ibb.co/Cp17cPff/Capture-d-cran-2026-04-07-194035.png" 
              alt="Sushi" 
              className="w-full h-48 md:h-64 object-cover rounded-[2rem] shadow-xl" 
              referrerPolicy="no-referrer" 
            />
            <motion.img 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://i.ibb.co/3y6jrnqD/Capture-d-cran-2026-04-07-193805.png" 
              alt="Sushi" 
              className="w-full aspect-[9/16] object-cover rounded-[2rem] shadow-xl" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </section>

      {/* Reservation & Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 mt-12">
        <div className="border-t border-gray-200 pt-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <p className="text-xs font-extrabold tracking-widest text-gray-400 mb-3 uppercase">{t.letTalk}</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">{t.reserveTitle}</h2>
            </div>
            <a href="tel:+212616830380" className="bg-black text-white px-10 py-5 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap shadow-xl shadow-black/20 inline-block">
              {t.contactBtn}
            </a>
          </div>
          <p className="text-gray-500 max-w-xl mb-20 leading-relaxed">
            {t.reserveSub}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            <div>
              <div className="flex items-center mb-6">
                <img src="https://i.ibb.co/VckgmpCk/287500926-697577624684374-2303723854524683746-n.jpg" alt="Logo" className="h-16 w-auto rounded-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {t.highlightTitle}
              </p>
              <a href="https://www.instagram.com/bonsai_sushi_bar/" target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:text-gray-600 transition-colors">
                {t.followInsta}
              </a>
            </div>
            <div>
              <h4 className="font-extrabold mb-6 text-lg">{t.addressTitle}</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-lg">📍</span> 
                  <span>Quartier Hay Ryad - Ifrane Centre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">🕛</span> 
                  <span>Lundi à Dimanche : 12pm - 12am</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg">📞</span> 
                  <a href="tel:+212616830380" className="hover:text-black transition-colors">+212 6 16 83 03 80</a>
                </li>
              </ul>
            </div>
            <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://maps.google.com/maps?q=Bonsai%20Sushi%20Bar%20Ifrane&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-y-auto">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="fixed top-6 right-6 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full cursor-pointer"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full my-8 flex flex-col gap-8 pt-12">
            <h2 className="text-4xl font-extrabold text-white text-center mb-4">{t.menuTitle}</h2>
            {menuImages.map((img, idx) => (
              <img key={idx} src={img} alt={`Menu page ${idx + 1}`} className="w-full h-auto rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
