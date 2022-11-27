export const makeProfileImageurlS3 = (profileImageName: string = 'user.png') => {
  if (!profileImageName) {
    profileImageName = 'user.png'
  }
  return `http://s3.amazonaws.com/cpausers/${profileImageName}`
}

export const makeForumImageurlS3 = (forumImageName: string = 'logo.png') => {
  if (!forumImageName) {
    forumImageName = 'logo.png'
  }
  return `http://s3.amazonaws.com/cpausers/${forumImageName}`
}
