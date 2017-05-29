# Table - 表格

## 用法

<div class="demo">
    <s-table
        :columns="[{
            key: 'fullName',
            head: 'Full Name'
        }, {
            key: 'firstName',
            head: 'First Name'
        }, {
            key: 'lastName',
            head: 'Last Name'
        }]"
        :rows="[{
            fullName: 'Wu Yifan abcd ef ghijklmn opqrs tuvwxyz',
            firstName: 'Yifan',
            lastName: 'Wu'
        }, {
            fullName: 'Han Meimei',
            firstName: 'Meimei',
            lastName: 'Han'
        }, {
            fullName: 'Li Lei',
            firstName: 'Lei',
            lastName: 'Li'
        }]">
    </s-table>
</div>

```
<div class="demo">
    <s-table
        :columns="[{
            key: 'fullName',
            head: 'Full Name'
        }, {
            key: 'firstName',
            head: 'First Name'
        }, {
            key: 'lastName',
            head: 'Last Name'
        }]"
        :rows="[{
            fullName: 'Wu Yifan',
            firstName: 'Yifan',
            lastName: 'Wu'
        }, {
            fullName: 'Han Meimei',
            firstName: 'Meimei',
            three: 'Han'
        }, {
            fullName: 'Li Lei',
            firstName: 'Lei',
            lastName: 'Li'
        }]">
    </s-table>
</div>
```

表格的数据默认是居左对齐，可以通过给`columns`数组中的列对象传递`align`参数，可选值有：
- `center`

  居中对齐
- `right`

  居右对齐

由于默认是居左对齐，所以不必要设置`align`为`left`。实际上，除了`center`和`right`这两个值外，给`align`设置其他值都是无效。

<div class="demo">
    <s-table
        :columns="[{
            key: 'fullName',
            head: 'Full Name'
        }, {
            key: 'firstName',
            head: 'First Name',
            align: 'right'
        }, {
            key: 'lastName',
            head: 'Last Name',
            align: 'right'
        }]"
        :rows="[{
            fullName: 'Wu Yifan',
            firstName: 'Yifan',
            lastName: 'Wu'
        }, {
            fullName: 'Han Meimei',
            firstName: 'Meimei',
            lastName: 'Han'
        }, {
            fullName: 'Li Lei',
            firstName: 'Lei',
            lastName: 'Li'
        }]">
    </s-table>
</div>

```
<div class="demo">
    <s-table
        :columns="[{
            key: 'fullName',
            head: 'Full Name'
        }, {
            key: 'firstName',
            head: 'First Name',
            align: 'right'
        }, {
            key: 'lastName',
            head: 'Last Name',
            align: 'right'
        }]"
        :rows="[{
            fullName: 'Wu Yifan',
            firstName: 'Yifan',
            lastName: 'Wu'
        }, {
            fullName: 'Han Meimei',
            firstName: 'Meimei',
            lastName: 'Han'
        }, {
            fullName: 'Li Lei',
            firstName: 'Lei',
            lastName: 'Li'
        }]">
    </s-table>
</div>
```

