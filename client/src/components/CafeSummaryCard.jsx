export default function CafeSummaryCard({ title, content, color }) {
  console.log(content);

  return (
    <div className={`${color} rounded-lg shadow-sm p-6 border border-gray-200`}>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="text-3xl font-bold text-white">{content}</div>
    </div>
  );
}
