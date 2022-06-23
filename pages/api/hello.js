// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      quotes: "Own your morning. Elevate your life."
    },
    {
      id: 1,
      quotes: "Dream big. Start small. Begin now"
    },
    {
      id: 1,
      quotes: "All change is hard at first, messy in the middle and gorgeous at the end."
    },
    {
      id: 1,
      quotes: "An addiction to distraction is the death of your creative production."
    },
    {
      id: 1,
      quotes: "Live in a way that feels true to you and pay attention to the small miracles every day brings."
    },
  ])
}
