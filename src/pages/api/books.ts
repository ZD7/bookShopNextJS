import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { subject, startIndex } = req.query;

  const gbooksReqParams = new URLSearchParams();
  gbooksReqParams.set("q", `Subject:${subject}`);
  gbooksReqParams.set("startIndex", `${startIndex}`);

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}&maxResults=6`
  );

  const books = await response.json();

  res.status(200).send({
    books: books.items,
  });

  if (!req.query.subject) {
    res.status(400).send({
      error: true,
      message: "No subject in query params",
    });
  }
}
