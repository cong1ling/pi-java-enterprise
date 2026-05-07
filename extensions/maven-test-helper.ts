import { normalizeText } from "./_shared/text";

export default function (pi: any) {
  pi.registerCommand("maven-test-help", {
    description: "Classify common Maven test failure patterns from pasted output",
    handler: async (args: string, ctx: any) => {
      const text = normalizeText(args);
      let category = "general-test-failure";
      const hints: string[] = [];

      if (text.includes("compilation failure") || text.includes("cannot find symbol")) {
        category = "compilation-failure";
        hints.push("Check imports, method signatures, Lombok/generated code, and module dependency visibility.");
      } else if (text.includes("failed to load applicationcontext") || text.includes("beancreationexception")) {
        category = "spring-context-failure";
        hints.push("Inspect the nested exception chain; top-level ApplicationContext failures usually hide the real bean/config problem.");
      } else if (text.includes("assertionfailederror") || text.includes("expected:")) {
        category = "assertion-failure";
        hints.push("Compare expected vs actual business behavior and check test fixtures for stale assumptions.");
      } else if (text.includes("nosuchbeandefinitionexception") || text.includes("unsatisfieddependencyexception")) {
        category = "dependency-wiring-failure";
        hints.push("Check bean scan scope, conditional annotations, profile activation, and missing mock/test bean setup.");
      } else if (text.includes("timed out") || text.includes("timeout")) {
        category = "timeout-failure";
        hints.push("Check slow external dependencies, deadlocks, blocking calls, and overly broad SpringBootTest scope.");
      }

      const output = [
        `Detected category: ${category}`,
        hints.length > 0 ? `Hint: ${hints.join(" ")}` : "Hint: Paste more of the failure output for better classification.",
        "Recommended next step: use the java-debugging skill with the failing command, stack trace, and test target."
      ];

      ctx.ui.notify(output.join("\n"), "info");
    }
  });
}
