export default function (pi: any) {
  pi.registerCommand("mysql-query-hint", {
    description: "Show a structured checklist for SQL and EXPLAIN analysis",
    handler: async (_args: string, ctx: any) => {
      ctx.ui.notify(
        [
          "MySQL analysis checklist:",
          "1. Actual SQL text",
          "2. Table schema and indexes",
          "3. EXPLAIN output",
          "4. Filter columns and sort columns",
          "5. Cardinality and expected row count",
          "6. Read/write trade-offs of new indexes",
          "Recommended next step: use the sql-optimization prompt with SQL, indexes, and explain output."
        ].join("\n"),
        "info"
      );
    }
  });
}
