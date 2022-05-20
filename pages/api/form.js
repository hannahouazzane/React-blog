export default function handler(req, res) {
  // Get data submitted in request’s body.
  const body = req.body;
  console.log("body: ", body);
  // Guard clause checks for title and content,
  // and returns early if they are not found
  if (!body.title || !body.content) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Data not found" });
  }
  // Sends a HTTP success code
  res.status(200).json({ title: body.title, content: body.content });
}
