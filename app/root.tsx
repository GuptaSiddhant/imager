import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Imager",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ padding: 0, margin: 0, fontFamily: "sans-serif" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1>Imager</h1>
          <p>Generate images with canvas on server</p>
        </header>
        <Outlet />
        <footer style={{ textAlign: "center", marginTop: "2rem" }}>
          © {new Date().getFullYear()} GuptaSiddhant |{" "}
          <a href="https://github.com/GuptaSiddhant/imager">GitHub</a>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
