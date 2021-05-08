const validateCaptcha = () => {
  return new Promise((res, rej) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: 'submit' })
      .then(token => {
        return res(token);
      })
      .catch(error => {
        return res(error);
      })
    })
  })
}

export default validateCaptcha();