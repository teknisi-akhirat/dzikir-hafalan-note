// Deterministic Gregorian -> Hijri (Tabular/Kuwaiti algorithm).
// Browser-independent; does not rely on Intl calendar support.

const HIJRI_MONTHS_ID = [
  "Muharram",
  "Safar",
  "Rabiul Awal",
  "Rabiul Akhir",
  "Jumadil Awal",
  "Jumadil Akhir",
  "Rajab",
  "Syaban",
  "Ramadhan",
  "Syawal",
  "Dzulqaidah",
  "Dzulhijjah",
];

export function gregorianToHijri(date: Date): { day: number; month: number; year: number } {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let jd: number;
  if (year > 1582 || (year === 1582 && month > 10) || (year === 1582 && month === 10 && day > 14)) {
    jd =
      Math.floor((1461 * (year + 4800 + Math.floor((month - 14) / 12))) / 4) +
      Math.floor((367 * (month - 2 - 12 * Math.floor((month - 14) / 12))) / 12) -
      Math.floor((3 * Math.floor((year + 4900 + Math.floor((month - 14) / 12)) / 100)) / 4) +
      day -
      32075;
  } else {
    jd = 367 * year - Math.floor((7 * (year + 5001 + Math.floor((month - 9) / 7))) / 4) +
      Math.floor((275 * month) / 9) + day + 1729777;
  }

  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 =
    l2 -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const hMonth = Math.floor((24 * l3) / 709);
  const hDay = l3 - Math.floor((709 * hMonth) / 24);
  const hYear = 30 * n + j - 30;

  return { day: hDay, month: hMonth, year: hYear };
}

export function formatHijriID(date: Date): string {
  const { day, month, year } = gregorianToHijri(date);
  const name = HIJRI_MONTHS_ID[month - 1] ?? "";
  return `${day} ${name} ${year} H`;
}
