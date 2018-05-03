import { observable } from "mobx";

class store2 {
  @observable value2 = { text: "second" };
}

export default new store2();
