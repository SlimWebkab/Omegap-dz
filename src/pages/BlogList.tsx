import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  FileText, 
  Search,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '../data/blogData';

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Tous',
    'Normes & Réglementation',
    'Guide de Chantier',
    'Comparatifs & Choix',
    'Innovation Plasturgie'
  ];

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter(article => {
      const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
      const matchesQuery = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = BLOG_ARTICLES.find(a => a.status === 'published') || BLOG_ARTICLES[0];

  return (
    <div className="w-full bg-[#F8FAFC] pb-24">
      {/* Schema.org Blog/CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://www.omegap-dz.com/blog#blog",
            "name": "Centre Technique & Blog d'Ingénierie BTP OMEGAP-DZ",
            "description": "Guides d'ingénierie, décryptages normatifs NF C 15-100 et conseils de mise en œuvre des gaines et conduits électriques pour professionnels du BTP en Algérie.",
            "url": "https://www.omegap-dz.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "OMEGAP-DZ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.omegap-dz.com/logo.png"
              }
            },
            "blogPost": BLOG_ARTICLES.map(art => ({
              "@type": "BlogPosting",
              "headline": art.title,
              "description": art.excerpt,
              "url": `https://www.omegap-dz.com/blog/${art.slug}`,
              "datePublished": art.datePublished,
              "dateModified": art.dateModified,
              "image": art.featuredImageUrl,
              "author": {
                "@type": "Organization",
                "name": art.author.name
              }
            }))
          })
        }}
      />

      {/* Header Banner - Blueprint Industrial Hub */}
      <section className="relative bg-[#0B132B] text-white pt-20 pb-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        {/* Glow accent */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] mb-4 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
            Centre de Ressources Techniques · BTP & Électricité Algérie
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight max-w-4xl leading-tight mb-6">
            Blog d'Ingénierie & Guides Techniques de la Gaine Électrique
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
            Analyses normatives (NF C 15-100, NA 5275), abaques de dimensionnement de câbles, retours d’expérience chantiers et comparatifs technologiques rédigés par les ingénieurs d’extrusion OMEGAP-DZ.
          </p>

          {/* Search bar & Key Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher par norme, calibre (ex: 750N, NF C 15-100, Ø20, dalle)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1C2541]/90 border border-slate-700 rounded-none pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8] transition-colors font-mono"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-mono text-slate-400 hover:text-white underline whitespace-nowrap"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured / Hero Article Spotlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-[#00B4D8]/30 shadow-xl overflow-hidden hover:border-[#00B4D8] transition-all group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] bg-slate-900 overflow-hidden">
              <img
                src={featuredArticle.featuredImage}
                alt={featuredArticle.featuredImageAlt}
                width={800}
                height={480}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = featuredArticle.featuredImageUrl;
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 bg-[#0B132B]/90 backdrop-blur-sm border border-[#00B4D8]/50 text-[#00B4D8] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Article Technique à la Une
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-4">
                  <span className="bg-[#00B4D8]/10 text-[#0B132B] font-semibold px-2.5 py-1 border border-[#00B4D8]/20">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B132B] group-hover:text-[#00B4D8] transition-colors leading-snug mb-4">
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {featuredArticle.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredArticle.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0B132B] text-[#00B4D8] flex items-center justify-center font-bold text-xs border border-[#00B4D8]/40">
                    Ω
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B132B]">{featuredArticle.author.name}</p>
                    <p className="text-[11px] text-slate-500 font-mono">{featuredArticle.author.badge}</p>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0096B4] text-white text-xs font-heading font-bold px-4 py-2.5 transition-colors uppercase tracking-wider"
                >
                  Lire l'Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Category Navigation Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-heading font-semibold transition-all whitespace-nowrap border-b-2 -mb-[2px] ${
                selectedCategory === cat
                  ? 'border-[#00B4D8] text-[#00B4D8] bg-white shadow-sm font-bold'
                  : 'border-transparent text-slate-600 hover:text-[#0B132B] hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            const isPublished = article.status === 'published';

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                    <img
                      src={article.featuredImage}
                      alt={article.featuredImageAlt}
                      width={600}
                      height={375}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = article.featuredImageUrl;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B132B]/85 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 border border-slate-700">
                      {article.category}
                    </div>

                    {!isPublished && (
                      <div className="absolute top-3 right-3 bg-amber-500 text-[#0B132B] text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5">
                        À paraître
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
                        {article.readTime}
                      </span>
                      <span>·</span>
                      <span>{article.datePublished}</span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-[#0B132B] group-hover:text-[#00B4D8] transition-colors leading-snug mb-3">
                      {isPublished ? (
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      ) : (
                        <span>{article.title}</span>
                      )}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-mono bg-slate-50 text-slate-600 px-2 py-0.5 border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
                    R&D OMEGAP-DZ
                  </span>

                  {isPublished ? (
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-xs font-heading font-bold text-[#00B4D8] group-hover:text-[#0096B4] flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                      Consulter
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 italic">
                      En cours de rédaction
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Normative & Technical Newsletter / Alert CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0B132B] border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint-dark opacity-20 pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Veille Réglementaire & Sécurité BTP en Algérie
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-4">
              Recevez les Nouvelles Directives & Abaques de Dimensionnement
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              Restez informé des évolutions normatives IANOR, des mises à jour des guides NF C 15-100 et des innovations technologiques dans l'extrusion de gaines électriques destinées au marché algérien.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email professionnelle (BTP / Bureau d'études)..."
                className="bg-[#1C2541] border border-slate-700 px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00B4D8] font-mono flex-1"
              />
              <button
                type="button"
                className="bg-[#00B4D8] hover:bg-[#0096B4] text-white px-6 py-3 font-heading font-bold text-xs uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                S'inscrire à la Veille
              </button>
            </div>
            <p className="text-[11px] font-mono text-slate-400 mt-2">
              Réservé aux professionnels du bâtiment, bureaux d'études et artisans électriciens. Zéro spam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
