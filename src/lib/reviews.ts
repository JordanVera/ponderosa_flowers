export type Review = {
  author: string;
  date: string;
  rating: number;
  text: string;
};

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  count: 34,
  url: 'https://search.google.com/local/reviews?placeid=ChIJFVeDuVybQIYR9jwUsuA3vSk',
};

export const FEATURED_REVIEWS: Review[] = [
  {
    author: 'Joy Rosas',
    date: 'Houston, TX',
    rating: 5,
    text: "WOW I had to leave a 5 star review, Kasey and Kristen are true artists and creative professionals!!! They were so on point, helpful, and flexible in bringing my vision to life for my wedding day. They went above and beyond to make everything so so beautiful. You will not regret having them be part of your big day!",
  },
  {
    author: 'Kathryn',
    date: 'Houston, TX',
    rating: 5,
    text: "Wow is all I can say! Kasey and Kristen really delivered my vision for my wedding florals! All of the guests absolutely loved the arrangements. They were able to stay within my budget and they delivered the florals right on time to the venue. They were set up beautifully.",
  },
  {
    author: 'Gandolfo Rodriguez',
    date: 'Houston, TX',
    rating: 5,
    text: "The flowers are beautiful! My partner was very surprised and impressed with the arrangement. I was told the delivery person was very friendly and excited to drop them off!! Great experience!!!",
  },
  {
    author: 'Caitie Salas',
    date: 'Houston, TX',
    rating: 5,
    text: "Ponderosa was my floral vendor at my wedding in 2023 & they were incredible! So easy to work with, BEAUTIFUL designs/execution! I still rave about how incredible everything looked!",
  },
  {
    author: 'Holly Meier',
    date: 'Houston, TX',
    rating: 5,
    text: "Ponderosa Blooms did such a great job with our wedding florals! Working with Kristen and Kasey was great, and everything turned out so gorgeous!",
  },
  {
    author: 'Julianne Popivchak',
    date: 'Houston, TX',
    rating: 5,
    text: "Kristen & Kasey from Ponderosa Blooms made my wedding day bloom with elegance! Their arrangements were not just visually stunning and whimsical, but also reasonably priced. They\'re not just outstanding florists but also genuinely wonderful individuals. Highly recommended!",
  },
];
