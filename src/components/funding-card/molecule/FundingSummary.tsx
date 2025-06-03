export default function FundingSummary({
  per,
  amount,
  dday,
  className,
}: {
  per: number;
  amount: number;
  dday: number;
  className?: string;
}) {
  return (
    <div className={`mt-2.5 flex justify-between ${className}`}>
      <div>
        <span className="text-lg text-primary font-medium">{per}%</span>
        {amount && (
          <span className="text-sm ml-2">{amount.toLocaleString()}원</span>
        )}
      </div>
      <div className="text-xs text-text-dday p-1 bg-gray-100 flex justify-center items-center">
        {dday}일 남음
      </div>
    </div>
  );
}
