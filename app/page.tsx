export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center font-sans relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 z-0"></div>

      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-12 px-16 sm:items-start relative z-10 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left w-full">
          <div className="flex items-center justify-center w-full">
            <img
              src="https://cdn.discordapp.com/icons/1304771849758048359/06dc1cdfe6554d74d4c31f4c84183ff2.webp?size=80"
              alt="서든어택 라운지"
              className="w-16 h-16 text-center rounded-full"
            />
          </div>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            서든어택 라운지 - 디스코드
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            서든어택 플레이어를 위한 종합 커뮤니티입니다. 서든어택디스코드,
            서든어택라운지, SP거래소, 서든어택자랭, 서든클랜구하기, 서든친목,
            서든라디오 등 다양한 정보를 제공합니다.
          </p>
          <a
            href="https://discord.com/invite/vxSzcCN2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 mt-4"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>서든어택 디스코드 라운지 바로가기</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-6 w-full mt-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
              서든어택 주요 서비스
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든어택디스코드
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  서든어택 플레이어들을 위한 디스코드 커뮤니티
                </p>
                <a
                  href="https://discord.com/invite/vxSzcCN2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium rounded-lg transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  디스코드 참여하기
                </a>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든어택라운지
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 공식 라운지 및 커뮤니티
                </p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  SP거래소
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 SP 거래 및 아이템 거래소
                </p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든어택자랭
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 자유랭킹 및 경쟁전 정보
                </p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든클랜구하기
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 클랜 모집 및 가입 정보
                </p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든친목
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 친목 모임 및 소통 공간
                </p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                  서든라디오
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  서든어택 관련 라디오 및 방송
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
