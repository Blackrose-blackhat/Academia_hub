import { useState } from "react";

export const excerpt = (str, count) => {
  if (str.length > count) {
    str = str.substring(0, count) + "....";
  }
  return str;
};


export const variables = {
  mathSyllabus: "https://drive.google.com/file/d/14zDd5h0SgGUvlyGwnUtGgDD4T0YopOrT/preview",
  IEEsyllabus: "https://drive.google.com/file/d/15bYemD1szvC7EqSqDFBa2VMZrnE3epkh/preview",
  PhysicsSyllabus: "",
  IMEsyllabus: "https://drive.google.com/file/d/1fGiuu8Fd_gNu4cuix9l12-RbJP4roqAI/preview",
  PythonSyllabus: "",
  CSyllabus: "",
  EgSyllabus: "",
  MathematicsII: ""
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
export const Physics = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1pkD0ONdZ5M2e5xrMoCROr-fVV5r-BMvf/preview",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/16OxRz3ypxhuwp23H2pO5GZCB-fs52VoE/preview"
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1e1v_lU4aWISvjSjGl3HeWHXXbsw-n1GU/preview"
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1FZELju9sHwCNR8akXEPJTUoQlSDyKVIq/preview"
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1pjFHZycFMTs40Az02i0NlQeop2A8oKYs/preview"
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/19HHFxLeHZ7NljRZuX1-kTlazxgGxkcPm/preview"
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/1AzeBPOyoxt4_cIAxifIbyriPL0whh_Xa/preview"
  },
]
export const IME = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1XScT_3RVKASh0JyuHarhQhX27Z34Tn5P/preview",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1phq7CjLZ360UEI29Lxn-Fn2oE0vp8wkz/preview"
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1o8S0fci7w5MpXPH_mYWGTJkMqhnHr7z7/preview"
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/19IMrSn33pBpUdJ6VDsZwKu2J9aXUMfvC/preview"
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1-9IFzz56A2KI6LKoBNXLYR_hmvDP4pYn/preview"
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1GgwxPfSCBuzShwLB7n8mmXVE9IxCJ6XN/preview"
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/1-XbWoXdv8o2kgO_N5bIi4z98OorwQqma/preview"
  },
  {
    id: 8,
    link: "https://drive.google.com/file/d/17jzfVVal_xCkNkaBAjluHeotqGsjf38w/preview"
  },
  {
    id: 9,
    link: "https://drive.google.com/file/d/13MDN82aMXqD3bIPyCB527kCj1eu2yGSQ/preview"
  }



]

export const Python = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/165cPzDUU1YSGy0COAGStawU0PTJNAKwc/preview"
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/15z4bfHgI6WcZ4-NNzsdNIuq4rtSEqhRK/preview"
  },

]

export const C = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1ckJnaRhQkVGOQSuX4RXxYR_fP5xv_P91/preview",
  },

]

export const EG = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1XtnUNyCX455dtMqHjH9yN5ARzk2e-_L7/preview"
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1IxJmQ1wA45t6ZRBtG3RRr75MYLbza-rp/preview",
  }
]

export const MathematicsII = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/14grSccadPJMFAetBhBMpePaYgfDWlzHu/preview"
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1VUALO7muBfycUNlQJezq6xGRN9UWuZPJ/preview"
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1zQaUT8CVqYPpq6X1ELlBViwbfjuDvyje/preview"
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1hWXPa34XK1BS0CqFu9OAO0Am0OhGdJb2/preview"
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1uSYLrxSAw1bR5Ur3wKJMyJjXPvboREoD/preview"
  },

]

export const DCCN = [
  {
    id: 1,
    link: ""
  }
]