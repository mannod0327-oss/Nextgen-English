// Schoolhouse Test-style paper output: printable test + answer key / bubble sheet.

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const L = (i) => String.fromCharCode(65 + i);

function questionHtml(q, n) {
  const head = `<p><b>${n}.</b> ${esc(q.prompt)}</p>`;
  switch (q.type) {
    case 'single':
    case 'multiple':
      return head + `<ol type="A">${q.options.map((o) => `<li>${esc(o)}</li>`).join('')}</ol>`;
    case 'fill':
      return head + '<p>__________________________</p>';
    case 'order':
      // printed in alphabetical order so the paper doesn't give away the answer
      return head + `<p>${[...q.items].sort().map(esc).join(' &nbsp;/&nbsp; ')}</p><p>__________________________</p>`;
    case 'match': {
      const rights = q.pairs.map((p) => p[1]).sort();
      return head + `<table><tr><td><ol>${q.pairs.map((p) => `<li>${esc(p[0])}</li>`).join('')}</ol></td>` +
        `<td><ol type="a">${rights.map((r) => `<li>${esc(r)}</li>`).join('')}</ol></td></tr></table>`;
    }
    default:
      return head;
  }
}

export function answerKey(q) {
  switch (q.type) {
    case 'single': return L(q.answer);
    case 'multiple': return q.answer.map(L).join(', ');
    case 'fill': return [].concat(q.answer).join(' / ');
    case 'order': return q.items.join(' ');
    case 'match': return q.pairs.map((p) => `${p[0]} → ${p[1]}`).join('; ');
    default: return '';
  }
}

export function renderPrintable(exam, { withKey = true, studentFields = true } = {}) {
  const variant = exam.variantSeed ? ` — variant ${exam.variantSeed}` : '';
  const body = exam.questions.map((q, i) => `<section class="q">${questionHtml(q, i + 1)}</section>`).join('');
  const key = withKey
    ? `<section class="key"><h2>Answer key${esc(variant)}</h2><ol>${exam.questions
        .map((q) => `<li>${esc(answerKey(q))}</li>`).join('')}</ol></section>`
    : '';
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(exam.title)}</title>
<style>body{font:14px/1.5 Georgia,serif;max-width:46rem;margin:2rem auto;padding:0 1rem}
.q{break-inside:avoid;margin-bottom:1rem}.key{break-before:page}td{vertical-align:top;padding-right:3rem}
.fields{display:flex;gap:2rem;border-bottom:1px solid #000;padding-bottom:.5rem}</style></head><body>
<h1>${esc(exam.title)}${esc(variant)}</h1>
${studentFields ? '<div class="fields"><span>Name: ____________________</span><span>Class: ______</span><span>Date: ________</span></div>' : ''}
${body}${key}</body></html>`;
}
