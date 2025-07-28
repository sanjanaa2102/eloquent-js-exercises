class Vec 
{
  constructor(x, y) 
  {
    this.x = x;
    this.y = y;
  }

  plus(other) 
  {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) 
  {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() 
  {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(8, 3).plus(new Vec(5, 2)));

console.log(new Vec(21, 22).minus(new Vec(43, 53)));

console.log(new Vec(1, 1).length);
