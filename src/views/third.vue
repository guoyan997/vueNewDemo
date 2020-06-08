<template>
  <div class='third'>
    <quill-editor class="editor"
                  v-model="ruleForm.content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor' // 调用编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
  ['blockquote', 'code-block'], // 引用  代码块
  [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }], // 1、2 级标题
  [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
  [{ script: 'sub' }, { script: 'super' }], // 上标/下标
  [{ indent: '-1' }, { indent: '+1' }], // 缩进
  // [{'direction': 'rtl'}],                         // 文本方向
  [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
  [{ font: [] }], // 字体种类
  [{ align: [] }], // 对齐方式
  ['clean'] // 清除文本格式
]
export default {
  name: 'third',
  components: {
    quillEditor // 使用编辑器
  },
  data () {
    return {
      editorOption: {
        theme: 'snow',
        placeholder: '最多2000个字',
        modules: {
          toolbar: {
            container: toolbarOptions
            // container: '#toolbar',
          }
        }
      },
      ruleForm: {
        content: ''
      }
    }
  },

  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },

  methods: {
    onEditorBlur () {

    },
    onEditorFocus () {

    },
    onEditorChange () {
      this.$emit('input', this.ruleForm.content)
    }
  }
}
</script>
<style lang='scss' scoped>
.third {
  height: 100%;
  overflow: auto;

  .editor {
    line-height: normal;
    height: 220px;
  }
  .ql-snow .ql-tooltip[data-mode='link']::before {
    content: '请输入链接地址:';
  }
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode='video']::before {
    content: '请输入视频地址:';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: '10px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: '18px';
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: '32px';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: '文本';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: '标题1';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: '标题2';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: '标题3';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: '标题4';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: '标题5';
  }
  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: '标题6';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: '标准字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: '衬线字体';
  }
  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: '等宽字体';
  }
  #disabledMsg.el-button.is-disabled,
  .el-button.is-disabled:focus,
  .el-button.is-disabled:hover {
    color: #bfd9d8;
    background-color: #eef6f6;
    border-color: #d1e5e5;
  }
}
</style>
