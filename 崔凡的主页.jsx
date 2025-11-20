import React from "react";

export default function PersonalHomepage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 px-4 py-8 md:px-10 md:py-12">
      {/* Top bar / name & nav */}
      <header className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stone-200 pb-6">
        <div className="space-y-1">
          <p className="text-xs tracking-[0.2em] text-stone-500 uppercase">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            崔 凡<span className="ml-3 text-base align-middle text-stone-500">/ CUI FAN</span>
          </h1>
          <p className="text-sm md:text-base text-stone-600">
            インターネット業界で培った UI デザインとプロダクトマネジメントの経験を生かし、
            ユーザー視点のプロダクトづくりに取り組んでいます。
          </p>
        </div>

        <nav className="flex gap-4 text-xs md:text-sm text-stone-500">
          <a href="#about" className="hover:text-stone-900 transition-colors">自己紹介</a>
          <a href="#projects" className="hover:text-stone-900 transition-colors">プロジェクト</a>
          <a href="#others" className="hover:text-stone-900 transition-colors">その他</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto mt-10 space-y-10 md:space-y-12">
        {/* Section 1: Self Introduction */}
        <section
          id="about"
          className="grid md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 md:gap-10 items-start"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-sm tracking-[0.3em] text-stone-500 uppercase">About</h2>
              <p className="text-xl md:text-2xl font-medium text-stone-900">自己紹介</p>
            </div>
            {/* Avatar block */}
            <div className="flex flex-col items-start gap-2">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-stone-300 bg-stone-100 flex items-center justify-center text-sm md:text-base text-stone-500 tracking-[0.25em]">
                CF
              </div>
              
            </div>
          </div>
          <div className="bg-white/70 border border-stone-200 rounded-2xl px-5 py-6 md:px-7 md:py-7 leading-relaxed text-sm md:text-base text-stone-700 shadow-[0_0_0_1px_rgba(0,0,0,0.01)] space-y-3">
            <p>
              中国出身。インターネット業界で 7 年以上、UI デザイナーとして 3 年、プロダクトマネージャーとして 4 年の実務経験があります。
              EC、生活サービス、スマートシティ関連システムなど、ユーザー接点の強いサービスに携わってきました。
            </p>
            <p>
              「星管家」や「拍二宝」など、大規模ユーザーを持つサービスの企画・設計・運用に携わり、ゼロからのサービス立ち上げや、
              ユーザー調査・データ分析に基づく機能改善を担当しました。デザインとシステムの両方の視点を持ち、エンジニアやデザイナーと連携しながら、
              チームでプロジェクトを前に進めることを得意としています。
            </p>
            <p>
              現在は日本で日本語とデザインを学びながら、技術力と品質基準の高い日本企業の開発文化を吸収し、ユーザーにとって分かりやすく信頼されるプロダクトづくりに貢献したいと考えています。
              日中両方の文化や市場理解を強みに、両国をつなぐ価値創出にも携わっていきたいです。
            </p>
          </div>
        </section>

        {/* Section 1.5: Career Timeline */}
        <section id="timeline" className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-sm tracking-[0.3em] text-stone-500 uppercase">Timeline</h2>
              <p className="text-xl md:text-2xl font-medium mt-1">職歴タイムライン</p>
            </div>
            <p className="text-xs md:text-sm text-stone-500 hidden md:block">
              これまでの主な職務経験を、時系列で整理しています。
            </p>
          </div>

          <div className="bg-white/70 border border-stone-200 rounded-2xl px-5 py-6 md:px-7 md:py-7">
            <ol className="border-l border-stone-200 pl-4 space-y-4 text-sm md:text-[15px] text-stone-700">
              <li className="relative pl-4">
                <span className="absolute -left-2 top-1 w-2 h-2 rounded-full bg-stone-400" />
                <p className="text-[11px] md:text-xs text-stone-500">2018.09 - 2021.10</p>
                <p className="font-medium">安徽鼎龍ネットワークメディア株式会社 / UIデザイナー</p>
                <p className="mt-0.5 text-xs md:text-[13px] text-stone-600">Web・アプリのUI設計、「星管家」などのプロジェクトに従事。</p>
              </li>
              <li className="relative pl-4">
                <span className="absolute -left-2 top-1 w-2 h-2 rounded-full bg-stone-400" />
                <p className="text-[11px] md:text-xs text-stone-500">2021.09 - 2022.10</p>
                <p className="font-medium">安徽火蓝データ株式会社 / プロダクトマネージャー</p>
                <p className="mt-0.5 text-xs md:text-[13px] text-stone-600">EC・生活サービス向けミニプログラム「拍二宝」や家政サービスアプリの企画・設計・運用を担当。</p>
              </li>
              <li className="relative pl-4">
                <span className="absolute -left-2 top-1 w-2 h-2 rounded-full bg-stone-400" />
                <p className="text-[11px] md:text-xs text-stone-500">2022.11 - 2023.11</p>
                <p className="font-medium">安徽兆通データ株式会社 / プロダクトマネージャー</p>
                <p className="mt-0.5 text-xs md:text-[13px] text-stone-600">スマートアーカイブシステムの第三次更新プロジェクトをリードし、知識グラフ・ブロックチェーン技術の導入や進行管理を担当。</p>
              </li>
              <li className="relative pl-4">
                <span className="absolute -left-2 top-1 w-2 h-2 rounded-full bg-stone-400" />
                <p className="text-[11px] md:text-xs text-stone-500">2024.05 - 2025.01</p>
                <p className="font-medium">ドン・キホーテ浅草店 / LAOX免税店 など</p>
                <p className="mt-0.5 text-xs md:text-[13px] text-stone-600">日本での販売・接客業務を通じて、日本語での接客コミュニケーションやチームワークを実践。</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 2: Project Showcase */}
        <section id="projects" className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-sm tracking-[0.3em] text-stone-500 uppercase">Works</h2>
              <p className="text-xl md:text-2xl font-medium mt-1">プロジェクト</p>
            </div>
            <p className="text-xs md:text-sm text-stone-500 hidden md:block">
              実務・個人制作を問わず、代表的なプロジェクトを掲載しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-7">
            {/* Project: スマートアーカイブシステム */}
            <article className="group bg-white/80 border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <header className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">Product Management / Smart City</p>
                <h3 className="text-lg md:text-xl font-medium text-stone-900">
                  スマートアーカイブシステム第三次更新プロジェクト
                </h3>
              </header>
              <p className="text-sm md:text-[15px] text-stone-700 leading-relaxed">
                デジタルアーカイブ管理システムに知識グラフとブロックチェーン技術を統合し、データの完全性とセキュリティを強化。
                要件定義から進行管理までを担当し、管理効率を約 20% 向上させました。
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-stone-500">
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Smart City</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Product Management</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">BtoG</span>
              </div>
            </article>

            {/* Project: 拍二宝ミニプログラム */}
            <article className="group bg-white/80 border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <header className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">Product / UX</p>
                <h3 className="text-lg md:text-xl font-medium text-stone-900">
                  「拍二宝」ミニプログラム企画・設計
                </h3>
              </header>
              <p className="text-sm md:text-[15px] text-stone-700 leading-relaxed">
                EC と生活サービスを組み合わせたミニプログラムをゼロから企画・設計。
                ユーザー調査・競合分析・データ分析に基づき改善を重ね、日次アクティブユーザー 3,000 人以上、
                イノベーション大会での入賞などの成果につなげました。
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-stone-500">
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Mini Program</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">UX Design</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">O2O Service</span>
              </div>
            </article>

            {/* Project: 星管家プロパティ管理 */}
            <article className="group bg-white/80 border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <header className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">UI / App Design</p>
                <h3 className="text-lg md:text-xl font-medium text-stone-900">
                  「星管家」プロパティ管理小プログラム UI/UX
                </h3>
              </header>
              <p className="text-sm md:text-[15px] text-stone-700 leading-relaxed">
                数百万規模の居住者が利用するプロパティ管理小プログラムの UI/UX を担当。
                Web サイトやモバイルアプリとあわせた一貫したデザインガイドラインを構築し、
                物件管理業務のデジタル化とユーザー体験の向上に貢献しました。
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-stone-500">
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">UI Design</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Design System</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Property Tech</span>
              </div>
            </article>

            {/* Project: 家政サービスアプリ */}
            <article className="group bg-white/80 border border-stone-200 rounded-2xl p-5 md:p-6 flex flex-col gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <header className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">Service Design</p>
                <h3 className="text-lg md:text-xl font-medium text-stone-900">
                  家政サービス向けアプリ設計
                </h3>
              </header>
              <p className="text-sm md:text-[15px] text-stone-700 leading-relaxed">
                家政サービスのマッチングアプリにおいて、ユーザーのリアルタイムなニーズに応える仕組みを設計。
                ユーザーフローの整理や画面遷移設計を通じて、直感的に利用できるサービス体験を目指しました。
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-stone-500">
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Service Design</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">User Flow</span>
                <span className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-50">Lifestyle App</span>
              </div>
            </article>
          </div>
        </section>

        {/* Section 3: Others */}
        <section id="others" className="space-y-6 md:space-y-8">
          {/* Title alone */}
          <div className="space-y-2">
            <h2 className="text-sm tracking-[0.3em] text-stone-500 uppercase">More</h2>
            <p className="text-xl md:text-2xl font-medium text-stone-900">その他</p>
          </div>

          {/* Row 1: 志望動機 + 自己PR */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Motivation */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-2">
              <p className="font-medium text-stone-900">志望動機</p>
              <p>
                私は中国で3年間UIデザイナーとして、また4年間プロダクトマネージャーとして勤務し、ゼロからの製品立ち上げやユーザー体験の向上に注力してきました。日本の企業は技術力や品質の高さで世界的に評価されており、とりわけユーザー視点を大切にする開発姿勢に強く惹かれています。
              </p>
              <p>
                これまでの経験を活かしながら、日本の文化や働き方を学び、より良い製品づくりに貢献したいと考えています。また、将来的には日中間の技術交流の架け橋となれるような存在を目指しています。以上の理由から、日本で新しい挑戦をしたいと強く志望しております。
              </p>
            </div>

            {/* Self PR */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-2">
              <p className="font-medium text-stone-900">自己 PR</p>
              <p>
                私の強みは、チームの意見をまとめながら目標達成に導く協調力とリーダーシップです。中国での前職では、SNS上で利用できるミニアプリの開発プロジェクトでリーダーを担当し、メンバーと協力しながら方針をまとめ、ネットイース主催のコンテストで上位入賞を果たしました。
              </p>
              <p>
                また、数十万人規模のオンラインコミュニティ向けサービスの改善にも携わり、メンバーと協力しながら機能を改良し、利用率向上に貢献しました。これらの経験を通して、相手の立場を理解しながらチーム全体を動かすことの重要性を学びました。
              </p>
              <p>
                今後はこの協調性と行動力を活かし、新しい環境でも信頼される人材として貢献していきたいと考えております。
              </p>
            </div>
          </div>

          {/* Row 2: 資格 + スキル関心 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Qualifications */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-3">
              <p className="font-medium text-stone-900">資格</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-[15px]">
                <li>日本語能力試験（JLPT）N2 合格</li>
                <li>全国経理教育協会主催 簿記能力検定3級</li>
              </ul>
            </div>

            {/* Skills & Interests */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-3">
              <p className="font-medium text-stone-900">スキル・関心</p>
              <div className="space-y-1">
                <p className="text-[13px] uppercase tracking-[0.18em] text-stone-500">Design / Tools</p>
                <p>Axure, XMind, Visio, Adobe Photoshop, Illustrator, InDesign などを用いた画面設計・UI デザイン。</p>
              </div>
              <div className="space-y-1">
                <p className="text-[13px] uppercase tracking-[0.18em] text-stone-500">Product / Project</p>
                <p>要件定義、ユーザー調査、データ分析、進行管理、2〜10 名規模のチームマネジメント。</p>
              </div>
              <div className="space-y-1">
                <p className="text-[13px] uppercase tracking-[0.18em] text-stone-500">Interest</p>
                <p>サービスデザイン、日中間のカルチャーギャップ、社会課題をテーマにした企画、教育・福祉領域のプロジェクトなど。</p>
              </div>
            </div>
          </div>

          {/* Row 3: 言語 + Links */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Languages */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-3">
              <p className="font-medium text-stone-900">言語</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-[15px]">
                <li>中国語（母語）</li>
                <li>日本語（ビジネスレベル）</li>
                <li>英語（コミュニケーションレベル）</li>
              </ul>
            </div>

            {/* Links */}
            <div className="bg-white/70 border border-stone-200 rounded-2xl px-6 py-6 leading-relaxed space-y-3">
              <p className="font-medium text-stone-900">Links</p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm mt-2">
                <a href="#" className="px-3 py-1.5 rounded-full border border-stone-300 bg-stone-50 hover:bg-stone-900 hover:text-stone-50 transition-colors">GitHub / Code</a>
                <a href="#" className="px-3 py-1.5 rounded-full border border-stone-300 bg-stone-50 hover:bg-stone-900 hover:text-stone-50 transition-colors">Behance / Works</a>
                <a href="#" className="px-3 py-1.5 rounded-full border border-stone-300 bg-stone-50 hover:bg-stone-900 hover:text-stone-50 transition-colors">履歴書 PDF</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto pt-10 md:pt-14 pb-6 text-[11px] md:text-xs text-stone-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 border-t border-stone-200 mt-10">
        <p>© 2025 CUI FAN. All rights reserved.</p>
        <p className="opacity-80">Designed with a quiet, Japanese-inspired layout.</p>
      </footer>
    </div>
  );
}
