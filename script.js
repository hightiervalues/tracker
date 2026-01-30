:root{
  --bg: #0b0e14;
  --card: rgba(255,255,255,.04);
  --border: rgba(255,255,255,.10);
  --text: rgba(255,255,255,.92);
  --muted: rgba(255,255,255,.68);
  --shadow: 0 16px 55px rgba(0,0,0,.45);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  color: var(--text);
  background:
    radial-gradient(1000px 600px at 20% 10%, rgba(99,102,241,.18), transparent 60%),
    radial-gradient(800px 600px at 80% 40%, rgba(16,185,129,.10), transparent 55%),
    var(--bg);
}

.wrap{ max-width: 1100px; margin: 0 auto; padding: 26px 18px 40px; }

.top{
  display:flex; justify-content:space-between; align-items:flex-end;
  gap:14px; margin-bottom: 16px; flex-wrap:wrap;
}
h1{ margin:0; font-size:28px; }
.sub{ margin:6px 0 0; color: var(--muted); }

.controls{ display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end; }

.grid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 14px;
}
@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
}

.card{
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  box-shadow: var(--shadow);
}

.row{ display:flex; align-items:center; justify-content:space-between; gap:12px; }
.h2{ margin:0; font-size:18px; }

.pill{
  border:1px solid var(--border);
  border-radius:999px;
  padding:6px 10px;
  font-size:12px;
  color: var(--muted);
  background: rgba(255,255,255,.03);
}

.muted{ color: var(--muted); }
.tiny{ font-size:12px; }

.divider{ height:1px; background: var(--border); margin: 14px 0; }

.list{ display:flex; flex-direction:column; gap:10px; margin-top:12px; }

.item{
  display:flex; align-items:center; justify-content:space-between; gap:10px;
  border:1px solid var(--border);
  border-radius: 14px;
  padding: 10px 10px;
  background: rgba(255,255,255,.03);
}

.left{ display:flex; align-items:center; gap:10px; min-width:0; }
.checkbox{
  width: 18px; height: 18px; border-radius:6px;
  border:1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.03);
  display:grid; place-items:center;
  cursor:pointer;
}
.checkbox.on{
  background: rgba(16,185,129,.18);
  border-color: rgba(16,185,129,.45);
}
.checkmark{ font-size: 12px; opacity:.9; }

.name{
  font-weight: 600;
  cursor: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 420px;
}
.meta{ display:flex; gap:10px; align-items:center; flex-wrap:wrap; justify-content:flex-end; }
.badge{
  font-size:12px; color: var(--muted);
  border:1px solid var(--border);
  border-radius:999px;
  padding: 5px 8px;
  background: rgba(255,255,255,.02);
}

.kebab{
  border:1px solid var(--border);
  background: rgba(255,255,255,.04);
  color: var(--text);
  border-radius: 12px;
  padding: 8px 10px;
  cursor:pointer;
}

.btn{
  border:1px solid var(--border);
  background: rgba(255,255,255,.06);
  color: var(--text);
  border-radius: 14px;
  padding: 10px 12px;
  cursor:pointer;
}
.btn:hover{ background: rgba(255,255,255,.10); }
.btn.primary{
  background: rgba(99,102,241,.18);
  border-color: rgba(99,102,241,.35);
}
.btn.primary:hover{ background: rgba(99,102,241,.25); }
.btn.secondary{ border-radius: 12px; }
.btn.danger{
  background: rgba(239,68,68,.14);
  border-color: rgba(239,68,68,.35);
}
.btn.danger:hover{ background: rgba(239,68,68,.22); }

.add{ display:flex; gap:10px; }
.input{
  flex:1;
  border:1px solid var(--border);
  border-radius: 14px;
  padding: 10px 12px;
  background: rgba(0,0,0,.25);
  color: var(--text);
  outline: none;
}
.input:focus{ border-color: rgba(99,102,241,.45); }

.week{
  margin-top: 12px;
  overflow:auto;
  border:1px solid var(--border);
  border-radius: 14px;
}

table{
  width:100%;
  border-collapse: collapse;
  min-width: 520px;
}
th, td{
  padding: 10px 10px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  text-align: left;
  font-size: 13px;
}
th{ color: var(--muted); font-weight: 600; background: rgba(255,255,255,.03); position: sticky; top: 0; }
td.center{ text-align:center; }

.dot{
  display:inline-block;
  width: 10px; height: 10px;
  border-radius: 999px;
  border:1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.04);
}
.dot.on{
  background: rgba(16,185,129,.22);
  border-color: rgba(16,185,129,.45);
}

.bottom{ margin-top: 14px; text-align:center; font-size: 13px; }
