import { detectProject } from "./_shared/project-detection";

export default function (pi: any) {
  pi.on("session_start", async (_event: any, ctx: any) => {
    const cwd = ctx.cwd ?? process.cwd();
    const detection = detectProject(cwd);

    if (detection.tags.length === 0) return;

    const summary = [
      `pi-java-enterprise detected: ${detection.tags.join(", ")}`,
      detection.hasPom ? "Build tool: Maven" : detection.hasGradle ? "Build tool: Gradle" : "Build tool: unknown",
      detection.pomCount > 1 ? `Modules: ${detection.pomCount} pom.xml files detected` : "Modules: single-module or non-Maven layout"
    ];

    ctx.ui.notify(summary.join("\n"), "info");
  });
}
