export function calculateOnboardingCompletion(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  const completedItems = items.filter((item) => item?.completed === true).length;
  return Math.round((completedItems / items.length) * 100);
}
