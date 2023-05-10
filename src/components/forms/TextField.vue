<template>
    <div class="mb-3">
        <label v-if="label" :for="id" class="form-label">{{ label }}</label>
        <textarea :style="style" v-model="localValue" v-if="multiline" :rows="rowCount" class="form-control" :id="id"></textarea>
        <input :style="style" v-model="localValue" v-else :type="type" class="form-control" :id="id" aria-describedby="emailHelp">
        <div v-if="showHint" id="emailHelp" class="form-text">{{ hint }}</div>
        <div v-if="error" class="alert p-1 mt-2 alert-danger" role="alert">
            {{ error }}
        </div>
    </div>
</template>
<script>
export default {
    name: "TextField",
    props: {
        value: {
            required: false,
            type: String
        },
        rowCount: {
            type: String,
            default: "3"
        },
        multiline: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "text"
        },
        id: {
            type: String
        },
        hint: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        error: {
            type: String
        }
    },
    data() {
        return {
            localValue: ""
        }
    },
    mounted() {
        this.localValue = this.value
    },
    computed: {
        style: function() {
            return this.error ? "border: 1px solid red" : ""
        },
        showHint: function() {
            return !this.error && this.hint;
        }
    },  
    watch: {
        localValue: function() {
            this.$emit("input", this.localValue)
        },
        value: function() {
            this.localValue = this.value
        }
    }
}
</script>