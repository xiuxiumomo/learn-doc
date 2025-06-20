### 链表
> 链表的结构

### append方法
> 该方法的示意图请看append.drawio

- 1.当要推入的数据是第一个的时候，直接将头部指向该新元素即可
- 2.通过指针移动，找到最后一个next指向空的元素，将当前指针的next指向新元素即可
- 3.长度加1

![图片]('./append.drawio')

### insert(position,data)方法
> 该方法的示意图查看insert.drawio
- 1.如果要插入的位置在最前面,将新元素的next指向第一个，然后将头指向新元素即可。此时你会惊喜的发现第一个元素就是原来的头
- 2.将元素插在中间的某个位置。a.用指针找到该位置，newNode.next等于当前指针。b.在设置一个前指针，让前指针的next指向newNode
- 3.长度加1


### get(position)方法

- 1.首先要进行边界判断
- 2.设置参数index和指针
- 3.循环指针，判断index和position的关系将指针停留

### indexOf(data)方法返回当前data的索引

### update(position,data) 修改

### removeAt(position) 删除

## remove(data) 删除