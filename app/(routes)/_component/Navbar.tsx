"use client";

import { cn } from "@/app/_lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="h-20 px-7 py-2 border-t border-neutral-300 justify-center items-center gap-5 inline-flex">
      {/* 홈 */}
      <Link href="/home">
        <div className="flex-col justify-center items-center gap-0.5 inline-flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon / Inbox">
              <path
                id="Vector 38"
                d="M2.76574 10.1878L11.7657 2.9878C11.9027 2.87823 12.0973 2.87823 12.2343 2.9878L21.2343 10.1878C21.3232 10.259 21.375 10.3667 21.375 10.4806V21C21.375 21.2071 21.2071 21.375 21 21.375H20H16.5C16.2929 21.375 16.125 21.2071 16.125 21V15C16.125 14.1025 15.3975 13.375 14.5 13.375H9.5C8.60254 13.375 7.875 14.1025 7.875 15V21C7.875 21.2071 7.70711 21.375 7.5 21.375H4.5H3C2.79289 21.375 2.625 21.2071 2.625 21V10.4806C2.625 10.3667 2.67678 10.259 2.76574 10.1878Z"
                fill={segment === "home" ? "#3BA5FF" : "#AAAEB1"}
                stroke={segment === "home" ? "#3BA5FF" : "#AAAEB1"}
                strokeWidth="1.25"
              />
            </g>
          </svg>
          <div
            className={cn(
              "w-12 text-center text-xs font-medium font-['Apple SD Gothic Neo'] leading-none tracking-tight",
              segment === "home" ? "text-sky-400" : "text-zinc-400",
            )}
          >
            홈
          </div>
        </div>
      </Link>
      {/* 피드 */}
      <Link href="/feed">
        <div className="flex-col justify-center items-center gap-0.5 inline-flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4Z"
              fill={segment === "feed" ? "#3BA5FF" : "#AAAEB1"}
            />
            <path
              d="M7 7H17"
              stroke="#E2E6E9"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17.0022H17"
              stroke="#E2E6E9"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 12H17"
              stroke="#E2E6E9"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div
            className={cn(
              "w-12 text-center text-xs font-medium font-['Apple SD Gothic Neo'] leading-none tracking-tight",
              segment === "feed" ? "text-sky-400" : "text-zinc-400",
            )}
          >
            피드
          </div>
        </div>
      </Link>
      {/* 새 게시물 */}
      <Link href="/posts/create">
        <div className="flex-col justify-center items-center gap-0.5 inline-flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4Z"
              fill={segment === "posts" ? "#3BA5FF" : "#AAAEB1"}
            />
            <path
              d="M12 8L12 16"
              stroke="#E2E6E9"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12H16"
              stroke="#E2E6E9"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className={cn(
              "w-12 text-center text-zinc-400 text-xs font-medium font-['Apple SD Gothic Neo'] leading-none tracking-tight",
              segment === "posts" ? "text-sky-400" : "text-zinc-400",
            )}
          >
            새 게시물
          </div>
        </div>
      </Link>
      {/* 메시지 */}
      <Link href="/message/list">
        <div className="flex-col justify-center items-center gap-0.5 inline-flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="3.51233"
              width="15"
              height="10"
              rx="5"
              fill={segment === "message" ? "#DCECF9" : "#E2E6E9"}
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 14.5123C7 11.7509 9.23858 9.51233 12 9.51233H17C19.7614 9.51233 22 11.7509 22 14.5123C22 15.9192 21.419 17.1903 20.4838 18.0988C20.7411 18.9357 21.2177 19.5997 21.6301 20.0908C21.7693 20.2565 21.6549 20.5064 21.4394 20.4864C20.231 20.3748 19.1609 19.9145 18.2832 19.3461C17.8737 19.4546 17.4436 19.5123 17 19.5123H12C9.23858 19.5123 7 17.2738 7 14.5123ZM15.5 14.5123C15.5 15.0646 15.0523 15.5123 14.5 15.5123C13.9477 15.5123 13.5 15.0646 13.5 14.5123C13.5 13.96 13.9477 13.5123 14.5 13.5123C15.0523 13.5123 15.5 13.96 15.5 14.5123ZM18.5 15.5123C19.0523 15.5123 19.5 15.0646 19.5 14.5123C19.5 13.96 19.0523 13.5123 18.5 13.5123C17.9477 13.5123 17.5 13.96 17.5 14.5123C17.5 15.0646 17.9477 15.5123 18.5 15.5123ZM11.5 14.5123C11.5 15.0646 11.0523 15.5123 10.5 15.5123C9.94772 15.5123 9.5 15.0646 9.5 14.5123C9.5 13.96 9.94772 13.5123 10.5 13.5123C11.0523 13.5123 11.5 13.96 11.5 14.5123Z"
              fill={segment === "message" ? "#3BA5FF" : "#AAAEB1"}
            />
          </svg>
          <div
            className={cn(
              "w-12 text-center text-xs font-medium font-['Apple SD Gothic Neo'] leading-none tracking-tight",
              segment === "message" ? "text-sky-400" : "text-zinc-400",
            )}
          >
            메세지
          </div>
        </div>
      </Link>
      {/* 마이페이지 */}
      <Link href="/my">
        <div className="flex-col justify-center items-center gap-0.5 inline-flex">
          {segment === "my" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5249 15.9395L10.1344 13.5324L11.963 12.2249L13.7916 13.5324L14.4012 15.9395C13.1452 17.4895 10.7808 17.4895 9.5249 15.9395Z"
                fill="#DCECF9"
              />
              <path
                d="M7.06327 9.21582C5.23475 4.40156 9.11366 1.61011 11.8743 2.16677C13.9702 1.7041 15.4403 2.19017 16.6916 3.79978C17.9429 5.40939 17.3011 8.01227 16.6916 9.21582C14.6325 9.29235 14.1733 8.07603 13.6827 7.41048C12.2384 9.81761 8.45964 9.58512 7.06327 9.21582Z"
                fill="#3BA5FF"
              />
              <path
                d="M11.9776 14.7048C8.17229 14.7048 7.61731 10.6929 7.81551 8.68694C9.0047 8.88753 11.7399 8.80729 13.1669 6.88159C13.7614 7.48337 15.1884 8.68694 16.1398 8.68694C16.3379 10.6929 15.7829 14.7048 11.9776 14.7048Z"
                fill="#DCECF9"
              />
              <path
                d="M7.15352 9.10704C7.40775 9.01074 7.68053 8.97211 7.95181 8.99399L8.42498 12.4906C8.1691 12.5826 7.89569 12.6165 7.62484 12.59C7.35398 12.5635 7.09256 12.4771 6.8598 12.3373C6.62703 12.1976 6.42882 12.0079 6.27975 11.7822C6.13067 11.5565 6.03452 11.3007 5.99834 11.0333C5.96217 10.766 5.98689 10.4941 6.07071 10.2374C6.15452 9.98084 6.29529 9.7461 6.48267 9.55049C6.67005 9.35487 6.89928 9.20334 7.15352 9.10704Z"
                fill="#DCECF9"
              />
              <path
                d="M16.8467 9.10704C16.5924 9.01074 16.3196 8.97211 16.0484 8.99399L15.5752 12.4906C15.8311 12.5826 16.1045 12.6165 16.3753 12.59C16.6462 12.5635 16.9076 12.4771 17.1404 12.3373C17.3731 12.1976 17.5714 12.0079 17.7204 11.7822C17.8695 11.5565 17.9657 11.3007 18.0018 11.0333C18.038 10.766 18.0133 10.4941 17.9295 10.2374C17.8457 9.98084 17.7049 9.7461 17.5175 9.55049C17.3301 9.35487 17.1009 9.20334 16.8467 9.10704Z"
                fill="#DCECF9"
              />
              <path
                d="M4 18.8496V20.486C4 21.3222 4.67157 22 5.5 22H12V16.9534C10.6326 16.9534 9.89824 16.0934 9.60956 15.6333C9.54186 15.5254 9.41036 15.4718 9.29124 15.5149L5.32533 16.9493C4.53038 17.2368 4 17.9973 4 18.8496Z"
                fill="#3BA5FF"
              />
              <path
                d="M20 18.8496V20.486C20 21.3222 19.3284 22 18.5 22L12 22V16.9534C13.3674 16.9534 14.1018 16.0934 14.3904 15.6333C14.4581 15.5254 14.5896 15.4718 14.7088 15.5149L18.6747 16.9493C19.4696 17.2368 20 17.9973 20 18.8496Z"
                fill="#3BA5FF"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5249 15.9394L10.1344 13.5323L11.963 12.2247L13.7916 13.5323L14.4012 15.9394C13.1452 17.4893 10.7808 17.4893 9.5249 15.9394Z"
                fill="#E2E6E9"
              />
              <path
                d="M7.06327 9.21582C5.23475 4.40156 9.11366 1.61011 11.8743 2.16677C13.9702 1.7041 15.4403 2.19017 16.6916 3.79978C17.9429 5.40939 17.3011 8.01227 16.6916 9.21582C14.6325 9.29235 14.1733 8.07603 13.6827 7.41048C12.2384 9.81761 8.45964 9.58512 7.06327 9.21582Z"
                fill="#AAAEB1"
              />
              <path
                d="M11.9776 14.7049C8.17229 14.7049 7.61731 10.693 7.81551 8.68706C9.0047 8.88765 11.7399 8.80742 13.1669 6.88171C13.7614 7.4835 15.1884 8.68706 16.1398 8.68706C16.3379 10.693 15.7829 14.7049 11.9776 14.7049Z"
                fill="#E2E6E9"
              />
              <path
                d="M7.15352 9.10692C7.40775 9.01061 7.68053 8.97198 7.95181 8.99387L8.42498 12.4905C8.1691 12.5824 7.89569 12.6164 7.62484 12.5899C7.35398 12.5633 7.09256 12.477 6.8598 12.3372C6.62703 12.1974 6.42882 12.0077 6.27975 11.7821C6.13067 11.5564 6.03452 11.3005 5.99834 11.0332C5.96217 10.7659 5.98689 10.4939 6.07071 10.2373C6.15452 9.98072 6.29529 9.74598 6.48267 9.55036C6.67005 9.35475 6.89928 9.20322 7.15352 9.10692Z"
                fill="#E2E6E9"
              />
              <path
                d="M16.8467 9.10692C16.5924 9.01061 16.3196 8.97198 16.0484 8.99387L15.5752 12.4905C15.8311 12.5824 16.1045 12.6164 16.3753 12.5899C16.6462 12.5633 16.9076 12.477 17.1404 12.3372C17.3731 12.1974 17.5714 12.0077 17.7204 11.7821C17.8695 11.5564 17.9657 11.3005 18.0018 11.0332C18.038 10.7659 18.0133 10.4939 17.9295 10.2373C17.8457 9.98072 17.7049 9.74598 17.5175 9.55036C17.3301 9.35475 17.1009 9.20322 16.8467 9.10692Z"
                fill="#E2E6E9"
              />
              <path
                d="M4 18.8496V20.486C4 21.3222 4.67157 22 5.5 22H12V16.9534C10.6326 16.9534 9.89824 16.0934 9.60956 15.6333C9.54186 15.5254 9.41036 15.4718 9.29124 15.5149L5.32533 16.9493C4.53038 17.2368 4 17.9973 4 18.8496Z"
                fill="#AAAEB1"
              />
              <path
                d="M20 18.8496V20.486C20 21.3222 19.3284 22 18.5 22L12 22V16.9534C13.3674 16.9534 14.1018 16.0934 14.3904 15.6333C14.4581 15.5254 14.5896 15.4718 14.7088 15.5149L18.6747 16.9493C19.4696 17.2368 20 17.9973 20 18.8496Z"
                fill="#AAAEB1"
              />
            </svg>
          )}
          <div
            className={cn(
              "text-center text-xs font-medium font-['Apple SD Gothic Neo'] leading-none tracking-tight",
              segment === "my" ? "text-sky-400" : "text-zinc-400",
            )}
          >
            마이페이지
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
