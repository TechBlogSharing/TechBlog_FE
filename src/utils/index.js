// utilis

export function capitalizeFirstLetter(str) {
  if (!str) return str; // handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}


export async function fetchCategories() {
  try {
    // 1️⃣ Get root tree
    const rootRes = await fetch("https://api.github.com/repos/TechBlogSharing/TechBlog_DB/git/trees/main");
    if (!rootRes.ok) throw new Error("Failed to fetch root tree");
    const rootJson = await rootRes.json();

    // 2️⃣ Find topics folder URL
    const topicsNode = rootJson.tree.find(node => node.path === "topics");
    if (!topicsNode) throw new Error("No 'topics' folder found");

    // 3️⃣ Get topics tree
    const topicsRes = await fetch(topicsNode.url);
    if (!topicsRes.ok) throw new Error("Failed to fetch topics tree");
    const topicsJson = await topicsRes.json();

    // 4️⃣ Return the tree
    return topicsJson.tree;

  } catch (e) {
    console.error(e);
    return null;
  }
}