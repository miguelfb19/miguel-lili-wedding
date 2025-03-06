import { diffMilliseconds } from "@formkit/tempo";

export const getCoutdownTimer = () => {
  const now = new Date();
  const weddingDate = new Date("2025-11-02T19:00:00");
  const diff = diffMilliseconds(weddingDate, now);

  if (diff > 0) {
    return {
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    };
  }

  return { seconds: 0, minutes: 0, hours: 0, days: 0, error: true };
};