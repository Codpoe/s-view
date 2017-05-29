<template>
    <div class="s-table">
        <table cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td v-if="checkable">
                        <s-checkbox :value="checked" :label="checkboxArray" style="padding: 0"></s-checkbox>
                    </td>
                    <td 
                        v-for="column in columns" 
                        :style="{
                            width: column.width || '150px',
                        }"
                        :class="[
                            's-table_cell--align-' + column.align
                        ]">
                        {{ column.head || '' }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows">
                    <td v-if="checkable">
                        <s-checkbox :value="checked" :label="index"></s-checkbox>
                    </td>
                    <td
                        v-for="i in columns.length"
                        :class="[
                            's-table_cell--align-' + columns[i - 1].align
                        ]">
                        {{ row[columns[i - 1].key] || '' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="postcss">
    @import '../common/common.css';

    :root {
        --table-cell-height: 48px;
        --table-head-font-size: 14px;
        --table-cell-font-size: 14px;
        --table-cell-line-height: 24px;
        --table-cell-padding-top-bottom: 12px;
        --table-cell-padding-left-right: 18px;
        --table-font-color: #555;
        --table-divider-color: rgba(0, 0, 0, 0.12);
        --table-hover-color: rgba(0, 0, 0, 0.06);
    }

    .s-table {
        border-collapse: collapse;
        border: none;
        background: white;
        border-radius: 2px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
        color: var(--table-font-color);

        tbody {
            tr {
                transition: all 0.24s;
                &:hover {
                    background: var(--table-hover-color);
                }
            }
        }
        td {
            border-top: 1px double var(--table-divider-color);
            vertical-align: middle;
            word-wrap: break-word;
            word-break: normal;
        }
        th, td {
            height: var(--table-cell-height);
            padding: var(--table-cell-padding-top-bottom) var(--table-cell-padding-left-right);
            text-align: left;
            line-height: var(--table-cell-line-height);
        }
        th {
            font-size: var(--table-head-font-size);
            font-weight: 700;
        }
        td {
            
        }
        .s-table_cell--align-right {
            text-align: right;
        }
        .s-table_cell--align-center {
            text-align: center;
        }
    }
</style>

<script>
    import SCheckbox from '../checkbox/checkbox.vue';

    export default {
        name: 's-table',

        components: {
            SCheckbox
        },

        props: {
            columns: { // [{key: key, head: head, align, width}, {}]
                type: Array,
                default: []
            },
            rows: {
                type: Array,
                default: []
            },
            checkable: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                checked: [],
                checkboxArray: []
            }
        },

        created() {
            //  init columns width
            this.columns.forEach((column) => {
                let { width } = column;
                if (typeof width === 'undefined') {

                }
                if (typeof width === 'number') {
                    column.width = width + 'px';
                }
            });

            // init checkboxArray
            for (let i = 0; i < this.rows.length; i ++) {
                this.checkboxArray.push(i);
            }
        },

        methods: {

        }
    }
</script>

