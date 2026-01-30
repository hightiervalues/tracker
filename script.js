const STORY_URL = "stories/demo-story.json";
const STORAGE_KEY = "choose-your-path::state";

const $title = document.getElementById("title");
const $text = document.getElementById("text");
const $choices = document.getElementById("choices");
const $restartBtn = document.getElementById("restartBtn");
const $shareBtn = document.getElementById("shareBtn");
const $progressText = document.getElementById("progressText");
const $chapterPill = document.getElementById("chapterPill");

let story = null;
let state = {
  nodeId: "start",
  choicesMade: 0,
  history: [] // [{from, to, label}]
};

function readStateFromURL() {
  const params = new URLSearchParams(location.search);
  const node = params.get("node");
  if (node && story && story.nodes[node]) {
    state.nodeId = node;
    // don't change history here; URL is just a "jump"
  }
}

function writeURLNode(nodeId) {
  const url = new URL(location.href);
  url.searchParams.set("node", nodeId);
  history.replaceState(null, "", url.toString());
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.nodeId === "string") state = parsed;
  } catch {}
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
  state = { nodeId: "start", choicesMade: 0, history: [] };
}

function setMeta(node) {
  const chapter = node.chapter ?? node.id;
  $chapterPill.textContent = `Chapter: ${chapter}`;
  const n = state.choicesMade || 0;
  $progressText.textContent = `${n} choice${n === 1 ? "" : "s"} made`;
}

function renderNode(nodeId) {
  const node = story.nodes[nodeId];
  if (!node) {
    $title.textContent = "Missing node";
    $text.textContent = `Could not find node "${nodeId}". Check your story JSON.`;
    $choices.innerHTML = "";
    return;
  }

  state.nodeId = nodeId;
  writeURLNode(nodeId);
  saveState();

  setMeta(node);
  $title.textContent = node.title || "Untitled";
  $text.textContent = node.text || "";

  $choices.innerHTML = "";

  const options = node.choices || [];
  if (options.length === 0) {
    const endBtn = document.createElement("button");
    endBtn.className = "btn primary";
    endBtn.type = "button";
    endBtn.textContent = "The End — Restart";
    endBtn.addEventListener("click", () => {
      clearState();
      renderNode("start");
    });
    $choices.appendChild(endBtn);
    return;
  }

  for (const choice of options) {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.type = "button";
    btn.textContent = choice.label;

    btn.addEventListener("click", () => {
      state.choicesMade += 1;
      state.history.push({ from: nodeId, to: choice.to, label: choice.label });
      saveState();
      renderNode(choice.to);
    });

    $choices.appendChild(btn);
  }
}

async function init() {
  try {
    const res = await fetch(STORY_URL, { cache: "no-store" });
    story = await res.json();

    // load saved state first
    loadState();

    // then allow URL to override the node if present
    readStateFromURL();

    // sanity fallback
    if (!story.nodes[state.nodeId]) state.nodeId = "start";

    renderNode(state.nodeId);
  } catch (err) {
    $title.textContent = "Failed to load story";
    $text.textContent = "Make sure stories/demo-story.json exists and is valid JSON.";
    $choices.innerHTML = "";
    console.error(err);
  }
}

$restartBtn.addEventListener("click", () => {
  clearState();
  renderNode("start");
});

$shareBtn.addEventListener("click", async () => {
  const url = new URL(location.href);
  url.searchParams.set("node", state.nodeId);

  try {
    await navigator.clipboard.writeText(url.toString());
    $shareBtn.textContent = "Copied!";
    setTimeout(() => ($shareBtn.textContent = "Copy Link"), 900);
  } catch {
    // fallback
    prompt("Copy this link:", url.toString());
  }
});

init();
