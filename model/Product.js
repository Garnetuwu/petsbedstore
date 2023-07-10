class Product {
  constructor(object) {
    (this.name = object.name),
      (this.minLength = object.minLength),
      (this.length = object.length),
      (this.width = object.width),
      (this.minWidth = object.minWidth),
      (this.amount = object.amount);
    (this.baseMaterial = object.baseMaterial),
      (this.coverMaterial = object.coverMaterial),
      (this.innerMaterial = object.innerMaterial),
      (this.originalPrice = object.originalPrice),
      (this.basePrice =
        this.originalPrice +
        this.baseMaterial.addUpPrice +
        this.coverMaterial.addUpPrice +
        this.innerMaterial.addUpPrice),
      (this.finalPrice =
        this.basePrice *
        ((this.length - this.minLength) / 50 + 1) *
        ((this.width - this.minWidth) / 50 + 1) *
        this.amount);
  }
}

export default Product;
