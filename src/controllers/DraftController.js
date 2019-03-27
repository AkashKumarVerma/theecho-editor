import DraftService from '@/services/draft.service'
import { UserStorage } from '@/services/storage.service'
// import draftService from '../services/draft.service';


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


/**
 * saves draft
 * @param  {Object} draft Draft Object
 * @return {Object}       Returns saved draft object.
 */
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
 * updates draft.
 * @param  {[type]} draft [description]
 * @return {[type]}       [description]
 */
const updateDraft = async (draft) => {
  const userId = UserStorage.getUserId()

  if (userId) {
    const payload = {
      id: userId,
      draft
    }

    return DraftService.updateDraft(payload)
      .then((res) => {
        return res
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


const submitDraft = async (draftId) => {
  const userId = UserStorage.getUserId()

  if (userId) {
    const payload = {
      userId,
      draftId
    }

    return DraftService.submitDraft(payload)
      .then((res) => {
        return res
      }).catch((err) => {
        return Promise.reject(err)
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
  getDraft,
  updateDraft,
  submitDraft
}