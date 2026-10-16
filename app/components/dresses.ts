export type Dress = {
  id: number;
  name: string;
  designer: string;
  category: "Lahnga" | "Maxi" | "Sherwani";
  price: number;
  image: string;
  color: string;
};

export const dresses: Dress[] = [
  {
    id: 1,
    name: "The Margot",
    designer: "House of CB",
    category: "Lahnga",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
    color: "Dusty rose",
  },
  {
    id: 2,
    name: "Satin Reverie",
    designer: "Bec + Bridge",
    category: "Maxi",
    price: 110,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    color: "Champagne",
  },
  {
    id: 3,
    name: "The Clementine",
    designer: "Self-Portrait",
    category: "Lahnga",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
    color: "Ivory",
  },
  {
    id: 4,
    name: "Sunday in June",
    designer: "Aje",
    category: "Maxi",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=900&q=85",
    color: "Butter yellow",
  },
  {
    id: 5,
    name: "The Heirloom",
    designer: "Grace Loves Lace",
    category: "Sherwani",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    color: "Soft white",
  },
  {
    id: 6,
    name: "Afterglow",
    designer: "Rat & Boa",
    category: "Sherwani",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
    color: "Midnight",
  },
];
