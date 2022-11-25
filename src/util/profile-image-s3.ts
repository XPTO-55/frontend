export const makeProfileImageurlS3 = (profileImageName: string = 'user.png') => {
  if (!profileImageName) {
    profileImageName = 'user.png'
  }
  return `http://s3.amazonaws.com/cpausers/${profileImageName}`
}
