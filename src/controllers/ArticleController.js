import store from '@/store'
import ArticleService from '@/services/article.service'
import { UserStorage } from '@/services/storage.service'

const getArticles = async () => {

}

const saveArticles = async (article) => {
  const userId = UserStorage.getUserId()

  const payload = {
    article,
    id: userId
  }

  return ArticleService.saveArticle(payload)
    .then((res) => {
      return res
    }).catch((err) => {
      return Promise.reject(err)
    })
}

export default {
  getArticles,
  saveArticles
}