import { useEffect, useState } from "react";
import "./styles.css";

const STORAGE_KEY = "week-tracker-progress";
const TOTAL_TASKS = 34;
const TIMELINE_HTML = `<div class="week" data-week="1">
      <div class="week-dot">1</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">TypeScript foundations</h3>
            <span class="focus-tag tag-ts">TypeScript</span>
          </div>
          <span class="week-range">Week 1</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w1t1"><label for="w1t1">Read "Basics" and "Everyday Types" in the TS Handbook</label></li>
          <li class="task"><input type="checkbox" id="w1t2"><label for="w1t2">Convert one existing JS file (Ramp Ready or Duhlicious) to strict TypeScript</label></li>
          <li class="task"><input type="checkbox" id="w1t3"><label for="w1t3">Watch freeCodeCamp's TypeScript course, first third</label></li>
          <li class="task"><input type="checkbox" id="w1t4"><label for="w1t4">DSA: first 5 problems from NeetCode's arrays/hashing set</label></li>
        </ul>
        <div class="resources">
          <a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noopener">TS Handbook</a>
          <a href="https://www.youtube.com/@freecodecamp" target="_blank" rel="noopener">freeCodeCamp (YouTube)</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>Core TypeScript</h4>
            <ul>
              <li>Type inference vs. explicit annotation &mdash; when TS can figure it out on its own</li>
              <li>Primitive types: string, number, boolean, null, undefined, void, never</li>
              <li>Typing arrays and tuples</li>
              <li>Object types: inline object types vs. interfaces vs. type aliases, and when to use each</li>
              <li>Optional properties (?) and readonly properties</li>
              <li>Union types and literal types (e.g. "loading" | "success" | "error")</li>
              <li>Type narrowing: typeof checks, instanceof, the "in" operator, truthiness checks</li>
              <li>Function typing: parameter types, return types, optional and default parameters</li>
              <li>any vs. unknown vs. never &mdash; why "any" quietly defeats the point of TypeScript</li>
              <li>Type assertions ("as") &mdash; when it's legitimate and when it's a red flag in review</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="2">
      <div class="week-dot">2</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">TypeScript inside React</h3>
            <span class="focus-tag tag-ts">TypeScript</span>
          </div>
          <span class="week-range">Week 2</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w2t1"><label for="w2t1">Read the Components and Hooks sections of the React TypeScript Cheatsheet</label></li>
          <li class="task"><input type="checkbox" id="w2t2"><label for="w2t2">Type props, state, and event handlers in one real component fully</label></li>
          <li class="task"><input type="checkbox" id="w2t3"><label for="w2t3">Work through Total TypeScript's free generics tutorial</label></li>
          <li class="task"><input type="checkbox" id="w2t4"><label for="w2t4">DSA: finish arrays/hashing, start two-pointer problems</label></li>
        </ul>
        <div class="resources">
          <a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank" rel="noopener">React TS Cheatsheet</a>
          <a href="https://www.totaltypescript.com/tutorials" target="_blank" rel="noopener">Total TypeScript (free)</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>Generics</h4>
            <ul>
              <li>Generic functions and generic interfaces</li>
              <li>Constraining generics with "extends"</li>
              <li>Why generics matter for reusable, typed components and hooks</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Typing React specifically</h4>
            <ul>
              <li>Typing function components: the React.FC debate and why explicit prop typing is usually preferred</li>
              <li>Typing useState&lt;T&gt; and useReducer, including discriminated unions for reducer actions</li>
              <li>Typing event handlers: React.ChangeEvent&lt;HTMLInputElement&gt;, React.MouseEvent, React.FormEvent</li>
              <li>Typing children props and render-prop patterns</li>
              <li>Typing the Context API: typing a Context, its Provider, and useContext</li>
              <li>Typing custom hooks and their return values (including tuple returns)</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Utility types</h4>
            <ul>
              <li>Partial, Required, Readonly</li>
              <li>Pick and Omit for shaping existing types</li>
              <li>Record for typing key-value structures</li>
              <li>Discriminated unions for modeling UI state (loading / success / error) cleanly</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="3">
      <div class="week-dot">3</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Testing fundamentals &mdash; Jest</h3>
            <span class="focus-tag tag-test">Testing</span>
          </div>
          <span class="week-range">Week 3</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w3t1"><label for="w3t1">Work through Jest's official "Getting Started" guide</label></li>
          <li class="task"><input type="checkbox" id="w3t2"><label for="w3t2">Write unit tests for 3 plain utility functions (no React yet)</label></li>
          <li class="task"><input type="checkbox" id="w3t3"><label for="w3t3">Watch Codevolution's Jest & RTL playlist, Jest half</label></li>
          <li class="task"><input type="checkbox" id="w3t4"><label for="w3t4">DSA: sliding-window problems</label></li>
        </ul>
        <div class="resources">
          <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener">Jest docs</a>
          <a href="https://www.youtube.com/@Codevolution" target="_blank" rel="noopener">Codevolution (YouTube)</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>Jest mechanics</h4>
            <ul>
              <li>How a test runner and assertion library fit together</li>
              <li>describe / it / test blocks and how to structure a test file</li>
              <li>Common matchers: toBe, toEqual, toBeTruthy, toContain, toThrow</li>
              <li>Setup and teardown: beforeEach, afterEach, beforeAll, afterAll</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Mocking</h4>
            <ul>
              <li>jest.fn(), mockReturnValue, mockImplementation</li>
              <li>jest.mock() for mocking entire modules</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Practice and hygiene</h4>
            <ul>
              <li>Testing pure functions and utility logic first, before components</li>
              <li>Test file naming and organization conventions (*.test.ts, colocated vs. separate folders)</li>
              <li>What code coverage actually measures, and why 100% coverage isn't the real goal</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="4">
      <div class="week-dot">4</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Testing real components &mdash; RTL</h3>
            <span class="focus-tag tag-test">Testing</span>
          </div>
          <span class="week-range">Week 4</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w4t1"><label for="w4t1">Read the React Testing Library intro docs</label></li>
          <li class="task"><input type="checkbox" id="w4t2"><label for="w4t2">Write real tests for 4&ndash;5 components: render, queries, user-event</label></li>
          <li class="task"><input type="checkbox" id="w4t3"><label for="w4t3">Add one async test: mock an API call, assert loading and error states</label></li>
          <li class="task"><input type="checkbox" id="w4t4"><label for="w4t4">DSA: recursion basics + intro to trees</label></li>
        </ul>
        <div class="resources">
          <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noopener">RTL docs</a>
          <a href="https://www.youtube.com/@freecodecamp" target="_blank" rel="noopener">freeCodeCamp (YouTube)</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>RTL philosophy and queries</h4>
            <ul>
              <li>Testing behavior, not implementation details &mdash; the core RTL principle</li>
              <li>getBy vs. queryBy vs. findBy, and when each is correct</li>
              <li>Accessible queries first: getByRole and getByLabelText, and why they're preferred over getByTestId</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Interaction and async</h4>
            <ul>
              <li>fireEvent vs. userEvent, and why userEvent better simulates real usage</li>
              <li>Testing forms: text inputs, selects, checkboxes</li>
              <li>Testing async UI with waitFor and findBy queries</li>
              <li>Mocking API calls (mocking fetch/axios directly, or the concept behind tools like MSW)</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Extra ground</h4>
            <ul>
              <li>Snapshot testing: what it catches well and where it becomes noise</li>
              <li>Testing custom hooks with renderHook</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="5">
      <div class="week-dot">5</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Design systems &mdash; vocabulary and tokens</h3>
            <span class="focus-tag tag-ds">Design systems</span>
          </div>
          <span class="week-range">Week 5</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w5t1"><label for="w5t1">Work through Storybook's "Design Systems for Developers" tutorial</label></li>
          <li class="task"><input type="checkbox" id="w5t2"><label for="w5t2">Define a token set (color, spacing, type scale) for one project</label></li>
          <li class="task"><input type="checkbox" id="w5t3"><label for="w5t3">Read through shadcn/ui source to see real variant patterns</label></li>
          <li class="task"><input type="checkbox" id="w5t4"><label for="w5t4">DSA: continue trees</label></li>
        </ul>
        <div class="resources">
          <a href="https://storybook.js.org/tutorials/design-systems-for-developers/" target="_blank" rel="noopener">Storybook: Design Systems</a>
          <a href="https://ui.shadcn.com/" target="_blank" rel="noopener">shadcn/ui</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>Tokens</h4>
            <ul>
              <li>What a design token is: primitive tokens vs. semantic tokens (e.g. "blue-500" vs. "color-danger")</li>
              <li>Color tokens, spacing tokens, typography tokens</li>
              <li>Type scale: modular scale ratios and heading/body hierarchy</li>
              <li>Spacing scale: 4px/8px grid systems and why consistent spacing matters at scale</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Component API design</h4>
            <ul>
              <li>Props vs. composition &mdash; when to add a prop vs. when to let consumers compose</li>
              <li>Controlled vs. uncontrolled components</li>
              <li>Variant patterns: how libraries express size/variant/state (the class-variance-authority pattern)</li>
              <li>Naming conventions for components and props that stay consistent across a system</li>
              <li>Theming approaches: CSS variables vs. theme objects</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="6">
      <div class="week-dot">6</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Build a real component library</h3>
            <span class="focus-tag tag-ds">Design systems</span>
          </div>
          <span class="week-range">Week 6</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w6t1"><label for="w6t1">Install Storybook on one project</label></li>
          <li class="task"><input type="checkbox" id="w6t2"><label for="w6t2">Document 5&ndash;6 components with real states and variants</label></li>
          <li class="task"><input type="checkbox" id="w6t3"><label for="w6t3">Run an accessibility check with the Storybook a11y addon or axe DevTools, fix what it flags</label></li>
          <li class="task"><input type="checkbox" id="w6t4"><label for="w6t4">DSA: light practice, revisit anything shaky from weeks 1&ndash;5</label></li>
        </ul>
        <div class="resources">
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener">Storybook docs</a>
          <a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener">axe DevTools</a>
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>Storybook mechanics</h4>
            <ul>
              <li>Component Story Format (CSF): writing stories, args, and controls</li>
              <li>Documenting every meaningful state: default, hover/focus, disabled, loading, error</li>
              <li>Useful addons: the a11y addon and the viewport addon</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Accessibility, hands-on</h4>
            <ul>
              <li>Core ARIA roles and when native HTML elements make them unnecessary</li>
              <li>Keyboard navigation: tab order, visible focus states, focus trapping in modals</li>
              <li>Color contrast basics and how to check it</li>
              <li>Testing with axe DevTools and by navigating your own UI with only a keyboard</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Publishing the library</h4>
            <ul>
              <li>Repo structure and exports that make components easy to reuse</li>
              <li>Writing a README that explains the "why," not just the "what"</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="7">
      <div class="week-dot">7</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Ship the library, start LLM basics</h3>
            <span class="focus-tag tag-ai">AI fundamentals</span>
          </div>
          <span class="week-range">Week 7</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w7t1"><label for="w7t1">Polish the component library and push it to GitHub with a real README</label></li>
          <li class="task"><input type="checkbox" id="w7t2"><label for="w7t2">Start Anthropic Academy's Claude fundamentals course</label></li>
          <li class="task"><input type="checkbox" id="w7t3"><label for="w7t3">Work through chapters 1&ndash;4 of Anthropic's interactive prompt engineering tutorial</label></li>
        </ul>
        <div class="resources">
          <a href="https://anthropic.skilljar.com/" target="_blank" rel="noopener">Anthropic Academy</a>
          <a href="https://github.com/anthropics/prompt-eng-interactive-tutorial" target="_blank" rel="noopener">Prompt eng. tutorial</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>LLM basics</h4>
            <ul>
              <li>What a token is, and why context windows have a hard limit</li>
              <li>Temperature and sampling &mdash; why the same prompt can produce different outputs</li>
              <li>System prompts vs. user messages vs. assistant messages, and what each is for</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Prompt engineering technique</h4>
            <ul>
              <li>Writing clear, unambiguous instructions</li>
              <li>Few-shot examples: showing the model what you want instead of just describing it</li>
              <li>Role prompting and why it changes output tone/behavior</li>
              <li>XML-tag structuring, which Claude specifically responds well to</li>
              <li>Chain-of-thought / step-by-step reasoning prompts</li>
              <li>Asking for structured output (e.g. JSON) and parsing it reliably</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="8">
      <div class="week-dot">8</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Build with the Claude API</h3>
            <span class="focus-tag tag-ai">AI fundamentals</span>
          </div>
          <span class="week-range">Week 8</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w8t1"><label for="w8t1">Complete Anthropic's API fundamentals course (auth, requests, streaming)</label></li>
          <li class="task"><input type="checkbox" id="w8t2"><label for="w8t2">Build one small real feature in Next.js calling the Claude API (e.g. a document summarizer)</label></li>
          <li class="task"><input type="checkbox" id="w8t3"><label for="w8t3">Implement a genuinely streaming response in the UI, not just a spinner</label></li>
        </ul>
        <div class="resources">
          <a href="https://github.com/anthropics/courses" target="_blank" rel="noopener">Anthropic API course</a>
          <a href="https://docs.claude.com/" target="_blank" rel="noopener">Claude API docs</a>
        </div>
        <details class="syllabus">
          <summary>Detailed topics in this week</summary>
          <div class="topic-group">
            <h4>API mechanics</h4>
            <ul>
              <li>Authentication and API key handling</li>
              <li>Request/response shape: the messages array, roles, and model parameters</li>
              <li>Streaming responses: how server-sent events work and how to consume them client-side</li>
              <li>Basic error handling and rate limits</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>Beyond plain chat</h4>
            <ul>
              <li>Tool use / function calling: how the model decides to call a tool and how you define a tool schema</li>
              <li>RAG at a conceptual level: what embeddings are, what vector search does, and why retrieval happens before generation</li>
            </ul>
          </div>
          <div class="topic-group">
            <h4>The build itself</h4>
            <ul>
              <li>Wiring one real feature end to end: input &rarr; API call &rarr; streamed output &rarr; rendered UI</li>
              <li>Keeping the scope small and honest &mdash; a working summarizer beats an ambitious clone you can't fully explain</li>
            </ul>
          </div>
        </details>
      </div>
    </div>

    <div class="week" data-week="9">
      <div class="week-dot">9</div>
      <div class="week-card">
        <div class="week-head">
          <div>
            <h3 class="week-title">Consolidate and pressure-test</h3>
            <span class="focus-tag tag-review">Review</span>
          </div>
          <span class="week-range">Week 9</span>
        </div>
        <ul class="task-list">
          <li class="task"><input type="checkbox" id="w9t1"><label for="w9t1">Finish and polish the Claude API project, write short notes on the tradeoffs you made</label></li>
          <li class="task"><input type="checkbox" id="w9t2"><label for="w9t2">Run one timed mock DSA round: 3&ndash;4 medium problems, no notes</label></li>
          <li class="task"><input type="checkbox" id="w9t3"><label for="w9t3">Re-read your own TypeScript and test code from weeks 1&ndash;4, fix anything you'd be embarrassed to explain</label></li>
          <li class="task"><input type="checkbox" id="w9t4"><label for="w9t4">Write down one true, specific bullet point per phase &mdash; this becomes the honest resume rewrite</label></li>
        </ul>
        <div class="resources">
          <a href="https://neetcode.io/roadmap" target="_blank" rel="noopener">NeetCode roadmap</a>
        </div>
      </div>`;

export default function App() {{
  const [completed, setCompleted] = useState(() => {{
    try {{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }}
    catch {{ return []; }}
  }});
  const [saved, setSaved] = useState(false);

  useEffect(() => {{
    const root = document.getElementById("timeline");
    if (!root) return;
    root.innerHTML = TIMELINE_HTML;

    const boxes = [...root.querySelectorAll('input[type="checkbox"]')];
    boxes.forEach((box) => {{
      box.checked = completed.includes(box.id);
      box.closest(".task")?.classList.toggle("checked", box.checked);
      box.addEventListener("change", () => {{
        setCompleted((prev) => box.checked
          ? [...new Set([...prev, box.id])]
          : prev.filter((id) => id !== box.id));
      }});
    }});

    return () => boxes.forEach((box) => box.replaceWith(box.cloneNode(true)));
  }}, [completed]);

  useEffect(() => {{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    setSaved(true);
    const timer = setTimeout(() => setSaved(false), 900);
    return () => clearTimeout(timer);
  }}, [completed]);

  const progress = (completed.length / TOTAL_TASKS) * 100;

  return (
    <div className="app">
      <div className="wrap">
        <header>
          <div className="kicker">Study tracker</div>
          <h1>9 weeks from resume gaps to a real, defensible skill set</h1>
          <p className="sub">TypeScript and testing come first because they're what actually ends an interview early. Design systems and AI come after the baseline is solid. Open "detailed topics" under any week to see exactly what's inside it before you commit to it.</p>
          <div className="progress-shell">
            <div className="progress-top">
              <span className="progress-label">Overall progress</span>
              <span className="progress-count">{{completed.length}} / {{TOTAL_TASKS}} tasks</span>
            </div>
            <div className="progress-track"><div className="progress-fill" style={{{{width: `${{progress}}%`}}}} /></div>
            <div className={{`save-status ${{saved ? "ok" : ""}}`}}>{{saved ? "Saved." : "Progress saves automatically in this browser."}}</div>
          </div>
          <div className="daily-note"><b>Running daily habit:</b> 30–45 min of DSA every day (NeetCode's Blind 75, in order) sits underneath all 9 weeks below — it's not called out per week so it doesn't get skipped when a week feels full.</div>
        </header>
        <div className="timeline" id="timeline" />
        <footer>Everything linked here is free. Resume rewrite comes after week 9, once every line on it is something you could defend in a follow-up question.</footer>
      </div>
    </div>
  );
}}
