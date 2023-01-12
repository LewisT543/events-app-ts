import path from 'path';
import fs from 'fs';
import {NextApiRequest, NextApiResponse} from "next";

const buildPath = (strs: string[]) => path.join(...strs);

const extractData = (filePath: string) => {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData.toString());
};

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const {method} = req;

  const filePath = buildPath([process.cwd(), 'data', 'data.json']);
  const {events_categories, allEvents} = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    const {email, eventId} = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({message: 'Invalid email address'});
    }

    const newAllEvents = allEvents.map((ev: any) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({message: 'This email has already been registered'});
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}));

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}

export default handler