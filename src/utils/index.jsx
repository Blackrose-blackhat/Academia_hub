import { useState } from "react";

export const excerpt = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count) + "....";
  }
  return str;
};

 export const links = [
  {

      id: 1,
      url: 'https://drive.google.com/file/d/1DLJYbDYBemq-Q9rL4lRJ8Odex-wDJJwI/preview'
  },
  {
      id: 2,
      url:'https://drive.google.com/file/d/1DLJYbDYBemq-Q9rL4lRJ8Odex-wDJJwI/preview'
  },
  {
      id: 3,
      
      
      url: 'https://drive.google.com/file/d/1DLJYbDYBemq-Q9rL4lRJ8Odex-wDJJwI/preview'
  },
  {
      id: 4,
      
      
      url: 'https://drive.google.com/file/d/1DLJYbDYBemq-Q9rL4lRJ8Odex-wDJJwI/preview'
  },
  {
      id: 5,
      
      
      url: 'https://drive.google.com/file/d/1DLJYbDYBemq-Q9rL4lRJ8Odex-wDJJwI/preview'
  }
]

links;