// pages/api/proxy.js
export default async function handler(req, res) {
  const { slug } = req.query;

  function formatSlugToName(_slug) {
    return _slug
      .split('-') // Split the slug by hyphens
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back with spaces
  }

  try {
    const apiUrl = `https://ml.aska.ai/geniefriends/genie_wish?query=give%20me%205%20potential%20friends&model=gpt-3.5-turbo&your_name=${formatSlugToName(
      slug,
    )}&event_name=D1208-SG`;

    const apiRes = await fetch(apiUrl);
    if (!apiRes.ok) throw new Error('Failed to fetch.');

    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
