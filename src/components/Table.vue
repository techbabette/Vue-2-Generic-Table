<template>
    <div>
        <table class="table table-striped" v-if="itemsExist">
            <thead>
                <tr>
                    <th v-for="key in headers" :key="key">{{ key }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    <td v-for="key in keys" :key="key">{{ item[key] }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <p>No items found</p>
        </div>
    </div>
</template>
<script>
export default {
    name : "GenericTable",
    props : {
        items : {
            required : true,
            type: Array
        },
        headerMap : {
            required : false,
            type: Object
        }
    },
    computed : {
        headers : function() {
            if(this.headerMap){
                return Object.keys(this.headerMap);
            }
            if(this.itemsExist){
                let firstItem = this.items[0]
                return Object.keys(firstItem)
            }
            return [];
        },
        keys : function(){
            let keys = [];
            if(this.headerMap){
                for(var key in this.headerMap){
                    keys.push(this.headerMap[key]);
                }
                return keys
            }
            if(this.items && this.items.length){
                let firstItem = this.items[0];
                keys = Object.keys(firstItem);
                return keys
            }
            return keys;
        },
        itemsExist : function() {
            return this.items && this.items.length
        }
    }
}
</script>