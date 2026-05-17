'use client';

import { motion } from 'motion/react';
import { Shield, LockKeyhole, Code2, Download } from 'lucide-react';

const features = [
  {
    icon: <LockKeyhole className="w-5 h-5 mb-2 text-[#F0F0F0]" />,
    label: 'Anonymity',
    title: 'Полная анонимность',
    description: 'Регистрация без номера телефона или email. Ваши данные и личность остаются скрытыми.',
  },
  {
    icon: <Shield className="w-5 h-5 mb-2 text-[#F0F0F0]" />,
    label: 'Free',
    title: 'Абсолютно бесплатно',
    description: 'Никаких платных функций, подписок. Доступ ко всему функционалу с самого начала.',
  },
  {
    icon: <Code2 className="w-5 h-5 mb-2 text-[#F0F0F0]" />,
    label: 'Transparency',
    title: 'Открытый исходный код',
    description: 'Полная прозрачность. Серверный и клиентский код доступны на GitHub для аудита.',
  },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center px-6 md:px-12 z-10 py-12 md:py-24 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-6 uppercase">
          Aiwazian <br /> <span className="text-zinc-600">Messenger</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
          Мессенджер нового поколения, где анонимность возведена в абсолют. Без номеров, без привязок, полностью бесплатный и с открытым исходным кодом.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl flex flex-col"
          >
            {feature.icon}
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">{feature.label}</h3>
            <p className="text-lg font-medium">{feature.title}</p>
            <p className="text-sm text-zinc-500 mt-1">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <a
          href="https://rustore.ru/catalog/app/com.aiwazian.messenger"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all text-center flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Скачать для Android
        </a>
        <a
          href="https://github.com/aiwazian"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto border border-zinc-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all text-center"
        >
          Посмотреть исходный код
        </a>
      </motion.div>
    </div>
  );
}
