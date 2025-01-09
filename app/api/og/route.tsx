/* eslint-disable react/no-unknown-property */

import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import { siteConfig } from "@/config/site";

export const runtime = "edge";

const bold = fetch(new URL("../../../fonts/bold.otf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export async function GET(req: NextRequest) {
  try {
    const fontBold = await bold;
    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");
    const type = searchParams.get("type") || "blog";

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start text-black"
          style={{
            backgroundColor: "hsl(270, 100%, 97%)",
          }}
        >
          <div tw="flex items-center">
            {type !== "feature" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            )}
            <p tw="ml-2 font-bold text-2xl">
              {type === "feature"
                ? "Acedit Feature"
                : type === "home"
                ? "Acedit"
                : "Acedit Blog"}
            </p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            {type === "blog" && (
              <div tw="flex text-xl uppercase font-bold tracking-tight font-normal mb-4">
                BLOG POST
              </div>
            )}
            <div
              tw="flex text-[80px] font-bold text-[50px]"
              style={{
                color: "#5600D1",
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{"acedit.ai"}</div>
          </div>
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 377.86 376.023"
          >
            <path
              strokeWidth="11.64px"
              fill="#01042b"
              stroke="#fff"
              strokeMiterlimit="10"
              d="M82.69,5.82h211.91c42.45,0,76.87,33.8,76.87,75.49v211.91c0,41.69-34.41,75.49-76.87,75.49H82.69c-42.45,0-76.87-33.8-76.87-75.49V81.31C5.82,39.62,40.23,5.82,82.69,5.82Z"
            ></path>
            <path
              fill="#fff"
              strokeWidth="0"
              d="M154.24,310.26h-84.08c-2.04,0-4.09-.44-5.87-1.43-8.52-4.8-11.02-14.12-7.21-21.56l36.77-71.7h-.03l4.61-9.03c.95-1.87,2.35-3.52,4.16-4.61,9.34-5.67,19.81-2.19,23.98,5.95l40.71,79.38c3.81,7.45,1.31,16.76-7.21,21.56-1.77,1-3.83,1.43-5.87,1.43h.02ZM107.74,212.11l-.28.55-40.71,79.38c-1.21,2.36-.24,4.36.23,5.12.48.75,1.85,2.49,4.53,2.49h81.39c2.68,0,4.06-1.74,4.53-2.49.48-.75,1.44-2.75.23-5.12l-40.71-79.38c-.93-1.82-2.71-2.9-4.76-2.9-1.84,0-3.45.87-4.44,2.36h-.01Z"
            ></path>
            <path
              fill="#fff"
              strokeWidth="0"
              d="M300.79,169.33h-94.7c-7.4,0-13.4-5.9-13.4-13.16v-65.41c0-7.26,6-13.16,13.4-13.16h94.7c7.4,0,13.4,5.9,13.4,13.16v65.41c0,7.26-6,13.16-13.4,13.16ZM206.08,88.19c-1.44,0-2.6,1.14-2.6,2.55v65.41c0,1.41,1.16,2.55,2.6,2.55h94.7c1.44,0,2.6-1.14,2.6-2.55v-65.41c0-1.41-1.16-2.55-2.6-2.55h-94.7Z"
            ></path>
            <path
              fill="#3c91e6"
              strokeWidth="0"
              d="M284.1,203.32h-53.75c-4.72,0-9.11,2.49-11.65,6.63l-10.28,16.67c-2.99,4.85-2.91,11.08.21,15.83l37.02,56.61c5.47,8.37,17.33,8.4,22.85.07l37.31-56.41c3.14-4.75,3.26-10.99.28-15.86l-10.32-16.88c-2.54-4.16-6.94-6.67-11.68-6.67h.01Z"
            ></path>
            <path
              strokeWidth="1.82px"
              stroke="#fff"
              strokeMiterlimit="10"
              d="M257.1,309.47h-.05c-6-.01-11.58-3.07-14.92-8.18l-37.02-56.61c-3.98-6.08-4.08-14-.27-20.18l10.28-16.67c3.33-5.38,9.02-8.61,15.23-8.61h53.75c6.25,0,11.96,3.24,15.28,8.67l10.32,16.88c3.79,6.22,3.65,14.14-.36,20.21l-37.33,56.41c-3.36,5.08-8.93,8.11-14.91,8.11v-.02ZM230.35,207.43c-3.27,0-6.28,1.73-8.08,4.64l-10.28,16.67c-2.17,3.52-2.11,8.04.15,11.49l37.02,56.61c1.83,2.79,4.71,4.39,7.91,4.41h.02c3.19,0,6.05-1.58,7.89-4.36l37.33-56.41c2.28-3.45,2.36-7.96.2-11.5l-10.32-16.88c-1.79-2.93-4.81-4.68-8.09-4.68h-53.75Z"
            ></path>
            <ellipse
              fill="#3c91e6"
              strokeWidth="0"
              cx="110.19"
              cy="123.37"
              rx="41.22"
              ry="40.48"
            ></ellipse>
            <path
              fill="#fff"
              strokeWidth="0"
              d="M110.19,169.16c-25.71,0-46.62-20.54-46.62-45.79s20.91-45.79,46.62-45.79,46.62,20.54,46.62,45.79-20.91,45.79-46.62,45.79ZM110.19,88.19c-19.75,0-35.82,15.78-35.82,35.18s16.07,35.18,35.82,35.18,35.82-15.78,35.82-35.18-16.07-35.18-35.82-35.18Z"
            ></path>
          </svg>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
