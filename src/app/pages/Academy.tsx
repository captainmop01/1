import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  Target,
  Shield,
  Lightbulb,
  Award,
  Rocket,
  Brain,
  Trophy,
  Clock,
  CheckCircle2,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";

export default function Academy() {
  const { t } = useLanguage();
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 1,
      title: "الفبای بازارها",
      subtitle: "مبانی اولیه کریپتو و فارکس",
      icon: BookOpen,
      color: "#8A2BE2",
      lessons: 30,
      duration: "20 ساعت",
      description: "در این سطح با مفاهیم پایه بلاکچین، ارزهای دیجیتال، بازار فارکس و اصول اولیه معامله‌گری آشنا می‌شوید.",
      topics: [
        "بلاکچین از صفر - مفاهیم اولیه و کاربردها",
        "فارکس چیست؟ - آشنایی با بازار ارز",
        "انواع بازارهای مالی - سهام، کالا، ارز و کریپتو",
        "روانشناسی اولیه معامله‌گری",
        "ساخت کیف پول و امنیت اولیه",
        "آشنایی با صرافی‌ها و پلتفرم‌های معاملاتی",
      ],
      resources: [
        { name: "کتاب: مبانی بلاکچین", link: "https://www.binance.com/en/academy" },
        { name: "ویدیو: فارکس برای مبتدیان", link: "https://www.youtube.com/results?search_query=forex+basics+beginners" },
      ]
    },
    {
      level: 2,
      title: "تحلیل تکنیکال مقدماتی",
      subtitle: "خواندن نمودارها و الگوهای قیمت",
      icon: TrendingUp,
      color: "#00D4FF",
      lessons: 40,
      duration: "30 ساعت",
      description: "یادگیری نحوه خواندن نمودارها، شناسایی روندها و درک حرکات قیمت در بازار.",
      topics: [
        "کندل‌شناسی حرفه‌ای - 50 الگوی شمعی مهم",
        "خطوط روند و کانال‌های قیمتی",
        "حمایت و مقاومت دینامیک و استاتیک",
        "حجم معاملات و تحلیل آن",
        "تایم فریم‌ها و استراتژی‌های مختلف",
        "الگوهای قیمت کلاسیک",
      ],
      resources: [
        { name: "راهنمای کامل کندل استیک", link: "https://www.investopedia.com/trading/candlestick-charting-what-is-it" },
        { name: "تمرین‌های عملی تحلیل نمودار", link: "https://www.babypips.com/learn/forex" },
      ]
    },
    {
      level: 3,
      title: "اندیکاتورهای پایه",
      subtitle: "ابزارهای تحلیل تکنیکال",
      icon: BarChart3,
      color: "#8A2BE2",
      lessons: 35,
      duration: "25 ساعت",
      description: "آشنایی با مهم‌ترین اندیکاتورها و نحوه استفاده از آن‌ها در تحلیل بازار.",
      topics: [
        "میانگین متحرک (SMA, EMA, WMA)",
        "RSI پیشرفته - تشخیص واگرایی‌ها",
        "MACD و کاربردهای آن",
        "بولینگر بندز و استراتژی‌های معاملاتی",
        "Stochastic Oscillator",
        "Fibonacci Retracement و Extensions",
      ],
      resources: [
        { name: "آموزش کامل RSI", link: "https://www.investopedia.com/terms/r/rsi.asp" },
        { name: "استراتژی‌های MACD", link: "https://www.tradingview.com/support/solutions/43000502344-macd-moving-average-convergence-divergence/" },
      ]
    },
    {
      level: 4,
      title: "الگوهای نموداری",
      subtitle: "شناسایی الگوهای کلاسیک و هارمونیک",
      icon: Target,
      color: "#00D4FF",
      lessons: 50,
      duration: "40 ساعت",
      description: "تسلط بر شناسایی و معامله با الگوهای نموداری کلاسیک، هارمونیک و پرایس اکشن.",
      topics: [
        "الگوهای کلاسیک - سر و شانه، مثلث، پرچم",
        "الگوهای هارمونیک - گارتلی، باترفلای، کرب، بت",
        "الگوهای شمعی ژاپنی پیشرفته",
        "پرایس اکشن و Smart Money Concept",
        "الگوهای بازگشتی و ادامه‌دهنده",
        "تحلیل چند تایم فریمی",
      ],
      resources: [
        { name: "آموزش الگوهای هارمونیک", link: "https://www.youtube.com/results?search_query=harmonic+patterns+trading" },
        { name: "کتاب الگوهای نموداری", link: "https://www.investopedia.com/trading/using-bullish-candlestick-patterns-buy-stocks/" },
      ]
    },
    {
      level: 5,
      title: "مدیریت سرمایه و ریسک",
      subtitle: "اصول مدیریت سرمایه در معاملات",
      icon: Shield,
      color: "#8A2BE2",
      lessons: 25,
      duration: "20 ساعت",
      description: "یادگیری اصول مدیریت سرمایه، روانشناسی معامله‌گری و کنترل ریسک برای حفظ سرمایه.",
      topics: [
        "اصول مدیریت سرمایه (Money Management)",
        "نسبت ریسک به ریوارد (Risk/Reward)",
        "روانشناسی معامله‌گری پیشرفته",
        "استراتژی‌های حد ضرر و حد سود",
        "مدیریت احساسات در معاملات",
        "تحلیل ریسک بازار",
      ],
      resources: [
        { name: "کتاب: هنر مدیریت سرمایه", link: "https://www.investopedia.com/articles/trading/09/risk-management.asp" },
        { name: "ویدیو: روانشناسی معامله‌گری", link: "https://www.youtube.com/results?search_query=trading+psychology+mistakes" },
      ]
    },
    {
      level: 6,
      title: "تحلیل فاندامنتال",
      subtitle: "تحلیل بنیادی بازارها",
      icon: Lightbulb,
      color: "#00D4FF",
      lessons: 35,
      duration: "30 ساعت",
      description: "آشنایی با تحلیل بنیادی در بازارهای مالی و تاثیر اخبار و رویدادها بر قیمت‌ها.",
      topics: [
        "مبانی تحلیل فاندامنتال",
        "اخبار اقتصادی و تاثیر آن بر بازار",
        "تحلیل بنیادی در کریپتو",
        "شاخص‌های اقتصادی مهم",
        "نرخ بهره و سیاست‌های پولی",
        "تحلیل توییت‌نومیکس",
      ],
      resources: [
        { name: "آموزش تحلیل فاندامنتال", link: "https://www.investopedia.com/terms/f/fundamentalanalysis.asp" },
        { name: "تقویم اقتصادی", link: "https://www.forexfactory.com/calendar" },
      ]
    },
    {
      level: 7,
      title: "استراتژی‌های معاملاتی",
      subtitle: "طراحی و اجرای استراتژی‌های حرفه‌ای",
      icon: Target,
      color: "#8A2BE2",
      lessons: 45,
      duration: "35 ساعت",
      description: "یادگیری و طراحی استراتژی‌های معاملاتی متنوع برای بازارهای مختلف.",
      topics: [
        "استراتژی‌های اسکالپینگ",
        "استراتژی‌های معاملات روزانه",
        "استراتژی‌های معاملات نوسانی",
        "استراتژی‌های پوزیشن‌تریدینگ",
        "استراتژی‌های معاملات الگوریتمی",
        "بهینه‌سازی استراتژی‌ها",
      ],
      resources: [
        { name: "استراتژی‌های معاملاتی حرفه‌ای", link: "https://www.tradingview.com/education/" },
        { name: "ویدیو: معاملات روزانه", link: "https://www.youtube.com/results?search_query=day+trading+strategies+for+beginners" },
      ]
    },
    {
      level: 8,
      title: "تحلیل پیشرفته",
      subtitle: "ابزارها و تکنیک‌های تحلیل حرفه‌ای",
      icon: BarChart3,
      color: "#00D4FF",
      lessons: 40,
      duration: "30 ساعت",
      description: "آشنایی با ابزارهای پیشرفته تحلیل تکنیکال و فاندامنتال.",
      topics: [
        "ایچیموکو (Ichimoku Kinko Hyo)",
        "نظریه امواج الیوت",
        "تحلیل همبستگی بازارها",
        "آربیتراژ و اسپرد معاملاتی",
        "تحلیل موقعیت‌های معاملاتی",
        "استفاده از اندیکاتورهای پیشرفته",
      ],
      resources: [
        { name: "آموزش ایچیموکو", link: "https://www.investopedia.com/terms/i/ichimokuchart.asp" },
        { name: "نظریه امواج الیوت", link: "https://www.investopedia.com/terms/e/elliottwavetheory.asp" },
      ]
    },
    {
      level: 9,
      title: "روانشناسی پیشرفته",
      subtitle: "تسلط بر ذهنیت معامله‌گری",
      icon: Brain,
      color: "#8A2BE2",
      lessons: 25,
      duration: "20 ساعت",
      description: "یادگیری تکنیک‌های پیشرفته روانشناسی برای کنترل احساسات و بهبود عملکرد.",
      topics: [
        "مدیریت استرس و اضطراب در معاملات",
        "ایجاد عادت‌های مثبت معامله‌گری",
        "غلبه بر ترس و طمع",
        "تمرکز و ذهن‌آگاهی در معاملات",
        "اعتماد به نفس در معامله‌گری",
        "برنامه‌ریزی ذهنی برای موفقیت",
      ],
      resources: [
        { name: "کتاب: روانشناسی پول", link: "https://www.amazon.com/Psychology-Money-Morgan-Housel/dp/0857197681" },
        { name: "پادکست: ذهنیت معامله‌گر", link: "https://www.tradingpsychologypodcast.com/" },
      ]
    },
    {
      level: 10,
      title: "حرفه‌ای‌ها",
      subtitle: "تکنیک‌ها و استراتژی‌های پیشرفته حرفه‌ای",
      icon: Award,
      color: "#00D4FF",
      lessons: 85,
      duration: "60 ساعت",
      description: "مجموعه کامل تکنیک‌ها، استراتژی‌ها و ابزارهای پیشرفته برای معامله‌گران حرفه‌ای.",
      topics: [
        "معاملات الگوریتمی با پایتون",
        "تحلیل ان‌آر‌پی (NRP)",
        "استراتژی‌های هجینگ",
        "مدیریت پرتفوی حرفه‌ای",
        "معاملات آپشن و فیوچرز پیشرفته",
        "تحلیل‌های چندبعدی بازار",
      ],
      resources: [
        { name: "آموزش معاملات الگوریتمی", link: "https://www.youtube.com/results?search_query=algorithmic+trading+python+beginner" },
        { name: "استراتژی‌های هجینگ حرفه‌ای", link: "https://www.investopedia.com/terms/h/hedge.asp" },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header - با عنوان جدید */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-block mb-4 md:mb-6">
            <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-[#8A2BE2] mx-auto mb-2 md:mb-4" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 md:mb-4">
            آکادمی آموزش حرفه‌ای
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            {t("academySubtitle")}
          </p>
        </motion.div>

        {/* Learning Path - بدون خط وسط */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {levels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-4 md:mb-8"
            >
              {/* Card */}
              <div
                className="glass p-4 md:p-6 rounded-2xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-full mx-auto"
                style={{ borderColor: level.color + "50" }}
                onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
              >
                <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: level.color + "20",
                      border: `2px solid ${level.color}`,
                    }}
                  >
                    <level.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: level.color }} />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                      <span
                        className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-bold"
                        style={{
                          backgroundColor: level.color + "20",
                          color: level.color,
                        }}
                      >
                        سطح {level.level}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 md:mb-1">{level.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{level.subtitle}</p>
                    <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 md:w-4 md:h-4" />
                        {level.lessons} درس
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4" />
                        {level.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {expandedLevel === level.level && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-700 pt-3 md:pt-4 mt-3 md:mt-4"
                  >
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">{level.description}</p>

                    <div className="mb-4 md:mb-6">
                      <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" style={{ color: level.color }} />
                        <span className="text-sm md:text-base">سرفصل‌های دوره:</span>
                      </h4>
                      <ul className="space-y-1 md:space-y-2">
                        {level.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-400">
                            <span className="text-[#8A2BE2] mt-0.5 md:mt-1 text-xs md:text-base">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3 md:mb-4">
                      <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" style={{ color: level.color }} />
                        <span className="text-sm md:text-base">منابع آموزشی (کتاب و فیلم):</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-2 md:gap-3">
                        {level.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-[#1a1a25] border border-gray-700 hover:border-[#8A2BE2]/50 hover:bg-[#252535] transition-all duration-300 group"
                          >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8A2BE2]/20 transition-colors">
                              <PlayCircle className="w-4 h-4 md:w-6 md:h-6 text-[#8A2BE2]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs md:text-sm font-medium group-hover:text-[#00D4FF] transition-colors truncate">
                                {resource.name}
                              </p>
                              <p className="text-[10px] md:text-xs text-gray-500">کلیک برای مشاهده</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-12 rounded-2xl md:rounded-3xl text-center max-w-3xl mx-auto"
        >
          <Trophy className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-[#8A2BE2]" />
          <h2 className="text-xl md:text-3xl font-bold gradient-text mb-2 md:mb-4 px-2">
            آماده برای شروع سفر یادگیری خود هستید؟
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8 px-4">
            با بیش از 400 درس جامع، از مبتدی به یک تریدر حرفه‌ای تبدیل شوید
          </p>
          <a
            href="https://www.binance.com/en/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#8A2BE2] text-white rounded-lg font-bold hover:bg-[#7021be] transition-all duration-300 glow-purple text-sm md:text-base"
          >
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            شروع یادگیری رایگان
          </a>
        </motion.div>
      </div>
    </div>
  );
}
