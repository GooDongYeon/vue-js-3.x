<template>
  <textarea
    v-model="text"
    rows="3"
    @input="checkRows"></textarea>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')

function checkRows() {
  const element = document.querySelector('textarea')
  const maxWidth = 270
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
}
</script>

<style>
textarea {
  resize: none;
  width: 500px;
}
</style>
