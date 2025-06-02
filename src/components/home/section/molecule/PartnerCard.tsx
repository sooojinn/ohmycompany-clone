export default function PartnerCard({
  thumbImageUrl,
  contestName,
}: {
  thumbImageUrl: string;
  contestName: string;
}) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${thumbImageUrl})` }}
        className="w-full aspect-[196/119] bg-center bg-cover rounded-lg relative cursor-pointer"
      >
        <span className="bg-primary text-white text-xs p-1.5 rounded-sm absolute top-2 right-2 leading-[1]">
          진행중
        </span>
      </div>
      <p className="font-medium mt-4 cursor-pointer">{contestName}</p>
    </div>
  );
}
