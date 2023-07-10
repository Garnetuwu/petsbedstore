class Product {
  constructor(object) {
    (this.name = object.name),
      (this.minLength = object.minLength),
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
      (this.finalPrice = this.basePrice * this.amount);
  }
}

export default Product;
