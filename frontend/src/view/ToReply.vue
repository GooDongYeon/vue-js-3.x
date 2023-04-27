<template>
  <div class="wrap">
    <div class="countreply">
      <button
        class="icons"
        @click="good">
        <font-awesome-icon
          :icon="['far', 'heart']"
          :class="{ hearticons: isRed }" />
      </button> 좋아요
      <div class="icons">
        <font-awesome-icon
          :icon="['far', 'comment-dots']"
          class="replyicons" />
      </div>
      댓글 {{ form?.replyCount }}
    </div>
    <hr style="color: #bebebe; width: 100%;" />
    <br />

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
          {{ reply?.user?.nickname }}({{ reply?.user?.username }})
        </div>
        <div class="innercontent">
          {{ reply?.text }}
        </div>
        <div class="innerCreate">
          <div class="createDate">
            {{ reply?.formattedCreatedDate }}
          </div>
          <div class="reBtn">
            <button @click="writeReply">
              답글쓰기
            </button>
          </div>
        </div>
        <div class="inneredit">
          <button class="replyedit">
            수정
          </button>
          <button
            class="replyedit"
            @click="removereply">
            삭제
          </button>
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

const isRed = ref(false)

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
const bno = 1

const state = reactive({
  nickname: '닉네임',
  text: '',
  createdDate: '',
})

// 댓글요청
const getreply = () => {
  console.log(state)
  axios.get(URL + `/board/view/${bno}`)
    .then((res) => {
      console.log('요청받은 데이터', res.data)
      form.value = res.data
      // console.log(form.value.replies[3].text)
      // console.log(form.value.writerDto.username)
    })
    .catch(() => {
      console.log('해당 게시물에 댓글은 없습니다.')
    })
}

const rno = 13
// 댓글삭제
const removereply = async () => {
  if (confirm('삭제하시겠습니까?')) {
    await axios.delete(URL + `/reply/delete/${rno}`)
      .then((res) => {
        console.log('댓글삭제 데이터', res.data)
        form.value = res.data
        console.log('해당게시글이 삭제되었습니다.')
        router.push({ path: 'reply' })
        window.location.reload(true)
      })
      .catch(() => {
        console.log('해당 댓글을 삭제할 수 없습니다.')
      })
  }
}

onMounted(() => {
  getreply()
})

// 댓글창 조건
function checkRows() {
  const element = document.querySelector('textarea')
  const maxWidth = 500
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

function good() {
  isRed.value = !isRed.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Open+Sans:ital,wght@0,300;0,600;1,300;1,600&family=Poor+Story&family=Poppins:wght@300;400;500;600;700&display=swap');
@import '@/assets/reply.css';
</style>
