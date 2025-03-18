import { useState } from 'react'
import { ChangeEvent } from 'react';

interface ContactType{
    ID: number;
    name: string;
    bio: string;
    email: string;
    phone: string;
    job: string;
    image: string;
    meetID: number;
    gender: string;
}

let contacts: ContactType[] = [
  {
      "ID": 0,
      "name": "Luke Sparrow",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "jg9f1@gmail.com",
      "phone": "142-898-5019",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/1.jpg",
      "meetID": 359253,
      "gender": "male"
  },
  {
      "ID": 1,
      "name": "Natasha Carter",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "h91o1@hotmail.com",
      "phone": "891-914-0400",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/1.jpg",
      "meetID": 833537,
      "gender": "female"
  },
  {
      "ID": 2,
      "name": "Joseph Downey",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "rmbwq@outlook.com",
      "phone": "021-203-9139",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/men/2.jpg",
      "meetID": 418470,
      "gender": "male"
  },
  {
      "ID": 3,
      "name": "Tony Moore",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "57ijz@outlook.com",
      "phone": "587-442-3010",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/3.jpg",
      "meetID": 587695,
      "gender": "male"
  },
  {
      "ID": 4,
      "name": "Audrey Clark",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "jth0g@yahoo.com",
      "phone": "910-552-7549",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/2.jpg",
      "meetID": 201938,
      "gender": "female"
  },
  {
      "ID": 5,
      "name": "Scarlet Edgar",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "vmh3q@hotmail.com",
      "phone": "069-234-5183",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/3.jpg",
      "meetID": 647496,
      "gender": "female"
  },
  {
      "ID": 6,
      "name": "Sky Clark",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "h7wod@outlook.com",
      "phone": "083-787-3047",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/women/4.jpg",
      "meetID": 594726,
      "gender": "female"
  },
  {
      "ID": 7,
      "name": "Natasha Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "4fg71@outlook.com",
      "phone": "522-003-6630",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/5.jpg",
      "meetID": 582369,
      "gender": "female"
  },
  {
      "ID": 8,
      "name": "Charlotte Maximoff",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "6zkuu@hotmail.com",
      "phone": "129-502-7687",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/6.jpg",
      "meetID": 471055,
      "gender": "female"
  },
  {
      "ID": 9,
      "name": "Robert Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "5ozkq@outlook.com",
      "phone": "955-666-2187",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/men/4.jpg",
      "meetID": 864029,
      "gender": "male"
  },
  {
      "ID": 10,
      "name": "Benadette Heard",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "9u8js@outlook.com",
      "phone": "815-738-5766",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/7.jpg",
      "meetID": 536020,
      "gender": "female"
  },
  {
      "ID": 11,
      "name": "Jason Russell",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "jgq7t@hotmail.com",
      "phone": "878-429-4949",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/5.jpg",
      "meetID": 407747,
      "gender": "male"
  },
  {
      "ID": 12,
      "name": "Alex Jones",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "hni9o@outlook.com",
      "phone": "431-375-3490",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/6.jpg",
      "meetID": 454176,
      "gender": "male"
  },
  {
      "ID": 13,
      "name": "Joseph Johnson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "0fzl1@gmail.com",
      "phone": "561-306-2052",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/men/7.jpg",
      "meetID": 920263,
      "gender": "male"
  },
  {
      "ID": 14,
      "name": "Stephanie Sani",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "39oyg@outlook.com",
      "phone": "701-101-0750",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/women/8.jpg",
      "meetID": 816075,
      "gender": "female"
  },
  {
      "ID": 15,
      "name": "Victoria Moretti",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "k8rvb@outlook.com",
      "phone": "372-708-2551",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/women/9.jpg",
      "meetID": 489018,
      "gender": "female"
  },
  {
      "ID": 16,
      "name": "Mia Edgar",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "dh9on@gmail.com",
      "phone": "905-450-7631",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/women/10.jpg",
      "meetID": 942329,
      "gender": "female"
  },
  {
      "ID": 17,
      "name": "Olivia Heard",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "avnn7@gmail.com",
      "phone": "630-308-3822",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/11.jpg",
      "meetID": 599661,
      "gender": "female"
  },
  {
      "ID": 18,
      "name": "Jessica Heard",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "8q0n2@outlook.com",
      "phone": "803-508-0752",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/12.jpg",
      "meetID": 632238,
      "gender": "female"
  },
  {
      "ID": 19,
      "name": "Klein Lewis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "3pdt2@outlook.com",
      "phone": "946-518-5785",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/men/8.jpg",
      "meetID": 762257,
      "gender": "male"
  },
  {
      "ID": 20,
      "name": "William Carter",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "753vl@yahoo.com",
      "phone": "998-832-6470",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/men/9.jpg",
      "meetID": 192434,
      "gender": "male"
  },
  {
      "ID": 21,
      "name": "Nathan Carter",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "zql6k@yahoo.com",
      "phone": "752-002-6549",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/10.jpg",
      "meetID": 142898,
      "gender": "male"
  },
  {
      "ID": 22,
      "name": "William Donald",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "uw77i@outlook.com",
      "phone": "002-559-7091",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/11.jpg",
      "meetID": 592113,
      "gender": "male"
  },
  {
      "ID": 23,
      "name": "Isabella Moretti",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "oxs8k@yahoo.com",
      "phone": "494-566-8796",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/13.jpg",
      "meetID": 900758,
      "gender": "female"
  },
  {
      "ID": 24,
      "name": "Natasha Edison",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "hgtzn@yahoo.com",
      "phone": "625-691-0061",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/14.jpg",
      "meetID": 731317,
      "gender": "female"
  },
  {
      "ID": 25,
      "name": "Alger Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "whjrc@gmail.com",
      "phone": "356-961-9170",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/men/12.jpg",
      "meetID": 534497,
      "gender": "male"
  },
  {
      "ID": 26,
      "name": "Amon Lewis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "we5i1@gmail.com",
      "phone": "253-964-0225",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/13.jpg",
      "meetID": 181286,
      "gender": "male"
  },
  {
      "ID": 27,
      "name": "Kate Donald",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "5iktm@outlook.com",
      "phone": "017-831-2837",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/15.jpg",
      "meetID": 469645,
      "gender": "female"
  },
  {
      "ID": 28,
      "name": "Ava Davis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "alfwf@gmail.com",
      "phone": "829-915-2284",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/women/16.jpg",
      "meetID": 856902,
      "gender": "female"
  },
  {
      "ID": 29,
      "name": "Charles Stone",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "cdms2@outlook.com",
      "phone": "137-583-3668",
      "job": "UI/UX Designer",
      "image": "https://randomuser.me/api/portraits/men/14.jpg",
      "meetID": 407786,
      "gender": "male"
  },
  {
      "ID": 30,
      "name": "Jessica Taylor",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "a18v7@hotmail.com",
      "phone": "802-439-8570",
      "job": "UI/UX Designer",
      "image": "https://randomuser.me/api/portraits/women/17.jpg",
      "meetID": 422135,
      "gender": "female"
  },
  {
      "ID": 31,
      "name": "Sophia Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "irpxi@gmail.com",
      "phone": "786-570-3533",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/women/18.jpg",
      "meetID": 915817,
      "gender": "female"
  },
  {
      "ID": 32,
      "name": "Rebecca Donald",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "02mi1@yahoo.com",
      "phone": "488-805-9186",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/women/19.jpg",
      "meetID": 496935,
      "gender": "female"
  },
  {
      "ID": 33,
      "name": "Stephanie Sparrow",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "br56z@hotmail.com",
      "phone": "699-860-8171",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/20.jpg",
      "meetID": 329436,
      "gender": "female"
  },
  {
      "ID": 34,
      "name": "Sky Mason",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "hwa05@yahoo.com",
      "phone": "374-306-4818",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/21.jpg",
      "meetID": 197410,
      "gender": "female"
  },
  {
      "ID": 35,
      "name": "Luke Sparrow",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "lmk8a@hotmail.com",
      "phone": "077-293-5675",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/15.jpg",
      "meetID": 404863,
      "gender": "male"
  },
  {
      "ID": 36,
      "name": "Chris Jones",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "c9q75@gmail.com",
      "phone": "513-846-2687",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/16.jpg",
      "meetID": 640146,
      "gender": "male"
  },
  {
      "ID": 37,
      "name": "Robert Davis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "n4m6b@yahoo.com",
      "phone": "407-242-0266",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/men/17.jpg",
      "meetID": 334598,
      "gender": "male"
  },
  {
      "ID": 38,
      "name": "Kate Clark",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "eo6cn@yahoo.com",
      "phone": "503-117-8795",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/women/22.jpg",
      "meetID": 823138,
      "gender": "female"
  },
  {
      "ID": 39,
      "name": "Sophia Wright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "cehmc@outlook.com",
      "phone": "542-507-6987",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/women/23.jpg",
      "meetID": 365139,
      "gender": "female"
  },
  {
      "ID": 40,
      "name": "Jacob Clark",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "v6vlz@gmail.com",
      "phone": "699-820-0963",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/18.jpg",
      "meetID": 592302,
      "gender": "male"
  },
  {
      "ID": 41,
      "name": "Katie Mason",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "t0oxa@gmail.com",
      "phone": "063-597-6682",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/24.jpg",
      "meetID": 795347,
      "gender": "female"
  },
  {
      "ID": 42,
      "name": "Sophia Jefferson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "m6ixf@gmail.com",
      "phone": "686-965-4748",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/25.jpg",
      "meetID": 698621,
      "gender": "female"
  },
  {
      "ID": 43,
      "name": "Charles Taylor",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "esbuq@outlook.com",
      "phone": "613-974-6231",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/19.jpg",
      "meetID": 678239,
      "gender": "male"
  },
  {
      "ID": 44,
      "name": "Ava Wilson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "ery5n@yahoo.com",
      "phone": "638-812-8507",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/26.jpg",
      "meetID": 458617,
      "gender": "female"
  },
  {
      "ID": 45,
      "name": "Michael Sani",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "uq0w8@outlook.com",
      "phone": "925-466-3844",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/men/20.jpg",
      "meetID": 371493,
      "gender": "male"
  },
  {
      "ID": 46,
      "name": "Rebecca Wilson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "anzua@outlook.com",
      "phone": "986-132-6356",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/27.jpg",
      "meetID": 514671,
      "gender": "female"
  },
  {
      "ID": 47,
      "name": "Rebecca Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "k7efc@outlook.com",
      "phone": "998-518-8081",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/women/28.jpg",
      "meetID": 586695,
      "gender": "female"
  },
  {
      "ID": 48,
      "name": "Taylor Edison",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "5f33f@yahoo.com",
      "phone": "854-535-5210",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/women/29.jpg",
      "meetID": 634264,
      "gender": "female"
  },
  {
      "ID": 49,
      "name": "Bruce Walker",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "cgg72@outlook.com",
      "phone": "071-855-8822",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/men/21.jpg",
      "meetID": 210572,
      "gender": "male"
  },
  {
      "ID": 50,
      "name": "Louis Edison",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "fbodg@gmail.com",
      "phone": "956-333-4837",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/men/22.jpg",
      "meetID": 148381,
      "gender": "male"
  },
  {
      "ID": 51,
      "name": "Jason Jones",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "rki1b@gmail.com",
      "phone": "012-943-2404",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/23.jpg",
      "meetID": 932971,
      "gender": "male"
  },
  {
      "ID": 52,
      "name": "Ava Jones",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "q6qca@hotmail.com",
      "phone": "566-897-4975",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/30.jpg",
      "meetID": 345613,
      "gender": "female"
  },
  {
      "ID": 53,
      "name": "Michael Brown",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "zfqf4@yahoo.com",
      "phone": "468-651-9931",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/24.jpg",
      "meetID": 688373,
      "gender": "male"
  },
  {
      "ID": 54,
      "name": "Bruce Davis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "1u6v4@yahoo.com",
      "phone": "117-650-3240",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/men/25.jpg",
      "meetID": 142786,
      "gender": "male"
  },
  {
      "ID": 55,
      "name": "Jonathan Wilson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "cjesz@hotmail.com",
      "phone": "921-908-6663",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/26.jpg",
      "meetID": 545241,
      "gender": "male"
  },
  {
      "ID": 56,
      "name": "Vince Harris",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "1lrq1@yahoo.com",
      "phone": "129-320-1986",
      "job": "System Architect",
      "image": "https://randomuser.me/api/portraits/men/27.jpg",
      "meetID": 786412,
      "gender": "male"
  },
  {
      "ID": 57,
      "name": "Louise Young",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "rvd73@outlook.com",
      "phone": "059-501-0831",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/women/31.jpg",
      "meetID": 933694,
      "gender": "female"
  },
  {
      "ID": 58,
      "name": "Audrey Havik",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "g06rr@outlook.com",
      "phone": "961-545-6122",
      "job": "System Architect",
      "image": "https://randomuser.me/api/portraits/women/32.jpg",
      "meetID": 837609,
      "gender": "female"
  },
  {
      "ID": 59,
      "name": "Jason Moore",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "1e050@gmail.com",
      "phone": "876-554-7120",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/28.jpg",
      "meetID": 145667,
      "gender": "male"
  },
  {
      "ID": 60,
      "name": "Scarlet Jefferson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "jw50r@outlook.com",
      "phone": "185-783-6271",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/33.jpg",
      "meetID": 536999,
      "gender": "female"
  },
  {
      "ID": 61,
      "name": "Chris Moore",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "q2a4k@hotmail.com",
      "phone": "344-087-0183",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/men/29.jpg",
      "meetID": 323414,
      "gender": "male"
  },
  {
      "ID": 62,
      "name": "Amanda Maximoff",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "a51eu@outlook.com",
      "phone": "466-722-4493",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/34.jpg",
      "meetID": 716122,
      "gender": "female"
  },
  {
      "ID": 63,
      "name": "Benadette Walker",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "h5ftv@gmail.com",
      "phone": "812-344-8582",
      "job": "UI/UX Designer",
      "image": "https://randomuser.me/api/portraits/women/35.jpg",
      "meetID": 686644,
      "gender": "female"
  },
  {
      "ID": 64,
      "name": "Beth Wayne",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "x7tlg@yahoo.com",
      "phone": "399-010-7521",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/women/36.jpg",
      "meetID": 318000,
      "gender": "female"
  },
  {
      "ID": 65,
      "name": "Bruce Smith",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "lhf6f@hotmail.com",
      "phone": "303-962-4976",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/men/30.jpg",
      "meetID": 958169,
      "gender": "male"
  },
  {
      "ID": 66,
      "name": "Ruth Evans",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "lhrps@outlook.com",
      "phone": "951-355-8054",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/women/37.jpg",
      "meetID": 476597,
      "gender": "female"
  },
  {
      "ID": 67,
      "name": "Sophia Wesley",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "7i84i@yahoo.com",
      "phone": "108-885-0914",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/women/38.jpg",
      "meetID": 955679,
      "gender": "female"
  },
  {
      "ID": 68,
      "name": "Jane Maximoff",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "3okqz@yahoo.com",
      "phone": "327-113-3002",
      "job": "UI/UX Designer",
      "image": "https://randomuser.me/api/portraits/women/39.jpg",
      "meetID": 198019,
      "gender": "female"
  },
  {
      "ID": 69,
      "name": "Emily Donald",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "auxgg@outlook.com",
      "phone": "590-961-6236",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/40.jpg",
      "meetID": 849245,
      "gender": "female"
  },
  {
      "ID": 70,
      "name": "Wanda Wright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "as5ug@outlook.com",
      "phone": "065-489-6219",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/41.jpg",
      "meetID": 766389,
      "gender": "female"
  },
  {
      "ID": 71,
      "name": "Jane Edgar",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "hl90s@gmail.com",
      "phone": "208-549-0631",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/42.jpg",
      "meetID": 363867,
      "gender": "female"
  },
  {
      "ID": 72,
      "name": "Jason Blunt",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "t0xoc@hotmail.com",
      "phone": "714-479-1608",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/31.jpg",
      "meetID": 609407,
      "gender": "male"
  },
  {
      "ID": 73,
      "name": "Nathan Jefferson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "7bim9@yahoo.com",
      "phone": "073-305-0637",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/32.jpg",
      "meetID": 698883,
      "gender": "male"
  },
  {
      "ID": 74,
      "name": "Klein Jefferson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "y5ccx@hotmail.com",
      "phone": "598-624-4083",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/men/33.jpg",
      "meetID": 100758,
      "gender": "male"
  },
  {
      "ID": 75,
      "name": "Michael Johnson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "wgihe@gmail.com",
      "phone": "822-788-0139",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/men/34.jpg",
      "meetID": 702006,
      "gender": "male"
  },
  {
      "ID": 76,
      "name": "Audrey Brown",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "99r1h@hotmail.com",
      "phone": "341-227-4121",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/43.jpg",
      "meetID": 628778,
      "gender": "female"
  },
  {
      "ID": 77,
      "name": "Anna Edgar",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "y7lrj@hotmail.com",
      "phone": "357-892-0773",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/women/44.jpg",
      "meetID": 707408,
      "gender": "female"
  },
  {
      "ID": 78,
      "name": "Sky Havik",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "acrx7@hotmail.com",
      "phone": "239-061-4326",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/women/45.jpg",
      "meetID": 700535,
      "gender": "female"
  },
  {
      "ID": 79,
      "name": "Jessica Clark",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "jhkvd@yahoo.com",
      "phone": "364-149-7598",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/46.jpg",
      "meetID": 192985,
      "gender": "female"
  },
  {
      "ID": 80,
      "name": "Victoria Harris",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "57pd7@gmail.com",
      "phone": "474-834-2524",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/47.jpg",
      "meetID": 945275,
      "gender": "female"
  },
  {
      "ID": 81,
      "name": "Emily Wesley",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "s6yio@yahoo.com",
      "phone": "450-281-1305",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/women/48.jpg",
      "meetID": 762826,
      "gender": "female"
  },
  {
      "ID": 82,
      "name": "Audrey Sparrow",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "k6mvh@outlook.com",
      "phone": "331-646-7189",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/49.jpg",
      "meetID": 384309,
      "gender": "female"
  },
  {
      "ID": 83,
      "name": "Sky Heard",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "t0w3z@hotmail.com",
      "phone": "396-346-3823",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/50.jpg",
      "meetID": 280585,
      "gender": "female"
  },
  {
      "ID": 84,
      "name": "Luke Johnson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "tnepp@hotmail.com",
      "phone": "104-434-3967",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/35.jpg",
      "meetID": 972971,
      "gender": "male"
  },
  {
      "ID": 85,
      "name": "Chris Wilson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "p2kum@outlook.com",
      "phone": "774-858-8201",
      "job": "QA Engineer",
      "image": "https://randomuser.me/api/portraits/men/36.jpg",
      "meetID": 555825,
      "gender": "male"
  },
  {
      "ID": 86,
      "name": "Jason Evans",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "g1cr1@yahoo.com",
      "phone": "467-050-9592",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/37.jpg",
      "meetID": 308962,
      "gender": "male"
  },
  {
      "ID": 87,
      "name": "Alger Jones",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "aff3c@outlook.com",
      "phone": "759-371-0484",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/38.jpg",
      "meetID": 967602,
      "gender": "male"
  },
  {
      "ID": 88,
      "name": "Natasha Wright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "6hotn@outlook.com",
      "phone": "152-515-6055",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/women/51.jpg",
      "meetID": 359088,
      "gender": "female"
  },
  {
      "ID": 89,
      "name": "Jonathan Harris",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "vvgea@gmail.com",
      "phone": "886-545-0856",
      "job": "Full Stack Developer",
      "image": "https://randomuser.me/api/portraits/men/39.jpg",
      "meetID": 830531,
      "gender": "male"
  },
  {
      "ID": 90,
      "name": "Levi Harris",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "2lttg@gmail.com",
      "phone": "792-409-0409",
      "job": "Frontend Developer",
      "image": "https://randomuser.me/api/portraits/men/40.jpg",
      "meetID": 167463,
      "gender": "male"
  },
  {
      "ID": 91,
      "name": "Louis Blunt",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "1dos1@outlook.com",
      "phone": "801-189-9330",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/41.jpg",
      "meetID": 878800,
      "gender": "male"
  },
  {
      "ID": 92,
      "name": "Amon Taylor",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "c18et@outlook.com",
      "phone": "054-855-2089",
      "job": "Project Manager",
      "image": "https://randomuser.me/api/portraits/men/42.jpg",
      "meetID": 860039,
      "gender": "male"
  },
  {
      "ID": 93,
      "name": "Victoria Davis",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "9h6sj@hotmail.com",
      "phone": "237-637-7037",
      "job": "Software Developer",
      "image": "https://randomuser.me/api/portraits/women/52.jpg",
      "meetID": 719685,
      "gender": "female"
  },
  {
      "ID": 94,
      "name": "Beth Wesley",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "gjvi9@outlook.com",
      "phone": "792-099-5010",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/women/53.jpg",
      "meetID": 526324,
      "gender": "female"
  },
  {
      "ID": 95,
      "name": "Jane Heard",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "31tt4@outlook.com",
      "phone": "901-814-5041",
      "job": "System Architect",
      "image": "https://randomuser.me/api/portraits/women/54.jpg",
      "meetID": 326333,
      "gender": "female"
  },
  {
      "ID": 96,
      "name": "David Bright",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "2dixh@outlook.com",
      "phone": "614-466-6734",
      "job": "DevOps Engineer",
      "image": "https://randomuser.me/api/portraits/men/43.jpg",
      "meetID": 637544,
      "gender": "male"
  },
  {
      "ID": 97,
      "name": "Adam Young",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "wpn00@outlook.com",
      "phone": "449-809-9339",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/men/44.jpg",
      "meetID": 880100,
      "gender": "male"
  },
  {
      "ID": 98,
      "name": "Mia Donald",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "klnpo@yahoo.com",
      "phone": "187-998-8763",
      "job": "Product Owner",
      "image": "https://randomuser.me/api/portraits/women/55.jpg",
      "meetID": 262325,
      "gender": "female"
  },
  {
      "ID": 99,
      "name": "Nathan Johnson",
      "bio": "A dedicated professional in the tech industry, passionate about innovation and problem-solving. Has worked with multiple cross-functional teams and contributed to product growth.",
      "email": "i0itg@outlook.com",
      "phone": "636-957-1321",
      "job": "Backend Developer",
      "image": "https://randomuser.me/api/portraits/men/45.jpg",
      "meetID": 783450,
      "gender": "male"
  }
]

function Contacts() {
    const [allContacts, setAllContacts] = useState<ContactType[]>(contacts)
    const [displayedContacts, setDisplayedContacts] = useState<ContactType[]>(contacts);
    const [selectedContact, setSelectedContact] = useState<ContactType>({ID: 0, name: "", bio: "", email: "", phone: "", job: "",image: "", meetID: 0, gender: ""});
    const [isSplitPageShown, setIsSplitPageShown] = useState<true | false>(false)

    function updateSelectedContact(id: number){
        setIsSplitPageShown(true);
        let tempContact = displayedContacts.filter((item) => item.ID === id)[0];
        setSelectedContact(tempContact);
    }

    function HandleSelectChange(e: ChangeEvent<HTMLSelectElement>){
        console.log("select value is ", e.target.value);
        if(e.target.value == "ascending"){
            let contactsCopy = [...contacts];
            let tempContacts = contactsCopy.sort((a,b) => ("" + a.name).localeCompare(b.name));
            setDisplayedContacts(tempContacts);
        }
        else if(e.target.value == "descending"){
            let contactsCopy = [...contacts];
            let tempContacts = contactsCopy.sort((a,b) => ("" + b.name).localeCompare(a.name));
            setDisplayedContacts(tempContacts);
        }
        else if(e.target.value == "newest"){
            let contactsCopy = [...contacts];
            let tempContacts = contactsCopy.reverse();
            setDisplayedContacts(tempContacts);
        }
        else if(e.target.value == "oldest"){
            setDisplayedContacts(contacts);
        }
    }

    function deleteContact(contactID: number){
        let dialogueValue;
    }

  return (
    <div className='contacts-container'>
      <div className="contacts-header">
        <div className="contacts-sort">
          <h4>Sort</h4>
          <select name="filter" id="filter" onChange={HandleSelectChange}>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>

        <div className="contacts-search-bar-cont">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input type="text" name="utility-search" id="utility-search" placeholder='Name or Email...' />
        </div>

        <button className="new-contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
            <span>Add New</span>
        </button>
      </div>

      <div className="contacts-main">
      <div className={`contacts-cont ${isSplitPageShown? "contacts-cont-split" : ""}`}>
        {
          displayedContacts.map((singleContact) => {
            return <div className="contact-cont" key={singleContact.ID} onClick={() => updateSelectedContact(singleContact.ID)}>
              <div>
                <img src={singleContact.image} alt="profile-img" />
                <div className='cn-name'>
                <h4>{singleContact.name}</h4>
                <span>{singleContact.job}</span>
                </div>
              </div>

              <h4 className={`cn-job ${isSplitPageShown ? "disappear" : ""}`}>{singleContact.job}</h4>
              <h4 className={`cn-mail ${isSplitPageShown ? "disappear" : ""}`}>{singleContact.email}</h4>
              <h4 className={`cn-phone ${isSplitPageShown ? "disappear" : ""}`}>{singleContact.phone}</h4>

              <div className={`cn-more ${isSplitPageShown ? "disappear" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
              </div>
            </div>
          })
        }
      </div>

      <div className='single-contact' style={{display: `${isSplitPageShown ? "block" : "none"}`}}>
        <div className='contacts-cancel' onClick={() => setIsSplitPageShown(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
        <div className="split-top">
            <img src={selectedContact.image} alt="profile picture" />
            <div className="split-top-info">
                <h3>{selectedContact.name}</h3>
                <h4>{selectedContact.job}</h4>
                <div className="split-top-contacts">
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/></svg><span>Message</span></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></button>
                    <button onClick={() => deleteContact(selectedContact.ID)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                </div>
            </div>
        </div>

        <div className="split-main">
            <div>
                <h4>Bio</h4>
                <p>{selectedContact.bio}</p>
            </div>

            <div>
                <h4>Gender</h4>
                <p>{selectedContact.gender}</p>
            </div>

            <div>
                <h4>Email</h4>
                <p>{selectedContact.email}</p>
            </div>

            <div>
                <h4>Phone</h4>
                <p>{selectedContact.phone}</p>
            </div>

            <div>
                <h4>MeetID</h4>
                <p>{selectedContact.meetID}</p>
            </div>

            <div>
                <h4>Socials</h4>
                <div className="contact-socials">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"/></svg></div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contacts