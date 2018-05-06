import { observable, action, toJS, autorun } from "mobx";

class store1 {
  @observable value1 = { text: "first" };
  @observable arrayTest = [];
  @action("pushed to arrayTest")
  pushArrayTest = obj => this.arrayTest.push(obj);
}

const newStore1 = new store1();

autorun(() => {
  console.log("autorun: ", toJS(newStore1));
});

export default newStore1;
