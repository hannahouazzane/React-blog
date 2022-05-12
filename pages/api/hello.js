// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newdata } from "./newdata";
export default function handler(req, res) {
  res.status(200).json(newdata);
}
