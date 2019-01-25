import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class DataTypes extends Vue {
  public name: string = 'qbrao';
  public age: number = 18;
  public isMale: boolean = true;
  public n: null = null; // 不初始化为 null 会报错
  public u: undefined = undefined;
  public isVoid: void = undefined; // 变量定义为void，就只能赋值为undefined和null。所以没太大的作用。
  public hobby: string | boolean | number = ''; // 联合类型
  public student: IPersonExtend = {
    id: 1,
    name: 'leo',
    age: 15,
    hobby: '吃饭',
    address: '深圳蛇口',
  };
  public arrayList: IArray = [1, 2, 3, '4'];

  // 如果参数的类型是any，length就会报错。因为this.hobby的类型可能是number，但是number是没有length属性的。
  public testUnionFunction(boby: string) {
    this.hobby = boby
    alert(this.hobby.length)
  }

  // 函数有返回值必须指的类型
  public isAdmin(name: string): boolean {
    return name === 'qbrao'
  }

  // void表示函数没有返回值
  public alertMsg(msg: string): void {
    alert(msg)
  }

  // 使用接口来实现对象类型的约束
  public getStudent(person: IPerson) {
    return `学生的名字是：${person.name}，年龄为：${person.age}`
  }

  // this 测试
  public thisTest() {
    this.name = 'aaaa'
  }
  public thisArrowTest = () => {
    this.name = 'bbbb'
  }
}

interface IPerson {
  name: string;
  age: number;
}

interface IPersonExtend {
  readonly id: number;
  name: string;
  age: number;
  [propName: string]: any;
}

// 使用接口表示数组
interface IArray {
  [propName: number]: any;
};
