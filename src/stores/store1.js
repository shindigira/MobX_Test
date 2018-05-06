import { observable, action, toJS, autorun } from "mobx";
import { extendObservable } from "mobx";

class store1 {
  @observable myObj = {};
  // @action("add property to myObj")
  // addStuff = stuff => {
  //   this.myObj.newlyAdded = stuff;
  // };
  @action("add property to myObj with extendObservable")
  addStuff = stuff => {
    extendObservable(this.myObj, { newlyAdded: stuff });
    // this.myObj.newlyAdded = stuff;
  };
}

const newStore1 = new store1();

autorun(() => {
  console.log("autorun: ", toJS(newStore1));
});

export default newStore1;
