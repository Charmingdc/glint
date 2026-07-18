import type { SectionId } from "../App";
import { Code, InlineCode } from "./Code";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-sm leading-7 text-foreground/60">
        {children}
      </div>
    </section>
  );
}

function Param({
  name,
  type,
  defaultVal,
  required,
  description,
}: {
  name: string;
  type: string;
  defaultVal?: string;
  required?: boolean;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] p-4">
      <div className="flex flex-wrap items-center gap-2 mb-1.5">
        <span className="font-mono text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="rounded-md bg-white/6 px-1.5 py-0.5 font-mono text-xs text-foreground/50">
          {type}
        </span>
        {required ? (
          <span className="rounded-md bg-red-500/10 px-1.5 py-0.5 text-xs text-red-400">
            required
          </span>
        ) : (
          <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-xs text-foreground/40">
            default: {defaultVal}
          </span>
        )}
      </div>
      <p className="text-sm text-foreground/50">{description}</p>
    </div>
  );
}

export function DocsContent({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  return (
    <main className="min-w-0 flex-1 py-10 pl-0 md:pl-10">
      {active === "introduction" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              Introduction
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              What is Glint?
            </h1>
          </div>
          <Section title="Overview">
            <p>
              Glint is a zero-dependency, framework-agnostic library that
              generates unique SVG avatars from any seed string. The output is
              fully deterministic — the same seed always produces the same
              avatar, across environments, runtimes, and deploys.
            </p>
            <p>
              There is no randomness, no storage, no network requests. Just a
              seed in, an SVG string out.
            </p>
          </Section>
          <Section title="How it works">
            <p>
              Glint hashes your seed string into two numeric values. These
              values drive every visual decision: which gradient palette to use,
              the position and radius of each gradient stop, whether noise and
              blur layers are applied, and how initials are sized and placed.
            </p>
            <p>
              The gradient is composed of three overlapping radial gradients,
              each positioned and sized independently from the hash. The result
              is a rich, layered background that looks hand-crafted despite
              being fully algorithmic.
            </p>
          </Section>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => onNavigate("installation")}
              className="rounded-3xl bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Get started →
            </button>
          </div>
        </>
      )}

      {active === "installation" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              Installation
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Install Glint
            </h1>
          </div>
          <Section title="Package manager">
            <p>Install the core package from npm:</p>
            <Code>{`npm install @glint/core`}</Code>
            <Code>{`pnpm add @glint/core`}</Code>
            <Code>{`yarn add @glint/core`}</Code>
          </Section>
          <Section title="Requirements">
            <p>
              Glint has no runtime dependencies and works in any JavaScript
              environment: Node.js, browsers via a bundler (Vite, webpack,
              esbuild), Deno, and edge runtimes.
            </p>
            <p>
              TypeScript types are bundled — no <InlineCode>@types</InlineCode>{" "}
              package needed.
            </p>
          </Section>
        </>
      )}

      {active === "usage" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              Usage
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Basic usage
            </h1>
          </div>
          <Section title="Generate an avatar">
            <p>
              Import <InlineCode>generateAvatar</InlineCode> and pass a seed
              string. You get back an SVG string you can use anywhere.
            </p>
            <Code>{`import { generateAvatar } from "@glint/core";

const svg = generateAvatar({ seed: "jane.doe" });

console.log(svg); // <svg xmlns="http://www.w3.org/2000/svg" ...>`}</Code>
          </Section>
          <Section title="Use as an image src">
            <p>
              Convert the SVG string to a base64 data URI for use in an{" "}
              <InlineCode>{"<img>"}</InlineCode> tag or CSS:
            </p>
            <Code>{`const svg = generateAvatar({ seed: "jane.doe", size: 128 });
const src = \`data:image/svg+xml;base64,\${btoa(svg)}\`;

// React
<img src={src} width={128} height={128} alt="Avatar" />`}</Code>
          </Section>
          <Section title="With initials">
            <p>
              Pass a <InlineCode>name</InlineCode> to render initials over the
              gradient. Glint extracts up to two characters automatically.
            </p>
            <Code>{`const svg = generateAvatar({
  seed: "jane.doe",
  name: "Jane Doe",
  size: 128,
  rounded: true,
});`}</Code>
          </Section>
          <Section title="React example">
            <Code>{`import { generateAvatar } from "@glint/core";
import { useMemo } from "react";

function Avatar({ seed, name }: { seed: string; name?: string }) {
  const src = useMemo(() => {
    const svg = generateAvatar({ seed, name, size: 64, rounded: true });
    return \`data:image/svg+xml;base64,\${btoa(svg)}\`;
  }, [seed, name]);

  return <img src={src} width={64} height={64} alt={name ?? seed} />;
}`}</Code>
          </Section>
        </>
      )}

      {active === "api" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              API Reference
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              generateAvatar
            </h1>
          </div>
          <Section title="Signature">
            <Code>{`function generateAvatar(options: AvatarOptions): string`}</Code>
            <p>
              Returns a raw SVG string. All options except{" "}
              <InlineCode>seed</InlineCode> are optional.
            </p>
          </Section>
          <Section title="Options">
            <Param
              name="seed"
              type="string"
              required
              description="The seed that drives all visual output. The same seed always produces the same avatar. Use any string — user ID, email, username, etc."
            />
            <Param
              name="name"
              type="string"
              defaultVal="undefined"
              description="When provided, Glint extracts initials and renders them centered over the gradient. Single word → first two chars. Multiple words → first char of first and last word."
            />
            <Param
              name="size"
              type="number"
              defaultVal="128"
              description="Width and height of the output SVG in pixels. The SVG viewBox scales with this value so it renders correctly at any display size."
            />
            <Param
              name="rounded"
              type="boolean"
              defaultVal="false"
              description="Clips the avatar to a circle when true. Uses a clipPath internally so the shape is crisp at any size."
            />
            <Param
              name="font"
              type="string"
              defaultVal='"Inter"'
              description="Font family used to render the initials. The font must be available in the rendering environment. Defaults to Inter."
            />
            <Param
              name="noise"
              type="boolean"
              defaultVal="true"
              description="Adds a subtle feTurbulence noise texture blended over the gradient. Gives the avatar an organic, tactile quality."
            />
            <Param
              name="blur"
              type="boolean"
              defaultVal="true"
              description="Applies a soft feGaussianBlur layer for depth. Works in combination with noise to produce a frosted, layered feel."
            />
          </Section>
        </>
      )}

      {active === "initials" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              Initials
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Initials extraction
            </h1>
          </div>
          <Section title="How initials are derived">
            <p>
              When you pass a <InlineCode>name</InlineCode>, Glint extracts up
              to two characters to render as initials. The logic is:
            </p>
            <div className="rounded-xl border border-white/[0.07] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Input
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Output
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Rule
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Jane Doe", "JD", "First char of first + last word"],
                    ["Adebayo", "AD", "First two chars of single word"],
                    [
                      "Mary Jane Watson",
                      "MW",
                      "First char of first + last word",
                    ],
                    ["X", "X", "Single char — used as-is"],
                  ].map(([input, output, rule]) => (
                    <tr
                      key={input}
                      className="border-b border-white/4 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-foreground/70">
                        {input}
                      </td>
                      <td className="px-4 py-3 font-mono text-foreground">
                        {output}
                      </td>
                      <td className="px-4 py-3 text-foreground/40">{rule}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
          <Section title="Styling">
            <p>
              Initials are rendered as an SVG{" "}
              <InlineCode>{"<text>"}</InlineCode> element, centered using{" "}
              <InlineCode>text-anchor="middle"</InlineCode> and{" "}
              <InlineCode>dominant-baseline="central"</InlineCode>. Font size is
              automatically scaled to 40% of the avatar size so they remain
              proportional at any resolution.
            </p>
          </Section>
        </>
      )}

      {active === "http-api" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              HTTP API
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              HTTP API
            </h1>
          </div>
          <Section title="Overview">
            <p>
              Glint ships a Vercel serverless function at{" "}
              <InlineCode>/api/avatar</InlineCode> that exposes the full{" "}
              <InlineCode>generateAvatar</InlineCode> API over HTTP. Useful for
              server-rendered apps, emails, or any environment where you can't
              run JavaScript.
            </p>
          </Section>
          <Section title="Base Url">
            <Code>{`https://gint-dev.vercel.app`}</Code>
          </Section>

          <Section title="Endpoint">
            <Code>{`GET baseUrl/api/avatar?seed=<seed>[&options]`}</Code>
          </Section>
          <Section title="Parameters">
            <div className="rounded-xl border border-white/[0.07] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.07]">
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Param
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground/50">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["seed", "string (required)", "Avatar seed"],
                    ["name", "string", "Name for initials extraction"],
                    ["size", "number", "Output size in px (default: 128)"],
                    ["rounded", "true | false", "Circle clip (default: false)"],
                    ["font", "string", "Initials font family"],
                    ["noise", "true | false", "Noise texture (default: true)"],
                    ["blur", "true | false", "Blur layer (default: true)"],
                    ["png", "true | false", "Return PNG instead of SVG"],
                  ].map(([param, type, desc]) => (
                    <tr
                      key={param}
                      className="border-b border-white/4 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-foreground/80">
                        {param}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-foreground/50">
                        {type}
                      </td>
                      <td className="px-4 py-3 text-foreground/40">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
          <Section title="Examples">
            <Code>{`# SVG (default)
GET /api/avatar?seed=jane.doe

# PNG
GET /api/avatar?seed=jane.doe&png=true

# Rounded PNG at 256px with initials
GET /api/avatar?seed=jane.doe&name=Jane+Doe&size=256&rounded=true&png=true`}</Code>
            <p>
              Responses include{" "}
              <InlineCode>
                Cache-Control: public, max-age=31536000, immutable
              </InlineCode>{" "}
              — avatars are safe to cache indefinitely since output is
              deterministic.
            </p>
          </Section>
        </>
      )}

      {active === "typescript" && (
        <>
          <div className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
              TypeScript
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              TypeScript
            </h1>
          </div>
          <Section title="Types">
            <p>
              Glint is written in TypeScript and ships types in the package. No{" "}
              <InlineCode>@types</InlineCode> package is needed.
            </p>
            <Code>{`import { generateAvatar } from "@glint/core";
import type { AvatarOptions } from "@glint/core";

const options: AvatarOptions = {
  seed: "jane.doe",
  name: "Jane Doe",
  size: 128,
  rounded: true,
};

const svg: string = generateAvatar(options);`}</Code>
          </Section>
          <Section title="AvatarOptions">
            <Code>{`type AvatarOptions = {
  seed: string;
  name?: string;
  size?: number;
  rounded?: boolean;
  font?: string;
  noise?: boolean;
  blur?: boolean;
};`}</Code>
          </Section>
        </>
      )}
    </main>
  );
}
