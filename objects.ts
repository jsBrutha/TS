let person = {
  name: "John",
  age: 30,
};

// Object type is the most liberal tyope in TypeScript, you can assign to an object

let newCar: {} = {
  brand: "Toyota",
  year: 2019,
};

// let post: {
//   title: string;
//   daysOld: number;
//   published: boolean;
//   date: Date;
// } = {
//   title: "New Post",
//   daysOld: 10,
//   published: true,
//   date: new Date(),
// };

// Type alias
type Post = {
  title: string;
  daysOld: number;
  published: boolean;
  date: Date;
  awards: Award;
  catergory?: string; // optional property
};
type Author = {
  name: string;
  email: string;
  isBlocked: boolean;
  readonly numberOfPosts: number; // readonly property
};

// index signature
type Award = {
  [key: string]: AwardDetail;
};

type AwardDetail = {
  title: string;
  date: Date;
};

// Type annotation
let post: Post = {
  title: "New Post",
  daysOld: 10,
  published: true,
  date: new Date(),
  awards: {
    "Best Post": {
      title: "Best Post",
      date: new Date(),
    },
  },
};

// union type in object

type Dog = {
  name: string;
  barks: boolean;
  wagsTail: boolean;
};

type Cat = {
  name: string;
  meows: boolean;
};

type CatOrDog = Dog | Cat;

type Contact = {
  email: string;
  phone: number;
};
type Preferences = {
  theme: "dark" | "light";
  language: "English" | "Spanish";
  [key: string]: any;
};

type User = {
  readonly id: number;
  name: string;
  age?: number;
  contact: Contact;
  preferences: Preferences;
};

const user: User = {
  id: 1,
  name: "John",
  contact: {
    email: "jdd@any.cm",
    phone: 1234567890,
  },
  preferences: {
    theme: "dark",
    language: "English",
  },
};

// discriminated union
type Circle = {
  kind: "circle";
  radius: number;
};
type Square = {
  kind: "square";
  sideLength: number;
};
type Shape = Circle | Square;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

// Intersection types
type Catti = {
  name: string;
  purrs: boolean;
  color: string;
};

type Doggi = {
  name: string;
  barks: boolean;
  wagsTail: boolean;
};

type CatDog = Catti & Doggi; // CatDog is a type that has all the properties of Catti and Doggi
