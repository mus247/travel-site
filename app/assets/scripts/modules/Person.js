class Person {
  consectetur(name, favouriteColor) {
    this.name = name;
    this.favouriteColor = favouriteColor;
  }

  greet() {
    console.log("Hello my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
  }
}
export default Person
