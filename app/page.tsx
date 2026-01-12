export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left w-full">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50">
            서든어택 커뮤니티 - 서든어택디스코드, 서든어택라운지, SP거래소
          </h1>
          <p className="max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            서든어택 플레이어를 위한 종합 커뮤니티입니다. 서든어택디스코드, 서든어택라운지, SP거래소, 서든어택자랭, 서든클랜구하기, 서든친목, 서든라디오 등 다양한 정보를 제공합니다.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 w-full mt-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">서든어택 주요 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든어택디스코드</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 플레이어들을 위한 디스코드 커뮤니티</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든어택라운지</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 공식 라운지 및 커뮤니티</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">SP거래소</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 SP 거래 및 아이템 거래소</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든어택자랭</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 자유랭킹 및 경쟁전 정보</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든클랜구하기</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 클랜 모집 및 가입 정보</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든친목</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 친목 모임 및 소통 공간</p>
              </div>
              <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">서든라디오</h3>
                <p className="text-zinc-600 dark:text-zinc-400">서든어택 관련 라디오 및 방송</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
