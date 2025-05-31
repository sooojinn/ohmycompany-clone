export default function FundingSummary({
  per,
  investAmt,
  dday,
}: {
  per: number;
  investAmt: number;
  dday: number;
}) {
  return (
    <div className="mt-2.5 flex justify-between">
      <div>
        <span className="text-lg text-primary font-medium">{per}%</span>
        <span className="text-sm ml-2">{investAmt.toLocaleString()}원</span>
      </div>
      <div className="text-xs text-text-dday p-1 bg-gray-100 flex justify-center items-center">
        {dday}일 남음
      </div>
    </div>
  );
}
