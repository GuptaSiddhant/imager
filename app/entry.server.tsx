import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

function setupVercel() {
  if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
      `${process.env.PWD}/node_modules/canvas/build/Release:`
    )
  ) {
    process.env.LD_LIBRARY_PATH = `${
      process.env.PWD
    }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ""}`;
  }
}

// setupVercel();

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
