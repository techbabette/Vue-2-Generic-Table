<template>
     <div class="mb-3">
        <label v-if="label" :for="id" class="form-label">{{ label }}</label>
        <select :style="style" v-model="localValue" :id="id" class="form-select" aria-label="Default select example">
            <option v-for="item in items" :value="item[valueProperty]" :key="item[valueProperty]">{{ item[textProperty] }}</option>
        </select>
        <div v-if="showHint" id="emailHelp" class="form-text">{{ hint }}</div>
        <div v-if="error" class="alert p-1 mt-2 alert-danger" role="alert">
            {{ error }}
        </div>
     </div>
</template>
<script>
export default {
    name: "DropDown",
    mounted() {
        
        if(!this.items || !this.items.length) {
            console.warn("Non emptry array is expected for property Items")
        } else {
            if(!this.items[0][this.textProperty]) {
                console.warn(`${this.textProperty} is missing on array objects`)
            }
            if(!this.items[0][this.valueProperty]) {
                console.warn(`${this.valueProperty} is missing on array objects`)
            }

        }
        this.localValue = this.value
    },
    props: {
        error: {
            type: String
        },
        value: {
            type: [String, Number]
        },
        textProperty: {
            type: String,
            default: "text"
        },
        valueProperty: {
            type: String,
            default: "value"
        },
        label: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            required: true
        },
        hint: {
            type: String,
            default: ""
        },
        id: {
            type: String
        },
    },
    data() {
        return {
            localValue : undefined
        }
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