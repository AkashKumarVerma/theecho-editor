<template>
  <div class="editor">
    <div class="editor-input">
      <!-- <div class="article__title">
        <text-area placeholder="Title" :initialValue="title"/>
      </div>
      <div class="article__subtitle">
        <text-area placeholder="Subtitle" :initialValue="subtitle"/>
      </div> -->
      <div class="article__content">
        <text-area placeholder="Your Story" :initialValue="article"/>
      </div>
    </div>
  </div>
</template>

<script>
import { TextArea } from '@/components/Ui'

export default {
  name: 'Editor',
  data() {
    return {
      title: `Kanhaiya Kumar Is Forging a New Political Career From His Hometown`,
      subtitle: `In 2016, he became controversy's child with his alleged anti-India slogans. In 2019, this feisty student leader has returned to Begusarai to unofficially begin his election campaign as a Lok Sabha member.`,
      article: `In 2016, days after the alleged anti-India slogans in Jawaharlal Nehru University (JNU) and the subsequent media trial of student leader Kanhaiya Kumar, a mob of over a hundred—comprising members of Bajrang Dal, Rashtriya Swayamsevak Sangh (RSS), and other Hindutva groups—assembled at the Zero Mile Chowk in Bihar’s Begusarai. This was a few kilometres from Kumar’s home in Masnadpur village. “They began marching towards our village, shouting slogans of ‘Traitor’,” says Rajinder Singh, Kumar’s eldest uncle, who sits with a few village elders while his controversial nephew sits with the younger ones in another corner of their home.In 2016, days after the alleged anti-India slogans in Jawaharlal Nehru University (JNU) and the subsequent media trial of student leader Kanhaiya Kumar, a mob of over a hundred—comprising members of Bajrang Dal, Rashtriya Swayamsevak Sangh (RSS), and other Hindutva groups—assembled at the Zero Mile Chowk in Bihar’s Begusarai. This was a few kilometres from Kumar’s home in Masnadpur village. “They began marching towards our village, shouting slogans of ‘Traitor’,” says Rajinder Singh, Kumar’s eldest uncle, who sits with a few village elders while his controversial nephew sits with the younger ones in another corner of their home.`
    }
  },
  components: {
    TextArea
  }
}
</script>

<style lang="sass" scoped>
.editor
  width: 100%
  font-family: Montserrat
  color: #1C1C1C

  &-input
    width: 100%
    height: auto
    min-hright: 50px
    padding: 20px
    display: flex
    flex-direction: column
    flex-wrap: no-wrap
    justify-content: middle
    items-align: middle

  .textarea
    width: 100%
    height: auto
    border: none
    padding: 10px 15px
    &:active,
    &:focus
      outline: none

  .article__content,
  .article__subtitle,
  .article__title
    margin: 20px auto
    height: auto
  .article__title
    width: 80%
    margin-bottom: 50px
    .textarea
      font-size: 42px
      font-family: 'Abril Flatface'
      font-weight: 500
      text-align: center

  .article__subtitle
    width: 65%
    .textarea
      font-size: 18px
      font-weight: 500
      font-family: Montserrat
      text-align: center

  .article__content
    width: 60%
    .textarea
      text-align: center
      font-size: 14px
      font-family: Montserrat
      font-weight: 400
      text-align: left


</style>

