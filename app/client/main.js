import mobx from 'mobx';
import {test} from 'packageA';

console.log(`from app:`,mobx.$mobx);

test();

console.log(`mobx instances count:`,window.__mobxInstanceCount)
