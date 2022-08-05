export const state = () => ({
  products: [
    {
      id: 1,
      category: "Clothing",
      added: "10 days ago",
      name: "Men's Armless Tanks",
      longDescription: "Tank tops help you to show off your arms and shoulders, increase ventilation for those hotter days and can significantly improve comfort levels.",
      pastedBy: "Andy Hilton"
    },
    {
      id: 1,
      category: "Footwear",
      added: "2 days ago",
      name: "Nike High-top Sneakers",
      longDescription: "Tank tops help you to show off your arms and shoulders, increase ventilation for those hotter days and can significantly improve comfort levels.",
      pastedBy: "Suzan Gilmore"
    },
  ]
})

export const getters = {
  getProducts(state) {
    return state.counter
  }
}
