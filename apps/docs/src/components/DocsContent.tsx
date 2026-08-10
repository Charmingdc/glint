import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { SectionId } from "../App";
import { Code, InlineCode } from "./Code";

const ORDER: SectionId[] = [
  "introduction",
  "installation",
  "quick-start",
  "core-overview",
  "core-api",
  "core-options",
  "core-svg",
  "core-png",
  "react-overview",
  "react-installation",
  "react-component",
  "react-api",
  "http-overview",
  "http-endpoint",
  "http-parameters",
  "http-response",
  "guide-initials",
  "guide-blur-noise",
  "guide-shapes",
  "guide-seeds",
];

const LABELS: Record<SectionId, string> = {
  introduction: "Introduction",
  installation: "Installation",
  "quick-start": "Quick Start",
  "core-overview": "Overview",
  "core-api": "API Reference",
  "core-options": "Avatar Options",
  "core-svg": "SVG Output",
  "core-png": "PNG Output",
  "react-overview": "Overview",
  "react-installation": "Installation",
  "react-component": "GlintAvatar",
  "react-api": "API Reference",
  "http-overview": "Overview",
  "http-endpoint": "Avatar Endpoint",
  "http-parameters": "Parameters",
  "http-response": "Response Formats",
  "guide-initials": "Using Initials",
  "guide-blur-noise": "Blur and Noise",
  "guide-shapes": "Shapes",
  "guide-seeds": "Deterministic Seeds",
};

function PageNav({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}) {
  const idx = ORDER.indexOf(active);
  const prev = idx > 0 ? ORDER[idx - 1] : undefined;
  const next = idx < ORDER.length - 1 ? ORDER[idx + 1] : undefined;
  return (
    <div className="flex w-full items-center justify-between gap-3 mt-10 pt-6 border-t border-white/[0.07]">
      {prev ? (
        <button
          onClick={() => onNavigate(prev)}
          className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            size={14}
            color="currentColor"
            strokeWidth={1.5}
          />
          {LABELS[prev]}
        </button>
      ) : (
        <span />
      )}
      {next && (
        <button
          onClick={() => onNavigate(next)}
          className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-foreground transition-colors"
        >
          {LABELS[next]}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={14}
            color="currentColor"
            strokeWidth={1.5}
          />
        </button>
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-base font-semibold text-foreground">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-7 text-foreground/60">
        {children}
      </div>
    </section>
  );
}

function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 pb-8 border-b border-white/[0.07]">
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-foreground/30">
        {label}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-sm text-foreground/50">{description}</p>
      )}
    </div>
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
    <div className="rounded-lg border border-white/[0.07] p-4">
      <div className="flex flex-wrap items-center gap-2 mb-1.5">
        <span className="font-mono text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="rounded bg-white/6 px-1.5 py-0.5 font-mono text-xs text-foreground/50">
          {type}
        </span>
        {required ? (
          <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-xs text-red-400">
            required
          </span>
        ) : (
          <span className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-foreground/40">
            default: {defaultVal}
          </span>
        )}
      </div>
      <p className="text-sm text-foreground/50">{description}</p>
    </div>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="rounded-lg border border-white/[0.07] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/[0.07]">
            {head.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-medium text-foreground/50"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/4 last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 ${j === 0 ? "font-mono text-foreground/80" : "text-foreground/50"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CalloutNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-white/2 px-4 py-3 text-sm text-foreground/60">
      {children}
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
          <PageHeader
            label="Getting Started"
            title="Introduction"
            description="Glint generates unique, deterministic avatars from any seed string."
          />
          <Section title="What is Glint?">
            <p>
              Feed Glint any string and get back a styled SVG avatar. The same
              seed always produces the same avatar across environments,
              runtimes, and deploys. No randomness, no storage, no network
              requests.
            </p>
            <p>
              It works in Node.js, browsers, edge runtimes, and any bundler. A
              React component and HTTP API are available for common use cases.
            </p>
          </Section>
          <Section title="Packages">
            <Table
              head={["Package", "Description"]}
              rows={[
                [
                  "@glintjs/core",
                  "Framework-agnostic core. Works anywhere JavaScript runs.",
                ],
                [
                  "@glintjs/react",
                  "React component with props, refs, and memoization.",
                ],
              ]}
            />
          </Section>
          <Section title="HTTP API">
            <p>
              A hosted REST endpoint is available at{" "}
              <InlineCode>/api/avatar</InlineCode>. Request avatars as SVG or
              PNG without installing any package.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "installation" && (
        <>
          <PageHeader
            label="Getting Started"
            title="Installation"
            description="Install Glint via your package manager of choice."
          />
          <Section title="Core">
            <Code>{`npm install @glintjs/core\npnpm add @glintjs/core\nyarn add @glintjs/core`}</Code>
            <p>No runtime dependencies. TypeScript types are bundled.</p>
          </Section>
          <Section title="React">
            <Code>{`npm install @glintjs/react\npnpm add @glintjs/react\nyarn add @glintjs/react`}</Code>
            <CalloutNote>
              <InlineCode>@glintjs/core</InlineCode> is a dependency of{" "}
              <InlineCode>@glintjs/react</InlineCode> and installs
              automatically. React 18 or 19 is required as a peer dependency.
            </CalloutNote>
          </Section>
          <Section title="HTTP API">
            <p>
              No installation needed. The API is available at{" "}
              <InlineCode>https://glint-dev.vercel.app/api/avatar</InlineCode>.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "quick-start" && (
        <>
          <PageHeader
            label="Getting Started"
            title="Quick Start"
            description="Generate your first avatar in under a minute."
          />
          <Section title="Core">
            <Code>{`import { generateAvatar } from "@glintjs/core";\n\nconst svg = generateAvatar({ seed: "jane.doe" });\nconst src = \`data:image/svg+xml;base64,\${btoa(svg)}\`;\n\n// Use in an img tag\n// <img src={src} width={64} height={64} alt="Avatar" />`}</Code>
          </Section>
          <Section title="React">
            <Code>{`import { GlintAvatar } from "@glintjs/react";\n\n<GlintAvatar seed="jane.doe" size="md" rounded />`}</Code>
          </Section>
          <Section title="HTTP API">
            <Code>{`<!-- SVG -->\n<img src="https://glint-dev.vercel.app/api/avatar?seed=jane.doe" />\n\n<!-- PNG -->\n<img src="https://glint-dev.vercel.app/api/avatar?seed=jane.doe&png=true" />`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "core-overview" && (
        <>
          <PageHeader
            label="Core SDK"
            title="Overview"
            description="@glintjs/core is the foundation of Glint. It has no runtime dependencies and works anywhere JavaScript runs."
          />
          <Section title="How it works">
            <p>
              Glint hashes the seed string into two 32-bit integers using a
              deterministic algorithm. Those numbers drive every visual
              decision: which palette to pick from 30 curated gradients, where
              to position each radial gradient stop, whether noise and blur
              layers are applied, and how initials are sized and placed.
            </p>
            <p>
              The output is a self-contained SVG string with inline styles and
              no external references.
            </p>
          </Section>
          <Section title="Exports">
            <Code>{`import { generateAvatar } from "@glintjs/core";\nimport type { AvatarOptions } from "@glintjs/core";`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "core-api" && (
        <>
          <PageHeader
            label="Core SDK"
            title="API Reference"
            description="The generateAvatar function is the only export from @glintjs/core."
          />
          <Section title="Signature">
            <Code>{`function generateAvatar(options: AvatarOptions): string`}</Code>
            <p>
              Returns a raw SVG string. Only <InlineCode>seed</InlineCode> is
              required. All other options fall back to their defaults.
            </p>
          </Section>
          <Section title="Example">
            <Code>{`import { generateAvatar } from "@glintjs/core";\n\nconst svg = generateAvatar({\n  seed: "user_abc123",\n  name: "Jane Doe",\n  size: 128,\n  rounded: true,\n  noise: true,\n  blur: true,\n});`}</Code>
          </Section>
          <Section title="TypeScript">
            <Code>{`import type { AvatarOptions } from "@glintjs/core";\n\nconst options: AvatarOptions = {\n  seed: "user_abc123",\n  name: "Jane Doe",\n  size: 128,\n  rounded: true,\n};\n\nconst svg: string = generateAvatar(options);`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "core-options" && (
        <>
          <PageHeader
            label="Core SDK"
            title="Avatar Options"
            description="All options accepted by generateAvatar."
          />
          <Section title="Options">
            <Param
              name="seed"
              type="string"
              required
              description="Drives all visual output. Use any stable string: user ID, email, username. The same value always produces the same avatar."
            />
            <Param
              name="name"
              type="string"
              defaultVal="undefined"
              description="When provided, Glint extracts initials and renders them centered over the gradient. See the Using Initials guide for extraction rules."
            />
            <Param
              name="size"
              type="number"
              defaultVal="128"
              description="Width and height of the SVG in pixels. The viewBox scales with this value so the output is sharp at any display size."
            />
            <Param
              name="rounded"
              type="boolean"
              defaultVal="false"
              description="Clips the output to a circle. Uses a clipPath element internally so the shape is pixel-crisp at any size."
            />
            <Param
              name="font"
              type="string"
              defaultVal='"Inter"'
              description="Font family used for the initials overlay. The font must be available in the rendering environment."
            />
            <Param
              name="noise"
              type="boolean"
              defaultVal="true"
              description="Adds an feTurbulence noise texture blended over the gradient. Gives the avatar an organic, tactile feel."
            />
            <Param
              name="blur"
              type="boolean"
              defaultVal="true"
              description="Applies feGaussianBlur for a frosted depth effect. Works alongside noise to produce a layered, premium look."
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "core-svg" && (
        <>
          <PageHeader
            label="Core SDK"
            title="SVG Output"
            description="generateAvatar returns a self-contained SVG string."
          />
          <Section title="Using the output">
            <p>
              The returned string is a valid SVG document. You can use it
              anywhere an SVG is accepted.
            </p>
            <Code>{`// As a data URI in an img tag\nconst svg = generateAvatar({ seed: "jane.doe" });\nconst src = \`data:image/svg+xml;base64,\${btoa(svg)}\`;\n<img src={src} alt="Avatar" />\n\n// Injected directly into the DOM\ndiv.innerHTML = svg;\n\n// Written to a file (Node.js)\nimport { writeFile } from "node:fs/promises";\nawait writeFile("avatar.svg", svg, "utf8");`}</Code>
          </Section>
          <Section title="Characteristics">
            <Table
              head={["Property", "Value"]}
              rows={[
                ["Format", "SVG 1.1"],
                ["External references", "None"],
                ["Fonts", "Specified via font-family attribute, not embedded"],
                ["Size", "Roughly 2-4 KB depending on options"],
              ]}
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "core-png" && (
        <>
          <PageHeader
            label="Core SDK"
            title="PNG Output"
            description="Convert SVG output to PNG using a rendering library."
          />
          <Section title="Using Sharp (Node.js)">
            <p>
              The core package outputs SVG only. To get a PNG in Node.js, pass
              the SVG buffer to <InlineCode>sharp</InlineCode>.
            </p>
            <Code>{`import { generateAvatar } from "@glintjs/core";\nimport sharp from "sharp";\n\nconst svg = generateAvatar({ seed: "jane.doe", size: 256 });\nconst png = await sharp(Buffer.from(svg)).png().toBuffer();\n\n// png is a Buffer containing the PNG image`}</Code>
          </Section>
          <Section title="Via HTTP API">
            <p>
              If you need PNG without a build dependency, use the HTTP API with{" "}
              <InlineCode>png=true</InlineCode>. See the{" "}
              <button
                onClick={() => {}}
                className="underline text-foreground/60 hover:text-foreground"
              >
                HTTP API
              </button>{" "}
              section.
            </p>
            <Code>{`GET /api/avatar?seed=jane.doe&png=true`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "react-overview" && (
        <>
          <PageHeader
            label="React SDK"
            title="Overview"
            description="@glintjs/react provides a GlintAvatar component that wraps the core generator."
          />
          <Section title="What it does">
            <p>
              The component calls <InlineCode>generateAvatar</InlineCode> from
              core, memoizes the result against its props, and renders the SVG
              inline inside a <InlineCode>{"<div>"}</InlineCode>. It forwards
              refs, accepts all native div props, and sets{" "}
              <InlineCode>role="img"</InlineCode> and{" "}
              <InlineCode>aria-label</InlineCode> automatically.
            </p>
          </Section>
          <Section title="Exports">
            <Code>{`import { GlintAvatar } from "@glintjs/react";\nimport type { GlintAvatarProps } from "@glintjs/react";`}</Code>
          </Section>
          <Section title="Peer dependencies">
            <Table
              head={["Package", "Version"]}
              rows={[
                ["react", "^18 || ^19"],
                ["react-dom", "^18 || ^19"],
              ]}
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "react-installation" && (
        <>
          <PageHeader label="React SDK" title="Installation" />
          <Section title="Install">
            <Code>{`npm install @glintjs/react\npnpm add @glintjs/react\nyarn add @glintjs/react`}</Code>
            <CalloutNote>
              <InlineCode>@glintjs/core</InlineCode> is listed as a dependency
              and installs automatically.
            </CalloutNote>
          </Section>
          <Section title="Requirements">
            <p>
              React 18 or 19. TypeScript types are included. No{" "}
              <InlineCode>@types</InlineCode> package is needed.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "react-component" && (
        <>
          <PageHeader
            label="React SDK"
            title="GlintAvatar"
            description="The primary component exported by @glintjs/react."
          />
          <Section title="Basic usage">
            <Code>{`import { GlintAvatar } from "@glintjs/react";\n\n<GlintAvatar seed="jane.doe" />`}</Code>
          </Section>
          <Section title="With initials and options">
            <Code>{`<GlintAvatar\n  seed="jane.doe"\n  name="Jane Doe"\n  size="lg"\n  rounded\n  noise\n  blur\n/>`}</Code>
          </Section>
          <Section title="Named sizes">
            <Code>{`<GlintAvatar seed="a" size="sm" />   {/* 32px */}\n<GlintAvatar seed="b" size="md" />   {/* 48px, default */}\n<GlintAvatar seed="c" size="lg" />   {/* 64px */}\n<GlintAvatar seed="d" size={128} />  {/* custom */}`}</Code>
          </Section>
          <Section title="With className">
            <p>All native div props are forwarded to the wrapper element.</p>
            <Code>{`<GlintAvatar\n  seed="jane.doe"\n  size={48}\n  rounded\n  className="ring-2 ring-white/20 cursor-pointer"\n  onClick={handleClick}\n/>`}</Code>
          </Section>
          <Section title="With ref">
            <Code>{`import { useRef } from "react";\nimport { GlintAvatar } from "@glintjs/react";\n\nconst ref = useRef<HTMLDivElement>(null);\n\n<GlintAvatar ref={ref} seed="jane.doe" />`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "react-api" && (
        <>
          <PageHeader
            label="React SDK"
            title="API Reference"
            description="All props accepted by GlintAvatar."
          />
          <Section title="GlintAvatarProps">
            <p>
              <InlineCode>GlintAvatarProps</InlineCode> extends{" "}
              <InlineCode>{"ComponentPropsWithoutRef<'div'>"}</InlineCode>,
              omitting keys that overlap with{" "}
              <InlineCode>AvatarOptions</InlineCode>.
            </p>
            <Param
              name="seed"
              type="string"
              required
              description="Drives all visual output. The same seed always produces the same avatar."
            />
            <Param
              name="name"
              type="string"
              defaultVal="undefined"
              description="Renders initials over the gradient. Follows the same extraction rules as the core package."
            />
            <Param
              name="size"
              type='"sm" | "md" | "lg" | number'
              defaultVal='"md"'
              description="Named sizes map to 32px, 48px, 64px. Pass a number for an exact pixel size."
            />
            <Param
              name="rounded"
              type="boolean"
              defaultVal="false"
              description="Clips to a circle."
            />
            <Param
              name="font"
              type="string"
              defaultVal='"Inter"'
              description="Font family for the initials."
            />
            <Param
              name="noise"
              type="boolean"
              defaultVal="true"
              description="Noise texture layer."
            />
            <Param
              name="blur"
              type="boolean"
              defaultVal="true"
              description="Blur depth layer."
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "http-overview" && (
        <>
          <PageHeader
            label="HTTP API"
            title="Overview"
            description="Generate avatars over HTTP without installing a package."
          />
          <Section title="Base URL">
            <Code>{`https://glint-dev.vercel.app/api/avatar`}</Code>
          </Section>
          <Section title="How it works">
            <p>
              The endpoint runs <InlineCode>generateAvatar</InlineCode>{" "}
              server-side and streams back an SVG or PNG response. Because the
              output is deterministic, responses are cached with{" "}
              <InlineCode>Cache-Control: immutable</InlineCode> at the CDN edge.
            </p>
          </Section>
          <Section title="Authentication">
            <p>
              No authentication required. The API is public and rate limits are
              not currently enforced.
            </p>
          </Section>
          <Section title="Supported formats">
            <Table
              head={["Format", "Content-Type", "Param"]}
              rows={[
                ["SVG", "image/svg+xml", "default"],
                ["PNG", "image/png", "png=true"],
              ]}
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "http-endpoint" && (
        <>
          <PageHeader label="HTTP API" title="Avatar Endpoint" />
          <Section title="Request">
            <Code>{`GET /api/avatar?seed=<seed>[&options]`}</Code>
          </Section>
          <Section title="Examples">
            <Code>{`# Minimal\nGET /api/avatar?seed=jane.doe\n\n# With initials and rounded shape\nGET /api/avatar?seed=jane.doe&name=Jane+Doe&rounded=true\n\n# PNG at 256px\nGET /api/avatar?seed=jane.doe&size=256&png=true\n\n# Full options\nGET /api/avatar?seed=jane.doe&name=Jane+Doe&size=256&rounded=true&noise=true&blur=true&png=true`}</Code>
          </Section>
          <Section title="Response">
            <p>
              Returns the avatar image directly. The{" "}
              <InlineCode>Content-Type</InlineCode> header reflects the format.
              On missing <InlineCode>seed</InlineCode>, returns{" "}
              <InlineCode>400</InlineCode> with a JSON error body.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "http-parameters" && (
        <>
          <PageHeader
            label="HTTP API"
            title="Parameters"
            description="All query parameters accepted by the avatar endpoint."
          />
          <Section title="Parameters">
            <Table
              head={["Param", "Type", "Default", "Description"]}
              rows={[
                ["seed", "string", "required", "Avatar seed"],
                ["name", "string", "", "Name for initials extraction"],
                ["size", "number", "128", "Output size in px"],
                ["rounded", "true|false", "false", "Circle clip"],
                ["font", "string", "Inter", "Initials font family"],
                ["noise", "true|false", "true", "Noise texture"],
                ["blur", "true|false", "true", "Blur depth layer"],
                ["png", "true|false", "false", "Return PNG instead of SVG"],
              ]}
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "http-response" && (
        <>
          <PageHeader label="HTTP API" title="Response Formats" />
          <Section title="SVG (default)">
            <p>
              Returns an <InlineCode>image/svg+xml</InlineCode> response. Can be
              used directly in an <InlineCode>{"<img>"}</InlineCode> src or as a
              CSS background.
            </p>
            <Code>{`<img src="/api/avatar?seed=jane.doe" width="64" height="64" alt="Avatar" />`}</Code>
          </Section>
          <Section title="PNG">
            <p>
              Returns an <InlineCode>image/png</InlineCode> response when{" "}
              <InlineCode>png=true</InlineCode> is passed. The PNG is rasterized
              at the requested <InlineCode>size</InlineCode>.
            </p>
            <Code>{`<img src="/api/avatar?seed=jane.doe&png=true&size=128" width="128" height="128" />`}</Code>
          </Section>
          <Section title="Caching">
            <p>
              All responses include{" "}
              <InlineCode>
                Cache-Control: public, max-age=31536000, immutable
              </InlineCode>
              . Since output is fully deterministic, a given URL will always
              return the same image and is safe to cache indefinitely.
            </p>
          </Section>
          <Section title="Errors">
            <Table
              head={["Status", "Condition"]}
              rows={[["400", "seed parameter is missing or empty"]]}
            />
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "guide-initials" && (
        <>
          <PageHeader
            label="Guides"
            title="Using Initials"
            description="Render text initials over the gradient by passing a name."
          />
          <Section title="How it works">
            <p>
              Pass the <InlineCode>name</InlineCode> option to{" "}
              <InlineCode>generateAvatar</InlineCode> or the{" "}
              <InlineCode>name</InlineCode> prop to{" "}
              <InlineCode>GlintAvatar</InlineCode>. Glint extracts up to two
              characters and renders them centered over the gradient.
            </p>
          </Section>
          <Section title="Extraction rules">
            <Table
              head={["Input", "Output", "Rule"]}
              rows={[
                ["Jane Doe", "JD", "First char of first and last word"],
                ["Adebayo", "AD", "First two chars of a single word"],
                ["Mary Jane Watson", "MW", "First char of first and last word"],
                ["X", "X", "Single character used as-is"],
              ]}
            />
          </Section>
          <Section title="Example">
            <Code>{`generateAvatar({ seed: "jane.doe", name: "Jane Doe", size: 128, rounded: true });`}</Code>
          </Section>
          <Section title="Styling">
            <p>
              Initials are rendered as an SVG{" "}
              <InlineCode>{"<text>"}</InlineCode> element. Font size is fixed at
              40% of the avatar size. The font family is controlled by the{" "}
              <InlineCode>font</InlineCode> option. The font must be available
              in the rendering environment, it is not embedded in the SVG.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "guide-blur-noise" && (
        <>
          <PageHeader
            label="Guides"
            title="Blur and Noise"
            description="Noise and blur are layered SVG filters that add depth to the gradient."
          />
          <Section title="Noise">
            <p>
              When <InlineCode>noise: true</InlineCode>, Glint adds an{" "}
              <InlineCode>feTurbulence</InlineCode> filter blended over the
              gradient in overlay mode. The frequency and octave values are
              derived from the seed hash, so they vary per avatar.
            </p>
            <Code>{`generateAvatar({ seed: "jane.doe", noise: true, blur: false });`}</Code>
          </Section>
          <Section title="Blur">
            <p>
              When <InlineCode>blur: true</InlineCode>, a{" "}
              <InlineCode>feGaussianBlur</InlineCode> pass is applied before the
              noise blend. This softens the gradient edges and creates a
              frosted, layered appearance. The blur radius is derived from the
              seed hash.
            </p>
            <Code>{`generateAvatar({ seed: "jane.doe", noise: false, blur: true });`}</Code>
          </Section>
          <Section title="Combining both">
            <p>
              Both are enabled by default. Together they produce the signature
              Glint aesthetic. Disable either or both for a cleaner, flatter
              look.
            </p>
            <Code>{`// Clean gradient, no filters\ngenerateAvatar({ seed: "jane.doe", noise: false, blur: false });`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "guide-shapes" && (
        <>
          <PageHeader
            label="Guides"
            title="Shapes"
            description="Avatars can render as a square or circle."
          />
          <Section title="Square (default)">
            <Code>{`generateAvatar({ seed: "jane.doe" }); // rounded: false by default`}</Code>
          </Section>
          <Section title="Circle">
            <p>
              Set <InlineCode>rounded: true</InlineCode> to clip the avatar to a
              circle. A <InlineCode>{"<clipPath>"}</InlineCode> element is added
              to the SVG defs. The shape is crisp at any size.
            </p>
            <Code>{`generateAvatar({ seed: "jane.doe", rounded: true });`}</Code>
          </Section>
          <Section title="In React">
            <Code>{`<GlintAvatar seed="jane.doe" rounded />`}</Code>
          </Section>
          <Section title="Custom corner radius">
            <p>
              The SVG element does not support a configurable corner radius
              today. For intermediate rounding, apply CSS{" "}
              <InlineCode>border-radius</InlineCode> to the container.
            </p>
            <Code>{`<div style={{ borderRadius: 12, overflow: "hidden", display: "inline-flex" }}>\n  <img src={avatarSrc} width={64} height={64} alt="Avatar" />\n</div>`}</Code>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}

      {active === "guide-seeds" && (
        <>
          <PageHeader
            label="Guides"
            title="Deterministic Seeds"
            description="The seed is the only input that determines the visual output."
          />
          <Section title="How seeds work">
            <p>
              Glint hashes the seed string using a 32-bit non-cryptographic
              hash. The resulting number is used to select a palette from 30
              curated gradients and to calculate the position, radius, and angle
              of each gradient layer.
            </p>
            <p>
              The same seed always produces the same avatar in any environment.
              There is no randomness involved at any step.
            </p>
          </Section>
          <Section title="Choosing a good seed">
            <p>Any stable, unique string makes a good seed. Common choices:</p>
            <Table
              head={["Use case", "Suggested seed"]}
              rows={[
                ["User profile", "user.id or user.email"],
                ["Team or org", "org.slug or org.id"],
                ["Anonymous user", "session ID or fingerprint"],
                ["Content item", "post.id or article.slug"],
              ]}
            />
          </Section>
          <Section title="Seed stability">
            <p>
              Avoid using mutable values like display names or timestamps as
              seeds. If the seed changes, the avatar changes. Use a stable
              identifier like a database ID or UUID.
            </p>
          </Section>
          <PageNav active={active} onNavigate={onNavigate} />
        </>
      )}
    </main>
  );
}
