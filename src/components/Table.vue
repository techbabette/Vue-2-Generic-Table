<template>
    <div>

    </div>
</template>
<script>
export default{
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
    }
}
</script>