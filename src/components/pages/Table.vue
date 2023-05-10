<template>
    <div>
        <GenericTable :items="items" :headerMap="headerMap"/>
    </div>
</template>
<script>
import GenericTable from "../Table"
export default {
    name : "TablePage",
    components : {
        GenericTable
    },
    data : function(){
        return {
            items : [
                {"Naziv" : "Item 1", "Cena" : 50, "Cena transporta" : "20"},
                {"Naziv" : "Item 2", "Cena" : 80, "Cena transporta" : "50"},
                {"Naziv" : "Item 3", "Cena" : 40, "Cena transporta" : "10"}
            ],
            headerMap : {
                "Price" : "Cena",
                "Shipping costs" : "Cena transporta",
                "Title" : "Naziv"
            }
        }
    }
}
</script>