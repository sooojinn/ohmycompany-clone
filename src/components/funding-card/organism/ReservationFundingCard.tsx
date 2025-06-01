import Image from "next/image";
import CardPanelLayout from "../atom/CardPanelLayout";
import FundingTitle from "../atom/FundingTitle";
import BuilderProfile from "../mocule/BuilderProfile";
import Thumbnail from "../mocule/Thumbnail";

export default function ReservationFundingCard({
  memberImageUrl,
  memberName,
  thumbImageUrl,
  projectName,
  applyCnt,
}: {
  memberImageUrl: string;
  memberName: string;
  thumbImageUrl: string;
  projectName: string;
  applyCnt: number;
}) {
  return (
    <div>
      <BuilderProfile imageUrl={memberImageUrl}>{memberName}</BuilderProfile>
      <Thumbnail imageUrl={thumbImageUrl} hideHeartBtn />
      <CardPanelLayout>
        <FundingTitle>{projectName}</FundingTitle>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-primary bg-bg-primary rounded-full px-4 py-2">
            {applyCnt}명 신청
          </span>
          <div className="w-11 h-11 rounded-full border border-gray-300 flex justify-center items-center cursor-pointer">
            <Image
              width={18}
              height={18}
              src="https://www.ohmycompany.com/assets/ico/component.reservation.bell.svg"
              alt="알림"
            />
          </div>
        </div>
      </CardPanelLayout>
    </div>
  );
}
