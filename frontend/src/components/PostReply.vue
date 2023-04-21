<template>
  <div class="container">
    <form class="form_box">
      <div class="in_title">
        <h3 class="sub_title">
          아이디
        </h3>
        <textarea v-model="reply_data.username"></textarea>
        <div>
          <textarea
            ref="textArea"
            v-model="reply_data.text"
            @input="resize"></textarea>
        </div>
      </div>
    </form>
    <button @click="addreply">
      댓글입력
    </button>
  </div>
</template>

<script setup>
import { URL } from '@/components/global'
import { onMounted, reactive, ref } from 'vue'
import router from '@/router'
import axios from 'axios'

const textArea = ref()
const forms = ref([])

function resize() {
  textArea.value.style.height = '1px'
  textArea.value.style.height = (12 + textArea.value.scrollHeight) + 'px'
  
}
// 댓글 저장
const reply_data = reactive({
  username: 'username1',
  text: '',
  bno: 3
})

const addreply =  () => {
  let data = {
    username : reply_data.username,
    text : reply_data.text,
    bno : reply_data.bno
  }
  console.log(reply_data)
  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  //   // body: data,
  // }

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
const form = ref([])

const state = reactive({
  writerDto: {
    nickname: '닉네임',
  },
  text: '',
  createdDate: '',
})

const getreply = async () => {
  console.log(state)
try {
  const res = axios.get(URL + '/reply/view/')
  console.log(res.data)
  form.value = res.data
} catch (error) {
  console.log('해당 게시물에 댓글은 없습니다.')
}

}
onMounted(()=>{
  getreply
})

// function resize() {
//   const resetTextArea = str_arr => {
//     textArea.value.value = ''
//     for (let i = 0; i < 5; i++) {
//       if (str_arr[i] !== undefined) {
//         textArea.value.value += str_arr[i] + '\n'
//       }
//     }
//     // textArea.value.value = textArea.value.value.slice(0,-1)
//   }
//   textArea.value.style.height = '1px'
//   textArea.value.style.height = (12 + textArea.value.scrollHeight) + 'px'
  

//   // console.log('row',textArea.value.value)
//   let str_arr = textArea.value.value.split('\n')
//   let row = str_arr.length
//   for (let i = 0; i < row; i++) {
//     console.log(str_arr[i].length)
//     if (str_arr[i].length >= 20) {
//       str_arr[i] = str_arr[i].substr(0, 19)
//       resetTextArea(str_arr)
//     }
//   }

//   // if (str_arr[row - 1].length >= 20) {
//   //   textArea.value.value += '\n'
//   // }
//   if (row > 6) {
//     resetTextArea(str_arr)
//   }
//   console.log(str_arr, row)
// }
</script>

<style scoped>
/* @import '@/assets/reply.css'; */
</style>
