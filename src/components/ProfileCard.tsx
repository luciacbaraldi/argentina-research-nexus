
export function ProfileCard({
  name,
  type,
  description,
  metrics,
}: {
  name: string;
  type: string;
  description: string;
  metrics: Record<string, any>;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-lg transition-all animate-fade-in cursor-pointer">
      <div className="flex gap-3 items-center mb-2">
        <span className="font-bold text-[#74ACDF] tracking-wide">{type}</span>
        <span className="ml-auto text-xs text-gray-400">{metrics.afiliación || ""}</span>
      </div>
      <div className="text-lg font-semibold mb-1">{name}</div>
      <div className="text-gray-500 text-sm mb-3">{description}</div>
      <dl className="grid grid-cols-2 gap-y-1 gap-x-4 text-sm text-gray-700">
        {Object.entries(metrics).map(([k, v]) => (
          k !== "afiliación" && (
            <div className="flex items-center" key={k}>
              <dt className="font-semibold capitalize">{k}:</dt>
              <dd className="ml-1">{v}</dd>
            </div>
          )
        ))}
      </dl>
    </div>
  );
}
