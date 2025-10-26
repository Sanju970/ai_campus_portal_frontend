// check-dependencies.js
import { readFileSync } from "fs";
import { execSync } from "child_process";

const required = [
  "@radix-ui/react-avatar",
  "@radix-ui/react-dialog",
  "@radix-ui/react-dropdown-menu",
  "@radix-ui/react-label",
  "@radix-ui/react-scroll-area",
  "@radix-ui/react-separator",
  "@radix-ui/react-slot",
  "@radix-ui/react-tabs",
  "@radix-ui/react-toast",
  "@radix-ui/react-tooltip",
  "@radix-ui/react-select",
  "class-variance-authority",
  "tailwind-merge",
  "lucide-react",
  "sonner",
];

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const deps = { ...pkg.dependencies, ...pkg.devDependencies };

const missing = required.filter((name) => !deps[name]);

if (missing.length) {
  console.log("\n⚠️ Missing dependencies detected:");
  console.log(missing.join("\n"));
  console.log("\nInstalling them now...\n");
  execSync(`npm install ${missing.join(" ")}`, { stdio: "inherit" });
  console.log("\n✅ All dependencies installed.\n");
} else {
  console.log("✅ All dependencies are already installed.");
}
