import { socials } from './data/socials';

export default function handler(req, res) {
  console.log(req.method);
  if (req.method === 'GET') {
    res.status(200).json(socials);
  };
}