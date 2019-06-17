### 第一组(变量导出引入)

```
export function fn(){

}

import {fn} from './xx';

```
### 第二组(默认)

```
export default fn(){

}

import fn from './xx';

```
<!-- 吉 -->
### 第三组(批量导出)

```
export * from './xx';

import {} from './xx';

```

### 第四组(批量引用)

```

as能改名字

import * as obj from './xx';

console.log(obj.fn);

```

