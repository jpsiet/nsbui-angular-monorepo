export const rawOrData = [
  { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '10th', marks: 88 },
  { state: 'California', university: 'Stanford', ethnicity: 'white', grade: '12th', marks: 91 },
  { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '10th', marks: 92 },
  { state: 'California', university: 'Stanford', ethnicity: 'asian', grade: '12th', marks: 95 },
];


//  expected out pt
// [
//   {
//     state: 'California',
//     university: 'Stanford',
//     white_10th: 88,
//     white_12th: 91,
//     asian_10th: 92,
//     asian_12th: 95
//   }
// ]

function transformToWideRows(data:any) {
  const grouped = new Map();

  data.forEach((row:any) => {
    const key = `${row.state}|${row.university}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        state: row.state,
        university: row.university,
      });
    }

    const flatRow = grouped.get(key);
    const colKey = `${row.ethnicity}_${row.grade}`; // e.g., white_10th
    flatRow[colKey] = row.marks;
  });

  return Array.from(grouped.values());
}

export const wideRowData = transformToWideRows(rawOrData);
console.log('rawOrData', wideRowData);
