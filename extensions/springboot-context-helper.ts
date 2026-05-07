import { normalizeText } from "./_shared/text";

export default function (pi: any) {
  pi.registerCommand("springboot-context-help", {
    description: "Highlight likely causes for common Spring Boot startup failures",
    handler: async (args: string, ctx: any) => {
      const text = normalizeText(args);
      const hints: string[] = [];

      if (text.includes("nosuchbeandefinitionexception")) {
        hints.push("Check bean scan paths, conditional beans, profile-specific beans, and missing implementations.");
      }
      if (text.includes("beancreationexception")) {
        hints.push("Inspect nested causes and constructor dependencies; the top-level bean is often not the root cause.");
      }
      if (text.includes("failed to configure a datasource")) {
        hints.push("Check datasource URL, driver, profile activation, secret injection, and property sources.");
      }
      if (text.includes("unsatisfieddependencyexception")) {
        hints.push("Check constructor injection targets, ambiguous beans, and missing test doubles in test scope.");
      }
      if (text.includes("circular reference") || text.includes("requested bean is currently in creation")) {
        hints.push("Look for circular dependencies between services/configuration beans and split responsibilities if necessary.");
      }
      if (hints.length === 0) {
        hints.push("Paste a startup exception chain to get focused hints.");
      }

      const output = [
        "Spring Boot startup diagnosis:",
        ...hints,
        "Recommended next step: capture the full nested exception chain and active profiles."
      ];

      ctx.ui.notify(output.join("\n"), "info");
    }
  });
}
