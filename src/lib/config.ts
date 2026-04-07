export const config = {
  duneApiKey: process.env.DUNE_API_KEY || "",
  duneQueryId: Number(process.env.DUNE_QUERY_ID || "1234567")
};

export function assertConfig() {
  if (!config.duneApiKey) {
    throw new Error("Missing DUNE_API_KEY");
  }

  if (!Number.isFinite(config.duneQueryId)) {
    throw new Error("Invalid DUNE_QUERY_ID");
  }
}
