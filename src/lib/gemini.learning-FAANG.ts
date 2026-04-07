export type LearningTrack = {
  role: "frontend" | "backend" | "fullstack" | "ml" | "systems";
  level: "beginner" | "intermediate" | "advanced";
  topics: string[];
  durationWeeks: number;
};

export type GeminiLearningPlan = {
  target: "FAANG";
  focus: string;
  tracks: LearningTrack[];
  generatedAt: string;
};

export function buildFaangLearningPlan(focus: string): GeminiLearningPlan {
  return {
    target: "FAANG",
    focus,
    generatedAt: new Date().toISOString(),
    tracks: [
      {
        role: "frontend",
        level: "intermediate",
        durationWeeks: 8,
        topics: [
          "TypeScript fundamentals",
          "React architecture",
          "state management",
          "performance optimization",
          "system design basics"
        ]
      },
      {
        role: "backend",
        level: "intermediate",
        durationWeeks: 10,
        topics: [
          "Node.js services",
          "REST and GraphQL APIs",
          "databases",
          "caching",
          "distributed systems"
        ]
      },
      {
        role: "systems",
        level: "advanced",
        durationWeeks: 12,
        topics: [
          "data structures",
          "algorithms",
          "scalability",
          "concurrency",
          "mock interview prep"
        ]
      }
    ]
  };
}
