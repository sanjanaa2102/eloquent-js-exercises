class Group 
{
  #members = [];

  add(value) 
  {
    if (!this.has(value)) 
    {
      this.#members.push(value);
    }
  }

  delete(value)
  {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) 
  {
    return this.#members.includes(value);
  }

  static from(collection) 
  {
    let group = new Group;
    for (let value of collection) 
    {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(33));

group.add(5);
group.delete(2);
console.log(group.has(22));
