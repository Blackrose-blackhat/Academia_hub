import { useState } from "react";

export const excerpt = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count) + "....";
  }
  return str;
};


export const variables = {
  mathSyllabus: "https://drive.google.com/file/d/14zDd5h0SgGUvlyGwnUtGgDD4T0YopOrT/preview",
  IEEsyllabus: "https://drive.google.com/file/d/15bYemD1szvC7EqSqDFBa2VMZrnE3epkh/preview"
}

export const mathNotes1 = [
  {
    id: 0,
    link: "https://drive.google.com/file/d/1kMpccGSqUd702TxTjMhKzZZacXqPfEbW/preview",
  },
  {
    id: 1,
    link: "https://drive.google.com/file/d/1BfX8_iaY4W3_ucs2PTnWNnz7wpFfcS5E/preview"
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1kMpccGSqUd702TxTjMhKzZZacXqPfEbW/preview"
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1NOav7ROajretbqxVmXxeBHYCIy8f1Im5/preview"
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1aeC0tdgd982AIFBlu0bhHCnqkl092Mnt/preview"
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1aeC0tdgd982AIFBlu0bhHCnqkl092Mnt/preview"
  }
]
export const mathVideo = [
  {
    id: 1,
    link: "https://www.youtube.com/@gajendrapurohit/playlists"
  }
]

export const IEENotes = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1JOapenFeN2ddPaatNh4UwidFoIS2YyZI/preview",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/13kr1Q8swWH2HoSUTcImWaxxaYF2RBkJH/preview"
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1MLsMM5bsXGY9CaM0I-z-Axw_Qhu_SSIc/preview"
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1DtGJRLxaCaJHxRbMC8Tod5nqPLAeUHFE/preview"
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1zEKoFgwJZJiTEP0kgRRFtBMcx8HbTasY/preview"
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1FePYkBtd4j780LbzNRAC6E7-nc_k5c2m/preview"
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/11frH4ncpOuixZo8YBBhMdve1F1GZGBIo/preview"
  },
  {
    id: 8,
    link: "https://drive.google.com/file/d/1gK5EYO1NUjRdswy61KkfiO8TIJ3hoQy1/preview"
  },
  {
    id: 9,
    link: "https://drive.google.com/file/d/1y5Lxizw3TaUSWnc7IV8eJhzTqyPN2s_1/preview"
  },
  {
    id: 10,
    link: "https://drive.google.com/file/d/10WS3p0Ky6iEPqZEcLO35-1ttQex-cRxL/preview"
  }


]