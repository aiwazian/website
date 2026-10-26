'use client';

import { useLanguage } from '@/lib/i18n';

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  if (lang === 'en') {
    return (
      <div className="px-6 md:px-12 py-12 md:py-24 max-w-4xl w-full mx-auto z-10">
        <div className="mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Privacy Policy</h1>

          <p className="mb-12 font-mono text-zinc-500 text-sm">Last updated: May 15, 2026</p>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">1. General Provisions</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>1.1. This Privacy Policy (the &ldquo;Policy&rdquo;) defines the procedure for collecting, processing, storing, and protecting the personal data of users of the &ldquo;Aiwazian Messenger&rdquo; application (the &ldquo;App&rdquo;), operated by individual entrepreneur/natural person Karen Shavarshevich Aiwazian (the &ldquo;Operator&rdquo;), e-mail: support@aiwazian.ru.</p>
              <p>1.2. The Policy is developed in compliance with applicable data protection regulations and legislation.</p>
              <p>1.3. By using the App, the User confirms that they have read, understood, and consented to this Policy. If the User does not agree with any terms of this Policy, they must immediately cease using the App.</p>
              <p>1.4. The Policy applies to all information obtained by the Operator about the User during registration, app usage, and customer support communications.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">2. Categories of Processed Data</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>2.1. The Operator processes the following categories of data:</p>
              <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
                <li>Identification: display name, username/nickname, avatar image.</li>
                <li>Contact info: phone number or email (optional, if explicitly provided).</li>
                <li>User content: messages, media files, voice clips, group and channel metadata.</li>
                <li>Technical data: IP address, device model and ID, OS version, FCM token, timestamps, error diagnostics.</li>
                <li>Session data: session tokens, login/logout timestamps.</li>
                <li>Support requests: correspondence, reports, inquiries.</li>
              </ul>
              <p>2.2. The Operator does not process sensitive personal data (health, biometrics, political beliefs) and never requests them.</p>
              <p>2.3. The App is not intended for individuals under 18 years of age.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">3. Purposes and Legal Basis of Processing</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>3.1. Personal data is processed for the following purposes:</p>
              <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
                <li>Registration and authentication — performance of contract.</li>
                <li>Providing core messenger functionality — performance of contract.</li>
                <li>Delivering push notifications — performance of contract / User consent.</li>
                <li>Security and abuse prevention — legitimate interests of the Operator.</li>
                <li>Technical diagnostics and stability improvement — legitimate interests of the Operator.</li>
                <li>Compliance with applicable legal obligations.</li>
              </ul>
              <p>3.2. The Operator never sells personal data to third parties or advertising networks.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">4. Data Storage and Retention</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>4.1. Personal data is stored on secure servers with strict access controls.</p>
              <p>4.2. Data is retained for the active duration of the User&apos;s account. Upon account deletion, user records are deleted within 30 days unless retention is required by law. Backups may retain encrypted fragments up to 90 days for disaster recovery.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">5. Third-Party Disclosures</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>5.1. Data is disclosed only to infrastructure providers (hosting, storage, push notifications) under confidentiality contracts, or to government authorities upon valid lawful requests.</p>
              <p>5.2. Personal data is never sold or rented for commercial advertising.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">6. User Rights</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>6.1. Users have the right to access, rectify, block, or delete their personal data, and revoke processing consent.</p>
              <p>6.2. Inquiries can be sent to: support@aiwazian.ru. Requests are reviewed within 30 days.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">7. Security</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>7.1. The Operator employs TLS transmission encryption, restricted database permissions, and continuous server monitoring.</p>
              <p>7.2. No electronic transmission is 100% impenetrable. The Operator is not liable for force majeure events, infrastructure vendor disruptions, or device-level compromises caused by the user.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">8. Policy Updates</h2>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>8.1. The Operator reserves the right to amend this Policy at any time. The new version takes effect upon publication on the website or in the App.</p>
              <p>8.2. Continued usage after amendments constitutes full acceptance of the updated terms.</p>
            </div>
          </section>

          <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
            <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">9. Contacts</h2>
            <div className="text-zinc-300 leading-relaxed space-y-2">
              <p>– Operator: Karen Shavarshevich Aiwazian</p>
              <p>– E-mail: support@aiwazian.ru</p>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-12 md:py-24 max-w-4xl w-full mx-auto z-10">
      <div className="mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">Политика конфиденциальности</h1>

        <p className="mb-12 font-mono text-zinc-500 text-sm">Последнее обновление: 15.05.2026</p>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">1. Общие положения</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>1.1. Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, обработки, хранения и защиты персональных данных пользователей мессенджера «Aiwazian Messenger» (далее — «Приложение»), разработанного и эксплуатируемого физическим лицом Айвазян Карен Шаваршевич (далее — «Оператор»), e-mail: support@aiwazian.ru.</p>
            <p>1.2. Политика разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — «Закон»), Федерального закона от 27.07.2006 № 149-ФЗ «Об информации, информационных технологиях и о защите информации» и иных применимых нормативных актов Российской Федерации.</p>
            <p>1.3. Используя Приложение, Пользователь подтверждает, что ознакомился с Политикой, понимает её содержание и выражает согласие с её условиями. Если Пользователь не согласен с Политикой — он обязан немедленно прекратить использование Приложения.</p>
            <p>1.4. Политика распространяется на все данные, которые Оператор получает о Пользователе в ходе регистрации, использования функций Приложения и обращений в службу поддержки.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">2. Обрабатываемые данные</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>2.1. Оператор обрабатывает следующие категории данных:</p>
            <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
              <li>Идентификационные: имя, фамилия, никнейм, фотография профиля.</li>
              <li>Контактные: номер телефона, адрес электронной почты (при указании).</li>
              <li>Пользовательский контент: сообщения, файлы, голосовые сообщения, изображения, видео, информация о группах и каналах.</li>
              <li>Технические: IP-адрес, модель и идентификатор устройства, версия и наименование ОС, FCM-токен, дата и время доступа, журналы ошибок.</li>
              <li>Сессионные: токены сессий, время входа и выхода.</li>
              <li>Обращения в поддержку: переписка, жалобы, запросы.</li>
            </ul>
            <p>2.2. Оператор не обрабатывает специальные категории персональных данных (здоровье, биометрию, политические взгляды и т.п.) и не запрашивает их у Пользователей.</p>
            <p>2.3. Приложение не предназначено для лиц моложе 18 лет. Оператор не осуществляет намеренного сбора данных несовершеннолетних.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">3. Цели и правовые основания обработки</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>3.1. Оператор обрабатывает персональные данные для следующих целей:</p>
            <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
              <li>Регистрация и аутентификация — исполнение договора (п. 5 ст. 6 Закона).</li>
              <li>Предоставление функций мессенджера — исполнение договора.</li>
              <li>Доставка push-уведомлений — исполнение договора / согласие Пользователя.</li>
              <li>Безопасность и предотвращение злоупотреблений — законные интересы Оператора (п. 7 ст. 6 Закона).</li>
              <li>Техническая диагностика и улучшение Приложения — законные интересы Оператора.</li>
              <li>Исполнение предписаний уполномоченных органов — выполнение юридического обязательства (п. 3 ст. 6 Закона).</li>
            </ul>
            <p>3.2. Оператор не продаёт персональные данные третьим лицам и не передаёт их рекламным сетям.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">4. Локализация и сроки хранения</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>4.1. В соответствии с требованиями ст. 18.1 Федерального закона № 149-ФЗ и ст. 18 Федерального закона № 152-ФЗ первичная запись, систематизация, накопление, хранение, уточнение и извлечение персональных данных граждан Российской Федерации осуществляются на серверах, расположенных на территории Российской Федерации.</p>
            <p>4.2. Персональные данные хранятся в течение срока действия аккаунта. После удаления аккаунта данные удаляются в течение 30 (тридцати) дней, если иной срок не установлен применимым законодательством. Резервные копии могут сохраняться дополнительно до 90 (девяноста) дней в целях восстановления работоспособности системы.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">5. Передача данных третьим лицам</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>5.1. Оператор вправе передавать данные исключительно в следующих случаях:</p>
            <ul className="list-inside list-disc text-zinc-400 space-y-2 marker:text-zinc-600">
              <li>Поставщикам инфраструктурных услуг (хостинг, хранилища файлов, push-уведомления) на основании договоров с требованиями конфиденциальности.</li>
              <li>Уполномоченным государственным органам — по их законным запросам в пределах законодательства РФ.</li>
              <li>Иным лицам — с предварительного согласия Пользователя.</li>
            </ul>
            <p>5.2. Оператор не продаёт и не передаёт персональные данные в коммерческих целях.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">6. Права пользователей</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>6.1. В соответствии со ст. 14–17 Федерального закона № 152-ФЗ Пользователь вправе: получать сведения об обработке данных; требовать уточнения, блокирования или удаления данных; отозвать согласие на обработку; обжаловать действия Оператора в Роскомнадзор или в суд.</p>
            <p>6.2. Запросы направляются по адресу: support@aiwazian.ru. Оператор рассматривает запрос в течение 30 (тридцати) дней с момента получения.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">7. Безопасность</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>7.1. Оператор принимает необходимые технические и организационные меры защиты данных: шифрование при передаче (TLS), разграничение прав доступа, мониторинг инфраструктуры, регулярное обновление ПО.</p>
            <p>7.2. Вместе с тем ни одна система не обеспечивает абсолютной защиты. Оператор не несёт ответственности за ущерб, возникший вследствие событий, находящихся вне разумного контроля Оператора, включая действия третьих лиц, взломы, утечки по вине самого Пользователя или инфраструктурных провайдеров.</p>
            <p>7.3. При выявлении инцидента безопасности Оператор уведомит Роскомнадзор в сроки, установленные законодательством.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">8. Изменение Политики</h2>
          <div className="text-zinc-300 leading-relaxed space-y-4">
            <p>8.1. Оператор вправе в одностороннем порядке изменять настоящую Политику в любое время без предварительного уведомления Пользователя. Новая редакция вступает в силу с момента её публикации в Приложении и/или на сайте.</p>
            <p>8.2. Пользователь обязан самостоятельно и регулярно отслеживать актуальную редакцию Политики. Продолжение использования Приложения после публикации новой редакции означает безоговорочное согласие Пользователя с её условиями.</p>
            <p>8.3. Рекомендуется периодически проверять Политику на предмет изменений. Дата последней редакции указана в начале настоящего документа.</p>
          </div>
        </section>

        <section className="mb-10 bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl">
          <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-500 mb-4">9. Контакты</h2>
          <div className="text-zinc-300 leading-relaxed space-y-2">
            <p>– Оператор: Айвазян Карен Шаваршевич</p>
            <p>– E-mail: support@aiwazian.ru</p>
          </div>
        </section>
      </div>
    </div>
  );
}
