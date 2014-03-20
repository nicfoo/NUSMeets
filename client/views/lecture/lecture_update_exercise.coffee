Template.lectureUpdateExercise.helpers({
  formFields: ->
    [
      template: 'controlGroupWithInput'
      inputName: 'lectureTitle'
      autofocus: true
      label: 'Lecture Title'
      placeholder: 'Describe the lecture in a short sentence'
      value: @lectureTitle if @lectureTitle
    ]
})


Template.lectureUpdateExercise.events({
  'submit #form-lecture-update': (evt, tpl) ->
    Etc.prevent(evt)

    Form.removeFormError()

    data = $(evt.target).serializeObject()

    data.markdown = Template.markdownEditor.getValue()

    Meteor.call 'updateLectureExercise', tpl.data._id, data, (err) ->
      return handleFormError(err) if err
      Notify.setSuccess 'Updated'

    return false
})
