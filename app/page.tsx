"use client";

import { useMemo, useState } from "react";
import { posts } from "./study-data";

const repositoryUrl = "https://github.com/jungryulip/study/tree/main";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter(
      (post) =>
        !normalized ||
        [post.title, post.summary, ...post.learned]
          .join(" ")
          .toLowerCase()
          .includes(normalized),
    );
  }, [query]);

  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#top" aria-label="SQL 하루 홈">
          SQL<span>하루</span>
        </a>
        <nav>
          <a href="#posts">글 목록</a>
          <a href="https://github.com/jungryulip/study">GitHub</a>
        </nav>
      </header>

      <section className="profile" id="top">
        <div className="avatar" aria-hidden="true">SQL</div>
        <div className="profile-copy">
          <p className="profile-label">ORACLE SQL STUDY LOG</p>
          <h1>배운 것을 하루씩 기록합니다.</h1>
          <p>
            Oracle SQL과 SQLD를 공부하며 새롭게 알게 된 것,
            헷갈렸던 것, 직접 실행해 본 쿼리를 날짜별로 남기는 공간입니다.
          </p>
          <div className="profile-stats">
            <span><strong>{posts.length}</strong>개의 기록</span>
            <span>2026.07부터 기록 중</span>
          </div>
        </div>
      </section>

      <div className="content-layout" id="posts">
        <section className="post-section">
          <div className="list-header">
            <div>
              <h2>학습 기록</h2>
              <p>최신 글부터 차곡차곡</p>
            </div>
            <label className="search">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="배운 내용 검색"
                aria-label="학습 기록 검색"
              />
            </label>
          </div>

          <div className="post-list">
            {filteredPosts.map((post) => (
              <article className="post-card" key={post.date}>
                <div className="date-column">
                  <span>{post.day}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="post-body">
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <div className="learned-box">
                    <strong>오늘 배운 것</strong>
                    <ul>
                      {post.learned.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="post-footer">
                    <span>{post.readTime}분 분량</span>
                    <a
                      href={`${repositoryUrl}/${post.folder}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      실습 코드 보기 <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="empty">
              <strong>검색 결과가 없어요.</strong>
              <p>다른 키워드로 검색해 보세요.</p>
            </div>
          )}
        </section>
      </div>

      <footer>
        <a className="logo" href="#top">SQL<span>하루</span></a>
        <p>Oracle SQL을 배우는 매일의 기록 · 2026</p>
      </footer>
    </main>
  );
}
