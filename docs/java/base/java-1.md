# HashMap 和 HashSet 区别

看过 HashSet 源码的人就应该知道：HashSet 底层就是基于 HashMap 实现的。（HashSet 的源码非常非常少，除了 clone()、writeObject()、readObject() 是 HashSet 本身实现之外，其他方法都是直接调用 HashMap 中的方法。

| 区别       | HashSet          | HashMap                       |
| ---------- | ---------------- | ----------------------------- |
| 内部实现   | 基于HashMap      | 基于数组和链表                |
| 元素特点   | 无序不重复       | 键值对,键不可重复             |
| implements | Set              | Map                           |
| hashCode   | 来自元素自身属性 | hashCode(key)^hashCode(value) |
| 检索速度   | 慢               | 快                            |

#### HashSet 如何检查重复

当对象 `add()` 入 HashSet 时，会先计算对象的 hashcode 值，来判断对象加入的位置，同时也会与其他加入的对象的 hashcode 值作比较；如果没有相符的 hashcode，HashSet 会假设对象没有重复出现；但如果发现有相同 hashcode 值的对象，这时会调用 `equals()` 方法来检查 hashcode 相等的对象是否真的相等。如果两者相同，HashSet 就不会让加入操作成功。

#### hashCode() 与 equals() 的相关规定

1. 如果两个对象相等，则 hashcode 也相同；
2. 如果两个对象相等，调用 equals() 方法返回true；
3. 如果两个对象有相同的 hashcode，那它们也不一定是相等的；

综上，**equals() 方法被覆盖过，则 hashCode() 方法也必须被覆盖**；hashCode() 的默认行为，是对堆上的对象产生独特值，如果没有重写 hashCode()，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）。

#### == 与 equals() 的区别

`==`是指引用是否相同，是对内存地址进行比较；
 `equals()`指的是值是否相同，是对字符串的内容进行比较。
