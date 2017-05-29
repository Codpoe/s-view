# Table - 表格

## 基本用法

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
            lastName: 'Han'
        }, {
            fullName: 'Li Lei',
            firstName: 'Lei',
            lastName: 'Li'
        }]">
    </s-table>
</div>

```
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
```
## 对齐方式

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
```

## 带复选框的表格
可以为`s-table`设置`checkable`属性，当`:checkable="true"`时，表格的最左列会变为复选框列，而最上面的复选框是全选框：

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
        }]"
        :checkable="true">
    </s-table>
</div>

```
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
    }]"
    :checkable="true">
</s-table>
```

## 配置

<div class="demo">
    <s-table
        :columns="[{
            key: 'argument',
            head: '参数'
        }, {
            key: 'type',
            head: '类型'
        }, {
            key: 'optional',
            head: '可选值'
        }, {
            key: 'default',
            head: '默认值'
        }, {
            key: 'introduction',
            head: '说明'
        }]"
        :rows="[{
            argument: 'columns',
            type: 'Array',
            optional: '-',
            default: '[]',
            introduction: '定义表格的列，其中的每个数组元素都是对象，包括 key, head, width 属性'
        }, {
            argument: 'key',
            type: 'String',
            optional: '-',
            default: '-',
            introduction: '列的键名，用于给 rows 添加数据'
        }, {
            argument: 'head',
            type: 'String',
            optional: '-',
            default: '-',
            introduction: '表头名'
        }, {
            argument: 'width',
            type: 'Number, String with ext - px, %',
            optional: '-',
            default: '150px',
            introduction: '列宽'
        }, {
            argument: 'checkable',
            type: 'Boolean',
            optional: '-',
            default: 'false',
            introduction: '是否可选'
        }]">
    </s-table>
</div>

