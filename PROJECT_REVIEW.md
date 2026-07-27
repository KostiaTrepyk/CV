# Анализ и оценка проекта CV

## 📊 Общая оценка: **7.5 / 10**

Проект представляет собой современный сайт-портфолио с хорошей визуальной составляющей, качественными 3D-эффектами на Canvas (Three.js) и продуманным разделением данных.

---

## 🏗️ 1. Архитектура проекта

### 🟢 Что сделано хорошо:
1. **Разделение слоев (Layering)**:
   - Данные (проекты, навыки, ссылки) изолированы в [`src/data`](file:///home/kr1stal1k/Desktop/Projects/CV/src/data).
   - 3D-логика анимации дождя вынесена из React в отдельный класс `RainAnimation` в [`src/threejs-animations/rain.ts`](file:///home/kr1stal1k/Desktop/Projects/CV/src/threejs-animations/rain.ts).
   - Настройки маршрутов вынесены в [`src/core/Router/router.tsx`](file:///home/kr1stal1k/Desktop/Projects/CV/src/core/Router/router.tsx).
2. **Управление ресурсами в Three.js**:
   - В `RainAnimation` правильно реализован метод `destroy()` с вызовом `.dispose()` для геометрий и материалов, что предотвращает утечки памяти.
3. **Маршрутизация**:
   - Использование `createHashRouter` корректно подходит для бесплатного хостинга GitHub Pages.

### 🔴 Архитектурные проблемы и недостатки:
1. **Устаревший тулинг (Create React App / `react-scripts`)**:
   - Проект использует `react-scripts` 5.0.1 (Webpack 5 + Babel), который официально депрекейтнут. При установке пакетов выводится множество предупреждений.
   - *Рекомендация*: Мигрировать на **Vite** (`npx create-vite`), что ускорит сборку и dev-сервер в 5–10 раз.
2. **Фрагментация стилей**:
   - В проекте одновременно используются 3 разных способа стилизации: MUI `sx` prop, Emotion `styled` API и CSS-модули (`.module.css`). Стоит придерживаться единого подхода (MUI System / `sx`).
3. **Обход типов TypeScript (`@ts-ignore`)** *(Уже исправлено ✅)*:
   - В `Nav.tsx`, `AboutSection.tsx`, `ContactSection.tsx`, `ProjectsSection.tsx` ранее использовался `// @ts-ignore`. На данный момент все `// @ts-ignore` удалены через компонентный паттерн `component={motion.section}`.

---

## 🛠️ 2. Что нужно поправить (Баги и технический долг)

1. **Сломанный дефолтный тест**:
   - В [`src/App.test.tsx`](file:///home/kr1stal1k/Desktop/Projects/CV/src/App.test.tsx) остался CRA-тест, ищущий строку `"learn react"`. Файл стоит обновить.
2. **Баг с пропорциями камеры в Three.js**:
   - В [`rain.ts`](file:///home/kr1stal1k/Desktop/Projects/CV/src/threejs-animations/rain.ts#L119) aspect ratio рассчитывается как `window.innerWidth / window.innerHeight`, хотя в метод `resize` передаются реальные размеры canvas (`this.size.x / this.size.y`). Это приводит к искажению анимации.
3. **Временное уведомление (Debug UI)**:
   - В [`Layout.tsx`](file:///home/kr1stal1k/Desktop/Projects/CV/src/components/layout/Layout.tsx#L66) через 2 секунды появляется всплывашка `"Try to refresh the page"`. Это выглядит как забытый отладочный код.
4. **SEO & Accessibility**:
   - В логотипе навигации [`Nav.tsx`](file:///home/kr1stal1k/Desktop/Projects/CV/src/components/layout/Nav/Nav.tsx#L66) используется `variant="h1"`. На странице должен быть только один заголовок `<h1>` (например, должность или имя), а логотипы обычно размечаются как `span` или `h6`.

---

## 🚀 Рекомендуемый порядок действий

1. **Исправить оставшиеся баги**: поправить [`rain.ts`](file:///home/kr1stal1k/Desktop/Projects/CV/src/threejs-animations/rain.ts#L119) (удалив `window.innerWidth`) и убрать отладочный Snackbar в [`Layout.tsx`](file:///home/kr1stal1k/Desktop/Projects/CV/src/components/layout/Layout.tsx#L66).
2. **Мигрировать на Vite**: избавиться от `react-scripts`.
3. **Оптимизировать SEO и доступность**: исправить заголовки `<h1>` и добавить динамический `document.title`.
