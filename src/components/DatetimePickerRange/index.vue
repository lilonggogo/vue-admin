<template>
  <div class="datetime-picker-range">
    <el-date-picker
      v-model="timeRange"
      :type="type"
      :placeholder="placeholder"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :readonly="readonly"
      :disabled="disabled"
      :editable="editable"
      :clearable="clearable"
      :value-format="valueFormat"
      :format="format"
      :picker-options="pickerOptions"
      :default-time="defaultTime"/>
  </div>
</template>

<script>
export default {
  name: 'DatetimePickerRange',
  props: {
    type: {
      type: String,
      default: 'datetimerange'
    },
    placeholder: {
      type: String,
      default: ''
    },
    startPlaceholder: {
      type: String,
      default: ''
    },
    endPlaceholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    startKey: {
      type: String,
      default: 'endTime'
    },
    endKey: {
      type: String,
      default: 'startTime'
    },
    range: {
      type: Object,
      required: true
    },
    defaultTime: {
      type: Array,
      default: () => ['00:00:00', '00:00:00']
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {
          disabledDate: () => false
        }
      }
    }
  },
  data() {
    return {
      timeRange: []
    }
  },
  watch: {
    timeRange() {
      if (this.timeRange && this.timeRange.length === 2) {
        this.range[this.startKey] = this.timeRange[0]
        this.range[this.endKey] = this.timeRange[1]
      } else {
        this.range[this.startKey] = ''
        this.range[this.endKey] = ''
      }
    }
  },
  created() {
    this.timeRange = this.defaultValue
  }
}
</script>

<style lang="scss" scoped>
</style>
