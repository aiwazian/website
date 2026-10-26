'use client';

import { useLanguage } from '@/lib/i18n';

export default function TermsOfService() {
  const { lang } = useLanguage();

  if (lang === 'en') {
    return (
      <div className="px-6 md:px-12 py-12 md:py-24 max-w-4xl w-full mx-auto z-10">
        <div className="mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Terms of Service</h1>

          <p className="mb-12 font-mono text-zinc-500 text-sm">Last updated: May 15, 2026</p>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">1. General Provisions</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>1.1. These Terms of Service (the &ldquo;Terms&rdquo;) govern access to and use of the &ldquo;Aiwazian Messenger&rdquo; application. The Operator is natural person Karen Shavarshevich Aiwazian, e-mail: support@aiwazian.ru.</p>
              <p>1.2. By using the Application, the User acknowledges having read and accepted these Terms and the Privacy Policy in full. If you disagree, you must cease using the Application immediately.</p>
              <p>1.3. Applicable laws govern the relationship between the parties.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">2. Service Description</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>2.1. The Application provides instant text messaging, file sharing, voice messages, personal chats, groups, channels, and associated communication services.</p>
              <p>2.2. The Operator may modify, restrict, or discontinue any feature at any time without prior notice or compensation.</p>
              <p>2.3. The Application is provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">3. Registration &amp; Account</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>3.1. Registration is required to access app functionality. The User agrees to provide accurate details.</p>
              <p>3.2. The User is solely responsible for account credentials and all actions taken under their account.</p>
              <p>3.3. The Operator is not liable for unauthorized access resulting from circumstances outside the Operator&apos;s reasonable control.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">4. Acceptable Use Policy</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>4.1. Users must not violate laws, distribute spam, malware, hate speech, defamatory content, or infringe upon third-party rights.</p>
              <p>4.2. The Operator reserves the right to suspend or terminate accounts violating these Terms without prior notice.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">5. User Content</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>5.1. Users retain full responsibility for all content transmitted or published through the Application.</p>
              <p>5.2. The Operator has no obligation to prescreen content but may remove illegal or non-compliant content at any time.</p>
              <p>5.3. Users grant a limited technical license for the sole purpose of message delivery, synchronization, and storage.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">6. Limitation of Liability</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>6.1. To the maximum extent permitted by law, the Operator disclaims all liability for incidental, indirect, consequential, or punitive damages arising from app use or outage.</p>
              <p>6.2. The aggregate liability of the Operator is limited to zero ($0 / 0 RUB), as the Application is provided free of charge.</p>
              <p>6.3. Usage of the Application is strictly at the User&apos;s own risk.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">7. Account Termination</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>7.1. The Operator may terminate accounts at any time for policy breaches or security reasons.</p>
              <p>7.2. Users may request account deletion in the Application settings or by emailing support@aiwazian.ru.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">8. Intellectual Property</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>8.1. Exclusive proprietary rights to the Application design, logos, and branding belong to Karen Shavarshevich Aiwazian.</p>
              <p>8.2. Users receive a revocable, non-exclusive, personal license to use the Application.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">9. Dispute Resolution</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>9.1. Claims must be submitted to support@aiwazian.ru. The Operator reviews claims within 30 days.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">10. Terms Amendments</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>10.1. The Operator may revise these Terms at any time. Continued use signifies agreement to revised terms.</p>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-12 md:py-24 max-w-4xl w-full mx-auto z-10">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Условия использования</h1>

        <p className="mb-12 font-mono text-zinc-500 text-sm">Последнее обновление: 15.05.2026</p>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">1. Общие положения</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>1.1. Настоящие Условия использования (далее — «Условия») регулируют порядок доступа к мессенджеру «Aiwazian Messenger» и его использования. Оператором Приложения является физическое лицо Айвазян Карен Шаваршевич, e-mail: support@aiwazian.ru.</p>
            <p>1.2. Используя Приложение, Пользователь подтверждает, что ознакомился с настоящими Условиями и Политикой конфиденциальности, понимает их содержание и принимает их в полном объёме. При несогласии с Условиями Пользователь обязан немедленно прекратить использование Приложения.</p>
            <p>1.3. К отношениям сторон применяется право Российской Федерации.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">2. Описание сервиса</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>2.1. Приложение «Messenger» предоставляет функциональность обмена текстовыми сообщениями, файлами, голосовыми сообщениями, создания личных чатов, групп и каналов, а также иные функции, доступные в актуальной версии.</p>
            <p>2.2. Оператор вправе в любое время изменять, дополнять, ограничивать или прекращать любые функции Приложения без предварительного уведомления и без какой-либо компенсации Пользователю.</p>
            <p>2.3. Приложение предоставляется на условиях «как есть» (as is) и «как доступно» (as available). Оператор не даёт никаких гарантий в отношении Приложения, явных или подразумеваемых, включая гарантии пригодности для конкретной цели, бесперебойности работы или отсутствия ошибок.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">3. Регистрация и аккаунт</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>3.1. Для доступа к функциям Приложения необходима регистрация. Пользователь обязан предоставить достоверные сведения и своевременно их обновлять.</p>
            <p>3.2. Пользователь несёт полную и единоличную ответственность за сохранность учётных данных и за все действия, совершённые с использованием его аккаунта, независимо от того, кем именно они были совершены.</p>
            <p>3.3. Оператор не несёт ответственности за последствия несанкционированного доступа к аккаунту Пользователя, произошедшего по причинам, не зависящим от Оператора.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">4. Правила использования</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>4.1. Пользователь обязуется не нарушать законодательство РФ и международные нормы; не распространять запрещённый контент (спам, вредоносный код, материалы экстремистского, порнографического, мошеннического характера и иные); не нарушать права третьих лиц; не предпринимать попыток несанкционированного доступа к серверам, данным и аккаунтам; не вмешиваться в работу Приложения и не обходить меры безопасности.</p>
            <p>4.2. Оператор вправе без предварительного уведомления ограничивать или блокировать действия Пользователя, нарушающего настоящие Условия.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">5. Пользовательский контент</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>5.1. Пользователь несёт единоличную и полную ответственность за любой контент (сообщения, файлы, изображения, голосовые записи и т.п.), размещённый, отправленный или распространённый им через Приложение.</p>
            <p>5.2. Оператор не несёт ответственности за содержание пользовательского контента и не обязан его предварительно проверять. Оператор вправе удалять контент, нарушающий Условия или законодательство, без уведомления и без обязательства восстанавливать его.</p>
            <p>5.3. Пользователь предоставляет Оператору ограниченную лицензию на использование контента исключительно в технических целях функционирования Приложения (хранение, передача, синхронизация).</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">6. Ограничение ответственности и отказ от гарантий</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>6.1. В максимальном объёме, допустимом действующим законодательством Российской Федерации, Оператор полностью отказывается от любой ответственности за:</p>
            <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
              <li>Любые прямые, косвенные, случайные, специальные, штрафные или иные убытки, потерю прибыли, данных или деловой репутации, понесённые Пользователем в связи с использованием или невозможностью использования Приложения.</li>
              <li>Действия, контент или бездействие третьих лиц, в том числе других пользователей Приложения.</li>
              <li>Временную недоступность Приложения, перебои связи, сбои оборудования, атаки на инфраструктуру, действие непреодолимой силы.</li>
              <li>Утрату, повреждение или несанкционированный доступ к данным Пользователя, если это произошло по причинам, не зависящим от Оператора.</li>
              <li>Последствия использования Пользователем информации, полученной через Приложение.</li>
              <li>Ущерб, причинённый вирусами или вредоносным программным обеспечением, полученным через Приложение от третьих лиц.</li>
            </ul>
            <p>6.2. Совокупная ответственность Оператора перед Пользователем по любым основаниям ограничена нулём рублей, поскольку Приложение предоставляется бесплатно. Оператор не обязан возмещать Пользователю какие-либо убытки, ущерб или расходы, понесённые в связи с использованием Приложения, вне зависимости от их природы и обстоятельств возникновения.</p>
            <p>6.3. Используя Приложение, Пользователь прямо подтверждает, что осознаёт принятые на себя риски, связанные с использованием Приложения, и принимает их в полном объёме. Использование Приложения осуществляется исключительно на страх и риск Пользователя.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">7. Блокировка и удаление аккаунта</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>7.1. Оператор вправе в любое время и без объяснения причин ограничить доступ, заблокировать или удалить аккаунт Пользователя, в том числе при нарушении Условий, требований законодательства или при наличии угрозы безопасности.</p>
            <p>7.2. Пользователь вправе удалить аккаунт самостоятельно через интерфейс Приложения или обратившись по адресу: support@aiwazian.ru.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">8. Интеллектуальная собственность</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>8.1. Исключительные права на Приложение, его код, дизайн, логотипы и иные элементы принадлежат Айвазян Карен Шаваршевич.</p>
            <p>8.2. Пользователю предоставляется ограниченная, отзывная, неисключительная, непередаваемая лицензия на использование Приложения в личных некоммерческих целях.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">9. Разрешение споров</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>9.1. Претензии направляются по адресу: support@aiwazian.ru. Оператор рассматривает претензию в течение 30 (тридцати) дней.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">10. Изменение Условий</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>10.1. Оператор вправе в одностороннем порядке изменять Условия в любое время без предварительного уведомления Пользователя. Новая редакция вступает в силу с момента публикации в Приложении и/или на сайте.</p>
            <p>10.2. Пользователь обязан самостоятельно и регулярно отслеживать актуальную редакцию Условий. Продолжение использования Приложения после публикации изменений означает безоговорочное принятие новой редакции.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
