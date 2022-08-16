import type { LoaderFunction } from "@remix-run/server-runtime";
import { createElement } from "react";
import { renderCanvas } from "recanvas";
import SocialImage from "~/templates/SocialImage";

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams, origin } = new URL(request.url);

  const title = searchParams.get("title");
  if (!title) return new Response("title is required", { status: 400 });

  const url = searchParams.get("url") || origin;
  const caption = searchParams.get("caption") || undefined;
  const subtitle = searchParams.get("subtitle") || undefined;
  const imageUrl = searchParams.get("imageUrl") || undefined;
  const textColor = searchParams.get("textColor") || "#FFFFFF";
  const backgroundColor = searchParams.get("backgroundColor") || "#171717";
  const borderColor = searchParams.get("borderColor") || "#000000";

  const width = 800;
  const height = width * (9 / 16);

  const element = createElement(SocialImage, {
    width,
    height,
    title,
    url,
    caption,
    subtitle,
    imageUrl,
    textColor,
    backgroundColor,
    borderColor,
  });

  const canvas = renderCanvas(
    element,
    {
      width,
      height,
    },
    {}
  );

  return new Response(canvas.toBuffer(), {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "s-maxage=31536000, stale-while-revalidate",
    },
  });
};

export function CatchBoundary() {}
