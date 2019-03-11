import store from '@/store'
import ArticleService from '@/services/article.service'
import { UserStorage } from '@/services/storage.service'

const getArticleById = async (id) => {
  if ( id ) {
    return ArticleService.getArticlebyId(id)
      .then((article) => {
        console.log(article)
      }).catch((err) => {
        return Promise.reject(err)
      })
  }
}


// Draft specific controllers.
// TODO: Move to seperate controller file.
const getDrafts = async (requiredDrafts) => {
  console.log('requiredDrafts', requiredDrafts)
  return ArticleService.getDrafts(requiredDrafts[0])
    .then((drafts) =>  {
      return drafts
    }).catch((err) => {
      return Promise.reject(err)
    }) 
}


const getDraftById = async (id) => {
  if(id) {
    return ArticleService.getDraftById(id)
      .then((draft) => {
        return draft
      }).catch((err) => {
        return Promise.reject(err)
      })
  } else {
    return Primise.reject({
      error: {
        code: 'invalidArgument',
        message: 'Invalid argument: No id pased for the draft.'
      }
    })
  }
} 


const saveDraft = async (draft) => {
  const userId = UserStorage.getUserId()

  const payload = {
    id: userId,
    draft
  }

  return ArticleService.saveDraft(payload)
    .then((draft) => {
      return draft
    }).catch((err) => {
      return Promise.reject(err)
    })
}

export default {
  getDrafts,
  getDraftById,
  saveDraft
}