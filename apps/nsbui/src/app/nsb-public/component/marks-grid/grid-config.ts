export const originalRowData = [
  {
    stream: 'Science',
    subject: 'Math',
    'Male-Korean': 85,
    'Male-Asian': 78,
    'Female-Korean': 90,
    'Female-Asian': 88
  },
  {
    stream: 'Commerce',
    subject: 'Accounts',
    'Female-Asian': 92
  }
];



export function transposeRowData(data: any[]) {
  const genders = ['Male', 'Female'];
  const nationalities = ['Korean', 'Asian'];

  // 🔍 Find all unique stream-subject keys
  const allKeys = new Set<string>();
  data.forEach(entry => {
    const keys = Object.keys(entry).filter(k => k.includes('-'));
    keys.forEach(k => allKeys.add(k));
  });

  const allStreamSubjects = Array.from(data.flatMap(d => `${d.stream}-${d.subject}`));

  const transposed: any[] = [];

  genders.forEach(gender => {
    nationalities.forEach(nationality => {
      const row: any = { gender, nationality };

      data.forEach(entry => {
        const key = `${entry.stream}-${entry.subject}`;
        const valueKey = `${gender}-${nationality}`;
        if (entry[valueKey] !== undefined) {
          row[key] = entry[valueKey];
        }
      });

      transposed.push(row);
    });
  });

  return transposed;
}

