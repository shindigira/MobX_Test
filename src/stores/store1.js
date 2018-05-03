import { observable } from "mobx";

class store1 {
  @observable value1 = { text: "first" };
}

export default new store1();
