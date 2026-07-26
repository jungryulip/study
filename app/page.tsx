"use client";

import { useMemo, useState } from "react";
import { allTags, posts } from "./study-data";

const repositoryUrl = "https://github.com/jungryulip/study/tree/main";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("전체");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return posts.filter((post) => {
      const tagMatches =
        selectedTag === "전체" || post.tags.includes(selectedTag);
      const queryMatches =
        !normalized ||
        [post.title, post.summary, ...post.learned, ...post.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return tagMatches && queryMatches;
    });
  }, [query, selectedTag]);

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
            <span><strong>{allTags.length}</strong>개의 태그</span>
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

          <div className="mobile-tags" aria-label="태그 필터">
            {["전체", ...allTags].map((tag) => (
              <button
                key={tag}
                type="button"
                className={selectedTag === tag ? "active" : ""}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="post-list">
            {filteredPosts.map((post) => (
              <article className="post-card" key={post.date}>
                <div className="date-column">
                  <span>{post.day}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="post-body">
                  <div className="post-tags">
                    {post.tags.map((tag) => <span key={tag}>#{tag}</span>)}
                  </div>
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
              <p>다른 키워드나 태그를 선택해 보세요.</p>
            </div>
          )}
        </section>

        <aside>
          <div className="aside-block">
            <h2>태그</h2>
            <div className="tag-menu">
              {["전체", ...allTags].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={selectedTag === tag ? "active" : ""}
                  onClick={() => setSelectedTag(tag)}
                >
                  <span>{tag}</span>
                  <small>
                    {tag === "전체"
                      ? posts.length
                      : posts.filter((post) => post.tags.includes(tag)).length}
                  </small>
                </button>
              ))}
            </div>
          </div>
          <div className="aside-note">
            <span>WRITE, RUN, LEARN.</span>
            <p>직접 실행해 본 한 줄이 읽기만 한 열 줄보다 오래 남는다.</p>
          </div>
        </aside>
      </div>

      <footer>
        <a className="logo" href="#top">SQL<span>하루</span></a>
        <p>Oracle SQL을 배우는 매일의 기록 · 2026</p>
      </footer>
    </main>
  );
}
