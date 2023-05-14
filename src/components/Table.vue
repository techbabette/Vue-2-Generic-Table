<template>
    <div>
        <table class="table table-striped" v-if="itemsExist">
            <thead>
                <tr>
                    <th v-for="key in headers" :key="key">{{ $t("table." + key) }}</th>
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
            type: Array
        }
    },
    computed : {
        headers : function() {
            let keys = [];
            if(this.headerMap){
                for(let elem of this.headerMap){
                    keys.push(elem.Header);
                }
                return keys
            }
            if(this.itemsExist){
                let firstItem = this.items[0]
                return Object.keys(firstItem)
            }
            return keys;
        },
        keys : function(){
            let keys = [];
            if(this.headerMap){
                for(let elem of this.headerMap){
                    keys.push(elem.Key);
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