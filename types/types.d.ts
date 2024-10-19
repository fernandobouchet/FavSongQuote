type Quote = {
  id: number;
  text: string;
  song: string;
  band: string;
  author: Profile;
  authorId: string;
  likes: Like[];
  createdAt: Date;
  updatedAt: Date;
};

type newQuote = Pick<Quote, "text" | "song" | "band">;

type Profile = {
  id: string;
  name: string;
  full_name: string;
  email: string;
  avatar_url: string;
  quotes: Quote[];
  likes: Like[];
  createdAt: Date;
};

type Like = {
  id: number;
  user: Profile;
  userId: string;
  quote: Quote;
  quoteId: number;
  createdAt: Date;
};
