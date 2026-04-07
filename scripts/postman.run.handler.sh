#!/usr/bin/env bash
set -euo pipefail

mkdir -p src/api

cat > src/api/postman-run.ts <<'EOF'
import { executeDuneQuery } from "../lib/dune";
import { buildFaangLearningPlan } from "../lib/gemini.learning-FAANG";

export async function postmanRunHandler(req: any, res: any) {
  try {
    const { type, payload } = req.body || {};

    if (type === "dune") {
      const result = await executeDuneQuery(payload);
      return res.status(200).json({ source: "dune", result });
    }

    if (type === "gemini") {
      const focus = payload?.focus || "general";
      const plan = buildFaangLearningPlan(focus);
      return res.status(200).json({ source: "gemini", result: plan });
    }

    return res.status(400).json({ error: "Invalid type. Use 'dune' or 'gemini'." });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
EOF

echo "Wrote src/api/postman-run.ts"
