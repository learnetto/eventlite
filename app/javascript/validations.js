const validations = {
  checkMinLength: function(text, minLength) {
    if(text.length >= minLength) {
      return [true, ""]
    } else if(minLength === 1) {
      return [false, "can't be blank"]
    } else {
      return [false, `length should be at least ${minLength} characters`]
    }
  },

  timeShouldBeInTheFuture: function (time) {
    if(Date.parse(time) > Date.now()) {
      return [true, ""]
    } else {
      return [false, "can\'t be in the past"]
    }
  }
}

export default validations
