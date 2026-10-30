// Numbers as IELTS Listening says them (British English), plus a round generator for the
// "numbers & dates" listening trainer. Pure: the app speaks `say` with TTS and checks typed answers.

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function under100(n) {
  return n < 20 ? ONES[n] : TENS[Math.floor(n / 10)] + (n % 10 ? `-${ONES[n % 10]}` : '');
}
function under1000(n) {
  const h = Math.floor(n / 100);
  const r = n % 100;
  return [h ? `${ONES[h]} hundred` : '', r ? under100(r) : ''].filter(Boolean).join(' and ');
}

/** 0 … 999 999 in British style: 1250 → "one thousand, two hundred and fifty". */
export function numberWords(n) {
  if (n === 0) return 'zero';
  const th = Math.floor(n / 1000);
  const r = n % 1000;
  if (!th) return under1000(r);
  return `${under1000(th)} thousand${r ? (r < 100 ? ' and ' : ', ') + under1000(r) : ''}`;
}

export function ordinalWords(n) {
  const special = { one: 'first', two: 'second', three: 'third', five: 'fifth', eight: 'eighth', nine: 'ninth', twelve: 'twelfth' };
  const w = numberWords(n);
  const m = w.match(/(\w+)$/);
  const last = m[1];
  const ord = special[last] ?? (last.endsWith('y') ? `${last.slice(0, -1)}ieth` : `${last}th`);
  return w.slice(0, m.index) + ord;
}

/** 1998 → "nineteen ninety-eight", 2005 → "two thousand and five", 2024 → "twenty twenty-four". */
export function yearWords(y) {
  if (y >= 2000 && y < 2010) return y === 2000 ? 'two thousand' : `two thousand and ${ONES[y - 2000]}`;
  const hi = Math.floor(y / 100);
  const lo = y % 100;
  return `${under100(hi)} ${lo === 0 ? 'hundred' : lo < 10 ? `oh ${ONES[lo]}` : under100(lo)}`;
}

/** Digits read one by one, "oh" for 0 and "double" for a repeated digit: 0791 446 → "oh seven nine one, double four six". */
export function phoneWords(digits) {
  const say = (d) => (d === '0' ? 'oh' : ONES[Number(d)]);
  const groups = digits.match(/.{1,4}/g) ?? [];
  return groups.map((g) => {
    const out = [];
    for (let i = 0; i < g.length; i++) {
      if (g[i] === g[i + 1]) { out.push(`double ${say(g[i])}`); i++; } else out.push(say(g[i]));
    }
    return out.join(' ');
  }).join(', ');
}

/** £12.50 → "twelve pounds fifty"; £8 → "eight pounds". */
export function priceWords(pounds, pence = 0) {
  return `${numberWords(pounds)} ${pounds === 1 ? 'pound' : 'pounds'}${pence ? ` ${under100(pence)}` : ''}`;
}

/** Normalise a typed answer: lower case, no spaces/commas/£, "21st" → "21". */
export const normAnswer = (s) => String(s).toLowerCase().replace(/[£$,\s]/g, '').replace(/(\d)(st|nd|rd|th)/g, '$1');

/**
 * One listening round. kinds: number, teen-ty, year, date, price, phone.
 * Returns { kind, say, hint, shown, accept: [normalised answers] }.
 */
export function makeRound(kind, r) {
  const int = (a, b) => a + Math.floor(r() * (b - a + 1));
  switch (kind) {
    case 'teen-ty': {
      const t = int(3, 9);
      const n = r() < 0.5 ? 10 + t : t * 10;
      return { kind, say: numberWords(n), hint: 'Son (13 yoki 30?)', shown: String(n), accept: [String(n)] };
    }
    case 'year': {
      const y = r() < 0.3 ? int(2000, 2009) : int(1950, 2030);
      return { kind, say: `In ${yearWords(y)}`, hint: 'Yil', shown: String(y), accept: [String(y)] };
    }
    case 'date': {
      const d = int(1, 28);
      const m = int(0, 11);
      const mon = MONTHS[m];
      return { kind, say: `On the ${ordinalWords(d)} of ${mon}`, hint: 'Sana (masalan: 21 March)', shown: `${d} ${mon}`,
        accept: [`${d}${mon}`, `${mon}${d}`, `${d}${mon.slice(0, 3)}`, `${d}.${String(m + 1).padStart(2, '0')}`, `${d}/${m + 1}`].map(normAnswer) };
    }
    case 'price': {
      const p = int(2, 99);
      const c = r() < 0.6 ? int(1, 19) * 5 : 0;
      const shown = c ? `${p}.${String(c).padStart(2, '0')}` : String(p);
      return { kind, say: `It costs ${priceWords(p, c)}`, hint: 'Narx, £ (masalan: 12.50)', shown: `£${shown}`, accept: [shown, ...(c ? [] : [`${p}.00`])].map(normAnswer) };
    }
    case 'phone': {
      let digits = '07';
      while (digits.length < 10) digits += String(int(0, 9));
      if (r() < 0.6) { const i = int(3, 8); digits = digits.slice(0, i) + digits[i - 1] + digits.slice(i + 1); }
      return { kind, say: `My number is ${phoneWords(digits)}`, hint: 'Telefon raqami', shown: digits, accept: [digits] };
    }
    default: {
      const n = r() < 0.5 ? int(100, 999) : int(1000, 99999);
      return { kind: 'number', say: numberWords(n), hint: 'Son (raqam bilan)', shown: n.toLocaleString('en-GB'), accept: [String(n)] };
    }
  }
}

export const ROUND_KINDS = ['teen-ty', 'number', 'year', 'date', 'price', 'phone'];
