import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import { apiKey } from '../../app/variables';

const NewsContainer = styled.div`
  width: 70%;
  margin: 30px 15% auto 15%;
`;

const NewsItemLi = styled.li`
  margin: 10px auto 10px auto;
  list-style: none;
`;

const NewsItemButton = styled.button`
  border-block: initial;
  border-inline: initial;
  border-start-start-radius: initial;
  border-start-end-radius: initial;
  border-end-start-radius: initial;
  border-end-end-radius: initial;
  overflow-inline: initial;
  overflow-block: initial;
  overscroll-behavior-inline: initial;
  overscroll-behavior-block: initial;
  margin-block: initial;
  margin-inline: initial;
  scroll-margin-block: initial;
  scroll-margin-inline: initial;
  padding-block: initial;
  padding-inline: initial;
  scroll-padding-block: initial;
  scroll-padding-inline: initial;
  inset-block: initial;
  inset-inline: initial;
  block-size: initial;
  min-block-size: initial;
  max-block-size: initial;
  inline-size: initial;
  min-inline-size: initial;
  max-inline-size: initial;
  contain-intrinsic-block-size: initial;
  contain-intrinsic-inline-size: initial;
  background: initial;
  background-blend-mode: initial;
  border-radius: initial;
  box-decoration-break: initial;
  -moz-float-edge: initial;
  float: initial;
  clear: initial;
  vertical-align: initial;
  baseline-source: initial;
  overflow: initial;
  overflow-anchor: initial;
  transform: initial;
  rotate: initial;
  scale: initial;
  translate: initial;
  offset: initial;
  scroll-behavior: initial;
  scroll-snap-align: initial;
  scroll-snap-type: initial;
  scroll-snap-stop: initial;
  overscroll-behavior: initial;
  isolation: initial;
  break-after: initial;
  break-before: initial;
  break-inside: initial;
  resize: initial;
  perspective: initial;
  perspective-origin: initial;
  backface-visibility: initial;
  transform-box: initial;
  transform-style: initial;
  transform-origin: initial;
  contain: initial;
  container: initial;
  -moz-orient: initial;
  will-change: initial;
  shape-image-threshold: initial;
  shape-margin: initial;
  shape-outside: initial;
  touch-action: initial;
  -webkit-line-clamp: initial;
  scrollbar-gutter: initial;
  columns: initial;
  column-fill: initial;
  column-rule: initial;
  column-span: initial;
  content: initial;
  counter-increment: initial;
  counter-reset: initial;
  counter-set: initial;
  opacity: initial;
  clip: initial;
  filter: initial;
  backdrop-filter: initial;
  mix-blend-mode: initial;
  font-style: initial;
  font-variant: initial;
  font-size: initial;
  font-size-adjust: initial;
  font-synthesis: initial;
  font-stretch: initial;
  font-kerning: initial;
  font-feature-settings: initial;
  font-variation-settings: initial;
  font-language-override: initial;
  font-optical-sizing: initial;
  font-palette: initial;
  math-depth: initial;
  math-style: initial;
  visibility: initial;
  writing-mode: initial;
  text-orientation: initial;
  print-color-adjust: initial;
  image-rendering: initial;
  image-orientation: initial;
  dominant-baseline: initial;
  text-anchor: initial;
  color-interpolation: initial;
  color-interpolation-filters: initial;
  fill: initial;
  fill-opacity: initial;
  fill-rule: initial;
  shape-rendering: initial;
  stroke: initial;
  stroke-width: initial;
  stroke-linecap: initial;
  stroke-linejoin: initial;
  stroke-miterlimit: initial;
  stroke-opacity: initial;
  stroke-dasharray: initial;
  stroke-dashoffset: initial;
  clip-rule: initial;
  marker: initial;
  paint-order: initial;
  border-collapse: initial;
  empty-cells: initial;
  caption-side: initial;
  border-spacing: initial;
  color: initial;
  line-height: initial;
  text-transform: initial;
  hyphens: initial;
  -moz-text-size-adjust: initial;
  text-indent: initial;
  overflow-wrap: initial;
  word-break: initial;
  text-justify: initial;
  text-align-last: initial;
  text-align: initial;
  letter-spacing: initial;
  word-spacing: initial;
  white-space: initial;
  text-shadow: initial;
  text-emphasis: initial;
  text-emphasis-position: initial;
  tab-size: initial;
  line-break: initial;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: initial;
  ruby-align: initial;
  ruby-position: initial;
  text-combine-upright: initial;
  text-rendering: initial;
  text-underline-offset: initial;
  text-underline-position: initial;
  text-decoration-skip-ink: initial;
  hyphenate-character: initial;
  forced-color-adjust: initial;
  -webkit-text-security: initial;
  pointer-events: initial;
  -moz-user-input: initial;
  -moz-user-modify: initial;
  -moz-user-focus: initial;
  caret-color: initial;
  accent-color: initial;
  color-scheme: initial;
  scrollbar-color: initial;
  quotes: initial;
  margin: initial;
  overflow-clip-margin: initial;
  scroll-margin: initial;
  outline-offset: initial;
  page: initial;
  padding: initial;
  scroll-padding: initial;
  inset: initial;
  z-index: initial;
  flex-flow: initial;
  place-content: initial;
  place-items: initial;
  flex: initial;
  place-self: initial;
  order: initial;
  min-width: initial;
  max-width: initial;
  height: initial;
  min-height: initial;
  max-height: initial;
  box-sizing: initial;
  object-fit: initial;
  object-position: initial;
  grid-area: initial;
  grid: initial;
  gap: initial;
  aspect-ratio: initial;
  contain-intrinsic-size: initial;
  vector-effect: initial;
  stop-color: initial;
  stop-opacity: initial;
  flood-color: initial;
  flood-opacity: initial;
  lighting-color: initial;
  mask-type: initial;
  clip-path: initial;
  mask: initial;
  x: initial;
  y: initial;
  cx: initial;
  cy: initial;
  rx: initial;
  ry: initial;
  r: initial;
  d: initial;
  table-layout: initial;
  text-overflow: initial;
  text-decoration: initial;
  ime-mode: initial;
  scrollbar-width: initial;
  user-select: initial;
  -moz-window-dragging: initial;
  -moz-force-broken-image-icon: initial;
  transition: initial;
  animation: initial;
  animation-composition: initial;
  -moz-box-align: initial;
  -moz-box-direction: initial;
  -moz-box-flex: initial;
  -moz-box-orient: initial;
  -moz-box-pack: initial;
  -moz-box-ordinal-group: initial;
  font-family: Roboto, sans-serif !important;
  display: inline-block;
  appearance: none;
  border: medium;
  outline: none;
  width: 100%;
  list-style: none;
  box-shadow: none;
  cursor: pointer;
  position: relative;
  font-weight: normal !important;
`;

const NewsButtonInner = styled.div`
  padding: 0px 1em;
  width: 100%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;

const NewsItemTitle = styled.h1`
  font-size: 8pt !important;
  text-shadow: rgb(0, 0, 0) 0px 0px 1px;
  font-weight: 500 !important;
`;

const NewsPublishedDate = styled.h2`
  color: rgb(3, 28, 43);
  font-size: 6pt !important;
  padding: 12px 0px;
  font-weight: 500 !important;
`;

const NewsItemSpan = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  margin-top: -7px;
  width: 10px;
  height: 13px;
  background: transparent url("https://cdn.recyclecoach.com/webapp-resources/img/icon-column-arrow@2x.png") left top / 10px 27px;
`;

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log(news);
  }, [news]);



  const search = (term) => {
    const today = new Date().toISOString().split('T')[0];
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday = yesterday.toISOString().split('T')[0];


    fetch(`https://newsapi.org/v2/everything?q=${term}&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=${apiKey}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .then(data => {
      if (data.status === 'ok') {
        const articles = data.articles;
        setNews(articles);
            } else {
        console.error(data.message);
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <NewsContainer>
      <Search search={search}/>

      <ul>
        {
          news.map((item) => (
            <NewsItemLi>
              <NewsItemButton>
                <Link
                  to={{
                    pathname: `/news/${item.title}`,
                    state: { item }
                  }}
                >
                  <NewsButtonInner>
                    <NewsItemTitle>
                      {item.title}
                    </NewsItemTitle>
                    <NewsPublishedDate>
                      {item.publishedAt}
                    </NewsPublishedDate>
                    <NewsItemSpan></NewsItemSpan>
                  </NewsButtonInner>
                </Link>
              </NewsItemButton>
            </NewsItemLi>
            ) 
          )
        }
      </ul>
    </NewsContainer>
  );
}

export default NewsList;