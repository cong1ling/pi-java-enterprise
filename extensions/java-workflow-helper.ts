import { detectProject } from "./_shared/project-detection";

export default function (pi: any) {
  pi.registerCommand("java-workflow-help", {
    description: "Show common Maven and Spring Boot commands for the current project",
    handler: async (_args: string, ctx: any) => {
      const cwd = ctx.cwd ?? process.cwd();
      const detection = detectProject(cwd);
      const commands = detection.hasPom
        ? [
            "mvn test",
            "mvn -DskipTests package",
            "mvn spring-boot:run",
            "mvn -q -Dtest=ClassNameTest test"
          ]
        : ["No pom.xml found in the current project scan. Try running this from the Maven project directory or module root."];

      ctx.ui.notify(commands.join("\n"), "info");
    }
  });
}
