import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const REQUIRED_PATHS = ["skills", "prompts", "extensions", "themes", "docs", "examples", "README.md", "LICENSE", "CHANGELOG.md"];
const THEME_DIR = "themes";
const SKILLS_DIR = "skills";

function fail(message) {
  throw new Error(message);
}

function ensurePath(path) {
  if (!existsSync(path)) {
    fail(`Missing required path: ${path}`);
  }
}

function walk(root) {
  const results = [];
  for (const entry of readdirSync(root)) {
    const full = join(root, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else {
      results.push(full);
    }
  }
  return results;
}

function validateThemes(root) {
  const themeFiles = walk(root).filter((file) => file.endsWith(".json"));
  for (const file of themeFiles) {
    try {
      JSON.parse(readFileSync(file, "utf8"));
    } catch (error) {
      fail(`Invalid theme JSON: ${file}\n${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

function validateSkillFrontmatter(root) {
  const skillFiles = walk(root).filter((file) => file.endsWith("SKILL.md"));
  for (const file of skillFiles) {
    const text = readFileSync(file, "utf8");
    const match = text.match(/^---\n([\s\S]*?)\n---/);
    if (!match) {
      fail(`Missing frontmatter in skill: ${file}`);
    }

    const frontmatter = match[1];
    if (!/^name:\s*.+$/m.test(frontmatter)) {
      fail(`Missing 'name' in skill frontmatter: ${file}`);
    }
    if (!/^description:\s*.+$/m.test(frontmatter)) {
      fail(`Missing 'description' in skill frontmatter: ${file}`);
    }
  }
}

function validatePackageJson() {
  const pkg = JSON.parse(readFileSync("package.json", "utf8"));

  if (!pkg.pi) fail("package.json missing 'pi' field");
  for (const key of ["extensions", "skills", "prompts", "themes"]) {
    if (!Array.isArray(pkg.pi[key]) || pkg.pi[key].length === 0) {
      fail(`package.json pi.${key} must be a non-empty array`);
    }
    for (const entry of pkg.pi[key]) {
      const normalized = String(entry).replace(/^\.\//, "");
      ensurePath(normalized);
    }
  }
}

function main() {
  for (const path of REQUIRED_PATHS) {
    ensurePath(path);
  }

  validatePackageJson();
  validateThemes(THEME_DIR);
  validateSkillFrontmatter(SKILLS_DIR);

  console.log("Validation OK");
}

main();
