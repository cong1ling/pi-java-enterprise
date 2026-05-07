import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const IGNORED_DIRS = new Set(["node_modules", ".git", ".idea", "target", "dist", "build", ".next"]);
const DEFAULT_MAX_DEPTH = 4;
const TEXT_FILE_LIMIT = 256 * 1024;

export type ProjectDetection = {
  hasPom: boolean;
  hasGradle: boolean;
  hasJavaSources: boolean;
  hasSpringBoot: boolean;
  hasMyBatis: boolean;
  hasMyBatisPlus: boolean;
  hasDocker: boolean;
  pomCount: number;
  tags: string[];
};

function safeListDir(root: string): string[] {
  try {
    return readdirSync(root);
  } catch {
    return [];
  }
}

function safeIsDirectory(path: string): boolean {
  try {
    return statSync(path).isDirectory();
  } catch {
    return false;
  }
}

function safeReadText(path: string): string {
  try {
    const stat = statSync(path);
    if (stat.size > TEXT_FILE_LIMIT) return "";
    return readFileSync(path, "utf8");
  } catch {
    return "";
  }
}

function walk(root: string, depth = 0, maxDepth = DEFAULT_MAX_DEPTH): string[] {
  if (depth > maxDepth || !existsSync(root)) return [];
  const results: string[] = [];
  for (const entry of safeListDir(root)) {
    if (IGNORED_DIRS.has(entry)) continue;
    const full = join(root, entry);
    if (safeIsDirectory(full)) {
      results.push(...walk(full, depth + 1, maxDepth));
    } else {
      results.push(full);
    }
  }
  return results;
}

function rootHints(cwd: string): string[] {
  const candidates = [
    "pom.xml",
    "build.gradle",
    "build.gradle.kts",
    "settings.gradle",
    "settings.gradle.kts",
    join("src", "main", "java"),
    join("src", "test", "java"),
    join("src", "main", "resources", "application.yml"),
    join("src", "main", "resources", "application.yaml"),
    join("src", "main", "resources", "application.properties"),
    "Dockerfile",
    "docker-compose.yml",
    "docker-compose.yaml"
  ];

  return candidates.map((entry) => join(cwd, entry)).filter((entry) => existsSync(entry));
}

function detectSpringBoot(files: string[]): boolean {
  const appFiles = files.filter(
    (file) =>
      file.endsWith("application.yml") ||
      file.endsWith("application.yaml") ||
      file.endsWith("application.properties") ||
      /[\\/][^\\/]*Application\.java$/.test(file)
  );

  if (appFiles.some((file) => /[\\/]src[\\/]main[\\/]resources[\\/]/.test(file))) {
    return true;
  }

  for (const file of files) {
    if (file.endsWith("pom.xml") || file.endsWith("build.gradle") || file.endsWith("build.gradle.kts")) {
      const text = safeReadText(file).toLowerCase();
      if (text.includes("spring-boot")) return true;
    }

    if (/[\\/][^\\/]*Application\.java$/.test(file)) {
      const text = safeReadText(file);
      if (text.includes("@SpringBootApplication")) return true;
    }
  }

  return false;
}

function detectMyBatis(files: string[]): { hasMyBatis: boolean; hasMyBatisPlus: boolean } {
  let hasMyBatis = false;
  let hasMyBatisPlus = false;

  for (const file of files) {
    const lowerFile = file.toLowerCase();
    if (lowerFile.endsWith("pom.xml") || lowerFile.endsWith("build.gradle") || lowerFile.endsWith("build.gradle.kts") || lowerFile.endsWith(".java")) {
      const text = safeReadText(file);
      const lowerText = text.toLowerCase();

      if (lowerText.includes("com.baomidou.mybatisplus") || lowerText.includes("mybatis-plus")) {
        hasMyBatisPlus = true;
        hasMyBatis = true;
      } else if (lowerText.includes("org.mybatis") || lowerText.includes("mybatis")) {
        hasMyBatis = true;
      }
    }

    if (lowerFile.includes("mybatis")) {
      hasMyBatis = true;
    }
  }

  return { hasMyBatis, hasMyBatisPlus };
}

export function detectProject(cwd: string): ProjectDetection {
  const files = [...new Set([...rootHints(cwd), ...walk(cwd)])];

  const hasPom = files.some((file) => file.endsWith("pom.xml"));
  const hasGradle = files.some((file) => file.endsWith("build.gradle") || file.endsWith("build.gradle.kts"));
  const hasJavaSources = files.some((file) => file.includes("src/main/java") || file.includes("src/test/java"));
  const hasDocker = files.some(
    (file) => file.endsWith("Dockerfile") || file.endsWith("docker-compose.yml") || file.endsWith("docker-compose.yaml")
  );
  const pomCount = files.filter((file) => file.endsWith("pom.xml")).length;
  const hasSpringBoot = detectSpringBoot(files);
  const { hasMyBatis, hasMyBatisPlus } = detectMyBatis(files);

  const tags: string[] = [];
  if (hasPom) tags.push("maven");
  if (hasGradle) tags.push("gradle");
  if (hasJavaSources) tags.push("java");
  if (hasSpringBoot) tags.push("spring-boot");
  if (pomCount > 1) tags.push("multi-module");
  if (hasMyBatisPlus) {
    tags.push("mybatis-plus");
  } else if (hasMyBatis) {
    tags.push("mybatis");
  }
  if (hasDocker) tags.push("docker");

  return {
    hasPom,
    hasGradle,
    hasJavaSources,
    hasSpringBoot,
    hasMyBatis,
    hasMyBatisPlus,
    hasDocker,
    pomCount,
    tags
  };
}
