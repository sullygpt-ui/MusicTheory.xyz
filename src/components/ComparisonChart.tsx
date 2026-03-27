'use client';

interface ComparisonData {
  columns: string[];
  recommendedIndex: number;
  rows: {
    feature: string;
    values: string[];
    isPrice?: boolean;
  }[];
}

function CellContent({ value, isRecommended, isPrice }: { value: string; isRecommended: boolean; isPrice: boolean }) {
  // Check/X rendering
  if (value === '✓') return <span className="text-purple-400 text-xl font-bold">✓</span>;
  if (value === '✗') return <span className="text-red-400 text-xl font-bold">✗</span>;

  // Starts with ✓ or ✗
  if (value.startsWith('✓')) return <span><span className="text-purple-400 font-bold">✓</span><span className="text-gray-300 text-sm"> {value.slice(1).trim()}</span></span>;
  if (value.startsWith('✗')) return <span><span className="text-red-400 font-bold">✗</span><span className="text-gray-400 text-sm"> {value.slice(1).trim()}</span></span>;

  if (isPrice && isRecommended) {
    return <span className="font-bold gradient-text">{value}</span>;
  }

  return <span className={isPrice ? 'font-semibold text-gray-200' : 'text-gray-300 text-sm'}>{value}</span>;
}

export default function ComparisonChart({ columns, recommendedIndex, rows }: ComparisonData) {
  return (
    <div className="my-10">
      {/* Desktop: scrollable table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <table className="w-full border-collapse min-w-[640px]">
          <thead>
            <tr>
              <th className="text-left p-4 text-gray-400 text-sm font-medium border-b border-white/10 w-[180px]">Feature</th>
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`p-4 text-center text-sm font-bold border-b border-white/10 ${
                    i === recommendedIndex
                      ? 'bg-purple-500/[0.08] text-purple-400 border-x border-purple-500/20'
                      : 'text-gray-200'
                  }`}
                >
                  {i === recommendedIndex && (
                    <span className="block text-[10px] uppercase tracking-widest text-purple-500 mb-1">★ Our Pick</span>
                  )}
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.feature} className={ri % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                <td className="p-4 text-gray-400 text-sm font-medium border-b border-white/5">{row.feature}</td>
                {row.values.map((val, ci) => (
                  <td
                    key={ci}
                    className={`p-4 text-center border-b border-white/5 ${
                      ci === recommendedIndex ? 'bg-purple-500/[0.05] border-x border-purple-500/10' : ''
                    }`}
                  >
                    <CellContent value={val} isRecommended={ci === recommendedIndex} isPrice={!!row.isPrice} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
