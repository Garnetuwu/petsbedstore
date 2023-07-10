export const DUMMY_PRODUCTS = [
  {
    id: "001",
    img: [
      "https://images.unsplash.com/photo-1535126320463-c5c1b26b3e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1638745181236-adc4c461a09e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxkb2clMjBiZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1535126320463-c5c1b26b3e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1638745181236-adc4c461a09e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxkb2clMjBiZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    category: ["dog", "cat"],
    length: [40, 120],
    width: [20, 60],
    name: "The Cloud",
    price: 50,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
  {
    id: "002",
    img: [
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    ],
    category: ["dog"],
    length: [50, 110],
    width: [20, 60],
    name: "The Established",
    price: 70,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
  {
    id: "003",
    img: [
      "https://images.unsplash.com/photo-1628195787435-4d64a0db4d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    ],
    length: [30, 90],
    width: [20, 60],
    category: ["dog"],
    name: "The Stormy Night",
    price: 55,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
  {
    id: "004",
    img: [
      "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    ],
    length: [40, 80],
    width: [20, 60],
    category: ["dog"],
    name: "The Chaise Lounge",
    price: 49,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
  {
    id: "005",
    img: [
      "https://images.unsplash.com/photo-1618718556523-96b0ee6bf149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    ],
    length: [55, 130],
    width: [20, 60],
    category: ["dog"],
    name: "The Summer Picnic",
    price: 75,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
  {
    id: "006",
    img: [
      "https://images.unsplash.com/photo-1638745181236-adc4c461a09e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHxkb2clMjBiZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
    length: [60, 100],
    width: [20, 60],
    category: ["dog"],
    name: "The Evening Crash",
    price: 66,
    materials: {
      baseMaterial: "bm1",
      coverMaterial: "cm1",
      innerMaterial: "im2",
    },
  },
];

export const DUMMY_MATERIALS = {
  base: [
    { id: "bm1", name: "oak wood", img: "bm1.png", addUpPrice: 0 },
    { id: "bm2", name: "canvas", img: "bm2.png", addUpPrice: 25 },
    { id: "bm3", name: "pine wood", img: "bm3.png", addUpPrice: 25 },
    { id: "bm4", name: "wicker", img: "bm4.png", addUpPrice: 25 },
    { id: "bm5", name: "walnut wood", img: "bm5.png", addUpPrice: 25 },
    { id: "bm6", name: "other", img: "bm1.png", addUpPrice: 25 },
  ],
  cover: [
    { id: "cm1", name: "oak wood", img: "bm2.png", addUpPrice: 0 },
    { id: "cm2", name: "canvas", img: "bm3.png", addUpPrice: 25 },
    { id: "cm3", name: "pine wood", img: "bm5.png", addUpPrice: 25 },
    { id: "cm4", name: "wicker", img: "bm4.png", addUpPrice: 25 },
    { id: "cm5", name: "walnut wood", img: "bm2.png", addUpPrice: 25 },
    { id: "cm6", name: "other", img: "bm1.png", addUpPrice: 25 },
  ],
  inner: [
    { id: "im1", name: "cashmere", img: "im1.png", addUpPrice: 50 },
    { id: "im2", name: "straw", img: "im4.png", addUpPrice: 0 },
    { id: "im3", name: "cotton", img: "im2.png", addUpPrice: 30 },
    { id: "im4", name: "natural dried beans", img: "im5.png", addUpPrice: 25 },
    { id: "im5", name: "goose feather", img: "im3.png", addUpPrice: 60 },
  ],
};
