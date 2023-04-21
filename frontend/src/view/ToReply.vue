<template>
  <div class="wrap">
    <div class="reply-title">
      <h3>
        댓글
      </h3>
    </div>

    <div
      ref="contArea"
      class="reply-container">
      <div class="nick-text">
        {{ 'username1' }}
      </div>
      <div class="reply-text">
        <textarea
          ref="textArea"
          v-model="reply_data.text"
          placeholder="댓글을 남겨보세요"
          @input="checkRows"></textarea>
      </div>
      <div class="addBtn">
        <button @click="addreply">
          댓글달기
        </button>
      </div>
    </div>
    <br />
    <hr style="color: #bebebe; width: 100%;" />

    <div class="reply-content">
      <div
        v-for="reply in form.replies"
        :key="reply"
        class="innerText">
        <div class="inneruser">
          {{ reply?.user?.username }}
        </div>
        <div class="createDate">
          {{ reply?.formattedCreatedDate }}
        </div>
        <div class="innercontent">
          {{ reply?.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { URL } from '@/components/global'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import axios from 'axios'

const text = ref('')
const textArea = ref()
const contArea = ref()
const forms = ref([])

// 댓글 저장
const reply_data = reactive({
  username: 'username1',
  text: '',
  bno: 37
})

const addreply = () => {
  let data = {
    username: reply_data.username,
    text: reply_data.text,
    bno: reply_data.bno
  }
  console.log(reply_data)

  axios.post(URL + '/reply/post', data)
    .then(res => {
      console.log(res.data)
      forms.value = res.data
      console.log(forms.value.username)
    })
    .catch('error')
  router.push({
    path: '/reply',
  })
}

// 댓글 바인딩
const form = ref('')
const bno = 37

const state = reactive({
  nickname: '닉네임',
  text: '',
  createdDate: '',
})

const getreply = () => {
  console.log(state)
  axios.get(URL + `/board/view/${bno}`)
  .then((res) => {
    console.log('받은데이터', res.data)
    form.value = res.data
    console.log(form.value.replies[3].text)
    console.log(form.value.writerDto.username)
  })
  .catch(()=>{
    console.log('해당 게시물에 댓글은 없습니다.')
  })

}
onMounted(() => {
  getreply()
})

function checkRows() {
  const element = document.querySelector('textarea')
  const maxWidth = 450
  // const lineHeight = parseInt(getComputedStyle(element).lineHeight, 10)
  const maxLines = 3
  const maxChars = Math.floor(maxWidth / (getComputedStyle(element).fontSize.slice(0, -2) * 0.6))
  let newText = ''
  let lines = 0
  text.value.split('\n').forEach(line => {
    if (line.length > maxChars) {
      let startIndex = 0
      while (startIndex < line.length) {
        newText += line.substring(startIndex, startIndex + maxChars) + '\n'
        startIndex += maxChars
        lines++
        if (lines === maxLines) {
          break
        }
      }
    } else {
      newText += line + '\n'
      lines++
    }
    if (lines === maxLines) {
      return
    }
  })
  text.value = newText.slice(0, -1)
  textArea.value.style.height = '1px'
  textArea.value.style.height = (12 + textArea.value.scrollHeight) + 'px'
  contArea.value.style.height = '1px'
  contArea.value.style.height = (12 + contArea.value.scrollHeight) + 'px'
}

</script>

<style scoped>
@import '@/assets/reply.css';
</style>
