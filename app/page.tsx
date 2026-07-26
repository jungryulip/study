"use client";

import { useMemo, useState } from "react";
import { notes, roadmap } from "./study-data";

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("전체");
  const categories = ["전체", ...Array.from(new Set(notes.map((note) => note.category)))];

  const filteredNotes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return notes.filter((note) => {
      const matchesCategory =
        activeCategory === "전체" || note.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [note.title, note.summary, note.category, ...note.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const completed = roadmap.filter((item) => item.done).length;
  const progress = Math.round((completed / roadmap.length) * 100);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SQLD Log 홈">
          <span className="brand-mark">S</span>
          <span>SQLD LOG</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#notes">학습 노트</a>
          <a href="#roadmap">로드맵</a>
          <a href="#about">소개</a>
        </nav>
        <a className="github-link" href="#" aria-label="GitHub 프로필 링크">
          GITHUB <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SQL DEVELOPER CERTIFICATION · STUDY ARCHIVE</p>
          <h1>
            데이터를 이해하고,
            <br />
            <em>SQL로 증명합니다.</em>
          </h1>
          <p className="hero-description">
            SQLD 자격증을 준비하며 배운 개념과 쿼리, 실수와 깨달음을
            기록하는 학습 아카이브입니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#notes">
              노트 둘러보기 <span aria-hidden="true">↓</span>
            </a>
            <span className="updated">LAST UPDATED · 2026.07</span>
          </div>
        </div>

        <div className="query-card" aria-label="SQL 코드 예시">
          <div className="query-card-top">
            <span>study_log.sql</span>
            <span className="window-dots" aria-hidden="true">● ● ●</span>
          </div>
          <pre>
            <code>
              <span className="sql-keyword">SELECT</span>
              {"\n  "}topic, COUNT(*){" "}
              <span className="sql-keyword">AS</span> learned
              {"\n"}<span className="sql-keyword">FROM</span> study_log
              {"\n"}<span className="sql-keyword">WHERE</span> understood ={" "}
              <span className="sql-value">TRUE</span>
              {"\n"}<span className="sql-keyword">GROUP BY</span> topic
              {"\n"}<span className="sql-keyword">ORDER BY</span> learned DESC;
            </code>
          </pre>
          <div className="query-result">
            <span>6 rows returned</span>
            <span>0.018 sec</span>
          </div>
        </div>
      </section>

      <section className="status-strip" aria-label="학습 현황">
        <div>
          <strong>{notes.length.toString().padStart(2, "0")}</strong>
          <span>작성한 노트</span>
        </div>
        <div>
          <strong>{progress}%</strong>
          <span>학습 진도</span>
        </div>
        <div>
          <strong>{new Set(notes.map((note) => note.category)).size}</strong>
          <span>핵심 영역</span>
        </div>
        <p>꾸준히 쌓인 기록은 가장 솔직한 포트폴리오가 됩니다.</p>
      </section>

      <section className="notes-section" id="notes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 · STUDY NOTES</p>
            <h2>최근 학습 노트</h2>
          </div>
          <label className="search">
            <span className="sr-only">학습 노트 검색</span>
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="키워드로 검색"
            />
          </label>
        </div>

        <div className="category-list" aria-label="노트 카테고리">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="note-grid">
          {filteredNotes.map((note, index) => (
            <article className="note-card" key={note.slug}>
              <div className="note-meta">
                <span>{note.category}</span>
                <time dateTime={note.date}>{note.date.replaceAll("-", ".")}</time>
              </div>
              <h3>{note.title}</h3>
              <p>{note.summary}</p>
              <div className="tag-list">
                {note.tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </div>
              <a href={`#note-${note.slug}`} aria-label={`${note.title} 읽기`}>
                READ NOTE <ArrowIcon />
              </a>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <p className="empty-state">검색 조건에 맞는 노트가 없습니다.</p>
        )}
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-intro">
          <p className="eyebrow">02 · ROADMAP</p>
          <h2>합격까지의 여정</h2>
          <p>
            체크리스트를 따라 개념 학습부터 실전 대비까지,
            현재 위치를 투명하게 기록합니다.
          </p>
          <div className="progress-label">
            <span>전체 진도</span>
            <strong>{progress}%</strong>
          </div>
          <div className="progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
        <ol className="roadmap-list">
          {roadmap.map((item, index) => (
            <li key={item.title} className={item.done ? "done" : ""}>
              <span className="roadmap-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="roadmap-state" aria-label={item.done ? "완료" : "진행 예정"}>
                {item.done ? "✓" : "—"}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <footer id="about">
        <div>
          <span className="brand-mark">S</span>
          <p>배운 것을 설명할 수 있을 때, 비로소 내 지식이 됩니다.</p>
        </div>
        <p>BUILT WITH CURIOSITY & SQL · © 2026 SQLD LOG</p>
      </footer>
    </main>
  );
}
