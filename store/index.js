export const state = () => ({
  products: [
    {
      id: 1,
      category: "Clothing",
      added: "10 days ago",
      name: "Men's Armless Tanks",
      longDescription: "Tank tops help you to show off your arms and shoulders, increase ventilation for those hotter days and can significantly improve comfort levels.",
      pastedBy: "Andy Hilton",
      avatar: "https://i.pravatar.cc/300"
    },
    {
      id: 2,
      category: "Footwear",
      added: "2 days ago",
      name: "Nike High-top Sneakers",
      longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie rhoncus blandit. Etiam dolor nunc, scelerisque et luctus vel, sollicitudin ut nisl. Praesent posuere laoreet rutrum.",
      pastedBy: "Suzan Gilmore",
      avatar: "https://i.pravatar.cc/300"
    },
    {
      id: 3,
      category: "Backpacks",
      added: "1 days ago",
      name: "Mount Everest Backpacks",
      longDescription: "Suspendisse consequat nisl in nisl suscipit, et pharetra ex commodo. Mauris lobortis fermentum velit eu fermentum. Nunc feugiat id odio eget vulputate.",
      pastedBy: "Markus Henson",
      avatar: "https://i.pravatar.cc/300",
    },
    {
      id: 4,
      category: "Clothing",
      added: "9 days ago",
      name: "Demin Leather Premium Jackets",
      longDescription: "Proin sollicitudin nulla magna, et blandit metus condimentum luctus. Pellentesque vitae lacus laoreet, ornare mauris eget, tincidunt urna.",
      pastedBy: "Jack Myers",
      avatar: "https://i.pravatar.cc/300",
    },
  ]
})

export const getters = {
  getProducts(state) {
    return state.products
  }
}
