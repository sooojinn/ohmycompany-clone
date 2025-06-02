import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterNotice() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex gap-5 h-[1.5rem] overflow-hidden">
      <Link
        href="https://www.ohmycompany.com/community/notice"
        className="font-semibold"
      >
        공지사항
      </Link>
      <ul className="animate-floating">
        {data?.list?.map(({ title, noticeSeq }: any) => (
          <li key={noticeSeq}>
            <Link
              href={`https://www.ohmycompany.com/community/notice/${noticeSeq}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
