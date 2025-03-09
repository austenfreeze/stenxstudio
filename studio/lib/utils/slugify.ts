export const slugify = (input: string) => 
  input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces & special chars with "-"
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
