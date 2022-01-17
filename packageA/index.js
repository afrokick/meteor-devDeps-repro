import mobx from 'mobx';

export function test() {
  console.log(`from packageA:`,mobx.$mobx);
}
