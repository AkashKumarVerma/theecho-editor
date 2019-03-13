import DraftService from '@/services/draft.service'
import { UserStorage } from '@/services/storage.service'
/**
 * Return just the draft id, title and subttile for a matching id.
 * Mainly for the purpouse of populating draft page.
 *
 * TODO: Find alternative and better solution for fetching and caching
 *       of articles and drafts.
 *       
 * @param  {String} id Draft id.
 * @return {Object}    Stripped down version of draft object containing
 *                      only title, subtitle and the id.
 */
const getDraftSkeleton = async (id) => {
  return DraftService.getDraftSkeleton(id)
    .then((draft) => {
      return draft
    }).catch((err) => {
      return Promise.reject(err)
    })
}


/**
 * Return entire draft for the matching id
 * 
 * @param  {String} id Draft id.
 * @return {Object}    Draft Object returend from server.
 */
const getDraft = async (id) => {
  return DraftService.getDraft(id)
    .then((draft) => {
      return draft
    }).catch((err) => {
      return Promise.reject(err)
    })
}


const saveDraft = async (draft) => {
  console.log('saveDraft Fired in controller')

  const userId = UserStorage.getUserId()
  if(userId) {
    const payload = {
      id: userId,
      draft
    }

    console.log('Payload Is', payload)

    return DraftService.saveDraft(payload)
      .then((draft) => {
        return draft
      }).catch((err) => {
        return Promise.reject(err)
      })
  } else {
    return Promise.reject({
      code: 'StorageError',
      message: 'Failed to retrive User Id from Local Storage.'
    })
  }

}

/**
 * Deletes a draft. What else you want to know
 * 
 * @param  {String} id  Draft Id
 */
const deleteDraft = async (id) => {
  return DraftService.deleteDraft(id)
    .then((res) => {
      return res
    }).catch((err) => {
      return Promise.reject(err)
    })
}
export default {
  getDraftSkeleton,
  deleteDraft,
  saveDraft,
  getDraft
}